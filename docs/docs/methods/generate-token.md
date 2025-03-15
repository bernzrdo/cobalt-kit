# `generateToken`

Used for generating a new `Bearer` token, if enabled. By default, this method will automatically updates the [`auth`](../interfaces/cobalt-options#auth) property. [Learn more about Cobalt sessions](https://github.com/imputnet/cobalt/blob/main/docs/api.md#post-session).

```ts
generateToken(turnstileResponse: string, updateAuth = true): Promise<CobaltSession | CobaltError>
```

**Parameters:**
| Name | Type | Description |
|------|------|-------------|
| `turnstileResponse` | `string` | Cloudflare Turnstile response |
| `updateAuth` <Badge type="info" text="default: true" /> | `boolean` | Wether it updates the [`auth`](../interfaces/cobalt-options#auth) property |

**Returns:** `Promise<`[`CobaltSession`](../interfaces/cobalt-session)` | `[`CobaltError`](../interfaces/cobalt-error)`>`

**Example:**
```ts
let res = await cobalt.generateToken(turnstileResponse);
if(res.status == 'success') console.log(res.token);
```

