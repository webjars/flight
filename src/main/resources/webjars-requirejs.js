/*global requirejs */

// Ensure any request for this webjar brings in dependencies. For example if this webjar contains
// bootstrap.js which depends on jQuery then you would have the following configuration.
//
requirejs.config({
    shim: {
        'flight': [ 'webjars!jquery.js', 'webjars!es5-shim.js', 'webjars!es5-sham.js' ]
    }
});
