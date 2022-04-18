---
id: "Trade"
title: "Class: Trade"
sidebar_label: "Trade"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new Trade**()

## Methods

### getBestAmountIn

▸ `Static` **getBestAmountIn**(`params`): `Object`

Get best amount in

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`GetBestAmountInParams`](../interfaces/GetBestAmountInParams.md) | [GetBestAmountInParams](../interfaces/GetBestAmountInParams.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `amountIn` | [`CurrencyAmount`](CurrencyAmount.md) |
| `currentPrice` | ``null`` \| [`Price`](Price.md) |
| `executionPrice` | ``null`` \| [`Price`](Price.md) |
| `maxAmountIn` | [`CurrencyAmount`](CurrencyAmount.md) |
| `priceImpact` | [`Percent`](Percent.md) |
| `routeType` | ``"amm"`` |
| `routes` | [`RouteInfo`](../interfaces/RouteInfo.md)[] |

#### Defined in

[src/trade/trade.ts:278](https://github.com/alpha-defi/raydium-sdk/blob/5597113/src/trade/trade.ts#L278)

___

### getBestAmountOut

▸ `Static` **getBestAmountOut**(`params`): `Object`

Get best amount out

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`GetBestAmountOutParams`](../interfaces/GetBestAmountOutParams.md) | [GetBestAmountOutParams](../interfaces/GetBestAmountOutParams.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `amountOut` | [`CurrencyAmount`](CurrencyAmount.md) |
| `currentPrice` | ``null`` \| [`Price`](Price.md) |
| `executionPrice` | ``null`` \| [`Price`](Price.md) |
| `fee` | [`CurrencyAmount`](CurrencyAmount.md)[] |
| `fixedSide` | `string` |
| `minAmountOut` | [`CurrencyAmount`](CurrencyAmount.md) |
| `priceImpact` | [`Percent`](Percent.md) |
| `routeType` | ``"amm"`` \| ``"route"`` |
| `routes` | [`RouteInfo`](../interfaces/RouteInfo.md)[] |

#### Defined in

[src/trade/trade.ts:141](https://github.com/alpha-defi/raydium-sdk/blob/5597113/src/trade/trade.ts#L141)

___

### groupPools

▸ `Static` **groupPools**(`pools`): [`AmmSource`](../interfaces/AmmSource.md)[][]

#### Parameters

| Name | Type |
| :------ | :------ |
| `pools` | [`AmmSource`](../interfaces/AmmSource.md)[] |

#### Returns

[`AmmSource`](../interfaces/AmmSource.md)[][]

#### Defined in

[src/trade/trade.ts:65](https://github.com/alpha-defi/raydium-sdk/blob/5597113/src/trade/trade.ts#L65)

___

### makeTradeTransaction

▸ `Static` **makeTradeTransaction**(`params`): `Promise`<{ `setupTransaction`: ``null`` \| [`UnsignedTransactionAndSigners`](../interfaces/UnsignedTransactionAndSigners.md) ; `tradeTransaction`: ``null`` \| [`UnsignedTransactionAndSigners`](../interfaces/UnsignedTransactionAndSigners.md)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`TradeTransactionParams`](../interfaces/TradeTransactionParams.md) |

#### Returns

`Promise`<{ `setupTransaction`: ``null`` \| [`UnsignedTransactionAndSigners`](../interfaces/UnsignedTransactionAndSigners.md) ; `tradeTransaction`: ``null`` \| [`UnsignedTransactionAndSigners`](../interfaces/UnsignedTransactionAndSigners.md)  }\>

#### Defined in

[src/trade/trade.ts:77](https://github.com/alpha-defi/raydium-sdk/blob/5597113/src/trade/trade.ts#L77)
