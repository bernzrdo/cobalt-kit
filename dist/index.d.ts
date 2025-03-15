export interface CobaltOptions {
    /**
     * **API Instance URL**
     * @example 'https://api.cobalt.tools/'
     */
    instance: string;
    /**
     * **Authorization Header**
     *
     * An API instance may be configured to require you to authenticate yourself.
     *
     * [Cobalt API Reference](https://github.com/imputnet/cobalt/blob/main/docs/api.md#authentication)
     */
    auth?: {
        scheme: 'Api-Key' | 'Bearer';
        token: string;
    };
    /**
     * **Request Headers**
     *
     * Modify the request headers.
     *
     * Headers can be overwritten if specified elsewhere.
     *
     * Here's the priority from most important to least:
     * 1. Method headers property
     * 2. **Instance headers property**
     * 3. `auth` property
     * 4. Default headers
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Glossary/Request_header)
     */
    headers?: HeadersInit;
}
export interface CobaltDownloadOptions {
    /**
     * **Request Headers**
     *
     * Modify the request headers.
     *
     * Headers can be overwritten if specified elsewhere.
     *
     * Here's the priority from most important to least:
     * 1. **Method headers property**
     * 2. Instance headers property
     * 3. `auth` property
     * 4. Default headers
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Glossary/Request_header)
     */
    headers?: CobaltOptions['headers'];
    /**
     * **Video Quality**
     *
     * If preferred video quality isn't available, next best is picked instead.
     *
     * `720` quality is recommended for phones.
     *
     * @default '1080'
     */
    videoQuality?: '144' | '240' | '360' | '480' | '720' | '1080' | '1440' | '2160' | '4320' | 'max';
    /**
     * **Audio Format**
     *
     * All formats but `best` are converted from the source format, there will be some quality loss.
     *
     * When `best` format is selected, the audio is kept in its original format whenever possible.
     *
     * @default 'mp3'
     */
    audioFormat?: 'best' | 'mp3' | 'ogg' | 'wav' | 'opus';
    /**
     * **Audio Bitrate**
     *
     * Specifies the bitrate to use for the audio.
     *
     * Bitrate is applied only when converting audio to a lossy format.
     *
     * Cobalt can't improve the source audio quality, so choosing a bitrate over 128kbps may inflate the file size with no audible difference.
     *
     * Perceived quality may vary by format.
     *
     * @default '128'
     */
    audioBitrate?: '320' | '256' | '128' | '96' | '64' | '8';
    /**
     * **Filename Style**
     *
     * Modify the output filename.
     *
     * Doesn't affect the filename of the URL, just the `filename` property.
     *
     * | Mode      | Video File Example                                  | Audio File Example                                    |
     * |-----------|-----------------------------------------------------|-------------------------------------------------------|
     * | `classic` | youtube_dQw4w9WgXcQ_1920x1080_h264.mp4              | youtube_dQw4w9WgXcQ_audio.mp3                         |
     * | `pretty`  | Video Title (1080p, h264).mp4                       | Audio Title - Audio Author.mp3                        |
     * | `basic`   | Video Title (1080p, h264, youtube).mp4              | Audio Title - Audio Author (youtube).mp3              |
     * | `nerdy`   | Video Title (1080p, h264, youtube, dQw4w9WgXcQ).mp4 | Audio Title - Audio Author (youtube, dQw4w9WgXcQ).mp3 |
     *
     * @default 'classic'
     */
    filenameStyle?: 'classic' | 'pretty' | 'basic' | 'nerdy';
    /**
     * **Download Mode**
     *
     * `audio` downloads only the audio, `mute` skips the audio track in videos.
     *
     * @default 'auto'
     */
    downloadMode?: 'auto' | 'audio' | 'mute';
    /**
     * **YouTube Codec and Container**
     *
     * | Codec  | File Type | Description                                                     |
     * |--------|-----------|-----------------------------------------------------------------|
     * | `h264` | mp4       | Best compatibility, average quality. Max quality is 1080p.      |
     * | `av1`  | webm      | Best quality and efficiency. Supports 8k & HDR.                 |
     * | `vp9`  | webm      | Same quality as av1, but file is ~2x bigger. Supports 4k & HDR. |
     *
     * `av1` and `vp9` aren't as widely supported as `h264`.
     *
     * If `av1` or `vp9` isn't available, `h264` is used instead.
     *
     * `h264` is recommended for phones.
     *
     * @default 'h264'
     */
    youtubeVideoCodec?: 'h264' | 'av1' | 'vp9';
    /**
     * **YouTube Audio Track** (Beta)
     *
     * Specifies the language of audio to download when a YouTube video is dubbed.
     *
     * Cobalt will use a dubbed audio track for selected language if it's available.
     *
     * If not, original will be used instead.
     *
     * @example 'en', 'ru', 'cs', 'ja', 'es-US'
     * @experimental
     * @default undefined
     */
    youtubeDubLang?: string;
    /**
     * **Always Proxy**
     *
     * Tunnels all downloads through the processing server, even when not necessary.
     *
     * @default false
     */
    alwaysProxy?: boolean;
    /**
     * **Disable File Metadata**
     *
     * Disables file metadata when set to `true`.
     *
     * Title, artist, and other info will not be added to the file.
     *
     * @default false
     */
    disableMetadata?: boolean;
    /**
     * **TikTok Full Audio**
     *
     * Enables download of original sound used in a TikTok video.
     *
     * Cobalt will download the sound from the video without any changes by the post's author.
     *
     * @default false
     */
    tiktokFullAudio?: boolean;
    /**
     * **High Efficiency Video Codec**
     *
     * Allows `h265` videos when enabled. Applies to TikTok & Xiaohongshu.
     *
     * Allows downloading videos in higher quality at cost of compatibility.
     *
     * @default false
     */
    tiktokH265?: boolean;
    /**
     * **Twitter: Convert looping videos to GIF**
     *
     * Changes whether Twitter GIFs are converted to .gif
     *
     * GIF conversion is inefficient, converted file may be obnoxiously big and low quality.
     *
     * @default true
     */
    twitterGif?: boolean;
    /**
     * **YouTube HLS Formats** (Beta)
     *
     * Specifies whether to use HLS for downloading video or audio from YouTube.
     *
     * Files download faster and are less prone to errors or getting abruptly cut off.
     *
     * Only h264 and vp9 codecs are available in this mode.
     *
     * Original audio codec is aac, it's re-encoded for compatibility, audio quality may be slightly worse than the non-HLS counterpart.
     *
     * @experimental This option is experimental, it may go away or change in the future.
     * @default false
     */
    youtubeHLS?: boolean;
}
export type CobaltDownload = CobaltTunnelOrRedirect | CobaltPicker | CobaltError;
export interface CobaltTunnelOrRedirect {
    status: 'tunnel' | 'redirect';
    /**
     * If `tunnel`, URL for the Cobalt tunnel.
     *
     * If `redirect`, URL for the redirect to an external link.
     */
    url: string;
    /** Cobalt-generated filename for the file being downloaded */
    filename: string;
}
export interface CobaltPicker {
    status: 'picker';
    /** Returned when an image slideshow (such as on TikTok) has a general background audio */
    audio?: string;
    /** Cobalt-generated filename, returned if `audio` exists */
    audioFilename?: string;
    /** Array of items containing the individual media */
    picker: CobaltPickerItem[];
}
export interface CobaltPickerItem {
    type: 'photo' | 'video' | 'gif';
    /** URL of the item */
    url: string;
    /** Thumbnail URL of the item */
    thumb?: string;
}
export interface CobaltError {
    status: 'error';
    /** Contains information about the error */
    error: CobaltErrorInfo;
}
export interface CobaltErrorInfo {
    /** Machine-readable error code explaining the failure reason */
    code: string;
    /** Container for providing more context */
    context?: CobaltErrorContext;
}
export interface CobaltErrorContext {
    /** Stating which service was being downloaded from */
    service?: string;
    /** Number providing the rate limit maximum number of requests, or maximum downloadable video duration */
    limit?: number;
}
export interface CobaltInfo {
    /** Information about the Cobalt instance */
    cobalt: CobaltInstanceInfo;
    /** Information about the codebase that is currently running */
    git: CobaltGitInfo;
}
export interface CobaltInstanceInfo {
    /** Current version */
    version: string;
    /** Server URL */
    url: string;
    /** Server start time in Unix milliseconds */
    startTime: string;
    /** Maximum downloadable video length in seconds */
    durationLimit: number;
    /** Array of services which this instance supports */
    services: string[];
}
export interface CobaltGitInfo {
    /** Commit hash */
    commit: string;
    /** Git branch */
    branch: string;
    /** Git remote */
    remote: string;
}
export interface CobaltSession {
    status: 'success';
    /** A `Bearer` token used for later request authentication */
    token: string;
    /** Number in seconds indicating the token lifetime */
    exp: number;
}
export declare class Cobalt {
    #private;
    auth: CobaltOptions['auth'];
    headers: CobaltOptions['headers'];
    constructor(options: CobaltOptions);
    get instance(): CobaltOptions['instance'];
    set instance(url: CobaltOptions['instance']);
    /**
     * Download media using Cobalt.
     * @param url URL to download
     * @param options Options for the download
     * @returns Result of download, depending on the `status`:
     *
     * | `status`       | Description                                        |
     * |----------------|----------------------------------------------------|
     * | `error`        | Something went wrong                               |
     * | `picker`       | We have multiple items to choose from              |
     * | `redirect`     | You are being redirected to the direct service URL |
     * | `tunnel`       | Cobalt is proxying the download for you            |
     *
     */
    download(url: string, options?: CobaltDownloadOptions): Promise<CobaltDownload>;
    /** Gets information about the instance that is being used. */
    info(): Promise<CobaltInfo>;
    /**
     * Used for generating a new `Bearer` token, if enabled.
     *
     * @param turnstileResponse Cloudflare Turnstile response
     * @param updateAuth Wether it updates the `auth` property. Defaults to `true`.
     * @returns Info about the session or an error
     */
    generateToken(turnstileResponse: string, updateAuth?: boolean): Promise<CobaltSession | CobaltError>;
}
