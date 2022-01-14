# Shopify Starter Theme

## Dependencies

-   [Node 8.9.4](http://nodejs.org/)
-   [Yarn](https://yarnpkg.com/en/)
-   [Shopify CLI](https://github.com/Shopify/shopify-cli)

## Setup

1. Install dev dependencies via `yarn`.

2. Log into Shopify store via CLI:

```
$ shopify login --store shopify-store
```

3. Start the Shopify dev server.

```
$ shopify theme serve
```

4. Start the dev server in another tab

```
$ yarn start
```

## Publishing

1. Publish to the theme of choice

```
$ yarn theme:publish
```
