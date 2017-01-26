require('./check-versions')()
var config = require('../config')
if (!process.env.NODE_ENV) process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var webpack = require('webpack')
var opn = require('opn')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')
var og = require('open-graph')
var request = require('request')
var cheerio = require('cheerio')
var url = require('url')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
var compiler = webpack(webpackConfig)

app.use(bodyParser.json());

var devMiddleware = require('webpack-dev-middleware')(compiler, {
	publicPath: webpackConfig.output.publicPath,
	quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
	log: () => { }
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
	compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
		hotMiddleware.publish({ action: 'reload' })
		cb()
	})
})

app.post('/api/get', function (req, res) {
	res.setHeader('Content-Type', 'application/json');

	var _url = req.body.url;
	var _response = {
		'title': null,
		'type': null,
		'image': null,
		'url': null,
		'audio': null,
		'description': null,
		'video': null,
		'site_name': null,
		'favicon': null,
		'keywords': null
	}

	request(_url, function (error, response, body) {
		console.log("errror", error);
		if (error)
			return res.status(500).send({ error: 'Something failed!' });

		//console.log(body);
		var $ = cheerio.load(body);
		var namespace = "og";

		_response['title'] = $('title').text();
		_response['description'] = $('meta[name="description" i]').attr('content');
		_response['favicon'] = 'https://www.google.com/s2/favicons?domain=' + _url;
		_response['keywords'] = $('meta[name="keywords" i]').attr('content');

		var metaTags = $('meta');

		metaTags.each(function () {
			var element = $(this), propertyAttr = element.attr('property');
			if (!propertyAttr || propertyAttr.substring(0, namespace.length) !== namespace) return;
			var propertyName = propertyAttr.replace('og:', '');
			_response[propertyName] = element.attr('content');
		});
		_response['url'] = url.parse(_url);
		res.send(JSON.stringify(_response));
	});
});

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
	var options = proxyTable[context]
	if (typeof options === 'string') {
		options = { target: options }
	}
	app.use(proxyMiddleware(context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))



var uri = 'http://localhost:' + port

devMiddleware.waitUntilValid(function () {
	console.log('> Listening at ' + uri + '\n')
})

module.exports = app.listen(port, function (err) {
	if (err) {
		console.log(err)
		return
	}

	// when env is testing, don't need open it
	if (process.env.NODE_ENV !== 'testing') {
		opn(uri)
	}
})
