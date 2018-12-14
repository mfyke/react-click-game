import React from 'react';

import Stats from './Stats'

const Header = (props) => {
	return(
		<div className="jumbotron bg-info">
			<h1 className="text-center">React Click Game</h1>
			<p className="text-center">Click an image to begin, but do not click the same image twice!</p>
			<Stats score={props.score} highScore={props.highScore} />
		</div>
	);
}

export default Header;