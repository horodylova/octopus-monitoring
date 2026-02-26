/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    '@progress/kendo-react-animation',
    '@progress/kendo-react-buttons',
    '@progress/kendo-react-charts',
    '@progress/kendo-react-common',
    '@progress/kendo-react-conversational-ui',
    '@progress/kendo-react-data-tools',
    '@progress/kendo-react-dateinputs',
    '@progress/kendo-react-dialogs',
    '@progress/kendo-react-dropdowns',
    '@progress/kendo-react-editor',
    '@progress/kendo-react-excel-export',
    '@progress/kendo-react-form',
    '@progress/kendo-react-gantt',
    '@progress/kendo-react-gauges',
    '@progress/kendo-react-grid',
    '@progress/kendo-react-indicators',
    '@progress/kendo-react-inputs',
    '@progress/kendo-react-intl',
    '@progress/kendo-react-labels',
    '@progress/kendo-react-layout',
    '@progress/kendo-react-listbox',
    '@progress/kendo-react-listview',
    '@progress/kendo-react-map',
    '@progress/kendo-react-notification',
    '@progress/kendo-react-orgchart',
    '@progress/kendo-react-pdf',
    '@progress/kendo-react-pdf-viewer',
    '@progress/kendo-react-pivotgrid',
    '@progress/kendo-react-popup',
    '@progress/kendo-react-progressbars',
    '@progress/kendo-react-ripple',
    '@progress/kendo-react-scheduler',
    '@progress/kendo-react-scrollview',
    '@progress/kendo-react-sortable',
    '@progress/kendo-react-spreadsheet',
    '@progress/kendo-react-taskboard',
    '@progress/kendo-react-tooltip',
    '@progress/kendo-react-treelist',
    '@progress/kendo-react-treeview',
    '@progress/kendo-react-upload',
    '@progress/kendo-data-query',
    '@progress/kendo-drawing',
    '@progress/kendo-licensing',
    '@progress/kendo-svg-icons'
  ],
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, no-cache, must-revalidate, proxy-revalidate',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
