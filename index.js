var PDF = Pdf;
var App = React.createClass({
	getInitialState: function() {
		return {
			file: 'sample-syllabus.pdf',
			files: []
		};
	},
	onFileChange: function(ev) {
		this.setState({
			file: ev.target.files[0]
		});
	},
	componentDidMount() {
		this.serverRequest = $.get(this.props.source, function(result) {
			this.setState({
				files: result.pdfs
			})
		}.bind(this));	
	},
	componentWillUnmount: function() {
		this.serverRequest.abort();
	},
	render: function(){
		return (
			<div className="pdf">
				<PDF file={'pdfs/'+this.state.file} onDocumentComplete={this._onDocumentComplete}/>
			</div>
		)
	},
	_onDocumentComplete: function() {
	}
});
ReactDOM.render(<App source="/api/v1.0/pdfs"/>, document.getElementById("container"));
	

	
