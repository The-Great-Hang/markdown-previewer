
let App = React.createClass({ 

    getInitialState: function() {
        return { text: "" };
    },

    inputChanged: function(e) {
        let value = e.target.value;
        console.log(value);
        this.setState({text: marked(value)});
    },

    render: function() {    
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <InputField changedHandler={this.inputChanged}/>
                    </div>
                    <div className="col-md-6">
                        <OutputField text={this.state.text}/>
                    </div>
                </div>
            </div>
        )
    }
});

let InputField = React.createClass({

    render: function() {
        return (        
            <textarea className="form-control" onChange={this.props.changedHandler}></textarea>
        )
    }
});

let OutputField = React.createClass({
    createMarkup: function() {
        return { __html : this.props.text };
    },
    render: function() {
        return (
            <div dangerouslySetInnerHTML={this.createMarkup()} />
        )
    }
});


ReactDOM.render(
    <App />,
    document.getElementById('container')
);