import React, {Component} from 'react'
import Square from './Square'

export default class Board extends Component {
	constructor(props) {
		super(props)

		this.state = {
			squares: Array(9).fill(null),
			isXTurn: true
		}
	}

	onSquareClick(index) {
		const squares = [...this.state.squares];
		squares[index] = this.state.isXTurn ? 'X' : '0'
		this.setState({
			squares,
			isXTurn: !this.state.isXTurn
		})
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
		</div>
	}
}