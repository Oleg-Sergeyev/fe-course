var HelloWorld = createReactClass({
  propTypes: {
    greeting: PropTypes.string
  },

  render: function() {
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
      </React.Fragment>
    );
  }
});

