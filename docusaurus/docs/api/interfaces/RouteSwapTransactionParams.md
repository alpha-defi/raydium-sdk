---
id: "RouteSwapTransactionParams"
title: "Interface: RouteSwapTransactionParams"
sidebar_label: "RouteSwapTransactionParams"
sidebar_position: 0
custom_edit_url: null
---

## Properties

### amountIn

• **amountIn**: [`CurrencyAmount`](../classes/CurrencyAmount.md) \| [`TokenAmount`](../classes/TokenAmount.md)

#### Defined in

[src/route/route.ts:66](https://github.com/alpha-defi/raydium-sdk/blob/4217474/src/route/route.ts#L66)

___

### amountOut

• **amountOut**: [`CurrencyAmount`](../classes/CurrencyAmount.md) \| [`TokenAmount`](../classes/TokenAmount.md)

#### Defined in

[src/route/route.ts:67](https://github.com/alpha-defi/raydium-sdk/blob/4217474/src/route/route.ts#L67)

___

### config

• `Optional` **config**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bypassAssociatedCheck?` | `boolean` |

#### Defined in

[src/route/route.ts:69](https://github.com/alpha-defi/raydium-sdk/blob/4217474/src/route/route.ts#L69)

___

### connection

• **connection**: `Connection`

#### Defined in

[src/route/route.ts:58](https://github.com/alpha-defi/raydium-sdk/blob/4217474/src/route/route.ts#L58)

___

### fixedSide

• **fixedSide**: [`SwapSide`](../modules.md#swapside)

#### Defined in

[src/route/route.ts:68](https://github.com/alpha-defi/raydium-sdk/blob/4217474/src/route/route.ts#L68)

___

### fromPoolKeys

• **fromPoolKeys**: [`LiquidityPoolKeysV4`](../modules.md#liquiditypoolkeysv4)

#### Defined in

[src/route/route.ts:59](https://github.com/alpha-defi/raydium-sdk/blob/4217474/src/route/route.ts#L59)

___

### toPoolKeys

• **toPoolKeys**: [`LiquidityPoolKeysV4`](../modules.md#liquiditypoolkeysv4)

#### Defined in

[src/route/route.ts:60](https://github.com/alpha-defi/raydium-sdk/blob/4217474/src/route/route.ts#L60)

___

### userKeys

• **userKeys**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `owner` | `PublicKey` |
| `tokenAccounts` | [`TokenAccount`](TokenAccount.md)[] |

#### Defined in

[src/route/route.ts:61](https://github.com/alpha-defi/raydium-sdk/blob/4217474/src/route/route.ts#L61)
