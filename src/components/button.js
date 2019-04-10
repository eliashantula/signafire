import React, {Component} from 'react'




export default class Button extends Component {
constructor(props){
	super(props)

}





render() {
const {name, text,onClick, id, starred} = this.props

return ( 
	
	<div className={name} id={id} onClick={onClick}>{text}</div>
)
}

}
