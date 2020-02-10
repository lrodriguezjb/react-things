import React from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import GamesList from './GamesList';
// import GamesForm from './GamesList';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            games: []
        }

        this.createNewGames = this.createNewGames.bind(this);
        this.deleteGames = this.deleteGames.bind(this);
      }  
    createNewGames(games){
        Games.id = Date.now()
        this.setState({
          games: this.state.games.concat(games)
        })
        alert(games.name);
    } 
    deleteGames(deletedGames){
        const myGames = this.state.games.filter(games => !games.id ===deletedGames.id);

        this.setState({
          games : myGames
        })
    }
    render(){
        return (
            <>
            <Header count = {this.state.games.length}/>
            <GamesList games = {this.state.games}  onCreated={this.createNewGames} onDelete = {this.deleteGames}/>
            <Footer copyright = '© 2020 Leandro Rodriguez' />
            </>
      );
        }
    }
export default App;
