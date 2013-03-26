# backbone-counter #

A very (very) simple counter app using backbone.js

## Overview ##

The purpose of this application was to model something very simple in Backbone.js, to get a better understanding
of how it works.  The app displays a list of counters, allowing you to add a new counter to the page, or remove
and existing counter.  Each counter keeps track of it's count, and the user can increment and decrement the count.
That's pretty much it :)

## Technical Implementation Details ##

This application was built using Backbone.js, with Underscore.js templates.  The templates (and for that matter,
all view aspects) are stored in the index.html file.  A Backbone router was used, but was not necessary, and sends
all requests to a no-op function.  Event interaction is handled by the views, which directly manipulate the counter
model(s).  The model data is stored in memory, not using a backend server or local storage.  An app-view was
created to manage creating and deleting the individual counter views.

More information on the details of this application can be found here:  
http://blog.dylants.com/2013/01/10/my-introduction-to-backbone-js-backbone-counter/

## Getting Started ##

A running version of this application is hosted on GitHub here:  
http://dylants.github.com/backbone-counter/

You can also clone the project, and host the index.html file locally.  All JavaScript files are included and loaded
within the index file.
