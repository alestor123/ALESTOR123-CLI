#!/usr/bin/env node

var importJsx = require('import-jsx'),
React = require('react'),
{render} = require('ink'),
pkgjson = require('./package.json'),
pkg = require('./config.json'),
showBanner = require('node-banner'),
ui = importJsx('./ui'),
args = process.argv.slice(2),
showHelpMessage = () => console.log(` Usage $ ${pkgjson.name} `);
if (args.length) { // eslint-disable-line unicorn/explicit-length-check
	// Show up help.
	if (['--help', '-h'].includes(args[0])) {
		showHelpMessage();
	} else {
		console.warn(' Invalid usage');
	}
  return;
}

// IIFE
(async () => {
	await showBanner(pkg.name, pkg.description);
	// Renders the React component within terminal premises
	render(React.createElement(ui));
})();