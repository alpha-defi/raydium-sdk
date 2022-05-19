---
title: Iframe
---

:::caution
The iframe approach is deprecated and not recommended due to [limitations described below](#limitations).
:::

The iframed swap widget was an experimental attempt at providing a mechanism for easy integration into
any UI project but it's deprecated due to [numerous limitations](#limitations). It's possible this
could be revived if the limitations are resolved.

## Demo

This page includes a live example of the iframe swap widget. It should
hopefully render below:

<iframe style={{ width: '100%', height: '900px' }} src="https://swap.alphadefi.info/swap" />

<br />
<br />
<br />

## Limitations

### Functionality

Functionally, there are known issues with the iframed widget that include the following:

- Limited wallet support (only Solflare, Sollet, Torus initially appear to work)
- Various bugs that do not appear outside an iframe

### Performance

iFrames are not ideal, especially on mobile or with limited bandwidth clients, because they include the
entire iframed website.

### Security

There are numerous security threats that need to be considered and addressed when using an iframe:

- Cross-frame script vulnerabilities
- iFrame phishing
- iFrame injection
- Clickjacking

## Installation

The iframe requires the raydium-frontend-iframe repo to be hosted
on the same origin / domain where your frontend UI is hosted.

### 1. Clone repo

```sh
git clone git@github.com:alpha-defi/raydium-frontend-iframe.git
```

### 2. Install and start the project

```sh
cd raydium-frontend-iframe
yarn
npm start
```

### 3. Add the iframe snippet within your UI

Add the iframe within your UI but replace the src with a link
to the raydium-frontend-iframe project from step 2

```html
<iframe src="https://swap.alphadefi.info/swap/" />
```
