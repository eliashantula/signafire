const RETRIEVE_MESSAGES = "RETRIEVE_MESSAGES";
const CHANGE_STAR = "CHANGE_STAR";
const TRASH_MESSAGES = "TRASH_MESSAGES";
const SET_TRASH_FILTER = "SET_TRASH_FILTER";
const UNDELETE_MESSAGE = "UNDELETE_MESSAGE";
const SEARCH_TERMS = "SEARCH_TERMS";
const data = require("./messages.json");

export function retrieveMessages() {
	const messages = data.messages;
	return {
		type: RETRIEVE_MESSAGES,
		messages
	};
}

export function changeStar(id) {
	return {
		type: CHANGE_STAR,
		id
	};
}

export function trashMessage(id) {
	return {
		type: TRASH_MESSAGES,
		id
	};
}

export function trashFilter(input) {
	return {
		type: SET_TRASH_FILTER,
		input
	};
}

export function undeleteMessage(id) {
	return {
		type: UNDELETE_MESSAGE,
		id
	};
}

export function searchTerms(terms) {
	return {
		type: SEARCH_TERMS,
		terms
	};
}
