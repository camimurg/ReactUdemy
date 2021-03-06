import axios from 'axios';
import React, { Component } from 'react';
import Joke from './Joke'
import './JokeList.css'

const URL = "https://icanhazdadjoke.com/";

export default class JokeList extends Component {
  static defaultProps = {
    numJokesToGet: 10 
  };
  constructor(props) {
    super(props)

    this.state = {
      jokes: JSON.parse(window.localStorage.getItem("jokes") || "[]"),
      loading: false
    };
    this.seenJokes = new Set(this.state.jokes.map(j => j.text))
    console.log(this.seenJokes);
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    if(this.state.jokes.length === 0) this.getJokes();
  }

  async getJokes(){
    //Load Jokes
    try {
      let jokes = [];
      while (jokes.length < this.props.numJokesToGet) {
        let res = await axios.get(URL, {
          headers: { Accept: "application/json"}
        });
        let newJoke = res.data.joke
        if(!this.seenJokes.has(newJoke)){
          jokes.push({
            id: res.data.id,
            text: newJoke, 
            votes: 0
          });
        } else {
          console.log("FOUND DUPLICATE")
          console.log(newJoke);
        }
      }
      this.setState(st => ({
        loading: false,
        jokes: [...st.jokes, ...jokes]
      }),
      () => window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
      );
    } catch (e) {
      alert(e);
      this.setState({ loading: false });
    }
  }

  handleVote(id, delta) {
    this.setState(
      st => ({
        jokes: st.jokes.map(j => 
          j.id === id ? {...j, votes: j.votes + delta} : j
        )
      }),

      () => window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
    );
  }

  handleClick() {
    this.setState({loading: true}, this.getJokes)
  }


  render() {
    if (this.state.loading) {
      return(
      <div className="JokeList-spinner">
        <i className="far fa-8x fa-laugh fa-spin"></i>
        <h1 className='JokeList-title'>Loading...</h1>
      </div>
    )}
    let jokes = this.state.jokes.sort((a, b) => b.votes - a.votes);
    return (
      <div className="JokeList">
        <div className="JokeList-sidebar">
          <h1 className='JokeList-title'>
            <span>Dad</span> jokes</h1>
          <img src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg' alt="emoji" />
          <button className="JokeList-getmore" onClick={this.handleClick}>New Joke</button>
        </div>
        <div className="JokeList-jokes">
           {jokes.map( j => (
             <Joke 
              key={j.id}
              votes={j.votes}
              text={j.text}
              upvote={() => this.handleVote(j.id, 1)}
              downvote={() => this.handleVote(j.id, -1)}
            />
           ))}
        </div>
      </div>
    )
  }
}
