// Build the Camp
var webdriver = require('selenium-webdriver'),
    open = require('open'),
    fsPath = require('fs-path'),
    until = webdriver.until,
    appRootDir = require('app-root-dir').get(),
    ByCssSelector = webdriver.By.css,
    browser = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

require('app-root-dir').set(__dirname);

// ====================================== //

/**
 * TEST: Go to the New York Times homepage and ensure that the Search Button appears
 * AUTHOR: lcruz
 */

// Set the URL to go to
var url = 'http://www.nytimes.com';
var cssSelector = '.search-button';

// 1. Go to the url
browser.get(url);
browser.sleep(5000);


// 2. Wait for the search button to
browser.findElement(ByCssSelector(cssSelector), 10000).then(
    function() {
        try {
            console.log(cssSelector + ' found in DOM');
        }

        catch(err) {
            console.log('Unable to locate ' + cssSelector + err);
        }
    }
);

// 3. Close browser
browser.quit();
