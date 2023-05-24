var express = require('express');
const router = express.Router();
const notesController = require('../Controllers/notesController')

router.route('/notes')
  .get(notesController.getAllNotes)
  .post(notesController.addNote)
router.route('/note')
  .get(notesController.getNote)
  // .put(notesController.editNote)
  .delete(notesController.deleteNote)

module.exports = router;
