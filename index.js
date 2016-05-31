
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
                <Navbar />
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

let Navbar = React.createClass({
    render: function() {
        return (
            <nav className="navbar navbar-inverse navbar-static-top">
                <a className="navbar-brand"> Markdown Previwer </a>
                <ul className="nav navbar-nav pull-right">
                    <li>
                        <a className="btn btn-social-icon btn-lg btn-github" 
                            href="https://github.com/The-Great-Hang/markdown-previewer">
                            <span className="fa fa-github github"></span>
                        </a>  
                    </li>
                </ul>
            </nav>
        );
    }
})
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
            <div className="outputPanel" dangerouslySetInnerHTML={this.createMarkup()} />
        );
    }
});


ReactDOM.render(
    <App />,
    document.getElementById('container')
);