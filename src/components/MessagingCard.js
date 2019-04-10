import React, {Component} from 'react'
import logo from '../logo-sf-small.png'
import StarButton from './starbutton'
import Button from './button'
import ToggleViewButton from './toggleviewbutton'
const MessagingDetails =({individualMessage, star, trashMessage, undelete, trashFilter})=>{

const {handle,avatar,content,timestamp,starred,source,id, meta} = individualMessage
var date = new Date(timestamp);
var day = date.getDate();
var year = date.getFullYear();
var month = date.toLocaleString('en-us', { month: 'short' });
var dateStr = month+" "+day+","+" "+year;
console.log(trashFilter,undelete)
return (
<div className="individualMessage">
<div className="userDetails">
<div className="avatar"><img src={avatar} alt="user"/></div>
<div className="handle">{handle}</div>
</div>
<div className="contentDetails">
<div className="source" style={{fontSize: "10px", color: "grey"}}>{source} | {dateStr}</div>
<p className="message">{content}</p>
</div>
<div className="stars">
<StarButton starred={meta.isStarred} id={id} onClick={star}/>
{trashFilter === "true"? (
	<Button name="untrash" text="Restore" id={id} onClick={undelete} />
	):(<Button name="trash" text="Delete" id={id} onClick={trashMessage} />) }

</div>

</div>

)
}




const MessagingCard = ({messages, loadMessages, starred, star,trashMessage, trashedFilter, toggleTrash, undelete}) => {


const messageDataParsed = messages.map((individualMessage)=>{

return <MessagingDetails individualMessage= {individualMessage} star={star} trashMessage={trashMessage} trashFilter={trashedFilter} undelete={undelete} />

	


})



return (
	<div className="messagingInterface">
		<div className="messageHeader">
		<div className="messageHeaderContent">
    <img className="logo" src={logo} alt="logo" />
    <div>MESSAGE VIEWER</div>
    </div>
    </div>
	<h3 className="starred">Starred:{starred}</h3>
	<ToggleViewButton toggleTrash={toggleTrash} trashedFilter={trashedFilter}/>
	{messageDataParsed}
	</div>

	)


}

export default MessagingCard

