# `CobaltDownloadOptions`

Options for the [`download`](../methods/download) method.

## `headers`

Modify the [request headers](https://developer.mozilla.org/en-US/docs/Glossary/Request_header). Read more on [Headers](../extra/about-headers).

**Type:** `HeadersInit`

**Example:**
```ts
{
    'User-Agent': 'Example-Bot',
    'Cookie': 'id=examplebot'
}
```

## `videoQuality`

**Request a preferred video quality.** If preferred video quality isn't available, next best is picked instead.

::: tip
`720` quality is recommended for phones.
:::

**Type:** `'144'`, `'240'`, `'360'`, `'480'`, `'720'`, `'1080'`, `'1440'`, `'2160'`, `'4320'` or `'max'`

**Default:** `'1080'`

## `audioFormat`

**Request an audio format.** All formats but `best` are converted from the source format, there will be some quality loss. When `best` format is selected, the audio is kept in its original format whenever possible.

**Type:** `'best'`, `'mp3'`, `'ogg'`, `'wav'` or `'opus'`

**Default:** `'mp3'`

## `audioBitrate`

**Specifies the bitrate to use for the audio.** Applies only to audio conversion. Bitrate is applied only when converting audio to a lossy format.

::: warning
- Cobalt can't improve the source audio quality, so choosing a bitrate over 128kbps may inflate the file size with no audible difference.
- Perceived quality may vary by format.
:::

**Type:** `'320'`, `'256'`, `'128'`, `'96'`, `'64'` or `'8'`

**Default:** `'128'`

## `filenameStyle`

**Modify the output filename.** Doesn't affect the filename of the URL, just the [`filename`](cobalt-tunnel-or-redirect#filename) property.

| Mode      | Video File Example                                  | Audio File Example                                    |
|-----------|-----------------------------------------------------|-------------------------------------------------------|
| `classic` | youtube_dQw4w9WgXcQ_1920x1080_h264.mp4              | youtube_dQw4w9WgXcQ_audio.mp3                         |
| `pretty`  | Video Title (1080p, h264).mp4                       | Audio Title - Audio Author.mp3                        |
| `basic`   | Video Title (1080p, h264, youtube).mp4              | Audio Title - Audio Author (youtube).mp3              |
| `nerdy`   | Video Title (1080p, h264, youtube, dQw4w9WgXcQ).mp4 | Audio Title - Audio Author (youtube, dQw4w9WgXcQ).mp3 |

**Type:** `'classic'`, `'pretty'`, `'basic'` or `'nerdy'`

**Default:** `'classic'`

## `downloadMode`

`audio` downloads only the audio, `mute` skips the audio track in videos.

**Type:** `'auto'`, `'audio'` or `'mute'`

**Default:** `'classic'`

## `youtubeVideoCodec`

When downloading from YouTube, request a specific codec and container.

| Codec  | File Type | Description                                                     |
|--------|-----------|-----------------------------------------------------------------|
| `h264` | mp4       | Best compatibility, average quality. Max quality is 1080p.      |
| `av1`  | webm      | Best quality and efficiency. Supports 8k & HDR.                 |
| `vp9`  | webm      | Same quality as av1, but file is ~2x bigger. Supports 4k & HDR. |

`av1` and `vp9` aren't as widely supported as `h264`.

If `av1` or `vp9` isn't available, `h264` is used instead.

::: tip
`h264` is recommended for phones.
:::

**Type:** `'h264'`, `'av1'` or `'vp9'`

**Default:** `'h264'`

## `youtubeDubLang` <Badge type="warning" text="beta" />

Specifies the language of audio to download when a YouTube video is dubbed. Cobalt will use a dubbed audio track for selected language if it's available. If not, original will be used instead.

**Example:** `'en'`, `'ru'`, `'cs'`, `'ja'`, `'es-US'`, etc.

**Default:** `undefined`

## `alwaysProxy`

Tunnels all downloads through the processing server, even when not necessary.

**Type:** `boolean`

**Default:** `false`

## `disableMetadata`

**Disables file metadata when set to `true`.** Title, artist, and other info will not be added to the file.

**Type:** `boolean`

**Default:** `false`

## `tiktokFullAudio`

Enables download of original sound used in a TikTok video. Cobalt will download the sound from the video without any changes by the post's author.

**Type:** `boolean`

**Default:** `false`

## `tiktokH265`

**Allows `h265` videos when enabled.** Applies to TikTok & Xiaohongshu. Allows downloading videos in higher quality at cost of compatibility.

**Type:** `boolean`

**Default:** `false`

## `twitterGif`

Changes whether Twitter GIFs are converted to .gif

::: warning
GIF conversion is inefficient, converted file may be obnoxiously big and low quality.
:::

**Type:** `boolean`

**Default:** `true`

## `youtubeHLS` <Badge type="warning" text="beta" />

Specifies whether to use HLS for downloading video or audio from YouTube. Files download faster and are less prone to errors or getting abruptly cut off.

::: warning
- Only h264 and vp9 codecs are available in this mode.
- Original audio codec is aac, it's re-encoded for compatibility, audio quality may be slightly worse than the non-HLS counterpart.
:::

**Type:** `boolean`

**Default:** `false`
