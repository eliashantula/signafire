import React, {Component} from 'react'



export default class ToggleViewButton extends Component {
constructor(props){
	super(props)



	}




render(){
const {toggleTrash, trashedFilter} = this.props
console.log(trashedFilter)
return (
	trashedFilter ==="false" ? (
		<div className="showTrashed" id="true" onClick={toggleTrash}>
		<span className="showTrash">Show Trashed Messages</span></div>
		) : 
		<div className="showUntrashed" id="false" onClick={toggleTrash}>
		<span className="showUntrash">Show Untrashed Messages</span></div>

		



	)





}

}


