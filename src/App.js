import React, { Component } from 'react';
import CardList from './CardList';
import SearcBox from './SearcBox';
import Scroll from './Scroll';
import './App.css';


class App extends Component {
	constructor(props) {
		super(props)
		this.state = {

			robots: [],
			searchfield: ''
	   }
	 }
       componentDidMount() {
      	fetch('http://jsonplaceholder.typicode.com/users')
      	.then(response => response.json())
      	.then(users=> this.setState({robots:users}));
          
       
      }

	 onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value})
	 	
	 	}

	render() {
		const { robots, searchfield } = this.state
		const filteredRobots = robots.filter(robot =>{
	 			return robot.name.toLowerCase().includes(searchfield.toLowerCase());

	 		})

		     return !robots.length ?
		     <h1>Lodding</h1> :

                (
			      <div className='tc'>
			      	<h1 style={{fontFamily:'El Tito Adolfo', fontSize:100,}}>RoBofriends</h1>
			      	<SearcBox  searchChange={this.onSearchChange} />
			      	<Scroll>
			      	 <CardList robots={filteredRobots} />
			      	</Scroll>
			      </div>
		       );
		   }
	      
	
	
}

export default App;