---
id: "Liquidity"
title: "Class: Liquidity"
sidebar_label: "Liquidity"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`Base`](Base.md)

  ↳ **`Liquidity`**

## Constructors

### constructor

• **new Liquidity**()

#### Inherited from

[Base](Base.md).[constructor](Base.md#constructor)

## Methods

### \_computePriceImpact

▸ `Static` **_computePriceImpact**(`currentPrice`, `amountIn`, `amountOut`): [`Percent`](Percent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `currentPrice` | [`Price`](Price.md) |
| `amountIn` | `BN` |
| `amountOut` | `BN` |

#### Returns

[`Percent`](Percent.md)

#### Defined in

[src/liquidity/liquidity.ts:1844](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/liquidity.ts#L1844)

___

### \_getAmountSide

▸ `Static` **_getAmountSide**(`amount`, `poolKeys`): [`AmountSide`](../modules.md#amountside)

Get currency amount side of liquidity pool

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | [`CurrencyAmount`](CurrencyAmount.md) \| [`TokenAmount`](TokenAmount.md) | the currency amount provided |
| `poolKeys` | [`LiquidityPoolKeysV4`](../modules.md#liquiditypoolkeysv4) | the pool keys |

#### Returns

[`AmountSide`](../modules.md#amountside)

currency amount side is `base` or `quote`

#### Defined in

[src/liquidity/liquidity.ts:1748](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/liquidity.ts#L1748)

___

### \_getAmountsSide

▸ `Static` **_getAmountsSide**(`amountA`, `amountB`, `poolKeys`): [`AmountSide`](../modules.md#amountside)[]

Get currencies amount side of liquidity pool

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amountA` | [`CurrencyAmount`](CurrencyAmount.md) \| [`TokenAmount`](TokenAmount.md) | the currency amount provided |
| `amountB` | [`CurrencyAmount`](CurrencyAmount.md) \| [`TokenAmount`](TokenAmount.md) | the currency amount provided |
| `poolKeys` | [`LiquidityPoolKeysV4`](../modules.md#liquiditypoolkeysv4) | the pool keys |

#### Returns

[`AmountSide`](../modules.md#amountside)[]

currencies amount side array

#### Defined in

[src/liquidity/liquidity.ts:1761](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/liquidity.ts#L1761)

___

### \_getTokenSide

▸ `Static` **_getTokenSide**(`token`, `poolKeys`): [`AmountSide`](../modules.md#amountside)

Get token side of liquidity pool

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | [`Token`](Token.md) | the token provided |
| `poolKeys` | [`LiquidityPoolKeysV4`](../modules.md#liquiditypoolkeysv4) | the pool keys |

#### Returns

[`AmountSide`](../modules.md#amountside)

token side is `base` or `quote`

#### Defined in

[src/liquidity/liquidity.ts:1707](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/liquidity.ts#L1707)

___

### \_getTokensSide

▸ `Static` **_getTokensSide**(`tokenA`, `tokenB`, `poolKeys`): [`AmountSide`](../modules.md#amountside)[]

Get tokens side of liquidity pool

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenA` | [`Token`](Token.md) | the token provided |
| `tokenB` | [`Token`](Token.md) | the token provided |
| `poolKeys` | [`LiquidityPoolKeysV4`](../modules.md#liquiditypoolkeysv4) | the pool keys |

#### Returns

[`AmountSide`](../modules.md#amountside)[]

tokens side array

#### Defined in

[src/liquidity/liquidity.ts:1727](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/liquidity.ts#L1727)

___

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

[src/base/base.ts:71](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/base/base.ts#L71)

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

[src/base/base.ts:38](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/base/base.ts#L38)

___

### computeAmountIn

▸ `Static` **computeAmountIn**(`params`): { `amountIn`: [`CurrencyAmount`](CurrencyAmount.md) ; `currentPrice`: [`Price`](Price.md) ; `executionPrice`: ``null`` \| [`Price`](Price.md) ; `maxAmountIn`: [`CurrencyAmount`](CurrencyAmount.md) ; `priceImpact`: [`Percent`](Percent.md)  } \| { `amountIn`: [`TokenAmount`](TokenAmount.md) ; `currentPrice`: [`Price`](Price.md) ; `executionPrice`: ``null`` \| [`Price`](Price.md) ; `maxAmountIn`: [`TokenAmount`](TokenAmount.md) ; `priceImpact`: [`Percent`](Percent.md)  }

Compute input currency amount of swap

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`LiquidityComputeAmountInParams`](../interfaces/LiquidityComputeAmountInParams.md) | {@link ComputeCurrencyAmountInParams} |

#### Returns

{ `amountIn`: [`CurrencyAmount`](CurrencyAmount.md) ; `currentPrice`: [`Price`](Price.md) ; `executionPrice`: ``null`` \| [`Price`](Price.md) ; `maxAmountIn`: [`CurrencyAmount`](CurrencyAmount.md) ; `priceImpact`: [`Percent`](Percent.md)  } \| { `amountIn`: [`TokenAmount`](TokenAmount.md) ; `currentPrice`: [`Price`](Price.md) ; `executionPrice`: ``null`` \| [`Price`](Price.md) ; `maxAmountIn`: [`TokenAmount`](TokenAmount.md) ; `priceImpact`: [`Percent`](Percent.md)  }

amountIn - currency amount without slippage

#### Defined in

[src/liquidity/liquidity.ts:2017](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/liquidity.ts#L2017)

___

### computeAmountOut

▸ `Static` **computeAmountOut**(`params`): { `amountOut`: [`CurrencyAmount`](CurrencyAmount.md) ; `currentPrice`: [`Price`](Price.md) ; `executionPrice`: ``null`` \| [`Price`](Price.md) ; `fee`: [`CurrencyAmount`](CurrencyAmount.md) ; `minAmountOut`: [`CurrencyAmount`](CurrencyAmount.md) ; `priceImpact`: [`Percent`](Percent.md)  } \| { `amountOut`: [`TokenAmount`](TokenAmount.md) ; `currentPrice`: [`Price`](Price.md) ; `executionPrice`: ``null`` \| [`Price`](Price.md) ; `fee`: [`CurrencyAmount`](CurrencyAmount.md) ; `minAmountOut`: [`TokenAmount`](TokenAmount.md) ; `priceImpact`: [`Percent`](Percent.md)  }

Compute output currency amount of swap

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`LiquidityComputeAmountOutParams`](../interfaces/LiquidityComputeAmountOutParams.md) | [LiquidityComputeAmountOutParams](../interfaces/LiquidityComputeAmountOutParams.md) |

#### Returns

{ `amountOut`: [`CurrencyAmount`](CurrencyAmount.md) ; `currentPrice`: [`Price`](Price.md) ; `executionPrice`: ``null`` \| [`Price`](Price.md) ; `fee`: [`CurrencyAmount`](CurrencyAmount.md) ; `minAmountOut`: [`CurrencyAmount`](CurrencyAmount.md) ; `priceImpact`: [`Percent`](Percent.md)  } \| { `amountOut`: [`TokenAmount`](TokenAmount.md) ; `currentPrice`: [`Price`](Price.md) ; `executionPrice`: ``null`` \| [`Price`](Price.md) ; `fee`: [`CurrencyAmount`](CurrencyAmount.md) ; `minAmountOut`: [`TokenAmount`](TokenAmount.md) ; `priceImpact`: [`Percent`](Percent.md)  }

amountOut - currency amount without slippage

#### Defined in

[src/liquidity/liquidity.ts:1868](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/liquidity.ts#L1868)

___

### computeAnotherAmount

▸ `Static` **computeAnotherAmount**(`params`): { `anotherAmount`: [`CurrencyAmount`](CurrencyAmount.md) ; `maxAnotherAmount`: [`CurrencyAmount`](CurrencyAmount.md)  } \| { `anotherAmount`: [`TokenAmount`](TokenAmount.md) ; `maxAnotherAmount`: [`TokenAmount`](TokenAmount.md)  }

Compute the another currency amount of add liquidity

**`example`**
```
Liquidity.computeAnotherAmount({
  // 1%
  slippage: new Percent(1, 100)
})
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`LiquidityComputeAnotherAmountParams`](../interfaces/LiquidityComputeAnotherAmountParams.md) | [LiquidityComputeAnotherAmountParams](../interfaces/LiquidityComputeAnotherAmountParams.md) |

#### Returns

{ `anotherAmount`: [`CurrencyAmount`](CurrencyAmount.md) ; `maxAnotherAmount`: [`CurrencyAmount`](CurrencyAmount.md)  } \| { `anotherAmount`: [`TokenAmount`](TokenAmount.md) ; `maxAnotherAmount`: [`TokenAmount`](TokenAmount.md)  }

anotherCurrencyAmount - currency amount without slippage

#### Defined in

[src/liquidity/liquidity.ts:1792](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/liquidity.ts#L1792)

___

### fetchAllPoolKeys

▸ `Static` **fetchAllPoolKeys**(`connection`, `config?`): `Promise`<[`LiquidityPoolKeysV4`](../modules.md#liquiditypoolkeysv4)[]\>

Fetch all pools keys from on-chain data

#### Parameters

| Name | Type |
| :------ | :------ |
| `connection` | `Connection` |
| `config?` | [`GetMultipleAccountsInfoConfig`](../interfaces/GetMultipleAccountsInfoConfig.md) |

#### Returns

`Promise`<[`LiquidityPoolKeysV4`](../modules.md#liquiditypoolkeysv4)[]\>

#### Defined in

[src/liquidity/liquidity.ts:1376](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/liquidity.ts#L1376)

___

### fetchInfo

▸ `Static` **fetchInfo**(`__namedParameters`): `Promise`<[`LiquidityPoolInfo`](../interfaces/LiquidityPoolInfo.md)\>

Fetch liquidity pool's info

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`LiquidityFetchInfoParams`](../interfaces/LiquidityFetchInfoParams.md) |

#### Returns

`Promise`<[`LiquidityPoolInfo`](../interfaces/LiquidityPoolInfo.md)\>

#### Defined in

[src/liquidity/liquidity.ts:1565](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/liquidity.ts#L1565)

___

### fetchMultipleInfo

▸ `Static` **fetchMultipleInfo**(`__namedParameters`): `Promise`<[`LiquidityPoolInfo`](../interfaces/LiquidityPoolInfo.md)[]\>

Fetch multiple info of liquidity pools

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`LiquidityFetchMultipleInfoParams`](../interfaces/LiquidityFetchMultipleInfoParams.md) |

#### Returns

`Promise`<[`LiquidityPoolInfo`](../interfaces/LiquidityPoolInfo.md)[]\>

#### Defined in

[src/liquidity/liquidity.ts:1581](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/liquidity.ts#L1581)

___

### getAssociatedAuthority

▸ `Static` **getAssociatedAuthority**(`__namedParameters`): `Promise`<{ `nonce`: `number` ; `publicKey`: `PublicKey`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.programId` | `PublicKey` |

#### Returns

`Promise`<{ `nonce`: `number` ; `publicKey`: `PublicKey`  }\>

#### Defined in

[src/liquidity/liquidity.ts:402](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/liquidity.ts#L402)

___

### getAssociatedBaseVault

▸ `Static` **getAssociatedBaseVault**(`__namedParameters`): `Promise`<`PublicKey`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.marketId` | `PublicKey` |
| `__namedParameters.programId` | `PublicKey` |

#### Returns

`Promise`<`PublicKey`\>

#### Defined in

[src/liquidity/liquidity.ts:410](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/liquidity.ts#L410)

___

### getAssociatedId

▸ `Static` **getAssociatedId**(`__namedParameters`): `Promise`<`PublicKey`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.marketId` | `PublicKey` |
| `__namedParameters.programId` | `PublicKey` |

#### Returns

`Promise`<`PublicKey`\>

#### Defined in

[src/liquidity/liquidity.ts:394](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/liquidity.ts#L394)

___

### getAssociatedLpMint

▸ `Static` **getAssociatedLpMint**(`__namedParameters`): `Promise`<`PublicKey`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.marketId` | `PublicKey` |
| `__namedParameters.programId` | `PublicKey` |

#### Returns

`Promise`<`PublicKey`\>

#### Defined in

[src/liquidity/liquidity.ts:426](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/liquidity.ts#L426)

___

### getAssociatedLpVault

▸ `Static` **getAssociatedLpVault**(`__namedParameters`): `Promise`<`PublicKey`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.marketId` | `PublicKey` |
| `__namedParameters.programId` | `PublicKey` |

#### Returns

`Promise`<`PublicKey`\>

#### Defined in

[src/liquidity/liquidity.ts:434](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/liquidity.ts#L434)

___

### getAssociatedOpenOrders

▸ `Static` **getAssociatedOpenOrders**(`__namedParameters`): `Promise`<`PublicKey`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.marketId` | `PublicKey` |
| `__namedParameters.programId` | `PublicKey` |

#### Returns

`Promise`<`PublicKey`\>

#### Defined in

[src/liquidity/liquidity.ts:458](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/liquidity.ts#L458)

___

### getAssociatedPoolKeys

▸ `Static` **getAssociatedPoolKeys**(`__namedParameters`): `Promise`<[`LiquidityAssociatedPoolKeysV4`](../interfaces/LiquidityAssociatedPoolKeysV4.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.baseMint` | `PublicKey` |
| `__namedParameters.marketId` | `PublicKey` |
| `__namedParameters.quoteMint` | `PublicKey` |
| `__namedParameters.version` | `number` |

#### Returns

`Promise`<[`LiquidityAssociatedPoolKeysV4`](../interfaces/LiquidityAssociatedPoolKeysV4.md)\>

#### Defined in

[src/liquidity/liquidity.ts:466](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/liquidity.ts#L466)

___

### getAssociatedQuoteVault

▸ `Static` **getAssociatedQuoteVault**(`__namedParameters`): `Promise`<`PublicKey`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.marketId` | `PublicKey` |
| `__namedParameters.programId` | `PublicKey` |

#### Returns

`Promise`<`PublicKey`\>

#### Defined in

[src/liquidity/liquidity.ts:418](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/liquidity.ts#L418)

___

### getAssociatedTargetOrders

▸ `Static` **getAssociatedTargetOrders**(`__namedParameters`): `Promise`<`PublicKey`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.marketId` | `PublicKey` |
| `__namedParameters.programId` | `PublicKey` |

#### Returns

`Promise`<`PublicKey`\>

#### Defined in

[src/liquidity/liquidity.ts:442](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/liquidity.ts#L442)

___

### getAssociatedWithdrawQueue

▸ `Static` **getAssociatedWithdrawQueue**(`__namedParameters`): `Promise`<`PublicKey`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.marketId` | `PublicKey` |
| `__namedParameters.programId` | `PublicKey` |

#### Returns

`Promise`<`PublicKey`\>

#### Defined in

[src/liquidity/liquidity.ts:450](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/liquidity.ts#L450)

___

### getEnabledFeatures

▸ `Static` **getEnabledFeatures**(`poolInfo`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `poolInfo` | [`LiquidityPoolInfo`](../interfaces/LiquidityPoolInfo.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `addLiquidity` | `boolean` |
| `removeLiquidity` | `boolean` |
| `swap` | `boolean` |

#### Defined in

[src/liquidity/liquidity.ts:1626](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/liquidity.ts#L1626)

___

### getLayouts

▸ `Static` **getLayouts**(`version`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `version` | `number` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `state` | [`LiquidityStateLayout`](../modules.md#liquiditystatelayout) |

#### Defined in

[src/liquidity/liquidity.ts:389](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/liquidity.ts#L389)

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

[src/liquidity/liquidity.ts:358](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/liquidity.ts#L358)

___

### getRate

▸ `Static` **getRate**(`poolInfo`): [`Price`](Price.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `poolInfo` | [`LiquidityPoolInfo`](../interfaces/LiquidityPoolInfo.md) |

#### Returns

[`Price`](Price.md)

#### Defined in

[src/liquidity/liquidity.ts:1851](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/liquidity.ts#L1851)

___

### getSerumVersion

▸ `Static` **getSerumVersion**(`version`): ``3``

#### Parameters

| Name | Type |
| :------ | :------ |
| `version` | `number` |

#### Returns

``3``

#### Defined in

[src/liquidity/liquidity.ts:374](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/liquidity.ts#L374)

___

### getStateLayout

▸ `Static` **getStateLayout**(`version`): [`LiquidityStateLayout`](../modules.md#liquiditystatelayout)

#### Parameters

| Name | Type |
| :------ | :------ |
| `version` | `number` |

#### Returns

[`LiquidityStateLayout`](../modules.md#liquiditystatelayout)

#### Defined in

[src/liquidity/liquidity.ts:382](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/liquidity.ts#L382)

___

### getVersion

▸ `Static` **getVersion**(`programId`): [`LiquidityVersion`](../modules.md#liquidityversion)

#### Parameters

| Name | Type |
| :------ | :------ |
| `programId` | `PublicKey` |

#### Returns

[`LiquidityVersion`](../modules.md#liquidityversion)

#### Defined in

[src/liquidity/liquidity.ts:365](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/liquidity.ts#L365)

___

### includesToken

▸ `Static` **includesToken**(`token`, `poolKeys`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | [`Token`](Token.md) |
| `poolKeys` | [`LiquidityPoolKeysV4`](../modules.md#liquiditypoolkeysv4) |

#### Returns

`boolean`

#### Defined in

[src/liquidity/liquidity.ts:1695](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/liquidity.ts#L1695)

___

### isV4

▸ `Static` **isV4**(`lsl`): lsl is Object

#### Parameters

| Name | Type |
| :------ | :------ |
| `lsl` | `any` |

#### Returns

lsl is Object

#### Defined in

[src/liquidity/liquidity.ts:1368](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/liquidity.ts#L1368)

___

### makeAddLiquidityInstruction

▸ `Static` **makeAddLiquidityInstruction**(`params`): `TransactionInstruction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`LiquidityAddInstructionParamsV4`](../interfaces/LiquidityAddInstructionParamsV4.md) |

#### Returns

`TransactionInstruction`

#### Defined in

[src/liquidity/liquidity.ts:524](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/liquidity.ts#L524)

___

### makeAddLiquidityTransaction

▸ `Static` **makeAddLiquidityTransaction**(`params`): `Promise`<{ `signers`: `Signer`[] ; `transaction`: `Transaction`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`LiquidityAddTransactionParams`](../interfaces/LiquidityAddTransactionParams.md) |

#### Returns

`Promise`<{ `signers`: `Signer`[] ; `transaction`: `Transaction`  }\>

#### Defined in

[src/liquidity/liquidity.ts:578](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/liquidity.ts#L578)

___

### makeCreatePoolInstruction

▸ `Static` **makeCreatePoolInstruction**(`params`): `TransactionInstruction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`LiquidityCreatePoolInstructionParamsV4`](../interfaces/LiquidityCreatePoolInstructionParamsV4.md) |

#### Returns

`TransactionInstruction`

#### Defined in

[src/liquidity/liquidity.ts:1111](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/liquidity.ts#L1111)

___

### makeCreatePoolInstructionV4

▸ `Static` **makeCreatePoolInstructionV4**(`__namedParameters`): `TransactionInstruction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`LiquidityCreatePoolInstructionParamsV4`](../interfaces/LiquidityCreatePoolInstructionParamsV4.md) |

#### Returns

`TransactionInstruction`

#### Defined in

[src/liquidity/liquidity.ts:1122](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/liquidity.ts#L1122)

___

### makeCreatePoolTransaction

▸ `Static` **makeCreatePoolTransaction**(`params`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`LiquidityCreatePoolInstructionParamsV4`](../interfaces/LiquidityCreatePoolInstructionParamsV4.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `signers` | `Signer`[] |
| `transaction` | `Transaction` |

#### Defined in

[src/liquidity/liquidity.ts:1161](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/liquidity.ts#L1161)

___

### makeInitPoolInstruction

▸ `Static` **makeInitPoolInstruction**(`params`): `TransactionInstruction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`LiquidityInitPoolInstructionParamsV4`](../interfaces/LiquidityInitPoolInstructionParamsV4.md) |

#### Returns

`TransactionInstruction`

#### Defined in

[src/liquidity/liquidity.ts:1170](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/liquidity.ts#L1170)

___

### makeInitPoolInstructionV4

▸ `Static` **makeInitPoolInstructionV4**(`__namedParameters`): `TransactionInstruction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`LiquidityInitPoolInstructionParamsV4`](../interfaces/LiquidityInitPoolInstructionParamsV4.md) |

#### Returns

`TransactionInstruction`

#### Defined in

[src/liquidity/liquidity.ts:1181](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/liquidity.ts#L1181)

___

### makeInitPoolTransaction

▸ `Static` **makeInitPoolTransaction**(`params`): `Promise`<{ `signers`: `Signer`[] ; `transaction`: `Transaction`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`LiquidityInitPoolTransactionParams`](../interfaces/LiquidityInitPoolTransactionParams.md) |

#### Returns

`Promise`<{ `signers`: `Signer`[] ; `transaction`: `Transaction`  }\>

#### Defined in

[src/liquidity/liquidity.ts:1225](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/liquidity.ts#L1225)

___

### makeRemoveLiquidityInstruction

▸ `Static` **makeRemoveLiquidityInstruction**(`params`): `TransactionInstruction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`LiquidityRemoveInstructionParamsV4`](../interfaces/LiquidityRemoveInstructionParamsV4.md) |

#### Returns

`TransactionInstruction`

#### Defined in

[src/liquidity/liquidity.ts:721](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/liquidity.ts#L721)

___

### makeRemoveLiquidityTransaction

▸ `Static` **makeRemoveLiquidityTransaction**(`params`): `Promise`<{ `signers`: `Signer`[] ; `transaction`: `Transaction`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`LiquidityRemoveTransactionParams`](../interfaces/LiquidityRemoveTransactionParams.md) |

#### Returns

`Promise`<{ `signers`: `Signer`[] ; `transaction`: `Transaction`  }\>

#### Defined in

[src/liquidity/liquidity.ts:784](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/liquidity.ts#L784)

___

### makeSimulatePoolInfoInstruction

▸ `Static` **makeSimulatePoolInfoInstruction**(`__namedParameters`): `TransactionInstruction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.poolKeys` | [`LiquidityPoolKeysV4`](../modules.md#liquiditypoolkeysv4) |

#### Returns

`TransactionInstruction`

#### Defined in

[src/liquidity/liquidity.ts:1338](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/liquidity.ts#L1338)

___

### makeSwapFixedInInstruction

▸ `Static` **makeSwapFixedInInstruction**(`__namedParameters`, `version`): `TransactionInstruction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`LiquiditySwapFixedInInstructionParamsV4`](../interfaces/LiquiditySwapFixedInInstructionParamsV4.md) |
| `version` | `number` |

#### Returns

`TransactionInstruction`

#### Defined in

[src/liquidity/liquidity.ts:908](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/liquidity.ts#L908)

___

### makeSwapFixedOutInstruction

▸ `Static` **makeSwapFixedOutInstruction**(`__namedParameters`, `version`): `TransactionInstruction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`LiquiditySwapFixedOutInstructionParamsV4`](../interfaces/LiquiditySwapFixedOutInstructionParamsV4.md) |
| `version` | `number` |

#### Returns

`TransactionInstruction`

#### Defined in

[src/liquidity/liquidity.ts:965](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/liquidity.ts#L965)

___

### makeSwapInstruction

▸ `Static` **makeSwapInstruction**(`params`): `TransactionInstruction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`LiquiditySwapInstructionParams`](../interfaces/LiquiditySwapInstructionParams.md) |

#### Returns

`TransactionInstruction`

#### Defined in

[src/liquidity/liquidity.ts:875](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/liquidity.ts#L875)

___

### makeSwapTransaction

▸ `Static` **makeSwapTransaction**(`params`): `Promise`<{ `signers`: `Signer`[] ; `transaction`: `Transaction`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`LiquiditySwapTransactionParams`](../interfaces/LiquiditySwapTransactionParams.md) |

#### Returns

`Promise`<{ `signers`: `Signer`[] ; `transaction`: `Transaction`  }\>

#### Defined in

[src/liquidity/liquidity.ts:1019](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/liquidity.ts#L1019)
