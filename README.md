# Jellyfish Flowdock Plugin

Provides a sync integration for Flowdock.

# Usage

Below is an example how to use this library:

```js
import { cardMixins } from '@balena/jellyfish-core';
import { FlowdockPlugin } from '@balena/jellyfish-plugin-flowdock';

const plugin = new FlowdockPlugin();

// Load cards from this plugin, can use custom mixins
const cards = plugin.getCards(context, cardMixins);
console.dir(cards);
```

# Documentation

[![Publish Documentation](https://github.com/product-os/jellyfish-plugin-flowdock/actions/workflows/publish-docs.yml/badge.svg)](https://github.com/product-os/jellyfish-plugin-flowdock/actions/workflows/publish-docs.yml)

Visit the website for complete documentation: https://product-os.github.io/jellyfish-plugin-flowdock

# Testing

Unit tests can be easily run with the command `npm test`.

The integration tests require a postgres DB and redis server. The simplest way to run the tests locally is with docker-compose.

```
docker-compose -f docker-compose.test.yml -f docker-compose.yml up --build --exit-code-from=sut
```