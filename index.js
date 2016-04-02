var App = React.createClass({
	getInitialState: function() {
		return {
			file: 'sample-syllabus.pdf'
		};
	},
	onFileChange: function(ev) {
		this.setState({
			file: ev.target.files[0]
		});
	},
	render: function()
	
