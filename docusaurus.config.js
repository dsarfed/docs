module.exports = {
  title: 'Uniswap',
  tagline: 'Documentation and Guides',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Uniswap', // Usually your GitHub org/user name.
  projectName: 'Uniswap-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Uniswap Documentation',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/concepts',
          label: 'Concepts',
          position: 'left',
          items: [
            {
              label: 'V3',
              href: '/docs/concepts'
            },
            {
              label: 'V2',
              href: '/docs/V2/concepts'
            },
            {
              label: 'V1',
              href: '/docs/V1/concepts'
            }
          ]
        },
        {
          to: 'docs/guides', 
          label: 'Guides', 
          position: 'left',
          items: [
            {
              label: 'V3',
              href: '/docs/guides'
            },
            {
              label: 'V2',
              href: '/docs/V2/guides'
            },
            {
              label: 'V1',
              href: '/docs/V1/guides'
            }
          ]
        },
        {
          to: 'docs/reference',
          label: 'Reference',
          position: 'left',
          items: [
            {
              label: 'V3',
              href: '/docs/reference'
            },
            {
              label: 'V2',
              href: '/docs/V2/reference'
            },
            {
              label: 'V1',
              href: '/docs/V1/reference'
            }
          ]
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: true,
          dropdownItemsAfter: [
            {
              to: '/docs_versions',
            },
          ],
        },
        {
          href: 'https://github.com/uniswap/uniswap-docs',
          label: 'GitHub',
          position: 'right'
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          includeCurrentVersion: false,
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/',
          routeBasePath: '/docs',
          //Version: 'v2',
          // lastVersion: 'current',
          // versions: {
            
          //   Example configuration: 
          //   'v3': {
          //     label: 'Android SDK v2.0.0 (WIP)',
          //     path: 'android-2.0.0',
          //   },
          //   'v2': {
          //     label: 'Android SDK v2.0.0 (WIP)',
          //     path: 'android-2.0.0',
          //   },
          //   'v1': {
          //     label: 'Android SDK v1.0.0',
          //     path: 'android-1.0.0',
          //   },
            
          // },
        },

        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
 ],
};