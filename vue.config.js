module.exports = {
    assetsDir : 'wx/lib',

    configureWebpack: {
        devtool: 'source-map'
    }
    // publicPath : ''
}
module.exports = {
    chainWebpack: config => {
      config
        .plugin('html')
        .tap(args => {
          args[0].title= 'TMP'
          return args
        })
    }
  }


// const path = require('path');

// module.exports = {
//   assetsDir: '../static',
// //   baseUrl: '',
//   publicPath: '../../lib',
//   outputDir: path.resolve(__dirname, '../app/templates'),
// };