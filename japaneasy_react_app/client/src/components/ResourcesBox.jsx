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
      resource.id = Date.now();
      var newResources = resources.concat([resource]);
      this.setState({data: newResources});

      var url = this.props.url;
      var request = new XMLHttpRequest();
      request.open("POST", url, true);
      request.setRequestHeader("Content-Type", "application/json");
      request.onload = function(){
        if(request.status === 200){
          //wise to make request from server to complete chain.
          this.loadResourcesFromServer();
        }
      }.bind(this)
      request.send( JSON.stringify(resource) );
    },

  render: function() {
    return(
      <div className='resourcesBox'>
        <h1>Learning Resources</h1>
        <SubmissionForm onResourceSubmit={this.handleResourceSubmit}/>
        <div id='tabs'>
          <ul className='tabs group'>
            <li onClick={this.tabClick}><a href='#books'>Books</a></li> 
            <li onClick={this.tabClick}><a href='#music'>Music</a></li> 
            <li onClick={this.tabClick}><a href='#films'>Films</a></li>
            <li onClick={this.tabClick}><a href='#games'>Games</a></li> 
          </ul>
        </div>

        <ResourceDisplay data={this.state.data} />
      </div>
    );
  }


});

module.exports = ResourcesBox;