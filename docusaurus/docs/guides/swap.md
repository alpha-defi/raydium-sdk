---
title:  Swap Demo
---

This section shows how to use the Raydium SDK to swap tokens for [mainnet](#mainnet) and
[devnet](#devnet). For now, mainnet is recommended because devnet is limited and has issues
that otherwise would not appear on mainnet.

Credit goes to Rayxury from [Raydium's developers' discord](https://discord.com/channels/813741812598439958/813750197423308820) for creating and sharing these examples on [Github](https://github.com/raydium-io/sdk_demo/).

## Devnet

This section steps through a brand new devnet wallet installation that is airdropped
SOL tokens that the SDK swaps to the Ray token using devnet's RAY-USDC pool.

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

Airdrop SOL to your wallet using [spl-token-ui.com](https://www.spl-token-ui.com/#/sol-airdrop)
while ensuring you're on devnet.

:::note
Sometimes the amount airdropped may need to be reduced 
for faster transmission (e.g. airdrop 1-2 SOL instead of 10)
:::

### 4. Add USDC and Ray to your wallet

Add USDC and Ray to your wallet using the following mint addresses

```
USDC Mint: BEcGFQK1T1tSu3kvHC17cyCkQ5dvXqAJ7ExB2bb5Do7a
Ray Mint: FSRvxBNrQWX2Fy2qvKMLL3ryEdRtE3PUTZBcdKwASZTU
```

![add](/img/guides/add-ray-wallet.png)

Take note of the "Associated Token Metadata" addresses, as they will be used
in the next step

![add](/img/guides/token_addresses.png)


### 5. Airdrop USDC and Ray to your wallet

Airdrop USDC and Ray to your wallet using [spl-token-ui.com](https://www.spl-token-ui.com/#/sol-airdrop)
while ensuring you're on devnet and using the below faucets:

```
USDC Faucet: Bz3PCWk7B5J1FoR1W5WYHSLJQGQaR8qAnWTPurUxYrAk
Ray Faucet: 8zziYhuA792dHEASjkvUNVqF71PzeCwsi4y77VBjhFRq
```

In the "Token destination address*" use the "Associated Token Metadata" addresses saved from step 4.

:::note
Make sure you select devnet at the top right.
:::

![airdrop_usdc](/img/guides/airdrop_usdc.png)


### 6. Save private key

This wallet's private key will be used by the Raydium SDK, so in Sollet click the "Export" button
to save the private key, which is an array of numbers.

![airdrop_usdc](/img/guides/sollet_export.png)

### 7. Run sdk demo

Git clone the sdk_demo repo.

```shell
git clone https://github.com/raydium-io/sdk_demo/
yarn
```

Modify the array in the secretKey wtih your wallet's private key

```tsx
// Replace '[1,1,1,1,1]' with your key
const secretKey = Buffer.from(JSON.parse('[1,1,1,1,1]'))
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

## Mainnet

Mainnet is very similar to devnet except it uses real tokens.

```shell
git clone https://github.com/raydium-io/sdk_demo/
yarn && yarn start
```