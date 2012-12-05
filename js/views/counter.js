var app = app || {};

$(function( $ ) {
	'use strict';

	app.CounterView = Backbone.View.extend({

		el: '#counter',

		// Cache the template function for a single item.
		template: _.template( $('#counter-template').html() ),

		events: {
			'click #increment': 'incrementCounter',
			'click #decrement': 'decrementCounter'
		},

		initialize: function() {
			this.model.on( 'change', this.render, this );
		},

		render: function() {
			this.$el.html( this.template( this.model.toJSON() ) );
			return this;
		},

		incrementCounter: function() {
			this.model.increment();
		},

		decrementCounter: function() {
			this.model.decrement();
		},

	});
});