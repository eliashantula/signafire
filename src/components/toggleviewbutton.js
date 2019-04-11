import React, { Component } from "react";
import TextSearch from "./textsearch";

export default class ToggleViewButton extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { toggleTrash, trashedFilter, searchQuery } = this.props;

		return trashedFilter === "false" ? (
			<div className="trashSection">
				<div className="showTrashed" id="true" onClick={toggleTrash}>
					<span className="showTrash">Show Trashed Messages</span>
				</div>
				<TextSearch searchQuery={searchQuery} />
			</div>
		) : (
			<div className="showUntrashed" id="false" onClick={toggleTrash}>
				<span className="showUntrash">Show Untrashed Messages</span>
			</div>
		);
	}
}
