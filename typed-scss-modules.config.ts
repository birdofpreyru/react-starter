export default {
  aliasPrefixes: {
    // "typed-scss-modules" does not automatically respect "exports"
    // declarations in packages "package.json" files.
    '@dr.pogodin/react-utils': 'node_modules/@dr.pogodin/react-utils/build/web/styles',
  },
  exportType: 'default',
  ignore: [
    '**/docs/**/*.scss',
    '**/node_modules/**',
  ],
  includePaths: [
    'src',
  ],
  outputFolder: 'build/types-scss',
};
