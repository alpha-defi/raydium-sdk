---
title: Liquidity, Route + Trade Swap
---

This section describes the examples from the [sdk_demo](https://github.com/raydium-io/sdk_demo/),
specifically around liquidity and route + trade swaps.

After [swapping tokens](/guides/swap), users may next want to provide liquidity to receive
[farming benefits](/guides/farm). Additionally,

This section shows how the Raydium SDK can be used
to add or remove liquidity from a pool.

## Prerequisites

### 1. Clone and build the sdk_demo repo

Clone the sdk_demo repo and checkout the version used by this example

```shell
# clone the repo
git clone https://github.com/raydium-io/sdk_demo/
git checkout be37c89f664386adc04e239becabb88c7dcb3a0b

# build the project and install dependencies
yarn
```

### 2. (Optional) Use different wallet

The sdk-demo is pre-configured with a private key, but
if you'll like to update it to use your own wallet,
update the secretKey:

As an example of how to find your wallet's private key, you can see [/guides/swap#6-save-wallet-private-key](/guides/swap#6-save-wallet-private-key)

```tsx
// change to your privateKey
// const secretKey = Buffer.from(JSON.parse('[1,1,1,1,1]'))
const secretKey = bs58.decode(
  "3qswEeCJcA9ogpN3JEuXBtmnU35YPzSxBwzrk6sdTPhogMJ64WuabU9XWg2yUegJvv1qupYPqo2jQrrK26N7HGsD",
);
```

<br/>

## Devnet

The following command will execute a swap, add liquidity, remove liquidity, route swap, and trade swap for devnet.

```shell
yarn dev
```

Here is a sample execution (see the solana transactions for more details):

```shell
yarn dev
yarn run v1.22.18
$ ts-node src/demo_devnet.ts
bigint: Failed to load bindings, pure JS will be used (try npm run rebuild?)
VnxDzsZ7chE88e9rB6UKztCt2HUwrkgCTx8WieWf5mM
tokenAccounts.length: 4
swap start
swap: ELSGBb45rAQNsMTVzwjUqL8vBophWhPn4rNbqwxenmqY, amountIn: 1.000000, amountOut: 9.892654, executionPrice: 9.917448
https://explorer.solana.com/tx/3VejJG68LnnzmbGnzgWL9gMk2BW5iBbD9AGqvRA6rfuhfZ9mnyvj2vZyQ2u22S3AXw2Jw9gRS9WEu9G8EjMENcM4?cluster=devnet
swap end
addLiquidity start
addLiquidity: ELSGBb45rAQNsMTVzwjUqL8vBophWhPn4rNbqwxenmqY, base amount: 1.000000, quote amount: 9.918434
https://explorer.solana.com/tx/nr4DKrVESeKLjSZf9j4wXDRLjbkwX9EtxHwSzqCtwTVNzKJxFCHJ32eRW3SuimXWGCsrVE3AaJy1DAKr4UvPwxM?cluster=devnet
addLiquidity end
removeLiquidity start
base amount: 0.9999991764024924, quote amount: 9.918425128860893
https://explorer.solana.com/tx/2at9BqM4VjCMpBLX7gFmmEU5gX31AncG8cMWueTLVf1qPsqrywz41WbbPTrDyC78jvPgGYWg7ZNFLC91inindiZn?cluster=devnet
removeLiquidity end
route swap start
route swap: ER3u3p9TGyA4Sc9VCJrkLq4hR73GFW8QAzYkkz8rSwsk, amountIn: 1.000000, amountOut: 0.369510, executionPrice: 0.369510
https://solscan.io/tx/mMFXGyxZhqM5G6mc5pNpRgx7YQrtkpJjqxDZmePaCAEA2UtwDkCrA238M8JFjuEKuMxSLV5TCddBhwUjzA83Ws6
route swap end
trade swap start
trade swap: amountIn: 1.000000, amountOut: 0.369510, executionPrice: 0.369510, route
https://solscan.io/tx/krQgaFnCWp57TMkgbmMrRpTqijf7SFG4UddmVRm3brpgxQWms6h6pr8yGTY5yt1woUmTiC9HCREwBkP6T2ZS8Vs?cluster=devnet
trade swap end
Done in 9.28s.
```

<br/>

## Mainnet

The following section will execute a swap, add liquidity, remove liquidity, route swap, and trade swap for mainnet.

Note that you will need to set your own secretKey as [described above](#2-optional-use-different-wallet), or else you will run into an error like the following:

> Error: cannot found target token accounts (argument="tokenAccounts"), value={}), code=INVALID_ARGUMENT, module=Liquidity, version=1.1.0-beta.0)

