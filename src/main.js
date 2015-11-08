// "use strict";

const React = require('react');
const ReactDOM = require('react-dom');
const FactorNumberControl = require('./components/factorNumberControl');


if (document.getElementById('app2') !== null) {
  ReactDOM.render(<FactorNumberControl />, document.getElementById('app2'));
}
