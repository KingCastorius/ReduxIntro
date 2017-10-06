import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

const reducer = (state = 0, action) => {
	switch(action.type) {
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
		case 'RESET':
			return state = 0;
		default:
			return state;
	}
}

const store = createStore(reducer);

const Counter = ({ value, onIncrement, onDecrement, onReset}) => (
	<div>
		<h1>{value}</h1>
		<button onClick={onIncrement}>+</button>
		<button onClick={onReset}>Reset</button>
		<button onClick={onDecrement}>-</button>
	</div>
)

const render = () => {
	ReactDOM.render(
		<Counter 
			value={ store.getState() }
			onIncrement={ () => store.dispatch({type: 'INCREMENT'})}
			onReset={ () => store.dispatch({type: 'RESET'})}
			onDecrement={ () => store.dispatch({type: 'DECREMENT'})} />,
			document.getElementById('root')
	)
}

render();
store.subscribe(render);