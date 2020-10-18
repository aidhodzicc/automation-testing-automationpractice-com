var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./Specs/login.specs.js', './Specs/registration.specs.js', './Specs/shop.specs.js', './Specs/search.specs.js'],
  multiCapabilities: [{
    'browserName': 'chrome'
  }],
  jasmineNodeOpts: { defaultTimeoutInterval: 100000 },
  onPrepare: function () {
    browser.manage().window().maximize();
    browser.waitForAngularEnabled(false);
    jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        savePath: './Reports',
        takeScreenshots: false,
        fileName: 'Smoke Suite'
      }
      )
    )

  }
}

