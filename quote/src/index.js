import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor(props){
      super(props);
      this.state = {
      color: '',
      quotes: [],
      quote: '',
      author: ''
      }
      this.button = this.button.bind(this);
      this.rQuote = this.rQuote.bind(this);
      this.setQuotes = this.setQuotes.bind(this)
    }

    componentDidMount() {
      fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
        .then(response => response.json())
        .then(data => this.setQuotes(data));
      this.button();
    }

    setQuotes(data){
      this.setState({quotes : data.quotes})
      console.log(this.state.quotes) 
    }
      
    rQuote(){
      this.setState({color: `RGB(${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 100)})`})
      let allQuotes = this.state.quotes.map(x => x.quote)
      let allAuthors = this.state.quotes.map(x => x.author)
      let random = Math.floor(Math.random() * allQuotes.length)
      this.setState({quote: allQuotes[random], author: '-'+allAuthors[random]})
      return allQuotes[random]
    }

    button(e){
      try {e.preventDefault();} catch {}
      document.querySelector('#text').animate([{opacity: 1}, {opacity: 0}], {duration: 500}); //fade out
      document.querySelector('#author').animate([{opacity: 1}, {opacity: 0}], {duration: 500});
      setTimeout(() =>  
      document.querySelector('#tweet-quote').href=(
      'https://twitter.com/intent/tweet?hashtags=quotes&text=' +
        encodeURIComponent('"' + this.rQuote() + '" -' + this.state.author)), 400)  //change quote and twitter link update
      setTimeout(function(){
        document.querySelector('#text').animate([{opacity: 0}, {opacity: 1}], {duration: 250});
        document.querySelector('#author').animate([{opacity: 0}, {opacity: 1}], {duration: 250});}, 400) //fade in
    }

    render(){
        return (
          <div id='background' style={{backgroundColor: this.state.color}}>
            <div className='quote-box'>
              <h1 id='text' style={{color: this.state.color}}>{this.state.quote}</h1>
              <p id='author' style={{color: this.state.color}}>{this.state.author}</p>
              <div className='buttons'>
                <a id='tweet-quote' href='' style={{color: this.state.color}} target='_blank'><i className="fa-brands fa-twitter"></i></a>
                <button id="new-quote" onClick={this.button} style={{backgroundColor: this.state.color}}>Get quote</button>
              </div>
            </div>
          </div>
        )
    }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
