# `CobaltSession`

Information about the generated session. Result of [`generateToken`](../methods/generate-token) method.

## `status`

Indicates the type of response.

**Type:** `'success'`

## `token`

A `Bearer` token used for later request authentication.

**Type:** `string`

## `exp`

Number in seconds indicating the token lifetime.

**Type:** `number`