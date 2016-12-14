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
 * TEST: Test case description
 * AUTHOR: Your name
 */

// Set the URL to go to
var url = 'http://www.yourtestsite.com';

// 1. Go to the url
browser.get(url);
browser.sleep(5000);

// 2. Take screenshot once you've visited the page
browser.takeScreenshot().then(
    function(image) {
        fsPath.writeFileSync('./screens/my-first-test/homepage.png', image, 'base64');
        console.log('✔  Successfully took a screenshot of homepage');
        open(appRootDir + '/screens/my-first-test/', 'finder');
    }
);

// 3. Click on an element by targeting its CSS Selector (Recommended method)
browser.findElement(ByCssSelector('css selector goes here')).click();

// 4. Close browser
browser.quit();
