# Jellyfish Flowdock Plugin

Provides a sync integration for Flowdock.

# Usage

Below is an example how to use this library:

```js
const coreMixins = require('@balena/jellyfish-core/lib/cards/mixins')
const FlowdockPlugin = require('@balena/jellyfish-plugin-flowdock')

const plugin = new FlowdockPlugin()

// Load cards from this plugin, can use custom mixins
const cards = plugin.getCards(context, coreMixins)
console.dir(cards)
```

# Documentation

[![Publish Documentation](https://github.com/product-os/jellyfish-plugin-flowdock/actions/workflows/publish-docs.yml/badge.svg)](https://github.com/product-os/jellyfish-plugin-flowdock/actions/workflows/publish-docs.yml)

Visit the website for complete documentation: https://product-os.github.io/jellyfish-plugin-flowdock
