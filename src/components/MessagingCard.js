import React, { Component } from "react";
import logo from "../logo-sf-small.png";
import StarButton from "./starbutton";
import Button from "./button";
import ToggleViewButton from "./toggleviewbutton";

class MessagingDetails extends Component {
	constructor(props) {
		super(props);
		this.state = { content: "" };
		this.textInput = React.createRef();
	}

	componentDidMount() {
		console.log(this.textInput.current.textContent);
		this.setState({ content: this.textInput.current.textContent });
	}

	render() {
		const {
			individualMessage,
			star,
			trashMessage,
			undelete,
			trashFilter,
			searchTerms
		} = this.props;
		let updatedContent = [];
		if (searchTerms.length > 0) {
			updatedContent = this.state.content.split(" ").map(message => {
				if (message.toLowerCase() === searchTerms[0].toLowerCase()) {
					return `<mark>${message}</mark>`;
				}
				return message;
			});
			updatedContent = updatedContent.join(" ");
			console.log(updatedContent);
		}

		const {
			handle,
			avatar,
			content,
			timestamp,
			starred,
			source,
			id,
			meta
		} = individualMessage;

		var date = new Date(timestamp);
		var day = date.getDate();
		var year = date.getFullYear();
		var month = date.toLocaleString("en-us", { month: "short" });
		var dateStr = month + " " + day + "," + " " + year;
		return (
			<div className="individualMessage">
				<div className="userDetails">
					<div className="avatar">
						<img src={avatar} alt="user" />
					</div>
					<div className="handle">{handle}</div>
				</div>
				<div className="contentDetails">
					<div
						className="source"
						style={{ fontSize: "10px", color: "grey" }}
					>
						{source} | {dateStr}
					</div>
					{updatedContent.length > 0 ? (
						<p
							className="message"
							ref={this.textInput}
							dangerouslySetInnerHTML={{ __html: updatedContent }}
						/>
					) : (
						<p className="message" ref={this.textInput}>
							{content}
						</p>
					)}
				</div>
				<div className="stars">
					<StarButton
						starred={meta.isStarred}
						id={id}
						onClick={star}
					/>
					{trashFilter === "true" ? (
						<Button
							name="untrash"
							text="Restore"
							id={id}
							onClick={undelete}
						/>
					) : (
						<Button
							name="trash"
							text="Delete"
							id={id}
							onClick={trashMessage}
						/>
					)}
				</div>
			</div>
		);
	}
}

const MessagingCard = ({
	messages,
	loadMessages,
	starred,
	star,
	trashMessage,
	trashedFilter,
	toggleTrash,
	undelete,
	searchQuery,
	searchTerms
}) => {
	const messageDataParsed = messages.map((individualMessage, i) => {
		return (
			<MessagingDetails
				individualMessage={individualMessage}
				star={star}
				trashMessage={trashMessage}
				trashFilter={trashedFilter}
				key={i}
				undelete={undelete}
				searchTerms={searchTerms}
			/>
		);
	});

	return (
		<div className="messagingInterface">
			<div className="messageHeader">
				<div className="messageHeaderContent">
					<img className="logo" src={logo} alt="logo" />
					<div>MESSAGE VIEWER</div>
				</div>
			</div>
			<h3 className="starred">Starred:{starred}</h3>
			<ToggleViewButton
				toggleTrash={toggleTrash}
				trashedFilter={trashedFilter}
				searchQuery={searchQuery}
			/>
			{messageDataParsed}
		</div>
	);
};

export default MessagingCard;
