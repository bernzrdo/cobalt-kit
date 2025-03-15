# `CobaltTunnelOrRedirect`

Your download resulted in either a tunnel for the Cobalt download or a redirect to the source URL.

## `status`

Indicates the type of response. [Learn more.](cobalt-download)

**Type:** `'tunnel'` or `'redirect'`

## `url`

- If `tunnel`, URL for the Cobalt tunnel.
- If `redirect`, URL for the redirect to an external link.

**Type:** `string`

## `filename`

Cobalt-generated filename for the file being downloaded.

**Type:** `string`