const fs = require('fs');
const readline = require('readline');

// Create interface for reading user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Create pasta notes array
let pastaNotes = [
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
    {
        title: 'Dough Workout',
        body: 'Knead for 10 minutes until the dough feels "like a baby\'s bottom" - time to get those muscles working! 💪',
        time_added: '2024-03-25T10:45:00Z'
    },
    {
        title: 'Dough Nap Time',
        body: 'Let the dough rest for 30 minutes - perfect time for an espresso and some Italian opera! 🎭',
        time_added: '2024-03-25T11:00:00Z'
    },
    {
        title: 'Rolling Adventure',
        body: 'Roll the dough super thin - "as thin as a sheet of paper" - channel your inner Italian grandma! 👵',
        time_added: '2024-03-25T11:15:00Z'
    },
    {
        title: 'Pasta Art',
        body: 'Cut into fine strips - "like rays of sunshine" - become the Michelangelo of pasta! 🎨',
        time_added: '2024-03-25T11:30:00Z'
    },
    {
        title: 'Guanciale Dance',
        body: 'Fry the guanciale until it\'s crispy - "until it dances in the pan" - the sizzle is the music! 💃',
        time_added: '2024-03-25T11:45:00Z'
    },
    {
        title: 'Cheese Snow',
        body: 'Grate Parmigiano and Pecorino until it looks like fresh snow - "like the Alps in winter"! 🏔️',
        time_added: '2024-03-25T12:00:00Z'
    },
    {
        title: 'Golden Sauce',
        body: 'Mix egg yolks, cheese, and pepper - "like liquid gold" - you\'re basically making edible treasure! 💎',
        time_added: '2024-03-25T12:15:00Z'
    },
    {
        title: 'Finale Fantastico!',
        body: 'Mix everything together, garnish with basil - "Mamma Mia, that\'s amore!" 🎭',
        time_added: '2024-03-25T12:30:00Z'
    }
];

// Function to display menu
function displayMenu() {
    console.log('\n=== Pasta Notes App ===');
    console.log('1. Add a note');
    console.log('2. List all notes');
    console.log('3. Read a note');
    console.log('4. Delete a note');
    console.log('5. Update a note');
    console.log('6. Exit');
    console.log('=====================\n');
}

// Function to add a new note
function addNote() {
    rl.question('Enter note title: ', (title) => {
        rl.question('Enter note body: ', (body) => {
            const note = {
                title: title,
                body: body,
                time_added: new Date().toISOString()
            };
            pastaNotes.push(note);
            console.log('Note added successfully!');
            startApp();
        });
    });
}

// Function to list all notes
function listNotes() {
    console.log('\n=== All Notes ===');
    pastaNotes.forEach((note, index) => {
        console.log(`${index + 1}. ${note.title}`);
    });
    console.log('================\n');
    startApp();
}

// Function to read a specific note
function readNote() {
    rl.question('Enter note number to read: ', (number) => {
        const index = parseInt(number) - 1;
        if (index >= 0 && index < pastaNotes.length) {
            const note = pastaNotes[index];
            console.log('\n=== Note Details ===');
            console.log(`Title: ${note.title}`);
            console.log(`Body: ${note.body}`);
            console.log(`Added: ${note.time_added}`);
            console.log('==================\n');
        } else {
            console.log('Invalid note number!');
        }
        startApp();
    });
}

// Function to delete a note
function deleteNote() {
    rl.question('Enter note number to delete: ', (number) => {
        const index = parseInt(number) - 1;
        if (index >= 0 && index < pastaNotes.length) {
            pastaNotes.splice(index, 1);
            console.log('Note deleted successfully!');
        } else {
            console.log('Invalid note number!');
        }
        startApp();
    });
}

// Function to update a note
function updateNote() {
    rl.question('Enter note number to update: ', (number) => {
        const index = parseInt(number) - 1;
        if (index >= 0 && index < pastaNotes.length) {
            rl.question('Enter new title (or press Enter to keep current): ', (title) => {
                rl.question('Enter new body (or press Enter to keep current): ', (body) => {
                    if (title) pastaNotes[index].title = title;
                    if (body) pastaNotes[index].body = body;
                    console.log('Note updated successfully!');
                    startApp();
                });
            });
        } else {
            console.log('Invalid note number!');
            startApp();
        }
    });
}

// Function to handle user choice
function handleChoice(choice) {
    switch(choice) {
        case '1':
            addNote();
            break;
        case '2':
            listNotes();
            break;
        case '3':
            readNote();
            break;
        case '4':
            deleteNote();
            break;
        case '5':
            updateNote();
            break;
        case '6':
            console.log('Goodbye!');
            rl.close();
            break;
        default:
            console.log('Invalid choice. Please try again.');
            startApp();
    }
}

// Function to start the application
function startApp() {
    displayMenu();
    rl.question('Enter your choice (1-6): ', handleChoice);
}

// Start the application
startApp();