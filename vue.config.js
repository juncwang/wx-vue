module.exports = {
    devServer: {
      open: true,
      host: '192.168.78.113',
      port: 8080,
      https: false,
      proxy: {
        // 配置跨域
        '/api': {
          target: 'http://192.168.78.113:5000/api/',
          ws: true,
          changOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    }
  };
  