---
id: "Route"
title: "Class: Route"
sidebar_label: "Route"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`Base`](Base.md)

  ↳ **`Route`**

## Constructors

### constructor

• **new Route**()

#### Inherited from

[Base](Base.md).[constructor](Base.md#constructor)

## Methods

### \_handleTokenAccount

▸ `Static` **_handleTokenAccount**(`params`): `Promise`<`PublicKey`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`HandleTokenAccountParams`](../interfaces/HandleTokenAccountParams.md) |

#### Returns

`Promise`<`PublicKey`\>

#### Inherited from

[Base](Base.md).[_handleTokenAccount](Base.md#_handletokenaccount)

#### Defined in

[src/base/base.ts:71](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/base/base.ts#L71)

___

### \_selectTokenAccount

▸ `Static` **_selectTokenAccount**(`params`): `Promise`<``null`` \| `PublicKey`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`SelectTokenAccountParams`](../interfaces/SelectTokenAccountParams.md) |

#### Returns

`Promise`<``null`` \| `PublicKey`\>

#### Inherited from

[Base](Base.md).[_selectTokenAccount](Base.md#_selecttokenaccount)

#### Defined in

[src/base/base.ts:38](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/base/base.ts#L38)

___

### computeAmountOut

▸ `Static` **computeAmountOut**(`__namedParameters`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`RouteComputeAmountOutParams`](../interfaces/RouteComputeAmountOutParams.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `amountOut` | [`CurrencyAmount`](CurrencyAmount.md) \| [`TokenAmount`](TokenAmount.md) |
| `executionPrice` | ``null`` \| [`Price`](Price.md) |
| `fee` | [`CurrencyAmount`](CurrencyAmount.md)[] |
| `minAmountOut` | [`CurrencyAmount`](CurrencyAmount.md) \| [`TokenAmount`](TokenAmount.md) |
| `priceImpact` | [`Fraction`](Fraction.md) |

#### Defined in

[src/route/route.ts:453](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/route/route.ts#L453)

___

### getAssociatedMiddleStatusAccount

▸ `Static` **getAssociatedMiddleStatusAccount**(`__namedParameters`): `Promise`<`PublicKey`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.fromPoolId` | `PublicKey` |
| `__namedParameters.middleMint` | `PublicKey` |
| `__namedParameters.owner` | `PublicKey` |
| `__namedParameters.programId` | `PublicKey` |

#### Returns

`Promise`<`PublicKey`\>

#### Defined in

[src/route/route.ts:110](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/route/route.ts#L110)

___

### getLiquidityVersion

▸ `Static` **getLiquidityVersion**(`version`): [`LiquidityVersion`](../modules.md#liquidityversion)

#### Parameters

| Name | Type |
| :------ | :------ |
| `version` | `number` |

#### Returns

[`LiquidityVersion`](../modules.md#liquidityversion)

#### Defined in

[src/route/route.ts:102](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/route/route.ts#L102)

___

### getProgramId

▸ `Static` **getProgramId**(`version`): `PublicKey`

#### Parameters

| Name | Type |
| :------ | :------ |
| `version` | `number` |

#### Returns

`PublicKey`

#### Defined in

[src/route/route.ts:86](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/route/route.ts#L86)

___

### getVersion

▸ `Static` **getVersion**(`programId`): ``1``

#### Parameters

| Name | Type |
| :------ | :------ |
| `programId` | `PublicKey` |

#### Returns

``1``

#### Defined in

[src/route/route.ts:93](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/route/route.ts#L93)

___

### makeSwapInFixedInInstruction

▸ `Static` **makeSwapInFixedInInstruction**(`__namedParameters`): `TransactionInstruction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`RouteSwapInFixedInInstructionParams`](../interfaces/RouteSwapInFixedInInstructionParams.md) |

#### Returns

`TransactionInstruction`

#### Defined in

[src/route/route.ts:139](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/route/route.ts#L139)

___

### makeSwapInstruction

▸ `Static` **makeSwapInstruction**(`params`): `TransactionInstruction`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`RouteSwapInstructionParams`](../interfaces/RouteSwapInstructionParams.md) |

#### Returns

`TransactionInstruction`[]

#### Defined in

[src/route/route.ts:129](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/route/route.ts#L129)

___

### makeSwapOutFixedInInstruction

▸ `Static` **makeSwapOutFixedInInstruction**(`__namedParameters`): `TransactionInstruction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`RouteSwapOutFixedInInstructionParams`](../interfaces/RouteSwapOutFixedInInstructionParams.md) |

#### Returns

`TransactionInstruction`

#### Defined in

[src/route/route.ts:234](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/route/route.ts#L234)

___

### makeSwapTransaction

▸ `Static` **makeSwapTransaction**(`params`): `Promise`<{ `setupTransaction`: ``null`` \| [`UnsignedTransactionAndSigners`](../interfaces/UnsignedTransactionAndSigners.md) ; `swapTransaction`: ``null`` \| [`UnsignedTransactionAndSigners`](../interfaces/UnsignedTransactionAndSigners.md)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`RouteSwapTransactionParams`](../interfaces/RouteSwapTransactionParams.md) |

#### Returns

`Promise`<{ `setupTransaction`: ``null`` \| [`UnsignedTransactionAndSigners`](../interfaces/UnsignedTransactionAndSigners.md) ; `swapTransaction`: ``null`` \| [`UnsignedTransactionAndSigners`](../interfaces/UnsignedTransactionAndSigners.md)  }\>

#### Defined in

[src/route/route.ts:317](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/route/route.ts#L317)
