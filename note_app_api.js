const express = require('express');
const fs = require('fs');
const app = express();

// Middleware for parsing JSON bodies
app.use(express.json());

// File path for storing notes
const NOTES_FILE = 'notes.json';

// Default pasta notes
const DEFAULT_NOTES = [
    {
        title: 'Shopping Time!',
        body: 'Get Tipo 00 flour, 5 organic eggs, Parmigiano Reggiano, Pecorino Romano, Guanciale, fresh basil, and the fanciest olive oil you can find!',
        time_added: '2024-03-25T10:00:00Z'
    },
    {
        title: 'Water Ballet',
        body: 'Start boiling water - "as salty as the Mediterranean Sea" says Nonna! 🏊‍♂️',
        time_added: '2024-03-25T10:30:00Z'
    },
    // ... other default notes ...
];

// Function to load notes from file
function loadNotes() {
    try {
        const data = fs.readFileSync(NOTES_FILE, 'utf8');
        const notes = JSON.parse(data);
        return notes.length > 0 ? notes : DEFAULT_NOTES;
    } catch (error) {
        return DEFAULT_NOTES;
    }
}

// Function to save notes to file
function saveNotes(notes) {
    fs.writeFileSync(NOTES_FILE, JSON.stringify(notes, null, 2));
}

// GET /notes - Returns all notes
app.get('/notes', (req, res) => {
    const notes = loadNotes();
    res.json(notes);
});

// POST /notes - Adds a new note
app.post('/notes', (req, res) => {
    const { title, body } = req.body;
    
    // Validate request body
    if (!title || !body) {
        return res.status(400).json({ error: 'Title and body are required' });
    }

    const notes = loadNotes();
    
    // Check if note with same title exists
    if (notes.some(note => note.title === title)) {
        return res.status(409).json({ error: 'Note with this title already exists' });
    }

    const newNote = {
        title,
        body,
        time_added: new Date().toISOString()
    };

    notes.push(newNote);
    saveNotes(notes);
    res.status(201).json(newNote);
});

// GET /notes/:title - Returns a specific note
app.get('/notes/:title', (req, res) => {
    const notes = loadNotes();
    const note = notes.find(n => n.title === req.params.title);
    
    if (!note) {
        return res.status(404).json({ error: 'Note not found' });
    }
    
    res.json(note);
});

// DELETE /notes/:title - Deletes a note
app.delete('/notes/:title', (req, res) => {
    const notes = loadNotes();
    const initialLength = notes.length;
    const filteredNotes = notes.filter(n => n.title !== req.params.title);
    
    if (filteredNotes.length === initialLength) {
        return res.status(404).json({ error: 'Note not found' });
    }
    
    saveNotes(filteredNotes);
    res.json({ message: 'Note deleted successfully' });
});

// PUT /notes/:title - Updates a note
app.put('/notes/:title', (req, res) => {
    const { body } = req.body;
    
    // Validate request body
    if (!body) {
        return res.status(400).json({ error: 'Body is required' });
    }

    const notes = loadNotes();
    const note = notes.find(n => n.title === req.params.title);
    
    if (!note) {
        return res.status(404).json({ error: 'Note not found' });
    }
    
    note.body = body;
    saveNotes(notes);
    res.json(note);
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Note Organizer API is listening on port ${PORT}!`);
});