const React = require('react');
const ReactDOM = require('react-dom');

export default class FactorForm extends React.Component {
  displayName : "FactorForm"

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(eve) {
    eve.preventDefault();
    const newNumber = ReactDOM.findDOMNode(this.refs.numberToFactor).value;
    this.props.onSubmit(newNumber);
  }

  render() {
    return (
      < form onSubmit = {this.onSubmit} >
      < input  // uncontrolled for perf
          defaultValue={''}
          placeholder = {'Factor a number'}
          ref = {'numberToFactor'}
      />
      <button
          ref = {'mybutton'}
          type = {"submit"}
      >
          {'Factor a number'}
      </button>
      < /form>
    );
  }
}

FactorForm.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
};
