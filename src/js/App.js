import '../css/master.scss';
var React = require('react');
var ReactDOM = require('react-dom');
var Fluxxor = require('fluxxor');
var AppStores = require('./stores/AppStores');
var AppActions = require('./actions/AppActions');
var Application = require('./ui/Application');

var flux = new Fluxxor.Flux(AppStores, AppActions);

ReactDOM.render(<Application flux={flux} />, document.getElementById('myApp'));
