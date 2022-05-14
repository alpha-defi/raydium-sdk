---
title: Swap Demo
---

This section shows how to use the Raydium SDK to swap tokens for [mainnet](#mainnet) and
[devnet](#devnet). Swapping tokens depends

For now, mainnet is recommended because devnet is limited and has issues
that otherwise would not appear on mainnet.

Credit goes to Rayxury from [Raydium's developers' discord](https://discord.com/channels/813741812598439958/813750197423308820) for creating and sharing these examples on [Github](https://github.com/raydium-io/sdk_demo/).

## Devnet

This section steps through a brand new devnet wallet installation that is airdropped
SOL, USDC, and Ray tokens. The SDK is then used to swap the Ray token using
devnet's RAY-USDC pool.

### 1. Wallet Install

Any devnet compatible wallet should work but this guide will show usage
with Serum's [Sollet.io wallet](https://www.sollet.io/). As a first step,
visit https://www.sollet.io to create a new wallet for devnet and follow
the on-screen instructions.

Once created, the wallet should show up like the following:

![initial_wallet](/img/guides/initial_wallet.png)

### 2. Switch to devnet

![devnet_sollet](/img/guides/devnet_sollet.png)

### 3. Airdrop SOL

Airdrop SOL to your wallet using [https://www.spl-token-ui.com](https://www.spl-token-ui.com/#/sol-airdrop)
while ensuring you're on devnet.

:::note
Sometimes the amount airdropped may need to be reduced
for faster transmission (e.g. airdrop 1-2 SOL instead of 10).

The spl-token-ui.com is open sourced at https://github.com/paul-schaaf/spl-token-ui
:::

### 4. Add USDC and Ray to your wallet

Add USDC and Ray to your wallet using the following mint addresses

```
Ray Mint: FSRvxBNrQWX2Fy2qvKMLL3ryEdRtE3PUTZBcdKwASZTU
USDC Mint: BEcGFQK1T1tSu3kvHC17cyCkQ5dvXqAJ7ExB2bb5Do7a
```

![add](/img/guides/add-ray-wallet.png)

![add](/img/guides/add-usdc-wallet.png)

Expand the details of each token's "Associated Token Metadata", as they will be used
in the next step

![add](/img/guides/token_addresses.png)

### 5. Airdrop USDC and Ray to your wallet

Airdrop USDC and Ray to your wallet using [https://www.spl-token-ui.com](https://www.spl-token-ui.com/#token-faucets)
while ensuring you're on devnet and using the below faucets:

```
USDC Faucet: Bz3PCWk7B5J1FoR1W5WYHSLJQGQaR8qAnWTPurUxYrAk
Ray Faucet: 8zziYhuA792dHEASjkvUNVqF71PzeCwsi4y77VBjhFRq
```

In the "Token destination address\*" use the "Associated Token Metadata" addresses saved from step 4.

:::note
Make sure you select devnet at the top right.
:::

![airdrop_usdc](/img/guides/airdrop_usdc.png)

### 6. Save wallet private key

This wallet's private key will be used by the Raydium SDK, so in Sollet click the "Export" button
to save the private key, which is an array of numbers.

![airdrop_usdc](/img/guides/sollet_export.png)

### 7. Execute Swap

Git clone the sdk_demo repo.

```shell
git clone https://github.com/raydium-io/sdk_demo/
yarn
```

Modify the array in the secretKey wtih your wallet's private key

```tsx
// Replace '[1,1,1,1,1]' with your key
const secretKey = Buffer.from(JSON.parse("[1,1,1,1,1]"));
```

```shell
yarn dev
```

The program should hopefully run successfully with output similar to the following

```
5TieXkdUrh9ZPCHp4qwtaEpF7qc27kGwfyinUge4Bn5j
tokenAccounts.length: 2
allPoolKeys.length: 18
...
0.009974 0.009499 9.994006 9.993988 0.00 0.000002
https://explorer.solana.com/tx/4xAW8wxBfhEqTDnHzhSJgpaosBnixAufVZFu8hFyhS2CTbs2fgbDptQKw4eLvAaQGPVt76uR5u7bbJGEsrhgVmN4?cluster=devnet
Done in 8.65s.
```

![solscan_success](/img/guides/solscan_success.png)

---

## Mainnet

This section will show a swap between RAY and USDC for mainnet. It differs from
the devnet version in that it uses real tokens.

While mainnet may initially seem off-putting because it's using real assets, for swaps
it can be fairly affordable for testing. For example, the following section will demonstrate
a successful swap of 0.01 Ray with 0.020528 USDC.

The successful transaction can be viewed [here](https://solscan.io/tx/47ZJSDJYYcr2rLQuRwC7PUKtWQ5PrpZXFFzi2yUathsmNUtFQdRQSJ1NGZ71TCjVvZamUoq1DpGJMCAnVDzyA17e).

![mainnet_success](/img/guides/mainnet_success.png)

To swap your own assets, please follow the remaining steps in this section.

### 1. Transfer SOL and RAY to Wallet

The first step before running the mainnet swap demo is to
transfer SOL and RAY to your wallet. It may be advisable to
create a new wallet for development / testing purposes (see [here](#1-wallet-install)
for reference if needed). The cheapest example may be 0.01 RAY and 0.001 SOL for
transactions.

### 2. Save wallet private key

The swap demo will require your wallet's secret key to perform a transaction.
If using Sollet, see [here](#6-save-private-key) to export a private key
that's an array of numbers.

### 3. Clone and modify sdk_demo repo

Clone the sdk_demo repo and checkout the version used by this example

```shell
git clone https://github.com/raydium-io/sdk_demo/
git checkout a5bdf75f80d2fb6dcabd80b9492c63319ec6cccd
```

Modify the swap.ts with the wallet private key retrieved from step 2
and update the amountIn value based on the amount you want to swap (in this example
we're using 100)

```ts
import { Connection, Keypair, PublicKey } from "@solana/web3.js";
import { Liquidity, Token, TokenAmount, Percent } from "@raydium-io/raydium-sdk";

import { getTokenAccountsByOwner, fetchAllPoolKeys, fetchPoolKeys } from "./mainnet";

// @ts-ignore
import bs58 from "bs58";

(async () => {
  const connection = new Connection("https://solana-api.projectserum.com", "confirmed");

  // change to your privateKey
  const secretKey = Buffer.from(JSON.parse("1,1,1,1,1]"));
  const ownerKeypair = Keypair.fromSecretKey(secretKey);
  const owner = ownerKeypair.publicKey;
  console.log(owner.toString());

  const tokenAccounts = await getTokenAccountsByOwner(connection, owner);
  const RAY_USDC = "6UmmUiYoBjSrhakAobJw8BvkmJtDVxaeBtbt7rxWo1mg";

  const poolKeys = await fetchPoolKeys(connection, new PublicKey(RAY_USDC));
  if (poolKeys) {
    const poolInfo = await Liquidity.fetchInfo({ connection, poolKeys });
    // Update the 100 to the amount you want to swap
    const amountIn = new TokenAmount(new Token(poolKeys.baseMint, 6), 100);
    const currencyOut = new Token(poolKeys.quoteMint, 6);
    const slippage = new Percent(5, 100);

    const { amountOut, minAmountOut, currentPrice, executionPrice, priceImpact, fee } = Liquidity.computeAmountOut({
      poolKeys,
      poolInfo,
      amountIn,
      currencyOut,
      slippage,
    });

    //@ts-ignore
    console.log(
      amountOut.toFixed(),
      minAmountOut.toFixed(),
      currentPrice.toFixed(),
      executionPrice.toFixed(),
      priceImpact.toFixed(),
      fee.toFixed(),
    );
    const { transaction, signers } = await Liquidity.makeSwapTransaction({
      connection,
      poolKeys,
      userKeys: {
        tokenAccounts,
        owner,
      },
      amountIn,
      amountOut: minAmountOut,
      fixedSide: "in",
    });

    const txid = await connection.sendTransaction(transaction, [...signers, ownerKeypair], { skipPreflight: true });

    console.log(`https://solscan.io/tx/${txid}`);
  }
})();
```

### 4. Execute swap

Next, you can run the program to execute the swap

```shell
yarn && yarn start

# Hopefully you see a success like the following
ts-node src/swap.ts
FW8CSLAZewfEmfHs5wf7yzELLFXhNRGq2WEc27JQ1uTh
0.000205 0.000195 2.057025 2.050000 0.34 0.000000
https://solscan.io/tx/3DrVnvJDe71NRYRzJuYsVdgxdUrESUbHznPTeh1AoXTcQ9gzB8cNcxMnm3C3SxR4CE6FDrsKCwNiCXWfCRfdxDQG
Done in 9.64s.

```

### 5. Verify swap

The swap can be verified on [solscan](https://solscan.io/tx/3DrVnvJDe71NRYRzJuYsVdgxdUrESUbHznPTeh1AoXTcQ9gzB8cNcxMnm3C3SxR4CE6FDrsKCwNiCXWfCRfdxDQG) but additionally your wallet
should show a successful swap:

![](/img/guides/mainnet_success_wallet.png)
