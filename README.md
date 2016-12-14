# CAMP

Practice writing selenium tests in JavaScript so you can be a better person.

## Requirements
1. node >= 6.9.2
2. npm >= 3.10.9
3. brew >= 1.1.4

## Get Started

#### Clone the repository

```
$ git clone https://github.com/lpcruz/selenium-js.git
```

#### Get required node dependencies

```
$ npm install
```


#### Get geckodriver

```
$ npm run build-camp
```

If the `brew` installation fails, you can obtain the appropriate version of `geckodriver` here: https://github.com/mozilla/geckodriver/releases

#### Run a sample test

```
$ node tests/google.js
```

## Viewing screenshots

Screenshots will automatically open when your test is finished.

####### NOTE: Place the following line of code after your `console.log()` within the `takeScreenshot()` method.

```
open(appRootDir + '/screens/my-first-test/', 'finder');
```


##Extra Resources, Challenges and Projects
*[Webdriver Sample Test Page](http://webdriverjsdemo.github.io/)
*[Selenium Commands API](http://www.seleniumhq.org/docs/03_webdriver.jsp#selenium-webdriver-api-commands-and-operations)
*[HTML basics (MDN)](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)
*[CSS Selectors](http://www.w3schools.com/cssref/css_selectors.asp)
