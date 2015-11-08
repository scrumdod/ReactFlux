var expect = require('chai').expect;
var FactorNumberControl = require('../src/components/factorNumberControl');
var FactorResultsPanel = require('../src/components/factorResultsPanel');
var FactorForm = require('../src/components/factorFormControl');
var React;
var ReactDOM;
var ReactTestUtils;

describe('FactorNumberControl', function () {
    beforeEach(function () {        
        React = require('react');
        ReactDOM = require('react-dom');
        ReactTestUtils = require('react-addons-test-utils');
        //this.componentElement = React.createElement(FactorNumberControl);
        this.component = ReactTestUtils.renderIntoDocument(<FactorNumberControl/>);  
    });
    afterEach(function(){
        ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this.component).parentNode)
    });

    it('is in the DOM', function () {
        expect(this.component).be.defined;
        expect(this.componentElement).be.defined;
    });

    it('has a child form control', function() {
        var form = ReactTestUtils.findRenderedDOMComponentWithTag (this.component, 'form')
        expect(form).to.be.defined;
    });

    it('has a child results control', function() {
        var panel = this.component.refs.panel; 
        expect(panel).to.be.defined;
    });

    it('attaches a handler to the form submit', function () {
        //using shallow rendering testing
        var renderer = ReactTestUtils.createRenderer();
        renderer.render(<FactorNumberControl/>);
        var mycomp = renderer.getRenderOutput();
        expect(typeof mycomp.props.children[1].props.onSubmit).to.be.equal('function');
    });
});
