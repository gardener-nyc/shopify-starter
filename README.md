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
$ yarn theme:start
```

4. Start the dev server in another terminal process.

```
$ yarn start
```

## Publishing

1. Upload to the theme of choice.

```
$ yarn theme:push
```

## Updating content

1. Download theme content from live site

```
$ yarn theme:pull
```
