const Greeter = require('../src/components/ResourcesBox.jsx');
const React = ('react');

describe("ResourcesBox component", () => {
  
  beforeEach( () => {
    let {TestUtils} = React.addons;

    this.component = TestUtils.renderIntoDocument(<ResourcesBox />);
    this.renderedDOM = () => React.findDOMNode(this.component);
  });

  it("sets displayMedium state to 'Book' by default", () => {
    let rootElement = this.renderedDOM();

    expect(this.state.displayMedium).toEqual("Book");
  });

  it("renders a <div> with the proper class name", () => {
    let rootElement = this.renderedDOM();

    expect(rootElement.tagName).toEqual("DIV");
    expect(rootElement.classList.length).toEqual(1);
    expect(rootElement.classList[0]).toEqual("resourcesBox");
  });

});