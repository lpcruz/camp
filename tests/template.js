// At the top is our basic paramaters for running a test
var webdriver = require('selenium-webdriver'),
    fsPath = require('fs-path'),
    ByCssSelector = webdriver.By.css,

    // Pass in the website that you want to test
    // NOTE: Only Firefox will work
    url = 'http://yourtestingsite.com',
    browser = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

/**
 * TEST: Description of test
 * AUTHOR: Your Name
 */

// 1. Go to the url
browser.get(url);
browser.sleep(5000);

// 2. Take screenshot once you've visited the page
browser.takeScreenshot().then(
    function(image) {
        fsPath.writeFileSync('./screens/my-first-test/homepage.png', image, 'base64');
        console.log('✔  Successfully took a screenshot of homepage');
    }
);

// 3. Close browser
browser.quit();
