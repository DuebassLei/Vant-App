const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
const pxtoviewport = require('postcss-px-to-viewport');
const path = require('path');
module.exports = {
  outputDir: 'dist',
  publicPath: process.env.NODE_ENV === 'production' ? '/vant-app/' : '/',
  chainWebpack: (config) => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    types.forEach((type) =>
      addStyleResource(config.module.rule('less').oneOf(type))
    );
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          hack: `true; @import "${path.resolve(
            __dirname,
            './src/assets/style/theme.less'
          )}";`,
        },
      },
      postcss: {
        plugins: [
          autoprefixer(),
          pxtoviewport({
            viewportWidth: 375,
          }),
          pxtorem({
            rootValue: 37.5,
            propList: ['*'],
          }),
        ],
      },
    },
  },
};

// add style resource
function addStyleResource(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [path.resolve(__dirname, './src/assets/style/global.less')],
    });
}
