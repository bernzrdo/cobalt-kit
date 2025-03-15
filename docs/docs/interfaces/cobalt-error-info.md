# `CobaltErrorInfo`

Contains information about the error.

## `code`

Machine-readable error code explaining the failure reason.

::: tip
If you're looking for human-readable messages of error codes, 
[you can get them here](https://github.com/imputnet/cobalt/blob/main/web/i18n/en/error.json).
:::

**Type:** `string`

## `context` <Badge type="info" text="optional" />

Container for providing more context.

**Type:** [`CobaltErrorContext`](cobalt-error-context)