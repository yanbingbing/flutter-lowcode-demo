const fs = require('fs-extra');
const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const express = require('express')

const { version } = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

module.exports = ({ onGetWebpackConfig }) => {
  onGetWebpackConfig((config) => {
    config.resolve.plugin('tsconfigpaths').use(TsconfigPathsPlugin, [
      {
        configFile: './tsconfig.json',
      },
    ]);

    config.merge({
      node: {
        fs: 'empty',
      },
    });

    config
    .plugin('index')
    .use(HtmlWebpackPlugin, [
      {
        inject: false,
        minify: false,
        templateParameters: {
          version,
        },
        template: require.resolve('./public/index.ejs'),
        filename: 'index.html',
      },
    ]);

    config.plugins.delete('hot');
    config.devServer.hot(false);
    config.devServer.before((app) => {
      app.use(express.json({ limit: '50mb'}))
      app.use(express.text({ limit: '50mb'}))
      app.all('*', (req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', '*');
        res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
        if (req.method == 'OPTIONS') {
          res.send(200);
        } else {
          next();
        }
      });
      app.get('/api/schema', (req,res,next) => {
        res.json({
          code: 0,
          data: fs.readJSONSync(path.join(__dirname, 'src/services/saved-schema.json'), 'utf-8')
        })
      })
      app.post('/api/schema', (req,res,next) => {
        fs.writeFileSync(path.join(__dirname, 'src/services/saved-schema.json'), req.body, 'utf-8');
        res.json({
          code: 0,
          data: "success",
        });
      })
    })

    config.module // fixes https://github.com/graphql/graphql-js/issues/1272
      .rule('mjs$')
      .test(/\.mjs$/)
      .include
        .add(/node_modules/)
        .end()
      .type('javascript/auto');
  });
};
