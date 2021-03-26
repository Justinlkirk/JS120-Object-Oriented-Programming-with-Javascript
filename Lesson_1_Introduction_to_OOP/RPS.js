//Global variables begin
const readline = require('readline-sync'),
  MINIMUM_WINS_PER_MATCH = 1,
  IMPOSSIBLE_USER_NAME_INPUT = 1,
  AI_NAMES = Object.freeze(['Albert AI', 'Charles', 'Toaster', 'Three Hamsters In The Same Wheel']);
//Global variables end

//Global objects begin
let rules = {
  totalWinsPerMatch: MINIMUM_WINS_PER_MATCH,
  difficulty: 'normal',

  VALID_MOVES: Object.freeze(['rock', 'paper', 'scissors', 'lizard', 'spock']),
  VALID_COMPUTER_OPPONENT_INPUTS: Object.freeze(['ai', 'computer', 'comp', 'c']),
  VALID_PLAYER_OPPONENT_INPUTS: Object.freeze(['player', 'person', 'p']),
  VALID_NORMAL_DIFFICULTY_INPUTS: Object.freeze(['normal', 'n']),
  VALID_HARD_DIFFICULTY_INPUTS: Object.freeze(['hard', 'h']),
  VALID_MOVE_INPUTS: Object.freeze({
    history: Object.freeze(['history', 'h']),
    rock: Object.freeze(['rock', 'r']),
    paper: Object.freeze(['paper', 'p']),
    scissors: Object.freeze(['scissors', 'sc']),
    lizard: Object.freeze(['lizard', 'l']),
    spock: Object.freeze(['spock', 'sp']),
  }),


  winConditions: {
    rock: ['scissors', 'lizard'],
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    lizard: ['paper', 'spock'],
    spock: ['scissors', 'rock'],
  },// What each move counters

  determineDifficulty() {
    do {
      let userInput = readline.question('Choose difficulty by entering normal or hard: ').toLowerCase();

      if (rules.VALID_NORMAL_DIFFICULTY_INPUTS.includes(userInput)) {
        rules.difficulty = 'normal';
        return;
      } else if (rules.VALID_HARD_DIFFICULTY_INPUTS.includes(userInput)) {
        rules.difficulty = 'hard';
        return;
      } else invalidInput(userInput);
    } while (true);
  },// Lets the user set the difficulty

  determineHowManyWinsPerMatch() {
    do {
      let userInput = Number(readline.question('Enter the number of wins per match: '));

      if (userInput === Math.floor(userInput) &&
          userInput >= MINIMUM_WINS_PER_MATCH &&
          !isNaN(userInput)) {
        rules.totalWinsPerMatch = userInput;
        break;
      } else invalidInput(userInput);

    } while (true);
  },// Updates the number of rounds to be played, requires a whole number greater than 0 as user input

  determineOpponent() {
    let question = 'Would you like to play against an AI or another player?: ';
    do {
      let userInput = readline.question(question).toLowerCase();

      if (rules.VALID_COMPUTER_OPPONENT_INPUTS.includes(userInput)) {
        return createComputer();
      } else if (rules.VALID_PLAYER_OPPONENT_INPUTS.includes(userInput)) {
        return createPlayer();
      } else invalidInput(userInput);

    } while (true);
  },
};//Object containing the rules of the game and the functions to update those rules

