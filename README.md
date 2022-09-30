# Jellyfish Flowdock Plugin

Provides contracts needed for a Flowdock historical archive.

# Usage

Below is an example how to use this library:

```js
import { defaultPlugin } from '@balena/jellyfish-plugin-default';
import { flowdockPlugin } from '@balena/jellyfish-plugin-flowdock';
import { PluginManager } from '@balena/jellyfish-worker';

// Load contracts from this plugin
const pluginManager = new PluginManager([defaultPlugin(), flowdockPlugin()]);
const contracts = pluginManager.getCards();
console.dir(contracts);
```
