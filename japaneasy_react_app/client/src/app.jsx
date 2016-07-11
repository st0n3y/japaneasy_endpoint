var React = require('react');
var ReactDOM = require('react-dom');
var ResourcesBox = require('./components/ResourcesBox.jsx');

window.onload = function(){
  ReactDOM.render(
    <ResourcesBox url="http://localhost:5000/resources"/>, 
    document.getElementById('app')
  );
};