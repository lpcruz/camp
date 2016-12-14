// Build the Camp
var webdriver = require('selenium-webdriver'),
    open = require('open'),
    fsPath = require('fs-path'),
    appRootDir = require('app-root-dir').get(),
    ByCssSelector = webdriver.By.css,
    browser = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

require('app-root-dir').set(__dirname);

// ====================================== //

/**
 * TEST: Go to the Google Homepage and ensure that the homepage loads
 * AUTHOR: lcruz
 */

// Set the URL to go to
var url = 'http://www.google.com';

// 1. Go to the url
browser.get(url);
browser.sleep(5000);

// 2. Take screenshot once you've visited the page
browser.takeScreenshot().then(
    function(image) {
        fsPath.writeFileSync('./screens/google/homepage.png', image, 'base64');
        console.log('✔  Successfully took a screenshot of Google homepage');
        open(appRootDir + '/screens/google/', 'finder');
    }
);

browser.quit();
