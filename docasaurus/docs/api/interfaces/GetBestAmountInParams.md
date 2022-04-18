---
id: "GetBestAmountInParams"
title: "Interface: GetBestAmountInParams"
sidebar_label: "GetBestAmountInParams"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `Omit`<[`GetBestAmountOutParams`](GetBestAmountOutParams.md), ``"amountIn"`` \| ``"currencyOut"``\>

  ↳ **`GetBestAmountInParams`**

## Properties

### amountOut

• **amountOut**: [`CurrencyAmount`](../classes/CurrencyAmount.md) \| [`TokenAmount`](../classes/TokenAmount.md)

#### Defined in

[src/trade/trade.ts:60](https://github.com/raydium-io/raydium-sdk/blob/3d95730/src/trade/trade.ts#L60)

___

### currencyIn

• **currencyIn**: [`Currency`](../classes/Currency.md) \| [`Token`](../classes/Token.md)

#### Defined in

[src/trade/trade.ts:61](https://github.com/raydium-io/raydium-sdk/blob/3d95730/src/trade/trade.ts#L61)

___

### features

• `Optional` **features**: [`RouteType`](../modules.md#routetype)[]

#### Inherited from

Omit.features

#### Defined in

[src/trade/trade.ts:56](https://github.com/raydium-io/raydium-sdk/blob/3d95730/src/trade/trade.ts#L56)

___

### markets

• `Optional` **markets**: [`SerumSource`](SerumSource.md)[]

#### Inherited from

Omit.markets

#### Defined in

[src/trade/trade.ts:51](https://github.com/raydium-io/raydium-sdk/blob/3d95730/src/trade/trade.ts#L51)

___

### midTokens

• `Optional` **midTokens**: [`Currency`](../classes/Currency.md) \| [`Token`](../classes/Token.md)[]

#### Inherited from

Omit.midTokens

#### Defined in

[src/trade/trade.ts:55](https://github.com/raydium-io/raydium-sdk/blob/3d95730/src/trade/trade.ts#L55)

___

### pools

• `Optional` **pools**: [`AmmSource`](AmmSource.md)[]

#### Inherited from

Omit.pools

#### Defined in

[src/trade/trade.ts:50](https://github.com/raydium-io/raydium-sdk/blob/3d95730/src/trade/trade.ts#L50)

___

### slippage

• **slippage**: [`Percent`](../classes/Percent.md)

#### Inherited from

Omit.slippage

#### Defined in

[src/trade/trade.ts:54](https://github.com/raydium-io/raydium-sdk/blob/3d95730/src/trade/trade.ts#L54)
