# A bundle of the Cheerio NPM package
If you deal with DOM in Node.js you might use cheerio package. So you code you node.js where you find that the DOM manipulation options are limited by Cheerio, compared to the delightful features you are spoiled with here on the web.

I therefore made a web bundle of Cheerio using webpack.
Here I test it.

## Using this bundle
You should simple include the `cheerioweb.js` in your project. It will inject itself into the global `window` object of your browser.

You can then us it like this:

### Local
Checkout this repository and use the `cheerioweb.js` file like this:

`<script src="cheerioweb.js"></script>`


### Online - as CDN
Point to this code through say `rawgit.com` like this:

`<script src="https://cdn.rawgit.com/netsi1964/cheerioweb/master/cheerioweb.js"></script>`


```
var root = cheerio.load(document.body.innerHTML)
```

This would give you a cheerio object named `root` containing a "cheerio view" of the HTML contained in the `body` element of your webpage.

## Look at Cheerio documentation
You should then be able to use all the features included in [Cheerio](https://cheerio.js.org/).

- Happy (web) coding! :-)
