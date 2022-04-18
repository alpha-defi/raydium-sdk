---
id: "LiquidityAddTransactionParams"
title: "Interface: LiquidityAddTransactionParams"
sidebar_label: "LiquidityAddTransactionParams"
sidebar_position: 0
custom_edit_url: null
---

Add liquidity transaction params

## Properties

### amountInA

• **amountInA**: [`CurrencyAmount`](../classes/CurrencyAmount.md) \| [`TokenAmount`](../classes/TokenAmount.md)

#### Defined in

[src/liquidity/liquidity.ts:152](https://github.com/alpha-defi/raydium-sdk/blob/5597113/src/liquidity/liquidity.ts#L152)

___

### amountInB

• **amountInB**: [`CurrencyAmount`](../classes/CurrencyAmount.md) \| [`TokenAmount`](../classes/TokenAmount.md)

#### Defined in

[src/liquidity/liquidity.ts:153](https://github.com/alpha-defi/raydium-sdk/blob/5597113/src/liquidity/liquidity.ts#L153)

___

### config

• `Optional` **config**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bypassAssociatedCheck?` | `boolean` |

#### Defined in

[src/liquidity/liquidity.ts:155](https://github.com/alpha-defi/raydium-sdk/blob/5597113/src/liquidity/liquidity.ts#L155)

___

### connection

• **connection**: `Connection`

#### Defined in

[src/liquidity/liquidity.ts:145](https://github.com/alpha-defi/raydium-sdk/blob/5597113/src/liquidity/liquidity.ts#L145)

___

### fixedSide

• **fixedSide**: [`LiquiditySide`](../modules.md#liquidityside)

#### Defined in

[src/liquidity/liquidity.ts:154](https://github.com/alpha-defi/raydium-sdk/blob/5597113/src/liquidity/liquidity.ts#L154)

___

### poolKeys

• **poolKeys**: [`LiquidityPoolKeysV4`](../modules.md#liquiditypoolkeysv4)

#### Defined in

[src/liquidity/liquidity.ts:146](https://github.com/alpha-defi/raydium-sdk/blob/5597113/src/liquidity/liquidity.ts#L146)

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

[src/liquidity/liquidity.ts:147](https://github.com/alpha-defi/raydium-sdk/blob/5597113/src/liquidity/liquidity.ts#L147)
