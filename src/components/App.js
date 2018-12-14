import React, { Component } from 'react';

import Header from './Header';
import Character from './Character';

class App extends Component {
	state = {
		score: 0,
		highScore: 0,
		characters: [
			{
				name: "Ana",
				id: 1,
				link: './assets/images/ana.png'
			},
			{
				name: "Ashe",
				id:2,
				link: "./assets/images/bobbyashe.png"
			},
			{
				name: "Doomfist",
				id:3,
				link: "./assets/images/dfist.png"
			},
			{
				name: "Genji",
				id: 4,
				link: "./assets/images/genji.png"
			},
			{
				name: "Hammond",
				id: 5,
				link: "./assets/images/hammy.png"
			},
			{
				name: "Junkrat",
				id: 6,
				link: "./assets/images/jrat.png"
			},
			{
				name: "McCree",
				id: 7,
				link: "./assets/images/mccree.png"
			},
			{
				name: "Pharah",
				id: 8,
				link: "./assets/images/pharah.png"
			},
			{
				name: "Reaper",
				id: 9,
				link: "./assets/images/reaper.png"
			},
			{
				name: "Soldier 76",
				id: 10,
				link: "./assets/images/soldier.png"
			},
			{
				name: "Zarya",
				id: 11,
				link: "./assets/images/zarya.png"
			},
			{
				name: "Zenyatta",
				id: 12,
				link: "./assets/images/zen.png"
			}
		],
		clicked: []
	};

	handleClick = (id) => {
		console.log(this.state.char);
		if(this.state.clicked.indexOf(id)<0) {
			if (this.state.score>=this.state.highScore) {
				this.setState(prevState=>({
					score: prevState.score+=1,
					highScore: prevState.highScore+=1,
					clicked: [...this.state.clicked, id]
				}));
			}
			else {
				this.setState(prevState=>({
					score: prevState.score+=1,
					clicked: [...this.state.clicked, id]
				}));
			}
		}
		else {
			this.setState({
				score: 0,
				clicked: []
			});
		}
		
	}

	shuffle = (carr) => {
		for (let i =0; i< carr.length;i++) {
			let j = i + Math.floor(Math.random() * (carr.length-i));

			let temp = carr[j];
			carr[j] = carr[i];
			carr[i] = temp;
		}
		return carr;
	}

	render() {
		this.shuffle(this.state.characters);
		// console.log(randArr);
		return (
			<div className="container">
				<Header score={this.state.score} highScore={this.state.highScore} />
				{/* Characters list */}
				<div className="text-center col-md-10 offset-md-1">
					{this.state.characters.map((c, index) => 
						<Character 
						link={c.link}
						key={c.id}
						id={c.id}
						clicked={c.clicked}
						name={c.name}
						handleClick={this.handleClick}
						index={index}
						/>
					)}
				</div>
			</div>

		);
	}


}

export default App;