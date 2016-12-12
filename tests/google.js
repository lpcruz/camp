// google_search.js
var webdriver = require('selenium-webdriver'),
    By = webdriver.By;


// instantiate browser object
// NOTE: Only Firefox will work 
var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();


// start doing testing stuffs
driver.get('http://www.google.com/ncr');
driver.findElement(By.name('q')).sendKeys('webdriver');
driver.findElement(By.name('btnG')).click();
driver.quit();
