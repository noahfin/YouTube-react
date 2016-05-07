
var NewItem = React.createClass({
	handleClick() {
		var name = this.refs.name.value;
		var description = this.refs.description.value;
		$.ajax({
			url: '/api/v1/items',
			type: 'POST',
			data: { item: { name: name, description: description } },
			success: (response) => {
				this.props.handleSubmit(response);
			}
		});
	},
	render() {
		return (
			<div className="add-section">
				<input className="input" ref='name' placeholder='Enter the name of the video'/>
				<input className="input" ref='description' placeholder='Enter YouTube video code'/>
				<button className="button"onClick={this.handleClick}>Add video</button>
			</div>
			)

	}
});

