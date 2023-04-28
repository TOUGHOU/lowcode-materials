module.exports = ({ onGetWebpackConfig }) => {
  onGetWebpackConfig((config) => {
    config.module
      .rule('less')
      .test(/\.less/)
      .use('less-loader')
      .loader('less-loader')
      .options({
        lessOptions: {
          modifyVars: {
            'primary-color': '#266cee',
            'link-color': '#266cee',
          },
          javascriptEnabled: true,
        },
      });
  });
};
