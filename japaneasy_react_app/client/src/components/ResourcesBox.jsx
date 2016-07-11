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
        this.setState({data: data})
      }
    }.bind(this);
    request.send(null);
  },

  componentDidMount: function() {
    this.loadResourcesFromServer();
  },

  getInitialState: function() {
    return {data: []};
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

    tabSwitch: function(e){
      // console.log(e.target);
      e.target.className = "active"
    },

  render: function() {
    return(
      <div className='resourcesBox'>
        <h1>Learning Resources</h1>
        <SubmissionForm onResourceSubmit={this.handleResourceSubmit}/>
        
        <ul className="tabs group">
          <li onClick={this.tabSwitch}><a href="#Books">Books</a></li> 
          <li onClick={this.tabSwitch}><a href="#Music">Music</a></li> 
          <li onClick={this.tabSwitch}><a href="#Films">Films</a></li>
          <li onClick={this.tabSwitch}><a href="#Games">Games</a></li> 
        </ul>

        <ResourceDisplay data={this.state.data} />
      </div>
    );
  }


});

module.exports = ResourcesBox;