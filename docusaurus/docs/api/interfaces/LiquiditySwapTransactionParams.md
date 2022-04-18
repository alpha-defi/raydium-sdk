---
id: "LiquiditySwapTransactionParams"
title: "Interface: LiquiditySwapTransactionParams"
sidebar_label: "LiquiditySwapTransactionParams"
sidebar_position: 0
custom_edit_url: null
---

Swap transaction params

## Properties

### amountIn

• **amountIn**: [`CurrencyAmount`](../classes/CurrencyAmount.md) \| [`TokenAmount`](../classes/TokenAmount.md)

#### Defined in

[src/liquidity/liquidity.ts:238](https://github.com/raydium-io/raydium-sdk/blob/3d95730/src/liquidity/liquidity.ts#L238)

___

### amountOut

• **amountOut**: [`CurrencyAmount`](../classes/CurrencyAmount.md) \| [`TokenAmount`](../classes/TokenAmount.md)

#### Defined in

[src/liquidity/liquidity.ts:239](https://github.com/raydium-io/raydium-sdk/blob/3d95730/src/liquidity/liquidity.ts#L239)

___

### config

• `Optional` **config**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bypassAssociatedCheck?` | `boolean` |

#### Defined in

[src/liquidity/liquidity.ts:241](https://github.com/raydium-io/raydium-sdk/blob/3d95730/src/liquidity/liquidity.ts#L241)

___

### connection

• **connection**: `Connection`

#### Defined in

[src/liquidity/liquidity.ts:231](https://github.com/raydium-io/raydium-sdk/blob/3d95730/src/liquidity/liquidity.ts#L231)

___

### fixedSide

• **fixedSide**: [`SwapSide`](../modules.md#swapside)

#### Defined in

[src/liquidity/liquidity.ts:240](https://github.com/raydium-io/raydium-sdk/blob/3d95730/src/liquidity/liquidity.ts#L240)

___

### poolKeys

• **poolKeys**: [`LiquidityPoolKeysV4`](../modules.md#liquiditypoolkeysv4)

#### Defined in

[src/liquidity/liquidity.ts:232](https://github.com/raydium-io/raydium-sdk/blob/3d95730/src/liquidity/liquidity.ts#L232)

___

### userKeys

• **userKeys**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `owner` | `PublicKey` |
| `payer?` | `PublicKey` |
| `tokenAccounts` | [`TokenAccount`](TokenAccount.md)[] |

#### Defined in

[src/liquidity/liquidity.ts:233](https://github.com/raydium-io/raydium-sdk/blob/3d95730/src/liquidity/liquidity.ts#L233)
