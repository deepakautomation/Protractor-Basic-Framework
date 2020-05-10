var HtmlReporter = require('protractor-beautiful-reporter');
exports.config = {
    directConnect:true,
    framework: 'jasmine2',

    capabilities:{
        'browserName' : 'chrome'
    },
   // seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['tests/*.js'],

    jasmineNodeOpts:{
        defaultTimeoutInterval: 30000
    },

    onPrepare: function() {
        browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();
        // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
        jasmine.getEnv().addReporter(new HtmlReporter({
           baseDirectory: 'tmp/screenshots'
        }).getJasmine2Reporter());


        var reporter = new HtmlReporter({
            baseDirectory: 'tmp/screenshots'
         })
     }

     
  }