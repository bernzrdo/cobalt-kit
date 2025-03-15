# `Cobalt`

The main class that interacts with Cobalt.
```ts
let cobalt = new Cobalt({
    instance: 'https://cobalt.instance.example/',
    auth: {
        scheme: 'Api-Key',
        token: 'aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee'
    },
    headers: {
        'User-Agent': 'Example-Bot'
    }
});
```

## Constructor

The constructor has a single `options` parameter that uses the [`CobaltOptions`](interfaces/cobalt-options.md) interface.

```ts
new Cobalt(options: CobaltOptions)
```

## Properties

Every property of [`CobaltOptions`](interfaces/cobalt-options.md) has a matching property in this class. This means that you can read and edit any of the options at any time.

```ts
let cobalt = new Cobalt({
    instance: 'https://cobalt.instance.example/',
    auth: {
        scheme: 'Api-Key',
        token: 'aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee' // [!code highlight]
    }
});

cobalt.auth.token = 'eeeeeeee-dddd-cccc-bbbb-aaaaaaaaaaaa'; // [!code highlight]
```

## Methods

- [`download`](methods/download) - Download media using Cobalt.
- [`info`](methods/info) - Get information about the instance that is being used.
- [`generateToken`](methods/generate-token) - Used for generating a new `Bearer` token, if enabled.