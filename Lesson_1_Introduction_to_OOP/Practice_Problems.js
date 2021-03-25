function createBook(title, author, description = 'No description vailable') {
    return {
        'title': title,
        'author': author,
        'read': false,
        'description': description,
        
        details() {
            let haveRead = "haven't";
            if (this.read) haveRead = 'have';
            console.log(`${this.description}. I ${haveRead} read it.`)
        },
        
        readBook() {this.read = true},
    }
}

let stormlightArchives = createBook('Stormlight Archives', 'Brando Sando', 'Best book ever made');

console.log(stormlightArchives);
stormlightArchives.details();
stormlightArchives.readBook();
console.log(stormlightArchives.details())

createBook('Way of Kings', 'Steven King').details()

const readlinesync = require('readline-sync');


const RPS =  {
    human: createPlayer(),
    computer: createComputer(),
    
    displayWelcomeMessage() {
        console.log('Welcome to Rock, Paper, Scissors!');
    },
    
    displayGoodbyeMessage() {
        console.log('Thanks for playing Rock, Paper, Scissors, Lizard, Spock. Goodbye!')
    },
    
    round() {
        this.displayWelcomeMessage();
        this.human.addRoundToHistory(1, 'rock', 'paper', 'computer wins');
        this.human.displayHistory();
    },
}

function createPlayer() {
    return {
        'name': readlinesync.question('Please enter your name: '),
        'current_move': '',
        'history': {},
        
        addRoundToHistory(roundNumber, playerMove, computerMove, result) {
            this.history[`Round ${roundNumber}`] = {
                'Player Move': playerMove,
                'Computer Move': computerMove,
                'Result': result,
            }
        },// Builds the round history
        
        displayHistory() {
            Object.entries(this.history).forEach((entry) => console.log(entry));
        }
    }
}

function createComputer() {
    //Implement
}

RPS.round();