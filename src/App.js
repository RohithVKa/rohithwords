import React, { Component } from 'react';
import './App.css';


// eslint-disable-next-line no-extend-native
Array.prototype.shuffle = function () {
  var input = this;

  for (var i = input.length - 1; i >= 0; i--) {

    var randomIndex = Math.floor(Math.random() * (i + 1));
    var itemAtIndex = input[randomIndex];

    input[randomIndex] = input[i];
    input[i] = itemAtIndex;
  }
  return input;
}


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentWordIndex: 0,
      currentLetterIndex: 0,
      words: [
        "Who",
        "When",
        "How",
        "Whose",
        "Whenever",
        "Whom",
        "How many",
        "Whoever",
        "Where",
        "How much",
        "Wherever",
        "What",
        "How far",
        "Whatever",
        "Why",
        "How long",
        "Which",
        "How to",
        "Whichever",
        "How did",
        "I",
        "me",
        "my",
        "mine",
        "myself",
        "you",
        "you",
        "your",
        "yours",
        "yourself",
        "he",
        "him",
        "his",
        "his",
        "himself",
        "she",
        "her",
        "her",
        "hers",
        "herself",
        "it",
        "it",
        "its",
        "itself",
        "we",
        "us",
        "our",
        "ours",
        "ourselves",
        "you",
        "you",
        "your",
        "yours",
        "yourselves",
        "they",
        "them",
        "their",
        "theirs",
        "themselves",
        "one",
        "that",
        "wow",
        "one another",
        "this",
        "oh",
        "hey",
        "other",
        "these",
        "hi",
        "others",
        "those",
        "hoorey",
        "good",
        "some",
        "by",
        "bad",
        "someone",
        "using",
        "help",
        "somebody",
        "Is it?",
        "something",
        "with",
        "play",
        "somehow",
        "without",
        "before",
        "till",
        "look",
        "after",
        "until",
        "yes",
        "because",
        "whether",
        "mm",
        "if",
        "but",
        "super",
        "now",
        "and",
        "ok",
        "then",
        "among",
        "thanks",
        "so",
        "alone",
        "thank you",
        "than",
        "always",
        "like",
        "even though",
        "sit",
        "want",
        "while",
        "speak",
        "obey",
        "only",
        "finish",
        "am",
        "can",
        "can not",
        "is",
        "could",
        "could not",
        "was",
        "must",
        "never",
        "are",
        "may",
        "may not",
        "were",
        "might",
        "been",
        "does",
        "have to",
        "not",
        "do",
        "has to",
        "please",
        "did",
        "shall",
        "done",
        "has",
        "will",
        "will not",
        "have",
        "should",
        "should not",
        "had",
        "would",
        "would not",
        "at",
        "ago",
        "up",
        "near",
        "before",
        "down",
        "in",
        "after",
        "into",
        "on",
        "from",
        "away",
        "over",
        "to",
        "towards",
        "between",
        "by",
        "through",
        "under",
        "till",
        "off",
        "next to",
        "until",
        "onto",
        "in front of",
        "among",
        "out",
        "of",
        "behind",
        "around",
        "for",
        "opposite",
        "also",
        "above",
        "along",
        "along",
        "below",
        "beneath",
        "across",
        "beside",
        "beyond",
        "with",
        "during",
        "except",
        "within",
        "off",
        "on top of",
        "without",
        "outside",
        "inside",
        "beneath",
        "together",
        "only",
        "left",
        "either",
        "neither",
        "right",
        "twice",
        "once",
        "against",
        "yet",
        "not yet",
        "except",
        "while",
        "so that",
        "about",
        "all",
        "every",
        "less",
        "any",
        "no one",
        "short",
        "another",
        "nobody",
        "light",
        "anybody",
        "everybody",
        "more",
        "anyone",
        "everyone",
        "long",
        "anything",
        "everything",
        "heavy",
        "many",
        "few",
        "right",
        "more",
        "several",
        "middle",
        "each",
        "same",
        "plus",
        "minus",
        "since",
        "left"
      ]
    };
  }
  componentDidMount(){
    document.addEventListener('keydown', this.handleKeys);
    this.setState({words:this.state.words.shuffle()});
  }

	handleNext(){
    let e = this.state.currentWordIndex + 1;
    if (e > this.state.words.length - 1) {
      e = 0
    }
    this.setState({ currentWordIndex: e, currentLetterIndex: 0 });

  }

  handlePrev() {
    let e = this.state.currentWordIndex - 1;
    if (e >= 0) {
      this.setState({ currentWordIndex: e, currentLetterIndex: 0 });
		}
  }
  handlePlus() {
    let e = this.state.currentLetterIndex + 1;
    if (e <= this.state.words[this.state.currentWordIndex].length) {
      this.setState({ currentLetterIndex: e });
    }
  }
  handleMinus() {
    let e = this.state.currentLetterIndex - 1;
    if (e >= 0) {
      this.setState({ currentLetterIndex: e }); 
    }
  }
  handleReset() {
    this.setState({ currentLetterIndex: 0 });
  }

  handleKeys = (e) => {
    switch (e.key) {
			case "ArrowLeft":
				this.handleMinus();
				break;
			case "ArrowRight":
				this.handlePlus();
				break;
      case "Enter":
        if (e.shiftKey) {
          this.handlePrev();
        } else {
          this.handleNext();
        }        
        break;
      case "Backspace":
				this.handleReset();
				break;
			case "Delete":
        this.handleReset();
				break;
			default:
				break;
		}
  }

	render() {
    let word = this.state.words[this.state.currentWordIndex];
    let first = word.substring(0, this.state.currentLetterIndex);
    let second = word.substring(this.state.currentLetterIndex);

		return (
      <div >
      
      <div className="word" disabled><span className="highlightedText">{first}</span>{second}</div>
        <button className="prev" onClick={() => { this.handlePrev() }}>
        {'\u2B05'}
      </button>
        <button className="next" onClick={() => { this.handleNext() }}>
          {'\u27A1'}
        </button>
        <button className="plus" onClick={() => { this.handlePlus() }}>
          {'\u2795'}
        </button>
        <button className="minus" onClick={() => { this.handleMinus() }}>
          {'\u2796'}
        </button>
        <button className="reset" onClick={() => { this.handleReset() }}>
          {'\u27B0'}
        </button>

			</div>
		);
	}
}

export default App;
