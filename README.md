# selenium-js

Practice writing selenium tests in JavaScript

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
$ npm run brew-gecko
```

If the `brew` installation fails, you can obtain the appropriate version of `geckodriver` here: https://github.com/mozilla/geckodriver/releases

#### Run a sample test

```
$ node tests/google.js
```

## Viewing screenshots

Screenshots will automatically appear in the `/screens` directory within the root of `selenium-js`

## References

#### Commands API
http://www.seleniumhq.org/docs/03_webdriver.jsp#selenium-webdriver-api-commands-and-operations (Choose JavaScript as preferred programming language)
