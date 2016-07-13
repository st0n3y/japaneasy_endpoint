var React = require('react');
var ResourceDisplay = require('./ResourceDisplay.jsx');
var SubmissionForm = require('./SubmissionForm.jsx');

var ResourcesBox = React.createClass({

  loadResourcesFromServer: function() {
    var url = this.props.url;
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = function() {
      if(request.status === 200) {
        var data = JSON.parse(request.responseText);
        this.setState({data: data});
      }
    }.bind(this);
    request.send(null);
  },

  componentDidMount: function() {
    this.loadResourcesFromServer();
  },

  getInitialState: function() {
    return {
      data: [], 
      displayMedium:"Book"
    };
  },

  handleResourceSubmit: function(resource) {
    var resources = this.state.data;
    resource._id = { $oid :Date.now() }
    var newResources = resources.concat([resource]);
    this.setState({data: newResources});

    var url = this.props.url;
    var request = new XMLHttpRequest();
    request.open("POST", url, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = function(){
      if(request.status === 200){
        this.loadResourcesFromServer();
      }
    }.bind(this)
    request.send( JSON.stringify(resource) );
  },

  setMedium:function(e){
    let newMedium = e.target.getAttribute('data-medium')
    this.setState({displayMedium: newMedium})
  },

  filterByMedium: function(mediumName){
    var newDisplayData = this.state.data.filter(function(item) {
      return item.medium === mediumName
    });
    return newDisplayData
  },

  render: function() {
    return(
      <div className="resourcesBox">
        <a name="top"></a>
        <h1>Learning Resources</h1>
  
        <a href="#form" className="clicky">Suggest a resource</a>
        
        <ul className="tabs">
          <li onClick={this.setMedium} className="active"><a data-medium="Book" href="#Book">Books</a></li>
          <li onClick={this.setMedium}><a data-medium="Music" href="#Music">Music</a></li>
          <li onClick={this.setMedium}><a data-medium="Film" href="#Films">Films</a></li>
          <li onClick={this.setMedium}><a data-medium="Game" href="#Games">Games</a></li>

          {/*Alternative method using anonymous function*/}
          {/*<li onClick={ function(){ this.setMedium("Game") }.bind(this)}><a href="#Games">Games</a></li> */}
        </ul>

        <ResourceDisplay data={ this.filterByMedium( this.state.displayMedium ) } />

        <SubmissionForm onResourceSubmit={this.handleResourceSubmit}/>
        <a href="#top" name="form">Back to the top</a>
        <p>&copy; David MacKintosh, 2016</p>
      </div>
    );
  }


});

module.exports = ResourcesBox;