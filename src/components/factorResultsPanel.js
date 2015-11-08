const React = require('react');

export default class FactorResultsPanel extends React.Component {
   displayName : "FactorResultsPanel"

   constructor(props) {
     super(props);
   }

  render() {
    let counter = 1;

    function renderFactor(factor) {
      counter += 1;
      return (
        < spans
            className = "factorDisplay"
            key = {counter}
        >
        <div>{factor}
        </div>
        < /spans>
      );
    }

    return ( < div >
      < p >{'Factors:'}< /p> < div > {
        this.props.primeFactors.map(renderFactor, this)
      } < /div> < /div>
    );
  }

}
FactorResultsPanel.propTypes = {
  primeFactors: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
};

