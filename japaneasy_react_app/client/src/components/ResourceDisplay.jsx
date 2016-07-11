var React = require('react');
var ResourcePanel = require('./ResourcePanel.jsx');

var ResourceDisplay = React.createClass({

  render: function() {
    console.log(this.props.data);

    var resourceNodes = this.props.data.map(function(resource, index) {
      return (
        <ResourcePanel title={resource.title} image={resource.image} key={resource._id.$oid}>
          {resource.description}
        </ResourcePanel>
      );
    });

    return(
      <div className='resource-display'>
        {resourceNodes}
      </div>
    );
  }

});

module.exports = ResourceDisplay;