const express = require('express');
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
 
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/uploadFile.html');
})
// Configure multer for file uploads
app.post('/upload', upload.single('file'), (req, res) => {
    try {
        const file = req.file;
        if (!file) {
            return res.status(400).send('No file uploaded.');
        }

        res.send(`File uploaded successfully: ${file.originalname}`);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error uploading file.');
    }
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})