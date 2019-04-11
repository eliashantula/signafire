import React, {Component} from 'react'
import MessagingCard from '../components/MessagingCard'
import {connect} from 'react-redux'
import {retrieveMessages} from '../actions'
import {changeStar} from '../actions'
import {trashMessage} from '../actions'
import {trashFilter} from '../actions'
import {undeleteMessage} from '../actions'
import {searchTerms} from '../actions'
class MessagingContainer extends Component {

componentDidMount(){

this.props.loadMessages()

}

render(){
return <MessagingCard messages={this.props.messages} starred={this.props.starred} star={this.props.star} trashMessage={this.props.trashMessage}  toggleTrash={this.props.toggleTrash} trashedFilter={this.props.trashedFilter} undelete = {this.props.undelete} searchTerms={this.props.searchTerms} searchQuery={this.props.searchInfo}/>


}
}

const setMessages = (messages,trashFilter)=>{

switch (trashFilter){
case "false":
return messages.filter(message=> !message.meta.isTrashed) 
case "true": 
return messages.filter(message=>message.meta.isTrashed)
default:
return messages


}


}


const mapDispatchToProps = (dispatch) => {
return {
	loadMessages: () => {
	dispatch(retrieveMessages())
},
	star: (e) =>{

		e.preventDefault()
		let id = e.currentTarget.id
	dispatch(changeStar(id))
	},
	trashMessage: (e)=>{
	e.preventDefault()
	let id = e.currentTarget.id
	dispatch(trashMessage(id))
	},
    
    toggleTrash: (e)=>{

    	e.preventDefault()
    	let id = e.currentTarget.id
    	console.log(id)
    	dispatch(trashFilter(id))
    },

    undelete: (e) =>{
    	e.preventDefault()
    	let id = e.currentTarget.id 
    	dispatch(undeleteMessage(id))


    },
   
   searchInfo: (e)=>{
   	e.preventDefault()
   	let data=e.target.value.split(" ")
   	console.log(data)
   	dispatch(searchTerms(data))
   }

	
}

}


const mapStateToProps = (state) => {

return {
	messages: setMessages(state.messages, state.trashedFilter),
	starred: state.starred,
	trashedFilter: state.trashedFilter,
	searchTerms: state.searchTerms
}



}

export default connect(mapStateToProps, mapDispatchToProps)(MessagingContainer)
