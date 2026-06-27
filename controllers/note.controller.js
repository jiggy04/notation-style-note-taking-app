const Note = require ('../model/noteModel');

const createNote = async (req, res, next) => {

   
    try{
        const {title, content} = req.body;

            console.log(req.headers);
            console.log(req.headers.authorization);

        if(!title || !content) {
            return res.status(400).json({success: false,
            message: 'Title and content are required'});
        };

        const note = await Note.create({
            title,
            content,
            user: req.user.id
        });

        res.status(201).json({success: true, note});
    } catch (error) {
       next(error)
    }
};

const getNotes = async (req, res, next) => {
    console.log('req.user:', req.user)
    try { if(!req.user) {
        return res.status(400).json({success:false, message:"User not authenticated"})
    }
        const userId = req.user.id;
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const search = req.query.search || "";
        const sortBy = req.query.sortBy || 'createdAt';
        const order = req.query.order === "asc" ? 1 : -1;

        const query = {
            user: userId,
            $or: [
                {title: {$regex: search, $options: "i"}},
                {content: {$regex: search, $options: "i"}}
            ]
        };

        const skip = (page - 1) * limit;

        const notes = await Note.find(query).sort({[sortBy]: order})
        .skip(skip)
        .limit(limit);

        const total = await Note.countDocuments(query);

        res.status(200).json({success: true,
            total,
            page,
            pages: Math.ceil(total/limit),
            count: notes.length,
            notes
        });

    } catch (error) {
        next(error)
    }
}

const getNoteById = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).json({success: false, message: 'Note not found'});
        }

        if (note.user.toString() != req.user.id){
            return res.status(403).json({success: false, message: 'Not authorized'})
        }
        res.status(200).json({success: true, note});
    } catch (error) {
        next(error)
    }
}

const updateNote = async (req, res) => {
    try {
        const {title, content} = req.body;
        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).json({success: false, message: 'Note not found'});
        }

         if (note.user.toString() != req.user.id){
            return res.status(403).json({success: false, message: 'Not authorized'})
        }

        note.title = title || note.title;
        note.content = content || note.content;

        const updatedNote = await note.save();
        res.status(200).json({success: true, note: updatedNote});
        
    } catch (error) {
        next(error)
    }
};

const deleteNote = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).json({success: false, message: 'Note not found'});
        }

        if(note.user.toString() !== req.user.id) {
            return res.status(401).json({success: false, message: 'Not authorized'});
        }
        await note.deleteOne();
        res.status(200).json({success: true, message: 'Note deleted successfully'});

    } catch (error) {
        next(error)
    }
};


module.exports = {
    createNote,
    getNotes,
    getNoteById,
    updateNote,
    deleteNote
}