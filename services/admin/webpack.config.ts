
import webpack from 'webpack';
import path from 'path';
import { BuildMode, BuildPaths, BuildPlatform, buildWebpack } from '@packages/build-config';
import packageJason from './package.json';

interface EnvVariables {
  mode: BuildMode;
  port: number;
  analyzer?: boolean;
  platform?: BuildPlatform;
}


export default (env: EnvVariables) => {
  const paths: BuildPaths = {
    output: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    public: path.resolve(__dirname, 'public'),
    src: path.resolve(__dirname, 'src'),
  }

  const config: webpack.Configuration = buildWebpack({
    mode: env.mode ?? 'development',
    port: env.port ?? 3000,
    paths,
    analyzer: env.analyzer,
    platform: env.platform ?? 'desktop',
  })

  config.plugins.push(new webpack.container.ModuleFederationPlugin({
    name: 'admin',
    filename: 'remoteEntry.js',
    exposes: {
      './Router': './src/router/Router.tsx',
    },
    shared: {
      ...packageJason.dependencies,
      react: {
        eager: true,
        requiredVersion: packageJason.dependencies.react,
      },
      'react-dom': {
        eager: true,
        requiredVersion: packageJason.dependencies['react-dom'],
      },
      'react-router-dom': {
        eager: true,
        requiredVersion: packageJason.dependencies['react-router-dom'],
      }
    },
  }))

  return config;
};