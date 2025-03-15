# `CobaltDownload`

Result of [`download`](../methods/download) method.

Depending on the `status` property, it can be a different type.

| `status`               | Type                                                  |
|------------------------|-------------------------------------------------------|
| `tunnel` or `redirect` | [`CobaltTunnelOrRedirect`](cobalt-tunnel-or-redirect) |
| `picker`               | [`CobaltPicker`](cobalt-picker)                       |
| `error`                | [`CobaltError`](cobalt-error)                         |