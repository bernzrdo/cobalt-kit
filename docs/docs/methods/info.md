# `info`

Get information about the instance that is being used.

```ts
info(): Promise<CobaltInfo>
```

**Returns:** `Promise<`[`CobaltInfo`](../interfaces/cobalt-info.md)`>`

**Example:**
```ts
let info = await cobalt.info();
console.log(`Cobalt v${info.cobalt.version}`);
```