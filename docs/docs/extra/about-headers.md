# About Headers

**Headers can be overwritten if specified elsewhere.** 

Here's the priority from most important to least:

1. Method [`headers`](../interfaces/cobalt-download-options) property.
2. Instance [`headers`](../interfaces/cobalt-options) property.
3. Instance [`auth`](../interfaces/cobalt-options) property.
4. Default headers.

This means that, for example, an `Authorization` header set on `download` will overwrite the `auth` property.

```ts
let cobalt = new Cobalt({
    instance: 'https://cobalt.instance.example/',
    auth: { // [!code --]
        scheme: 'Api-Key', // [!code --]
        token: 'api-key-1' // [!code --]
    } // [!code --]
});

await cobalt.download('https://www.youtube.com/watch?v=VUFr92i5jkA', {
    headers: { 'Authorization': 'Api-Key api-key-2' } // [!code ++]
});

// Final Authorization header: "Api-Key api-key-2"
```