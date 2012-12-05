var app = app || {};

$(function() {
	'use strict';

	var Workspace = Backbone.Router.extend({
		routes:{
			'index' : 'index',
			'.*': 'index'
		},

		index: function() {
			var counter = new app.Counter();
			var view = new app.CounterView({ model: counter});
			$('#counter').html(view.render().el);
		}
	});

	app.CounterRouter = new Workspace();
	Backbone.history.start();

});
