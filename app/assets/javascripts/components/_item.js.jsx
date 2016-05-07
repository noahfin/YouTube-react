var Item= React.createClass({
	getInitialState() {
		return {editable: false}
	},
	handleEdit() {
		if(this.state.editable) {
			var name = this.refs.name.value;
			var description = this.refs.description.value;
			var id = this.props.item.id;
			var item = {id: id, name: name , description: description};
			this.props.handleUpdate(item);
		}
		this.setState({ editable: !this.state.editable})
	},

		render() { 
			var name = this.state.editable ? <input type='text' ref='name'defaultValue={this.props.item.name} /> : <h3>{this.props.item.name}</h3>;
		  var description = this.state.editable ? <input type='text' ref='description' defaultValue={this.props.item.description} /> : <p>{this.props.item.description}</p>;
		   return ( 
		   	<div className="video"> 
		   		{name} 
		   		<iframe width="560" height="315" src={"https://www.youtube.com/embed/" + this.props.item.description}  frameborder="0" allowfullscreen></iframe>
		   		<button className="change-btn-left "onClick={this.props.handleDelete} >Delete</button>
		   	  <button className="change-btn" onClick={this.handleEdit}> Edit </button>
				</div>
				)
			}
		})