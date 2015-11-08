"use strict";
var FactorResultsPanel = require('../src/components/factorResultsPanel');

const expect = require('chai').expect;
var React,ReactDOM, ReactTestUtils,calledSubmit,newValue;

describe('FactorResultsPanel', function () {
  beforeEach(function () {  	
    React = require('react')
  	ReactTestUtils = require('react-addons-test-utils');
    ReactDOM = require('react-dom');
  });
  afterEach(function () {
  	//ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this.component).parentNode)
  })

  it('shows empty Factors',function(){
  	const emptyPrimes = [];
  	this.component = ReactTestUtils.renderIntoDocument(<FactorResultsPanel primeFactors={emptyPrimes}/>);
  	var factorsTitle = ReactTestUtils.findRenderedDOMComponentWithTag(this.component,"p");
  	expect(ReactDOM.findDOMNode(factorsTitle).outerHTML).to.contain('Factors');
  	expect(countPrimesShown(this.component)).to.be.equal(0);
  	ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this.component).parentNode)
  });

	it('shows a single prime', function(){
		const emptyPrimes = ['4']
		this.component = ReactTestUtils.renderIntoDocument(<FactorResultsPanel primeFactors={emptyPrimes}/>);
  	expect(countPrimesShown(this.component)).to.be.equal(1);
		ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this.component).parentNode)
	});

	it('shows multiple primes', function(){
		const emptyPrimes = ['4','5','6'];
		this.component = ReactTestUtils.renderIntoDocument(<FactorResultsPanel primeFactors={emptyPrimes}/>);
  	expect(countPrimesShown(this.component)).to.be.equal(3);
		ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this.component).parentNode)
	});

	function countPrimesShown(comp){
		let numPrimesFound = ReactTestUtils.scryRenderedDOMComponentsWithClass(comp,"factorDisplay");
  	return numPrimesFound.length;
	}
});