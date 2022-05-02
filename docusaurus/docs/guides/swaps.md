---
title:  Swap Demos
---

This section shows how to use the Raydium SDK to swap tokens for mainnet and
devnet. For now, mainnet is recommended because devnet is limited and has issues
that otherwise would not appear on mainnet.

Credit goes to Rayxury from [Raydium's developers' discord](https://discord.com/channels/813741812598439958/813750197423308820) for creating and sharing these examples on [Github](https://github.com/raydium-io/sdk_demo/).

## Devnet

This section walks through a brand new wallet installation that is airdropped
SOL tokens that the SDK swaps to the Ray token using devnet's RAY-USDC pool

### 1. Wallet Install

Any devnet compatible wallet should work but this guide will show usage
with Serum's [Sollet.io wallet](https://www.sollet.io/). As a first step,
visit https://www.sollet.io to create a new wallet for devnet and follow
the on-screen instructions.

Once created, the wallet should show up like he following:

![initial_wallet](/img/guides/initial_wallet.png)


### 2. Switch to devnet

![devnet_sollet](/img/guides/devnet_sollet.png)

### 3. Airdrop Tokens

Airdrop SOL, USDC, and Ray to your wallet using [spl-token-ui.com](https://www.spl-token-ui.com/#/token-faucets)


```
coin_mint: BEcGFQK1T1tSu3kvHC17cyCkQ5dvXqAJ7ExB2bb5Do7a
coin_faucet: Bz3PCWk7B5J1FoR1W5WYHSLJQGQaR8qAnWTPurUxYrAk
(USDC?)

pc_mint: FSRvxBNrQWX2Fy2qvKMLL3ryEdRtE3PUTZBcdKwASZTU
pc_faucet: 8zziYhuA792dHEASjkvUNVqF71PzeCwsi4y77VBjhFRq
(RAY?)
```

Note that sometimes the amount airdropped may need to be reduced 
for faster transmission (e.g. airdrop 1-2 SOL instead of 10)

## Mainnet

The mainnet 

```shell
git clone https://github.com/raydium-io/sdk_demo/
yarn && yarn start
```