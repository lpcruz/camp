// squarespace.js
var webdriver = require('selenium-webdriver'),
    open = require('open'),
    fsPath = require('fs-path'),
    appRootDir = require('app-root-dir').get(),
    ByCssSelector = webdriver.By.css,
    url = 'http://www.squarespace.com',
    browser = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

require('app-root-dir').set(__dirname);

/**
 * TEST: Go to Squarespace homepage and click the 'Get Started' Button
 * AUTHOR: lcruz
 */

// 1. Go to the url
browser.get(url);
browser.sleep(5000);

// 2. Take screenshot of homepage
browser.takeScreenshot().then(
    function(image) {
        fsPath.writeFileSync(appRootDir + '/screens/squarespace/homepage.png', image, 'base64');
        console.log('✔  Successfully took a screenshot of Squarespace homepage');
    }
);
browser.sleep(5000);

// 3. Click the 'Get Started' Button
browser.findElement(ByCssSelector('.get-started')).click();
browser.sleep(5000);

// 4. Take a screenshot after clicking the 'Get Started' Button
browser.takeScreenshot().then(
    function(image) {
        require('fs-path').writeFileSync(appRootDir + '/screens/squarespace/get-started.png', image, 'base64');
        console.log('✔  Successfully took a screenshot of Get Started Page');
        open(appRootDir + '/screens/squarespace/', 'finder');
    }
);

// 5. Close browser
browser.quit();
