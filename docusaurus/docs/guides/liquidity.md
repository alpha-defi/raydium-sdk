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

### 2. Create add_liquidity_dev.ts

Create a new file in src/add_liquidity_dev.ts, which will we will populate with the following:

```tsx
// @ts-ignore
import bs58 from "bs58";

import { Liquidity, Percent, Token, TokenAmount } from "@raydium-io/raydium-sdk";
import { Connection, Keypair, PublicKey } from "@solana/web3.js";

import { fetchAllPoolKeys, fetchPoolKeys, getTokenAccountsByOwner } from "./devnet";

(async () => {
  const connection = new Connection("https://api.devnet.solana.com", "confirmed");

  // change to your privateKey
  const secretKey = Buffer.from(JSON.parse("[1,1,1,1,1]"));
  // const secretKey = bs58.decode('11111')
  const ownerKeypair = Keypair.fromSecretKey(secretKey);

  const owner = ownerKeypair.publicKey;
  console.log(owner.toString());

  const tokenAccounts = await getTokenAccountsByOwner(connection, owner);
  console.log("tokenAccounts.length:", tokenAccounts.length);

  const allPoolKeys = await fetchAllPoolKeys(connection);
  console.log("allPoolKeys.length:", allPoolKeys.length);

  allPoolKeys.forEach((item) => {
    // if (item.baseMint.toBase58() == WSOL.mint || item.quoteMint.toBase58() == WSOL.mint )
    console.log(item.id.toBase58(), item.baseMint.toBase58(), item.quoteMint.toBase58());
  });

  // SOL-USDT
  // const POOL_ID = "384zMi9MbUKVUfkUdrnuMfWBwJR9gadSxYimuXeJ9DaJ"

  // RAY_USDC
  const POOL_ID = "ELSGBb45rAQNsMTVzwjUqL8vBophWhPn4rNbqwxenmqY";
  const USDC_MINT_ID = "BEcGFQK1T1tSu3kvHC17cyCkQ5dvXqAJ7ExB2bb5Do7a";
  const RAY_MINT_ID = "FSRvxBNrQWX2Fy2qvKMLL3ryEdRtE3PUTZBcdKwASZTU";

  const poolKeys = await fetchPoolKeys(connection, new PublicKey(POOL_ID));
  if (poolKeys) {
    const poolInfo = await Liquidity.fetchInfo({ connection, poolKeys });

    // real amount = 1000000 / 10**poolInfo.baseDecimals
    const amountInA = new TokenAmount(new Token(USDC_MINT_ID, poolInfo.baseDecimals), 100);
    const amountInB = new TokenAmount(new Token(RAY_MINT_ID, poolInfo.baseDecimals), 100);

    // 1% slippage
    const slippage = new Percent(0, 100);

    // const minAmountOut = new TokenAmount(new Token(poolKeys.quoteMint, poolInfo.quoteDecimals), 1000000)

    const { transaction, signers } = await Liquidity.makeAddLiquidityTransaction({
      connection,
      poolKeys,
      userKeys: {
        tokenAccounts,
        owner,
      },
      amountInA,
      amountInB,
      fixedSide: "a",
    });

    const txid = await connection.sendTransaction(transaction, [...signers, ownerKeypair], { skipPreflight: true });

    console.log(`https://explorer.solana.com/tx/${txid}?cluster=devnet`);
  }
})();
```

<br/>

## Mainnet

### 1. Clone the sdk_demo repo

Clone the sdk_demo repo and checkout the version used by this example

```tsx
git clone https://github.com/raydium-io/sdk_demo/
git checkout a5bdf75f80d2fb6dcabd80b9492c63319ec6cccd
```

<br/>

### 2. Create add_liquidity.ts

Create a new file in src/add_liquidity_dev.ts, which will we will populate with the following:

```tsx
// @ts-ignore
import bs58 from "bs58";

import { Liquidity, Percent, Token, TokenAmount } from "@raydium-io/raydium-sdk";
import { Connection, Keypair, PublicKey } from "@solana/web3.js";

import { fetchAllPoolKeys, fetchPoolKeys, getTokenAccountsByOwner } from "./devnet";

(async () => {
  const connection = new Connection("https://api.devnet.solana.com", "confirmed");

  // change to your privateKey
  const secretKey = Buffer.from(JSON.parse("[1,1,1,1,1]"));
  // const secretKey = bs58.decode('11111')
  const ownerKeypair = Keypair.fromSecretKey(secretKey);

  const owner = ownerKeypair.publicKey;
  console.log(owner.toString());

  const tokenAccounts = await getTokenAccountsByOwner(connection, owner);
  console.log("tokenAccounts.length:", tokenAccounts.length);

  const allPoolKeys = await fetchAllPoolKeys(connection);
  console.log("allPoolKeys.length:", allPoolKeys.length);

  allPoolKeys.forEach((item) => {
    // if (item.baseMint.toBase58() == WSOL.mint || item.quoteMint.toBase58() == WSOL.mint )
    console.log(item.id.toBase58(), item.baseMint.toBase58(), item.quoteMint.toBase58());
  });

  // SOL-USDT
  // const POOL_ID = "384zMi9MbUKVUfkUdrnuMfWBwJR9gadSxYimuXeJ9DaJ"

  // RAY_USDC
  const POOL_ID = "ELSGBb45rAQNsMTVzwjUqL8vBophWhPn4rNbqwxenmqY";
  const USDC_MINT_ID = "BEcGFQK1T1tSu3kvHC17cyCkQ5dvXqAJ7ExB2bb5Do7a";
  const RAY_MINT_ID = "FSRvxBNrQWX2Fy2qvKMLL3ryEdRtE3PUTZBcdKwASZTU";

  const poolKeys = await fetchPoolKeys(connection, new PublicKey(POOL_ID));
  if (poolKeys) {
    const poolInfo = await Liquidity.fetchInfo({ connection, poolKeys });

    // real amount = 1000000 / 10**poolInfo.baseDecimals
    const amountInA = new TokenAmount(new Token(USDC_MINT_ID, poolInfo.baseDecimals), 100);
    const amountInB = new TokenAmount(new Token(RAY_MINT_ID, poolInfo.baseDecimals), 100);

    // 1% slippage
    const slippage = new Percent(0, 100);

    // const minAmountOut = new TokenAmount(new Token(poolKeys.quoteMint, poolInfo.quoteDecimals), 1000000)

    const { transaction, signers } = await Liquidity.makeAddLiquidityTransaction({
      connection,
      poolKeys,
      userKeys: {
        tokenAccounts,
        owner,
      },
      amountInA,
      amountInB,
      fixedSide: "a",
    });

    const txid = await connection.sendTransaction(transaction, [...signers, ownerKeypair], { skipPreflight: true });

    console.log(`https://explorer.solana.com/tx/${txid}?cluster=devnet`);
  }
})();
```

<br/>

## Reference

- Raydium front-end [txAddLiquidity.ts](https://github.com/raydium-io/raydium-frontend/blob/a8e37a43170b3f15f725bad4746cfe3ddb5d4757/src/application/liquidity/transaction/txAddLiquidity.ts)
- Raydium SDK [makeAddLiquidityTransaction](https://github.com/raydium-io/raydium-sdk/blob/76744e7c70ac355b2f3e4cac34708632f276337f/src/liquidity/liquidity.ts)
- Raydium SDK [makeAddLiquidityTransaction unit test](https://github.com/raydium-io/raydium-sdk/blob/bbf627c7963c184408fef6238ddb408afafc9004/test/liquidity/liquidity.test.ts)
- [Pools List](/resources/liquidity-pools)
- [Token List](/resources/token-list)