let round = {
  roundNumber: 1,
  winner: '',

  endRound(player1, player2) {
    const ROUND_INCREMENT = 1;
    player1.addRoundToHistory(round.roundNumber,
      player1, player2, round.winner);
    player2.addRoundToHistory(round.roundNumber,
      player2, player1, round.winner);
    console.log(round.getResult(player1, player2));

    round.roundNumber += ROUND_INCREMENT;// Increments the round number before the start of the next round
  },// Pushes all the relevant information into each players history, logs the round result to console

  getResult(player1, player2) {
    if (round.winner === 'tie') {
      let string = `Both ${player1.name} and ${player2.name}`;
      string += ` use ${player1.move}. Its a ${round.winner}.`;
      return string;
    } else {
      let string = `${player1.name} uses ${player1.move} against`;
      string += ` ${player2.name}'s ${player2.move}! ${round.winner} wins!`;
      return string;
    }
  },// Builds the string that will serve as the outcome of each round

  endMatchResults(winner, loser) {
    console.log(round.getResult(winner, loser));
    console.log(`${winner.name} has obtained ultimate victory!`);
    console.log(`The final score was ${winner.wins} to ${loser.wins}`);
  },// Prints the results of the match

  endMatchQuestions(player1, player2, gameObject) {
    const KEEP_PLAYING_OPTION = 1,
      CHANGE_RULES_OPTION = 2,
      EXIT_OPTION = 3;
    let question = `Type ${KEEP_PLAYING_OPTION} to keep playing,`;
    question += ` ${CHANGE_RULES_OPTION} to change the rules,`;
    question += ` or ${EXIT_OPTION} to exit: `;

    do {
      let userInput = Number(readline.question(question));

      if (userInput === KEEP_PLAYING_OPTION) {
        round.resetScore(player1, player2);// Resets things if you play again
        return;
      } else if (userInput === CHANGE_RULES_OPTION) {
        round.resetScore(player1, player2);// Resets things if you play again
        gameObject.updateRules();// Resets the rules
        round.resetScore(player1, player2);// Resets things if you play again
        return;
      } else if (userInput === EXIT_OPTION) {
        gameObject.keepPlaying = false;
        return;
      } else invalidInput(userInput);
    } while (true);
  },// Aks if the would like to play again, change the rules, or exit

  resetScore(player1, player2) {
    round.roundNumber = 1;
    player1.wins = 0;
    player2.wins = 0;
    player1.resetHistory();
    player2.resetHistory();
  },// Resets both players scores and histories as well as computer weighting and round number

  determineWinner(player1, player2) {
    const WIN_VALUE = 1;

    if (player1.move === player2['move']) round.winner = 'tie';
    else if (rules.winConditions[player1.move].includes(player2['move'])) {
      round.winner = player1.name;
      player1.wins += WIN_VALUE;
    } else {
      round.winner = player2.name;
      player2.wins += WIN_VALUE;
    }
  },// Sets the round winner and increments the appropriate players win counter

  endRoundResult(player1, player2) {
    console.log(`${player1.name} has ${player1.wins} total wins and ${player2.name} has ${player2.wins}.`);
  }// Prints the round results to console
};// Stores all the relevant round variables and functions

let RPSGame = {
  user: createPlayer(),
  opponent: '',
  keepPlaying: true,

  play() {
    RPSGame.welcome();
    RPSGame.user.chooseName();
    RPSGame.updateRules();

    do {
      RPSGame.playerTurn(RPSGame.user, RPSGame.opponent);
      RPSGame.playerTurn(RPSGame.opponent, RPSGame.user);
      console.clear();
      round.determineWinner(RPSGame.user, RPSGame.opponent);
      RPSGame.determineOutcome(RPSGame.user, RPSGame.opponent);
    } while (RPSGame.keepPlaying);
  },

  determineOutcome(player1, player2) {
    if (player1.wins === rules.totalWinsPerMatch ||
      player2.wins === rules.totalWinsPerMatch) {
      let winner = (player1.wins ===
        rules.totalWinsPerMatch) ? player1 : player2;
      let loser = (player1.wins !==
        rules.totalWinsPerMatch) ? player1 : player2;
      round.endMatchResults(winner, loser);
      round.endMatchQuestions(player1, player2, RPSGame);
    } else {
      round.endRound(player1, player2);
      round.endRoundResult(player1, player2);
      readline.question('Enter any key to continue.');
    }
  },

  playerTurn(currentPlayer, otherPlayer) {
    console.clear();
    currentPlayer.chooseMove(currentPlayer, otherPlayer);
    console.clear();
    console.log(currentPlayer.name + ' has chosen');
    readline.question('Enter any key to continue.');
  },

  setOpponent() {
    RPSGame.opponent = rules.determineOpponent();
    if (RPSGame.opponent.name === IMPOSSIBLE_USER_NAME_INPUT) {
      rules.determineDifficulty();
      RPSGame.opponent.name = RPSGame.opponent.randomName();
    } else RPSGame.opponent.chooseName();
  },// Determines what you play against and several things about them

  updateRules() {
    RPSGame.setOpponent();
    rules.determineHowManyWinsPerMatch();
  },// Updates your opponent and how many rounds per match

  welcome() {
    console.log('Welcome to the of Rock, Paper, Scissors, Lizard, Spock trainer!');
  }
};
//Global objects end

//Functions begin
function invalidInput(invalidString) {
  console.log(`Sorry ${invalidString} was not recognized. Please try again.`);
}// Prints a canned statement for invalid inputs

function appendOr(array, appendingWord = 'or') {
  return array.slice(0, -1).join(', ') + `, ${appendingWord} ` + array.slice(-1);
}// Performs an arra.join, but places a word between the last two elements

