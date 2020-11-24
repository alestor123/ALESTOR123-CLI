var React = require('react'),
{Box} = require('ink'),
SelectInput = require('ink-select-input').default,
open = require('open'),
pkg = require('./config.json'),
handleSelect = item => {
	if (item.url) {
		open(item.url);
	} else if (item.action) {
		item.action();
	}
},
createList = items => items.map(item => ({...item, key: item.label || item.url})),
listItems = createList([
	{
		label: 'GitHub',
        url: 'https://github.com/' + pkg.github
	},
	{
		label: 'Twitter',
		url: 'https://twitter.com/'+ pkg.twitter
	},
	{
		label: 'Web Page',
		url: pkg.webpage
	},
	{
		label: 'Buy Me a Coffee',
		url: 'https://buymeacoffee.com/'+ pkg.buymeCoffee
	},
	{
		label: '---------'
	},
	{
		label: 'Quit',
		action() {
			process.exit(); // eslint-disable-line unicorn/no-process-exit
		}
	}
]);

module.exports = () => (
	<Box flexDirection="column">
		<Box marginBottom={1}/>
		<SelectInput items={listItems} onSelect={handleSelect}/>
	</Box>
);