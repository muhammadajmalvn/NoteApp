const noteSchema = require('../Models/noteSchema')



exports.getAllNotes = async (req, res) => {
    try {
        noteSchema.find().then((data) => {
            res.status(200).json(data)
        })
    }
    catch (error) {
        console.log(err, 'Error in fetching books');
        res.status(500).json(err)
    }
}

exports.addNote = async (req, res) => {
    try {
        let noteDetails = {
            title: req.body.title,
            body: req.body.text
        }
        console.log(noteDetails, 'hfhfhfffh');

        noteSchema.create(noteDetails).then((data) => {
            console.log('book data', data);
            res.status(200).json(data)
        })
    } catch (err) {
        res.status(500).json('Internal Server Error')
    }
}

exports.getNote = async (req, res) => {
    try {
        const data = await noteSchema.findOne({ _id: req.params.id })
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json('Internal Server Error')
    }
}

exports.deleteNote = async (req, res) => {
    console.log(req.query.id);
    try {
        await noteSchema.deleteOne({ _id: req.query.id })
        const data = await noteSchema.find()
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json('Internal Server Error')
    }
}

