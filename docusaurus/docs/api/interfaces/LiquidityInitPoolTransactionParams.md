---
id: "LiquidityInitPoolTransactionParams"
title: "Interface: LiquidityInitPoolTransactionParams"
sidebar_label: "LiquidityInitPoolTransactionParams"
sidebar_position: 0
custom_edit_url: null
---

Init pool transaction params

## Properties

### baseAmount

• **baseAmount**: [`CurrencyAmount`](../classes/CurrencyAmount.md) \| [`TokenAmount`](../classes/TokenAmount.md)

#### Defined in

[src/liquidity/liquidity.ts:288](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/liquidity.ts#L288)

___

### config

• `Optional` **config**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bypassAssociatedCheck?` | `boolean` |

#### Defined in

[src/liquidity/liquidity.ts:291](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/liquidity.ts#L291)

___

### connection

• **connection**: `Connection`

#### Defined in

[src/liquidity/liquidity.ts:281](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/liquidity.ts#L281)

___

### poolKeys

• **poolKeys**: [`LiquidityAssociatedPoolKeysV4`](LiquidityAssociatedPoolKeysV4.md)

#### Defined in

[src/liquidity/liquidity.ts:282](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/liquidity.ts#L282)

___

### quoteAmount

• **quoteAmount**: [`CurrencyAmount`](../classes/CurrencyAmount.md) \| [`TokenAmount`](../classes/TokenAmount.md)

#### Defined in

[src/liquidity/liquidity.ts:289](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/liquidity.ts#L289)

___

### startTime

• `Optional` **startTime**: [`BigNumberish`](../modules.md#bignumberish)

#### Defined in

[src/liquidity/liquidity.ts:290](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/liquidity.ts#L290)

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

[src/liquidity/liquidity.ts:283](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/liquidity.ts#L283)
