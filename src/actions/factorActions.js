const AppDispatcher = require('../dispatcher/AppDispatcher');
const appConstants = require('../constants/appConstants');

export default class factorActions {
	getPrimes(numberToPrime) {
  AppDispatcher.handleAction({
    actionType: appConstants.GET_PRIMES,
    data: numberToPrime,
  });
	}
}

