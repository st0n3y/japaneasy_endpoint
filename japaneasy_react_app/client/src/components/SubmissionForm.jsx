var React = require('react');

var SubmissionForm = React.createClass({

  getInitialState: function() {
    return {
      medium: '', 
      title: '', 
      description: '', 
      image: ''
    };
  },

  handleMediumChange: function(e) {
    this.setState({medium: e.target.value});
  },

  handleTitleChange: function(e) {
    this.setState({title: e.target.value});
  },

  handleDescriptionChange: function(e) {
    this.setState({description: e.target.value});
  },

  handleImageChange: function(e) {
    this.setState({image: e.target.value});
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var medium = this.state.medium;
    var title = this.state.title.trim();
    var description = this.state.description.trim();
    var image = this.state.image;
    if (!medium || !title || !description) {
      return;
    }
    this.props.onCommentSubmit({medium: medium, title: title, description: description, image: image});
    this.setState({medium: '', title: '', description: '', image: ''});
  },

  render: function() {
    return (
      <div id="submit-form">
        <h4>Suggest a new learning resource</h4>
        <form className="submissionForm" onSubmit={this.handleSubmit}>
          <label>Select a medium:</label>
          <select name="medium" onChange={this.handleImageChange}>
            <option value=""> -- select an option -- </option>
            <option value="Book">Book</option>
            <option value="Music">Music</option>
            <option value="Film">Film</option>
            <option value="Game">Game</option>
          </select>
          <label>Tell us the title:</label>
          <input 
            type="text" 
            name="title"
            placeholder="Type here..." 
            value={this.state.title}
            onChange={this.handleTitleChange}
          />
          <label>Add a description</label>
          <input 
            type="text" 
            name="description"
            placeholder="Type here..." 
            value={this.state.description}
            onChange={this.handleDescriptionChange}
          />
          <label>Upload image:</label>
          <input 
          type="file" 
          name="image" 
          accept="image/*"
          value={this.state.image}
          onChange={this.handleImageChange}
          />
          <input type="submit" value="Submit suggestion"/>
      </form>
    </div>
    );
  }

});

module.exports = SubmissionForm;