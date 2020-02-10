import React from 'react'

export default props => (
    <>
    <h1>Games</h1>
    <ul>
    {props.games.map(games => <GamesItem key ={games.id} games = {games} onDelete ={props.onDelete}/>)}
    </ul>
    <GamesForm onCreated = {props.onCreated}/>
    
    </>
)

function GamesItem(props){
    return (
        <>
        <li>{props.games.name}
        <button onClick = {() => props.onDelete(props.games)}>delete me</button>
        </li>
        </>
    )
}

class GamesForm extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            formItem: "",
        };
        this.createGames = this.createGames.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    createGames(event){
        event.preventDefault();
        this.props.onCreated({name: this.state.formItem})
        
    }
    handleInputChange(event) {
      event.preventDefault()
  
      this.setState({
          formItem: event.target.value
        });
    }
    render() {
      return(
        <form onSubmit={this.createGames}>
            <fieldset>
            <label>Add Game:</label>
            <input type="text" value={this.state.formItem} onChange={this.handleInputChange}/>
            <button>Add Game</button>
            </fieldset>
        </form>
      );
    }
}
