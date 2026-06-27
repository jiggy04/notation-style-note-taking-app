const express = require ('express');

const router = express.Router()
const {createNoteSchema, updateNoteSchema} = require('../validation/note.validation')

const {createNote, getNotes, getNoteById, updateNote, deleteNote} = require('../controllers/note.controller');

const protect = require('../middlewares/auth.middleware');

const validate = require ('../middlewares/validationMiddleware');



router.post('/notes', protect, validate(createNoteSchema), createNote);
router.get('/notes', protect, getNotes);
router.get('/note/:id', protect, getNoteById);
router.put('/update/:id', protect, validate(updateNoteSchema), updateNote);
router.delete('/delete/:id', protect, deleteNote);


module.exports = router;