import FluxStore from './FluxStore';
import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../constants/appConstants';

let store = [];

// this is our callout to the model for now.
function getPrimes(max) {
  if (max > 0) {
    const sieve = [];
    let iCount = 0;
    let jCount = 0;
    const primes = [];
    for (iCount = 2; iCount <= max; ++iCount) {
      if (!sieve[iCount]) {
        primes.push(iCount);
        for (jCount = iCount << 1; jCount <= max; jCount += iCount) {
          sieve[jCount] = true;
        }
      }
    }
    store = primes;
  }
}


class NumberToPrimeStore extends FluxStore {
  constructor() {
    super();
  }


  getState() {
    return store;
  }

}

const numberToPrimeStore = new NumberToPrimeStore();

numberToPrimeStore.dispatchToken = AppDispatcher.register(action => {
  const actionPayload = action.action;

  switch (actionPayload.actionType) {
  case ActionTypes.GET_PRIMES:
    getPrimes(actionPayload.data);
    numberToPrimeStore.emitChange();
    break;

  default:
    return;
  }
});

export default numberToPrimeStore;
