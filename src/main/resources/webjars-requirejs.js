requirejs.config({
    paths: { "flight": webjars.path("flight", "flight") },
    shim: {
        "flight": {
            deps: [ "jquery", "es5-shim", "es5-sham" ],
            exports: "flight"
        }
    }
});
