const { name, version } = require('./package.json');

const library = 'AntdLowcode';

module.exports = {
  sourceMap: false,
  alias: {
    '@': './src',
    lowcode: './lowcode',
  },
  plugins: [
    [
      '@alifd/build-plugin-lowcode',
      {
        noParse: true,
        engineScope: '@alilc',
        library,
        staticResources: {
          engineCoreCssUrl:
            'https://alifd.alicdn.com/npm/@alilc/lowcode-engine@1.0.14/dist/css/engine-core.css',
          engineExtCssUrl:
            'https://alifd.alicdn.com/npm/@alilc/lowcode-engine-ext@1.0.5-beta.10/dist/css/engine-ext.css',
          engineCoreJsUrl:
            'https://alifd.alicdn.com/npm/@alilc/lowcode-engine@1.0.14/dist/js/engine-core.js',
          engineExtJsUrl:
            'https://alifd.alicdn.com/npm/@alilc/lowcode-engine-ext@1.0.5-beta.10/dist/js/engine-ext.js',
        },
        npmInfo: {
          package: name,
          version,
        },
        lowcodeDir: 'lowcode',
        entryPath: 'src/index.tsx',
        categories: ['通用', '导航', '信息输入', '信息展示', '信息反馈'],
        baseUrl: {
          prod: `https://unpkg.com/${name}@${version}`,
          daily: `https://unpkg.com/${name}@${version}`,
        },
        builtinAssets: [
          {
            packages: [
              {
                package: 'moment',
                version: '2.24.0',
                urls: ['https://g.alicdn.com/mylib/moment/2.24.0/min/moment.min.js'],
                library: 'moment',
              },
              {
                package: 'lodash',
                library: '_',
                urls: ['https://g.alicdn.com/platform/c/lodash/4.6.1/lodash.min.js'],
              },
              {
                package: 'iconfont-icons',
                urls: '//at.alicdn.com/t/font_2369445_ukrtsovd92r.js',
              },
              {
                package: '@ant-design/icons',
                version: '4.7.0',
                urls: [`//g.alicdn.com/code/npm/@ali/ant-design-icons-cdn/4.5.0/index.umd.min.js`],
                library: 'icons',
              },
              {
                package: 'antd',
                version: '4.23.0',
                urls: [
                  `//g.alicdn.com/code/lib/antd/4.23.0/antd.min.js`,
                  `//g.alicdn.com/code/lib/antd/4.23.0/antd.min.css`,
                ],
              },
            ],
            components: [],
          },
        ],
      },
    ],
  ],
};
