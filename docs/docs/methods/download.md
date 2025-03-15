# `download`

Download media using Cobalt.

```ts
download(url: string, options: CobaltDownloadOptions): Promise<CobaltDownload>
```

**Parameters:**
| Name | Type | Description |
|------|------|-------------|
| `url` | `string` | URL to download |
| `options` <Badge type="info" text="optional" /> | [`CobaltDownloadOptions`](../interfaces//cobalt-download-options.md) | Options for the download |

**Returns:** `Promise<`[`CobaltDownload`](../interfaces/cobalt-download.md)`>`

**Example:**
```ts
let res = await cobalt.download('https://www.youtube.com/watch?v=VUFr92i5jkA', {
    disableMetadata: true,
    filenameStyle: 'basic',
    downloadMode: 'audio'
});

if(res.status == 'tunnel' || res.status == 'redirect'){
    console.log(res.url);
}

if(res.status == 'picker'){
    for(let item of res.picker){
        console.log(item.url);
    }
}

if(res.status == 'error'){
    console.error(res.error.code);
}
```