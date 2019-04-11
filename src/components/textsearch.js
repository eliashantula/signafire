import React, {Component} from 'react'

export default class TextSearch extends Component {
constructor(props){
	super(props)
	this.state={input:""}
}

onInput = (e) => {
this.setState({input: e.target.value})
}
render(){
const {searchQuery} = this.props
return (

<form className="textSearch" onSubmit={searchQuery}>
<label>
<input type="text" name="search" onChange={this.onInput} value={this.state.input} placeholder="Search text"/>
</label>
<button onClick={searchQuery} value={this.state.input}>Submit</button> 
</form>

	)


}
}




