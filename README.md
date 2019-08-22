# Shopify Starter Theme

## Dependencies

- [Node 8.9.4](http://nodejs.org/)
- [Yarn](https://yarnpkg.com/en/)
- [mkcert](https://github.com/FiloSottile/mkcert)

## Setup

1. Copy `example.env` to `.env.development` in the root directory. Add appropriate _Development_ Shopify credentials
2. Install dev dependencies via `yarn`;

## Development

1. Ensure you have a self signed certificate via the `ssl-check` function provided by [Slate](https://shopify.github.io/slate/docs/create-a-self-signed-ssl-certificate):

```
$ ssl-check
```

2. Start up your dev environment with the following command:

```
$ yarn start
```

## Commands

```js
$ yarn clean // Cleans up the shopify `dist` directory
$ yarn start // Starts your development environment
$ yarn build // Builds the theme for production
$ yarn deploy:production // Builds and deploys the current theme to production theme
$ yarn deploy:staging // Builds and deploys the current theme to production theme
$ yarn deploy:development-replace // Replaces and deploys current theme to development theme
$ yarn lint // lints all javascript
```