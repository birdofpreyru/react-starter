# Dr. Pogodin's React Starting Pack
![Master build status](https://img.shields.io/circleci/project/github/birdofpreyru/react-starter/master.svg)
![Release Version](https://img.shields.io/github/tag/birdofpreyru/react-starter.svg)

The easiest way to start a complex ReactJS project based on
[`@dr.pogodin/react-utils`](https://www.npmjs.com/package/@dr.pogodin/react-utils).

Detailed documentation is available here *COMING SOON*

To install, test, and run in development mode:
```bash
$ npm install
$ npm test

# NODE_CONFIG_ENV can be "development" or "production". It has no influence on
# the code build and execution mode, it only sets the runtime configuration
# (Node Config).
$ NODE_CONFIG_ENV=development npm run dev
```

To install, test, and run in production mode:
```bash
$ npm install
$ npm test
$ npm run build

# Again, NODE_CONFIG_ENV can be "development" or "production" here.
$ NODE_CONFIG_ENV=production npm start
```
