# Pasta Notes API 🍝

A RESTful API for managing cooking notes, specifically designed for creating the perfect Italian pasta dish. Built with Node.js and Express.

<img width="1000" alt="screenshot browser access" src="https://github.com/user-attachments/assets/ef7c7fa2-1a97-46e8-8396-4d22e6e43931" />


## Features 🌟

- Create, read, update, and delete notes
- Persistent storage using JSON file
- Default pasta recipe steps included
- RESTful API design
- Error handling and validation

## Prerequisites 📋

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Installation 🚀

1. Clone the repository:
```bash
git clone https://github.com/yourusername/pasta-notes-api.git
cd pasta-notes-api
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
node note_app_api.js
```

The server will start on port 3000.

## API Endpoints 🛠️

### GET /notes
- Returns all notes
- Response: Array of note objects

### POST /notes
- Creates a new note
- Request body: `{ "title": "string", "body": "string" }`
- Response: Created note object

### GET /notes/:title
- Returns a specific note by title
- Response: Note object

### PUT /notes/:title
- Updates a note's body
- Request body: `{ "body": "string" }`
- Response: Updated note object

### DELETE /notes/:title
- Deletes a specific note
- Response: Success message

## Data Structure 📊

Each note has the following structure:
```json
{
    "title": "string",
    "body": "string",
    "time_added": "ISO 8601 date string"
}
```

## Error Handling ⚠️

The API returns appropriate HTTP status codes:
- 200: Success
- 201: Created
- 400: Bad Request
- 404: Not Found
- 409: Conflict
- 500: Server Error

## Default Data 📝

The API comes with pre-loaded pasta recipe steps, making it perfect for learning Italian cooking!

## License 📄

MIT License - feel free to use this project for learning and development. 
