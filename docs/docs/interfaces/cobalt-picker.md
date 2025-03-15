# `CobaltPicker`

Your download resulted in multiple items that can be downloaded. This can happen, for example, with Instagram posts or TikTok posts.

## `status`

Indicates the type of response. [Learn more.](cobalt-download)

**Type:** `'picker'`

## `audio` <Badge type="info" text="optional" />

Returned when an image slideshow (such as on TikTok) has a general background audio.

**Type:** `string`

## `audioFilename` <Badge type="info" text="optional" />

Cobalt-generated filename, returned if [`audio`](#audio) exists.

**Type:** `string`

## `picker`

Array of items containing the individual media.

**Type:** [`CobaltPickerItem`](cobalt-picker-item)`[]`