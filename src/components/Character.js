import React from 'react';

const Character = (props) => {
	return(	
			<button onClick={() => props.handleClick(props.id)} className="char btn btn-outline-dark">
				<img className="rounded-circle img-thumbnail" alt="chars" src={props.link} />
			</button>
	);
}

export default Character;