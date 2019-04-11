import React, { Component } from "react";

export default class StarButton extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { name, text, onClick, id, starred, trashed } = this.props;

		return starred ? (
			<div className="isStarred" id={id} onClick={onClick}>
				Starred!
			</div>
		) : (
			<div className="star" id={id} onClick={onClick}>
				Star Message!
			</div>
		);
	}
}
