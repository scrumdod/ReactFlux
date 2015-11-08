require('babel/polyfill');
const React = require('react');
import FactorForm from './factorFormControl';
import FactorResultsPanel from './FactorResultsPanel';
import numberToPrimeStore from '../store/NumberToPrimeStore';
import FactorActions from '../actions/factorActions';

function _getStateFromStore() {
  const returnState = {
    factors: numberToPrimeStore.getState(),
  };
  return returnState;
}

export default class FactorNumberControl extends React.Component {
  displayName: 'FactorNumberControl'

  constructor(props) {
    super(props);
    this.state = _getStateFromStore();
    this._handleOnSubmit = this._handleOnSubmit.bind(this);
    this.actions = new FactorActions();
  }

  componentDidMount() {
    numberToPrimeStore.addChangeListener(this._onChange.bind(this));
  }

  componentWillUnmount() {
    numberToPrimeStore.removeChangeListener(this._onChange.bind(this));
  }

  _onChange() {
    this.setState(_getStateFromStore());
  }

  _handleOnSubmit(newNumber) {
    this.actions.getPrimes(newNumber);
  }

  render() {
    return ( < div >
      < h1 >{'Factor a Number'}< /h1>
      < FactorForm
          onSubmit = {
            this._handleOnSubmit
          }
          ref = {
            'myform'
          }
      />

      < FactorResultsPanel
          primeFactors = {
          this.state.factors}
          ref={'panel'}
      />
      < /div>
    );
  }
}
