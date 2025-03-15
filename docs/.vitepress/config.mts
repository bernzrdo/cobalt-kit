import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "cobalt-kit",
    description: "Interact with the Cobalt API",
    base: '/cobalt-kit/',
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Get Stared', link: '/get-started' },
            { text: 'Documentation', link: '/docs/cobalt' }
        ],
        search: {
            provider: 'local'
        },
        sidebar: {
            '/docs/': [
                { text: 'Cobalt', items: [], collapsed: true, link: '/docs/cobalt' },
                {
                    text: 'Properties', link: '/docs/Cobalt.html#properties', collapsed: false,
                    items: [
                        { text: 'instance', link: '/docs/interfaces/cobalt-options#instance' },
                        { text: 'auth', link: '/docs/interfaces/cobalt-options#auth' },
                        { text: 'headers', link: '/docs/interfaces/cobalt-options#headers' },
                    ]
                },
                {
                    text: 'Methods', link: '/docs/Cobalt.html#methods', collapsed: false,
                    items: [
                        { text: 'download', link: '/docs/methods/download' },
                        { text: 'info', link: '/docs/methods/info' },
                        { text: 'generateToken', link: '/docs/methods/generate-token' },
                    ]
                },
                {
                    text: 'Interfaces', collapsed: false,
                    items: [
                        { text: 'CobaltOptions', link: '/docs/interfaces/cobalt-options' },
                        { text: 'CobaltDownloadOptions', link: '/docs/interfaces/cobalt-download-options' },
                        {
                            text: 'CobaltDownload', link: '/docs/interfaces/cobalt-download', collapsed: true,
                            items: [
                                { text: 'CobaltTunnelOrRedirect', link: '/docs/interfaces/cobalt-tunnel-or-redirect' },
                                {
                                    text: 'CobaltPicker', link: '/docs/interfaces/cobalt-picker', collapsed: true,
                                    items: [{ text: 'CobaltPickerItem', link: '/docs/interfaces/cobalt-picker-item' }]
                                },
                                {
                                    text: 'CobaltError', link: '/docs/interfaces/cobalt-error', collapsed: true,
                                    items: [
                                        {
                                            text: 'CobaltErrorInfo', link: '/docs/interfaces/cobalt-error-info', collapsed: true,
                                            items: [{ text: 'CobaltErrorContext', link: '/docs/interfaces/cobalt-error-context' }]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            text: 'CobaltInfo', link: '/docs/interfaces/cobalt-info', collapsed: true,
                            items: [
                                { text: 'CobaltInstanceInfo', link: '/docs/interfaces/cobalt-instance-info' },
                                { text: 'CobaltGitInfo', link: '/docs/interfaces/cobalt-git-info' }
                            ]
                        },
                        { text: 'CobaltSession', link: '/docs/interfaces/cobalt-session' }
                    ]
                },
                {
                    text: 'Extra Information', collapsed: false,
                    items: [
                        { text: 'About Headers', link: '/docs/extra/about-headers' }
                    ]
                }
            ]
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/bernzrdo/cobalt-kit' },
            { icon: 'npm', link: 'https://npmjs.com/package/cobalt-kit' }
        ]
    }
})
