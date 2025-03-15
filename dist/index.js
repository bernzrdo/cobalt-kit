"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Cobalt_instance;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cobalt = void 0;
function validateOptions(options) {
    if (options.videoQuality && !['144', '240', '360', '480', '720', '1080', '1440', '2160', '4320', 'max'].includes(options.videoQuality))
        throw new Error(`${options.videoQuality} is not a valid "videoQuality" value.`);
    if (options.audioFormat && !['best', 'mp3', 'ogg', 'wav', 'opus'].includes(options.audioFormat))
        throw new Error(`${options.audioFormat} is not a valid "audioFormat" value.`);
    if (options.audioBitrate && !['320', '256', '128', '96', '64', '8'].includes(options.audioBitrate))
        throw new Error(`${options.audioBitrate} is not a valid "audioBitrate" value.`);
    if (options.filenameStyle && !['classic', 'pretty', 'basic', 'nerdy'].includes(options.filenameStyle))
        throw new Error(`${options.filenameStyle} is not a valid "filenameStyle" value.`);
    if (options.downloadMode && !['auto', 'audio', 'mute'].includes(options.downloadMode))
        throw new Error(`${options.downloadMode} is not a valid "downloadMode" value.`);
    if (options.youtubeVideoCodec && !['h264', 'av1', 'vp9'].includes(options.youtubeVideoCodec))
        throw new Error(`${options.youtubeVideoCodec} is not a valid "youtubeVideoCodec" value.`);
    if (options.youtubeDubLang && typeof options.youtubeDubLang != 'string')
        throw new Error(`${options.youtubeDubLang} is not a valid "youtubeDubLang" value.`);
    ;
    if (options.alwaysProxy && typeof options.alwaysProxy != 'boolean')
        throw new Error(`${options.alwaysProxy} is not a valid "alwaysProxy" value.`);
    ;
    if (options.disableMetadata && typeof options.disableMetadata != 'boolean')
        throw new Error(`${options.disableMetadata} is not a valid "disableMetadata" value.`);
    ;
    if (options.tiktokFullAudio && typeof options.tiktokFullAudio != 'boolean')
        throw new Error(`${options.tiktokFullAudio} is not a valid "tiktokFullAudio" value.`);
    ;
    if (options.tiktokH265 && typeof options.tiktokH265 != 'boolean')
        throw new Error(`${options.tiktokH265} is not a valid "tiktokH265" value.`);
    ;
    if (options.twitterGif && typeof options.twitterGif != 'boolean')
        throw new Error(`${options.twitterGif} is not a valid "twitterGif" value.`);
    ;
    if (options.youtubeHLS && typeof options.youtubeHLS != 'boolean')
        throw new Error(`${options.youtubeHLS} is not a valid "youtubeHLS" value.`);
    ;
}
class Cobalt {
    constructor(options) {
        _Cobalt_instance.set(this, void 0);
        this.instance = options.instance;
        this.auth = options.auth;
        this.headers = options.headers;
    }
    get instance() {
        return __classPrivateFieldGet(this, _Cobalt_instance, "f").href;
    }
    set instance(url) {
        __classPrivateFieldSet(this, _Cobalt_instance, new URL(url), "f");
        __classPrivateFieldGet(this, _Cobalt_instance, "f").hash = '';
        __classPrivateFieldGet(this, _Cobalt_instance, "f").pathname = '';
        __classPrivateFieldGet(this, _Cobalt_instance, "f").search = '';
    }
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
    download(url, options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (options)
                validateOptions(options);
            let headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            };
            if (this.auth)
                headers['Authorization'] = `${this.auth.scheme} ${this.auth.token}`;
            headers = Object.assign(Object.assign(Object.assign({}, headers), this.headers), options === null || options === void 0 ? void 0 : options.headers);
            const res = yield fetch(__classPrivateFieldGet(this, _Cobalt_instance, "f").href, {
                method: 'POST',
                headers,
                body: JSON.stringify(Object.assign({ url: new URL(url).href }, options))
            });
            return yield res.json();
        });
    }
    /** Gets information about the instance that is being used. */
    info() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield fetch(__classPrivateFieldGet(this, _Cobalt_instance, "f").href);
            return yield res.json();
        });
    }
    /**
     * Used for generating a new `Bearer` token, if enabled.
     *
     * @param turnstileResponse Cloudflare Turnstile response
     * @param updateAuth Wether it updates the `auth` property. Defaults to `true`.
     * @returns Info about the session or an error
     */
    generateToken(turnstileResponse_1) {
        return __awaiter(this, arguments, void 0, function* (turnstileResponse, updateAuth = true) {
            const res = yield fetch(__classPrivateFieldGet(this, _Cobalt_instance, "f").href + 'session', {
                method: 'POST',
                headers: { 'cf-turnstile-response': turnstileResponse }
            });
            const data = yield res.json();
            if (data.status == 'error')
                return data;
            data.status = 'success';
            if (updateAuth)
                this.auth = {
                    scheme: 'Bearer',
                    token: data.token
                };
            return data;
        });
    }
}
exports.Cobalt = Cobalt;
_Cobalt_instance = new WeakMap();
