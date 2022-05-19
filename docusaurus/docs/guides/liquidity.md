---
title: Liquidity Demo
---

After [swapping tokens](/guides/swap), users may next want to provide liquidity to receive
[farming benefits](/guides/farm). This **work in progress** section describes how the Raydium SDK
can be used to add or remove liquidity from a pool.

## Devnet

### 1. Clone and build the sdk_demo repo

Clone the sdk_demo repo and checkout the version used by this example

```shell
# clone the repo
git clone https://github.com/raydium-io/sdk_demo/
git checkout c520c9b5c6b8cdb0886662a1c918e212933222fe

# build the project and install dependencies
yarn
```

<br/>

### 2. Run "dev" example

The sdk-demo comes with a wallet preconfigured so it can be
executed out of the box:

```shell
yarn dev
```

Here is sample execution:

```shell
yarn dev
yarn run v1.22.18
 ts-node src/demo_devnet.ts
bigint: Failed to load bindings, pure JS will be used (try npm run rebuild?)
VnxDzsZ7chE88e9rB6UKztCt2HUwrkgCTx8WieWf5mM
tokenAccounts.length: 4
swap start
swap: ELSGBb45rAQNsMTVzwjUqL8vBophWhPn4rNbqwxenmqY, amountIn: 1.000000, amountOut: 9.926190, executionPrice: 9.951068
https://explorer.solana.com/tx/yhY3jiymcXGhgseUkPZMSZScQ7Wgx2ykaE1uMTpxnowKBX4wWCEHMgwJCfTUB5sph7qE1H9CjVwjzGUg4YSDpdz?cluster=devnet
swap end
addLiquidity start
addLiquidity: ELSGBb45rAQNsMTVzwjUqL8vBophWhPn4rNbqwxenmqY, base amount: 1.000000, quote amount: 9.952059
https://explorer.solana.com/tx/5SySGxEryaJNgvJQEimkvcwzpXev4dPDgLnTGu7sJhuCnBFAgpS6acZMRdfEEPW9qfM4LhMAdNw6jCzxtmHCF2ix?cluster=devnet
addLiquidity end
removeLiquidity start
base amount: 0.9999996015812194, quote amount: 9.95205440436695
https://explorer.solana.com/tx/4oWjtHW4R7x4An2M24UrkCyQHggdv9BKmdqRTmYGLLPYaTjF21W8RtsfQYjgCsY7qsiKRNeTFKs4sQGQT7z17kNh?cluster=devnet
removeLiquidity end
Done in 11.27s.
```

<br/>

### 3. (Optional) Use different wallet

If you'll like to use your own wallet, change the secretKey to
the one that matches your wallet.

As an example you can see [/guides/swap#6-save-wallet-private-key](/guides/swap#6-save-wallet-private-key)

```tsx
// change to your privateKey
// const secretKey = Buffer.from(JSON.parse('[1,1,1,1,1]'))
const secretKey = bs58.decode(
  "3qswEeCJcA9ogpN3JEuXBtmnU35YPzSxBwzrk6sdTPhogMJ64WuabU9XWg2yUegJvv1qupYPqo2jQrrK26N7HGsD",
);
```

<br/>

## Mainnet

### 1. Clone and build the sdk_demo repo

Clone the sdk_demo repo and checkout the version used by this example

```shell
# clone the repo
git clone https://github.com/raydium-io/sdk_demo/
git checkout c520c9b5c6b8cdb0886662a1c918e212933222fe

# build the project and install dependencies
yarn
```

### 2. Run "main" example

The sdk-demo comes with a wallet preconfigured so it can be
executed out of the box:

```shell
yarn start
```

<br/>

## Reference

- Raydium [SDK Demo repo](https://github.com/raydium-io/sdk_demo/)
- Raydium front-end [txAddLiquidity.ts](https://github.com/raydium-io/raydium-frontend/blob/a8e37a43170b3f15f725bad4746cfe3ddb5d4757/src/application/liquidity/transaction/txAddLiquidity.ts)
- Raydium SDK [makeAddLiquidityTransaction](https://github.com/raydium-io/raydium-sdk/blob/76744e7c70ac355b2f3e4cac34708632f276337f/src/liquidity/liquidity.ts)
- Raydium SDK [makeAddLiquidityTransaction unit test](https://github.com/raydium-io/raydium-sdk/blob/bbf627c7963c184408fef6238ddb408afafc9004/test/liquidity/liquidity.test.ts)
- [Pools List](/resources/liquidity-pools)
- [Token List](/resources/token-list)
