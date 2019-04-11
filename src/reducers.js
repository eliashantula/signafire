import * as Action from "./actions";
const initialState = {
	messages: [],
	starred: 0,
	trashedFilter: "false",
	searchTerms: []
};

export default function getMessages(state = initialState, Action) {
	switch (Action.type) {
		case "RETRIEVE_MESSAGES":
			let initialStarred = 0;
			Action.messages.forEach(message => {
				if (message.meta.isStarred) {
					initialStarred += 1;
				}
			});
			return {
				...state,
				messages: Action.messages,
				starred: initialStarred
			};

		case "CHANGE_STAR":
			let id = parseInt(Action.id);
			let change = 0;

			return {
				...state,
				messages: state.messages.map(message => {
					if (id === message.id) {
						if (message.meta.isStarred) {
							change -= 1;
							message.meta.isStarred = false;
						} else {
							change += 1;
							message.meta.isStarred = true;
						}
					}
					return message;
				}),
				starred: state.starred + change
			};

		case "TRASH_MESSAGES":
			return {
				...state,
				messages: state.messages.map(message => {
					if (message.id === parseInt(Action.id)) {
						message.meta.isTrashed = true;
					}
					return message;
				})
			};
		case "SET_TRASH_FILTER":
			return {
				...state,
				trashedFilter: Action.input
			};
		case "UNDELETE_MESSAGE":
			return {
				...state,
				messages: state.messages.map(message => {
					if (message.id === parseInt(Action.id)) {
						message.meta.isTrashed = false;
					}
					return message;
				})
			};
		case "SEARCH_TERMS":
			return {
				...state,
				searchTerms: Action.terms
			};

		default:
			return state;
	}
}
