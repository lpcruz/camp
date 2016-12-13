// squarespace.js
var webdriver = require('selenium-webdriver'),
    By = webdriver.By;


// instantiate browser object
// NOTE: Only Firefox will work
var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();


// start doing testing stuffs
driver.get('http://www.squarespace.com');

driver.sleep(5000);

driver.findElement(By.css('.get-started')).click();

driver.sleep(5000);

driver.quit();
