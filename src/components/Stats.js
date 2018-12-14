import React from 'react';

const Stats = (props) => {
	return (
		<p className="text-right">Score: {props.score} | Top Score: {props.highScore}</p>
	)
}

export default Stats;