function createComputer() {
  const STARTING_WEIGHTS = 2;

  return {
    name: IMPOSSIBLE_USER_NAME_INPUT,
    move: '',
    wins: 0,
    moveWeights: {
      rock: STARTING_WEIGHTS,
      paper: STARTING_WEIGHTS,
      scissors: STARTING_WEIGHTS,
      lizard: STARTING_WEIGHTS,
      spock: STARTING_WEIGHTS,
    },//The numbers determine how likely something is to be picked vs something else

    randomName() {
      return AI_NAMES[Math.floor(Math.random() * AI_NAMES.length)];
    },// Choses a random name for the AI

    resetHistory() {
      Object.keys(this.moveWeights).forEach(key => {
        this.moveWeights[key] = STARTING_WEIGHTS;
      });
    },// Resets the weights to the starting weight in between matches

    addRoundToHistory(_, __, player1, winner) {
      if (rules.difficulty === 'hard') this.updateWeights(player1.move, winner);
      else;// Intentionally left blank
    },// Takes the loss and passes it to the updateWeights function if required

    updateWeights(playerMove, winner) {
      const VALUES_INDEX = 1,
        KEYS_INDEX = 0,
        WEIGHT_INCREASE_AFTER_LOSS = 1;
      if (winner === RPSGame.user.name) {
        Object.entries(rules.winConditions).forEach(entry => {
          if (entry[VALUES_INDEX].includes(playerMove)) {
            this.moveWeights[entry[KEYS_INDEX]] += WEIGHT_INCREASE_AFTER_LOSS;
          }
        });// Checks to see if the players move would have lost
        //to the move its looking at If it would have lost it
        //increases the weight of that move, else it continues
      } else;//Intentionally left blank
    },//If the AI lost it will increase the weighting on moves that counter

    specificChoiceWeight(move) {
      let count = 0;
      for (let potentialMove in this.moveWeights) {
        count += this.moveWeights[potentialMove];
        if (potentialMove === move) return count;
      }

      return console.log('Function specificChoiceWeight() has failed.');
    },//Used in conjunction with chooseMove(), essentially places each move
    //in order with the number of times each one appears corresponding
    //to the weight in the this.moveWeights object.

    chooseMove() {
      let totalWeight = Object.values(this.moveWeights)
        .reduce((acc, curr) => acc + curr);
      let choice = Math.ceil(Math.random() * totalWeight);//Match.ceil helps with weight logic

      if (choice <= this.specificChoiceWeight('rock')) this.move = 'rock';
      else if (choice <= this.specificChoiceWeight('paper')) this.move = 'paper';
      else if (choice <= this.specificChoiceWeight('scissors')) this.move = 'scissors';
      else if (choice <= this.specificChoiceWeight('lizard')) this.move = 'lizard';
      else if (choice <= this.specificChoiceWeight('spock')) this.move = 'spock';
      else console.log('Error in computer choose move funtion!');
    },//Picks a random move based off their weighting
  };
}//Creates a computer object much like the player object by with several key differences

function createPlayer() {
  return {
    name: '',
    move: '',
    wins: 0,
    history: 'HISTORY: ',

    chooseName() {
      do {
        let userInput = readline.question('Please enter your name: ');

        if (AI_NAMES.includes(userInput)) console.log('Sorry that name is taken by a potential AI.');
        else if (!userInput.split('').some(char => 'abcdefghijklmnopqrstuvwxyz'.includes(char))) {
          console.log('Sorry there must be at least one letter in your name.');
        } else {
          this.name = userInput;
          return;
        }
      } while (true);
    },

    resetHistory() {
      this.history = `HISTORY: `;
    },

    addRoundToHistory(roundNumber, player1, player2, winner) {
      let result = `${winner} won!`;
      if (winner === 'tie') result = 'A tie.';

      this.history += `\nRound ${roundNumber}:`;
      this.history += `\n ${player1.name}: ${player1.move}`;
      this.history += `\n ${player2.name}: ${player2.move}`;
      this.history += `\n ${result}`;
    },// Builds the round history string

    displayHistory(player1, player2) {
      let string = `${player1.name} has a score of ${player1.wins}`;
      string += ` and ${player2.name} has a score of ${player2.wins}.`;
      console.log(this.history);
      console.log(string);
    },// Logs the round history to the console

    chooseMove(player1, player2) {
      do {
        let userInput = this.playerMoveQuestion();

        for (let key in rules.VALID_MOVE_INPUTS) {
          if (rules.VALID_MOVE_INPUTS['history'].includes(userInput)) {
            this.displayHistory(player1, player2);
            break;
          } else if (rules.VALID_MOVE_INPUTS[key].includes(userInput)) {
            this.move = key;
            return;
          }
        }
      } while (true);
    },// Updates the players move, requires user to input a string from rules.validMoveInputs

    playerMoveQuestion() {
      let question = ` Enter ${appendOr(rules.VALID_MOVES)} to make a move: `;

      console.log(`${this.name}'s Turn:`);
      console.log(' Type history to view past rounds.');
      return readline.question(question).toLowerCase();
    }

  };
}// Builds a player object and the functions it requires
//Functions end

//Code body begins
RPSGame.play();
//Code body ends