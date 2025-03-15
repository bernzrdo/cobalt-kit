# `CobaltOptions`

Options for the [`Cobalt`](../cobalt.md) constructor.

::: danger
It's **highly recommended** that you save your API key (and maybe your instance URL) somewhere private. **We are not responsible if your API key gets compromised.**
:::

## `instance`

Indicates the API Instance URL.

::: warning
Hosted API instances (such as `api.cobalt.tools`) use bot protection and are **not** intended to be used in other projects without explicit permission. If you want to access the Cobalt API reliably, you should [host your own instance](https://github.com/imputnet/cobalt/blob/main/docs/run-an-instance.md) or ask an instance owner for access.
:::

**Type:** `string`

**Example:** `'https://api.cobalt.tools/'`

## `auth`

An API instance may be configured to require you to authenticate yourself. Check the
[Cobalt API Docs](https://github.com/imputnet/cobalt/blob/main/docs/api.md#authentication) to learn more about this.

::: info
Internally sets an `Authorization` request header. Read more on [Headers](../extra/about-headers).
:::

**Type:**
| Name     | Type                      |
|----------|---------------------------|
| `scheme` | `'Api-Key'` or `'Bearer'` |
| `token`  | `string`                  |

**Example:**
```ts
{
    scheme: 'Api-Key',
    token: 'aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee'
}
```

## `headers` <Badge type="info" text="optional" />

Modify the [request headers](https://developer.mozilla.org/en-US/docs/Glossary/Request_header). Read more on [Headers](../extra/about-headers).

**Type:** `HeadersInit`

**Example:**
```ts
{
    'User-Agent': 'Example-Bot',
    'Cookie': 'id=examplebot'
}
```
