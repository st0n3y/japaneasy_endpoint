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
    this.props.onResourceSubmit({medium: medium, title: title, description: description, image: image});
    this.setState({medium: '', title: '', description: '', image: ''});
  },

  render: function() {
    return (
      

    <div>
      <div className="submission-form" onSubmit={this.handleSubmit}>
        <form>

        <legend><span className="number">1</span>Select a Medium</legend>
        <select id="material" name="medium" onChange={this.handleMediumChange}>
          <option value=""> -- select an option -- </option>
          <option value="Book">Book</option>
          <option value="Music">Music</option>
          <option value="Film">Film</option>
          <option value="Game">Game</option>
        </select>
        
        <legend><span className="number">2</span>Tell us the title</legend>
        <input type="text" name="title" placeholder="Type here..." onChange={this.handleTitleChange} />

        <legend><span className="number">3</span>Add a description</legend>
        <textarea name="description" placeholder="Type here..." onChange={this.handleDescriptionChange}></textarea>

        <legend><span className="number">4</span>Upload an image (optional)</legend>
        <input 
        type="file" 
        name="image" 
        accept="image/*"
        value={this.state.image}
        onChange={this.handleImageChange}
        />

        <input type="submit" value="Submit suggestion" />
        </form>
      </div>
    </div>
    );
  }

});

module.exports = SubmissionForm;