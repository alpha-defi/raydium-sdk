---
title: Liquidity Demo
---

After [swapping tokens](/guides/swap), users may next want to provide liquidity to receive
[farming benefits](/guides/farm). This **work in progress** section describes how the Raydium SDK
can be used to add or remove liquidity from a pool.

## Devnet

### 1. Clone the sdk_demo repo

Clone the sdk_demo repo and checkout the version used by this example

```tsx
git clone https://github.com/raydium-io/sdk_demo/
git checkout a5bdf75f80d2fb6dcabd80b9492c63319ec6cccd
```

<br/>

### 2. Create a new add_liquidity_dev.ts file

Create a new file in src/add_liquidity_dev.ts, which will we will populate with the following:

```tsx
// Under construction
```

<br/>

## Mainnet

Under development.

<br/>

## Reference

- Raydium front-end [txAddLiquidity.ts](https://github.com/raydium-io/raydium-frontend/blob/a8e37a43170b3f15f725bad4746cfe3ddb5d4757/src/application/liquidity/transaction/txAddLiquidity.ts)
- Raydium SDK [makeAddLiquidityTransaction](https://github.com/raydium-io/raydium-sdk/blob/76744e7c70ac355b2f3e4cac34708632f276337f/src/liquidity/liquidity.ts)
- Raydium SDK [makeAddLiquidityTransaction unit test](https://github.com/raydium-io/raydium-sdk/blob/bbf627c7963c184408fef6238ddb408afafc9004/test/liquidity/liquidity.test.ts)
