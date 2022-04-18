---
id: "TradeTransactionParams"
title: "Interface: TradeTransactionParams"
sidebar_label: "TradeTransactionParams"
sidebar_position: 0
custom_edit_url: null
---

## Properties

### amountIn

• **amountIn**: [`CurrencyAmount`](../classes/CurrencyAmount.md) \| [`TokenAmount`](../classes/TokenAmount.md)

#### Defined in

[src/trade/trade.ts:41](https://github.com/alpha-defi/raydium-sdk/blob/5597113/src/trade/trade.ts#L41)

___

### amountOut

• **amountOut**: [`CurrencyAmount`](../classes/CurrencyAmount.md) \| [`TokenAmount`](../classes/TokenAmount.md)

#### Defined in

[src/trade/trade.ts:42](https://github.com/alpha-defi/raydium-sdk/blob/5597113/src/trade/trade.ts#L42)

___

### config

• `Optional` **config**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bypassAssociatedCheck?` | `boolean` |

#### Defined in

[src/trade/trade.ts:44](https://github.com/alpha-defi/raydium-sdk/blob/5597113/src/trade/trade.ts#L44)

___

### connection

• **connection**: `Connection`

#### Defined in

[src/trade/trade.ts:33](https://github.com/alpha-defi/raydium-sdk/blob/5597113/src/trade/trade.ts#L33)

___

### fixedSide

• **fixedSide**: [`SwapSide`](../modules.md#swapside)

#### Defined in

[src/trade/trade.ts:43](https://github.com/alpha-defi/raydium-sdk/blob/5597113/src/trade/trade.ts#L43)

___

### routeType

• **routeType**: [`RouteType`](../modules.md#routetype)

#### Defined in

[src/trade/trade.ts:35](https://github.com/alpha-defi/raydium-sdk/blob/5597113/src/trade/trade.ts#L35)

___

### routes

• **routes**: [`RouteInfo`](RouteInfo.md)[]

#### Defined in

[src/trade/trade.ts:34](https://github.com/alpha-defi/raydium-sdk/blob/5597113/src/trade/trade.ts#L34)

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

[src/trade/trade.ts:36](https://github.com/alpha-defi/raydium-sdk/blob/5597113/src/trade/trade.ts#L36)
