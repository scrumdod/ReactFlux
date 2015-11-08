"use strict";
var FactorForm = require('../src/components/factorFormControl');

const expect = require('chai').expect;
var React,ReactDOM, ReactTestUtils,calledSubmit,newValue;

describe('FactorFormControl', function () {
  beforeEach(function () {
    function SubmitProp(evt){
      calledSubmit = true;
      newValue = evt;
    };
  	
    React = require('react')
  	ReactTestUtils = require('react-addons-test-utils');
    ReactDOM = require('react-dom');
    calledSubmit = false;
    newValue = '';

    this.component = ReactTestUtils.renderIntoDocument(
      <FactorForm onSubmit={SubmitProp}
        numberToPrime={'9'}/>);
  });
  afterEach(function () {
  	ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this.component).parentNode)
  })
    
 it('has an input and submit button', function() {
    var form = ReactTestUtils.findRenderedDOMComponentWithTag(this.component, "form");
    expect(form).to.be.defined;

    var button = ReactTestUtils.findRenderedDOMComponentWithTag(this.component, "button");
    expect(button).to.be.defined;
    expect(button.textContent).to.be.equal("Factor a number");

    var input = ReactTestUtils.findRenderedDOMComponentWithTag(this.component, "input");
    expect(input).to.be.defined;
	});

 it('calls back prop on submit', function (){
    ReactTestUtils.Simulate.submit(ReactDOM.findDOMNode(this.component));
    expect(calledSubmit).to.be.true;
 });
 
 it('sends back text value on submit', function (){
    var expected = '4';
    var input = ReactTestUtils.findRenderedDOMComponentWithTag(this.component, "input");
    ReactDOM.findDOMNode(input).value = expected;
    ReactTestUtils.Simulate.submit(ReactDOM.findDOMNode(this.component));
    expect(newValue).to.be.equal(expected);
 });
});