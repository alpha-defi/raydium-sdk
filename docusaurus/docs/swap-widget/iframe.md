---
title: Iframe
---

The iframed swap widget can be embedded within any UI project. It's the easiest
approach for integration, especially for non-React projects, but it comes with a
performance cost.

## Demo

This page includes a live example of the iframe swap widget. It should
hopefully render below:

<iframe className="full-width" src="https://swap.alphadefi.info/" />

<br />
<br />
<br />

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
<iframe src="https://swap.alphadefi.info/" />
```
