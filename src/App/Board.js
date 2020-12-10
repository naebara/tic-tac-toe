import React, { Component } from 'react'
import Square from './Square'

export default class Board extends Component {
	constructor(props) {
		super(props)

		this.state = {
			squares: Array(9).fill(null),
			isXTurn: true,
			winner: '',
			over: false
		}
	}

	calculateWinner(squares) {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];
		for (let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i];
			if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
				return squares[a];
			}
		}
		return null;
	}

	onSquareClick(index) {

		const squares = [...this.state.squares];
		if (squares[index] == null && this.state.over == false) {
			squares[index] = this.state.isXTurn ? 'X' : '0'
			this.setState({
				squares,
				isXTurn: !this.state.isXTurn
			})

			if (this.calculateWinner(squares) != null) {

				this.state.over = true;
				this.state.winner = this.calculateWinner(squares);
			}
		}

	}

	render() {
		return <div className="board">
			{
				this.state.squares.map(
					(value, index) => <Square key={index}
						value={value}
						onSquareClick={() => this.onSquareClick(index)}
					/>)
			}
			<p>{this.state.winner != '' ? "Castigatoru e " + this.state.winner : ""} </p>
		</div>
	}
}