<br/>

Once ready, you can execute the mainnet demo with the following command

```shell
yarn start
```

Here is a sample execution (see the solana transactions for more details):

```
$ ts-node src/demo_mainnet.ts
bigint: Failed to load bindings, pure JS will be used (try npm run rebuild?)
42RVzVE36L7kjPJnBeuSTueaD1pBJvaiCqSai5nXj6F4
swap start
swap: 6UmmUiYoBjSrhakAobJw8BvkmJtDVxaeBtbt7rxWo1mg, amountIn: 1.000000, amountOut: 1.156414, executionPrice: 1.159312
https://explorer.solana.com/tx/5kZrKysEGqpTAZh85PjhBo5P2vdoy5i7fzLqqNAM1j2wVsT6MtGkLUW7dh1optpDuXhKhbT3rN3WvphhwkVJFmnk
swap end
addLiquidity start
addLiquidity: 6UmmUiYoBjSrhakAobJw8BvkmJtDVxaeBtbt7rxWo1mg, base amount: 1.000000, quote amount: 1.159313
https://explorer.solana.com/tx/5ZKRh7c1bRbGwnbRoW8nczzdinxZQtYg1YzgNAMB37of924KZtDCiHVxD11NwagJfk3QJN76eMRWo5xuyG6Pcu5
addLiquidity end
removeLiquidity start
removeLiquidity end
route swap start
route swap: 2dRNngAm729NzLbb1pzgHtfHvPqR4XHFmFyYK78EfEeX, amountIn: 1.000000, amountOut: 0.549296, executionPrice: 0.549296
https://solscan.io/tx/3PQpoxBwUc3oJQ2RXhMFZG1tEAYc9cntXTEY5BeyCQ1Hx1yyFE1L5FX185CmJffLDBCnrXBzUkZwXGnaEqeXbSHK
route swap end
trade swap start
trade swap: amountIn: 1.000000, amountOut: 0.549296, executionPrice: 0.549296, route
https://solscan.io/tx/42FhmyLDUJQR6Gk9Wn5FPboPxkERDq94XX55WiuTkbpLJV6QksBHDGGQXDgwXut1xqsZQTUj3tgB6YTyuSStE66L?cluster=devnet
trade swap end
Done in 12.71s.
```

<br/>

## Reference

- Raydium [SDK Demo repo](https://github.com/raydium-io/sdk_demo/)
- Raydium front-end [txAddLiquidity.ts](https://github.com/raydium-io/raydium-frontend/blob/a8e37a43170b3f15f725bad4746cfe3ddb5d4757/src/application/liquidity/transaction/txAddLiquidity.ts)
- Raydium SDK [makeAddLiquidityTransaction](https://github.com/raydium-io/raydium-sdk/blob/76744e7c70ac355b2f3e4cac34708632f276337f/src/liquidity/liquidity.ts)
- Raydium SDK [makeAddLiquidityTransaction unit test](https://github.com/raydium-io/raydium-sdk/blob/bbf627c7963c184408fef6238ddb408afafc9004/test/liquidity/liquidity.test.ts)
- [Pools List](/resources/liquidity-pools)
- [Token List](/resources/token-list)
