---
id: "modules"
title: "@raydium-io/raydium-sdk"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Enumerations

- [ErrorCode](enums/ErrorCode.md)
- [LiquidityPoolStatus](enums/LiquidityPoolStatus.md)
- [LogLevel](enums/LogLevel.md)
- [Rounding](enums/Rounding.md)

## Classes

- [BNLayout](classes/BNLayout.md)
- [Base](classes/Base.md)
- [Currency](classes/Currency.md)
- [CurrencyAmount](classes/CurrencyAmount.md)
- [Farm](classes/Farm.md)
- [Fraction](classes/Fraction.md)
- [Liquidity](classes/Liquidity.md)
- [Logger](classes/Logger.md)
- [Market](classes/Market.md)
- [OptionLayout](classes/OptionLayout.md)
- [Percent](classes/Percent.md)
- [Price](classes/Price.md)
- [Route](classes/Route.md)
- [Spl](classes/Spl.md)
- [Structure](classes/Structure.md)
- [Token](classes/Token.md)
- [TokenAmount](classes/TokenAmount.md)
- [TokenList](classes/TokenList.md)
- [Trade](classes/Trade.md)
- [Union](classes/Union.md)
- [WideBits](classes/WideBits.md)
- [WrappedLayout](classes/WrappedLayout.md)

## Interfaces

- [AmmSource](interfaces/AmmSource.md)
- [EnumLayout](interfaces/EnumLayout.md)
- [FarmCreateAssociatedLedgerAccountInstructionParams](interfaces/FarmCreateAssociatedLedgerAccountInstructionParams.md)
- [FarmDepositInstructionParams](interfaces/FarmDepositInstructionParams.md)
- [FarmFetchMultipleInfoParams](interfaces/FarmFetchMultipleInfoParams.md)
- [FarmPoolBaseInfo](interfaces/FarmPoolBaseInfo.md)
- [FarmPoolJsonInfo](interfaces/FarmPoolJsonInfo.md)
- [FarmPoolsJsonFile](interfaces/FarmPoolsJsonFile.md)
- [FarmUserKeys](interfaces/FarmUserKeys.md)
- [GetBestAmountInParams](interfaces/GetBestAmountInParams.md)
- [GetBestAmountOutParams](interfaces/GetBestAmountOutParams.md)
- [GetMultipleAccountsInfoConfig](interfaces/GetMultipleAccountsInfoConfig.md)
- [GetTokenAccountsByOwnerConfig](interfaces/GetTokenAccountsByOwnerConfig.md)
- [HandleTokenAccountParams](interfaces/HandleTokenAccountParams.md)
- [JsonFileMetaData](interfaces/JsonFileMetaData.md)
- [Layout](interfaces/Layout.md)
- [LayoutConstructor](interfaces/LayoutConstructor.md)
- [LiquidityAddInstructionParamsV4](interfaces/LiquidityAddInstructionParamsV4.md)
- [LiquidityAddTransactionParams](interfaces/LiquidityAddTransactionParams.md)
- [LiquidityAssociatedPoolKeysV4](interfaces/LiquidityAssociatedPoolKeysV4.md)
- [LiquidityComputeAmountInParams](interfaces/LiquidityComputeAmountInParams.md)
- [LiquidityComputeAmountOutParams](interfaces/LiquidityComputeAmountOutParams.md)
- [LiquidityComputeAnotherAmountParams](interfaces/LiquidityComputeAnotherAmountParams.md)
- [LiquidityCreatePoolInstructionParamsV4](interfaces/LiquidityCreatePoolInstructionParamsV4.md)
- [LiquidityFetchInfoParams](interfaces/LiquidityFetchInfoParams.md)
- [LiquidityFetchMultipleInfoParams](interfaces/LiquidityFetchMultipleInfoParams.md)
- [LiquidityInitPoolInstructionParamsV4](interfaces/LiquidityInitPoolInstructionParamsV4.md)
- [LiquidityInitPoolTransactionParams](interfaces/LiquidityInitPoolTransactionParams.md)
- [LiquidityPoolBaseInfo](interfaces/LiquidityPoolBaseInfo.md)
- [LiquidityPoolInfo](interfaces/LiquidityPoolInfo.md)
- [LiquidityPoolJsonInfo](interfaces/LiquidityPoolJsonInfo.md)
- [LiquidityPoolsJsonFile](interfaces/LiquidityPoolsJsonFile.md)
- [LiquidityRemoveInstructionParamsV4](interfaces/LiquidityRemoveInstructionParamsV4.md)
- [LiquidityRemoveTransactionParams](interfaces/LiquidityRemoveTransactionParams.md)
- [LiquiditySwapFixedInInstructionParamsV4](interfaces/LiquiditySwapFixedInInstructionParamsV4.md)
- [LiquiditySwapFixedOutInstructionParamsV4](interfaces/LiquiditySwapFixedOutInstructionParamsV4.md)
- [LiquiditySwapInstructionParams](interfaces/LiquiditySwapInstructionParams.md)
- [LiquiditySwapTransactionParams](interfaces/LiquiditySwapTransactionParams.md)
- [LiquidityUserKeys](interfaces/LiquidityUserKeys.md)
- [LpTokenInfo](interfaces/LpTokenInfo.md)
- [LpTokenJsonInfo](interfaces/LpTokenJsonInfo.md)
- [NativeTokenInfo](interfaces/NativeTokenInfo.md)
- [RouteComputeAmountOutParams](interfaces/RouteComputeAmountOutParams.md)
- [RouteInfo](interfaces/RouteInfo.md)
- [RouteSwapInFixedInInstructionParams](interfaces/RouteSwapInFixedInInstructionParams.md)
- [RouteSwapInstructionParams](interfaces/RouteSwapInstructionParams.md)
- [RouteSwapOutFixedInInstructionParams](interfaces/RouteSwapOutFixedInInstructionParams.md)
- [RouteSwapTransactionParams](interfaces/RouteSwapTransactionParams.md)
- [RouteUserKeys](interfaces/RouteUserKeys.md)
- [SelectTokenAccountParams](interfaces/SelectTokenAccountParams.md)
- [SerumSource](interfaces/SerumSource.md)
- [SplTokenInfo](interfaces/SplTokenInfo.md)
- [SplTokenJsonInfo](interfaces/SplTokenJsonInfo.md)
- [TokenAccount](interfaces/TokenAccount.md)
- [TokensJsonFile](interfaces/TokensJsonFile.md)
- [TradeTransactionParams](interfaces/TradeTransactionParams.md)
- [UnsignedTransactionAndSigners](interfaces/UnsignedTransactionAndSigners.md)
- [WrappedBig](interfaces/WrappedBig.md)
- [WrappedDecimal](interfaces/WrappedDecimal.md)

## Type aliases

### AmountSide

Ƭ **AmountSide**: ``"base"`` \| ``"quote"``

#### Defined in

[src/liquidity/liquidity.ts:52](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/liquidity.ts#L52)

___

### BigNumberish

Ƭ **BigNumberish**: `BN` \| `string` \| `number` \| `bigint`

#### Defined in

[src/entity/bignumber.ts:9](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/entity/bignumber.ts#L9)

___

### BitStructure

Ƭ **BitStructure**<`T`, `P`\>: [`Layout`](modules.md#layout)<`T`, `P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |
| `P` | ``""`` |

#### Defined in

[src/marshmallow/buffer-layout.ts:70](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/buffer-layout.ts#L70)

___

### Blob

Ƭ **Blob**<`P`\>: [`Layout`](modules.md#layout)<`Buffer`, `P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `string` = ``""`` |

#### Defined in

[src/marshmallow/buffer-layout.ts:86](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/buffer-layout.ts#L86)

___

### ExtensionKey

Ƭ **ExtensionKey**: ``"coingeckoId"`` \| ``"website"`` \| ``"whitepaper"``

#### Defined in

[src/token/type.ts:12](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/token/type.ts#L12)

___

### Extensions

Ƭ **Extensions**: { [key in ExtensionKey]?: string }

#### Defined in

[src/token/type.ts:14](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/token/type.ts#L14)

___

### FarmLedger

Ƭ **FarmLedger**: [`FarmLedgerV3_1`](modules.md#farmledgerv3_1) \| [`FarmLedgerV3_2`](modules.md#farmledgerv3_2) \| [`FarmLedgerV5_1`](modules.md#farmledgerv5_1) \| [`FarmLedgerV5_2`](modules.md#farmledgerv5_2)

#### Defined in

[src/farm/layout.ts:129](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/farm/layout.ts#L129)

___

### FarmLedgerLayout

Ƭ **FarmLedgerLayout**: [`FarmLedgerLayoutV3_1`](modules.md#farmledgerlayoutv3_1) \| [`FarmLedgerLayoutV3_2`](modules.md#farmledgerlayoutv3_2) \| [`FarmLedgerLayoutV5_1`](modules.md#farmledgerlayoutv5_1) \| [`FarmLedgerLayoutV5_2`](modules.md#farmledgerlayoutv5_2)

#### Defined in

[src/farm/layout.ts:119](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/farm/layout.ts#L119)

___

### FarmLedgerLayoutV3\_1

Ƭ **FarmLedgerLayoutV3\_1**: typeof [`FARM_LEDGER_LAYOUT_V3_1`](modules.md#farm_ledger_layout_v3_1)

#### Defined in

[src/farm/layout.ts:115](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/farm/layout.ts#L115)

___

### FarmLedgerLayoutV3\_2

Ƭ **FarmLedgerLayoutV3\_2**: typeof [`FARM_LEDGER_LAYOUT_V3_2`](modules.md#farm_ledger_layout_v3_2)

#### Defined in

[src/farm/layout.ts:116](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/farm/layout.ts#L116)

___

### FarmLedgerLayoutV5\_1

Ƭ **FarmLedgerLayoutV5\_1**: typeof [`FARM_LEDGER_LAYOUT_V5_1`](modules.md#farm_ledger_layout_v5_1)

#### Defined in

[src/farm/layout.ts:117](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/farm/layout.ts#L117)

___

### FarmLedgerLayoutV5\_2

Ƭ **FarmLedgerLayoutV5\_2**: typeof [`FARM_LEDGER_LAYOUT_V5_2`](modules.md#farm_ledger_layout_v5_2)

#### Defined in

[src/farm/layout.ts:118](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/farm/layout.ts#L118)

___

### FarmLedgerV3\_1

Ƭ **FarmLedgerV3\_1**: [`GetStructureSchema`](modules.md#getstructureschema)<[`FarmLedgerLayoutV3_1`](modules.md#farmledgerlayoutv3_1)\>

#### Defined in

[src/farm/layout.ts:125](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/farm/layout.ts#L125)

___

### FarmLedgerV3\_2

Ƭ **FarmLedgerV3\_2**: [`GetStructureSchema`](modules.md#getstructureschema)<[`FarmLedgerLayoutV3_2`](modules.md#farmledgerlayoutv3_2)\>

#### Defined in

[src/farm/layout.ts:126](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/farm/layout.ts#L126)

___

### FarmLedgerV5\_1

Ƭ **FarmLedgerV5\_1**: [`GetStructureSchema`](modules.md#getstructureschema)<[`FarmLedgerLayoutV5_1`](modules.md#farmledgerlayoutv5_1)\>

#### Defined in

[src/farm/layout.ts:127](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/farm/layout.ts#L127)

___

### FarmLedgerV5\_2

Ƭ **FarmLedgerV5\_2**: [`GetStructureSchema`](modules.md#getstructureschema)<[`FarmLedgerLayoutV5_2`](modules.md#farmledgerlayoutv5_2)\>

#### Defined in

[src/farm/layout.ts:128](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/farm/layout.ts#L128)

___

### FarmPoolKeys

Ƭ **FarmPoolKeys**: { [T in keyof FarmPoolJsonInfo]: FarmPoolJsonInfo[T] extends string ? PublicKey : FarmPoolJsonInfo[T] extends string[] ? PublicKey[] : FarmPoolJsonInfo[T] }

#### Defined in

[src/farm/farm.ts:20](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/farm/farm.ts#L20)

___

### FarmState

Ƭ **FarmState**: [`FarmStateV3`](modules.md#farmstatev3) \| [`FarmStateV5`](modules.md#farmstatev5)

#### Defined in

[src/farm/layout.ts:78](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/farm/layout.ts#L78)

___

### FarmStateLayout

Ƭ **FarmStateLayout**: [`FarmStateLayoutV3`](modules.md#farmstatelayoutv3) \| [`FarmStateLayoutV5`](modules.md#farmstatelayoutv5)

#### Defined in

[src/farm/layout.ts:74](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/farm/layout.ts#L74)

___

### FarmStateLayoutV3

Ƭ **FarmStateLayoutV3**: typeof [`FARM_STATE_LAYOUT_V3`](modules.md#farm_state_layout_v3)

#### Defined in

[src/farm/layout.ts:72](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/farm/layout.ts#L72)

___

### FarmStateLayoutV5

Ƭ **FarmStateLayoutV5**: typeof [`FARM_STATE_LAYOUT_V5`](modules.md#farm_state_layout_v5)

#### Defined in

[src/farm/layout.ts:73](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/farm/layout.ts#L73)

___

### FarmStateV3

Ƭ **FarmStateV3**: [`GetStructureSchema`](modules.md#getstructureschema)<[`FarmStateLayoutV3`](modules.md#farmstatelayoutv3)\>

#### Defined in

[src/farm/layout.ts:76](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/farm/layout.ts#L76)

___

### FarmStateV5

Ƭ **FarmStateV5**: [`GetStructureSchema`](modules.md#getstructureschema)<[`FarmStateLayoutV5`](modules.md#farmstatelayoutv5)\>

#### Defined in

[src/farm/layout.ts:77](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/farm/layout.ts#L77)

___

### FarmVersion

Ƭ **FarmVersion**: ``3`` \| ``4`` \| ``5``

#### Defined in

[src/farm/type.ts:4](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/farm/type.ts#L4)

___

### FarmWithdrawInstructionParams

Ƭ **FarmWithdrawInstructionParams**: [`FarmDepositInstructionParams`](interfaces/FarmDepositInstructionParams.md)

#### Defined in

[src/farm/farm.ts:47](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/farm/farm.ts#L47)

___

### GetLayoutSchemaFromStructure

Ƭ **GetLayoutSchemaFromStructure**<`T`\>: `T` extends [`Structure`](classes/Structure.md)<`any`, `any`, infer S\> ? `S` : `any`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Structure`](classes/Structure.md)<`any`, `any`, `any`\> |

#### Defined in

[src/marshmallow/index.ts:289](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/index.ts#L289)

___

### GetStructureFromLayoutSchema

Ƭ **GetStructureFromLayoutSchema**<`S`\>: [`Structure`](classes/Structure.md)<`any`, `any`, `S`\>

#### Type parameters

| Name |
| :------ |
| `S` |

#### Defined in

[src/marshmallow/index.ts:292](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/index.ts#L292)

___

### GetStructureSchema

Ƭ **GetStructureSchema**<`T`\>: `T` extends `Structure`<`any`, `any`, infer S\> ? `S` : `unknown`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Structure` |

#### Defined in

[src/marshmallow/buffer-layout.ts:168](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/buffer-layout.ts#L168)

___

### LiquidityAddInstructionParams

Ƭ **LiquidityAddInstructionParams**: [`LiquidityAddInstructionParamsV4`](interfaces/LiquidityAddInstructionParamsV4.md)

Add liquidity instruction params

#### Defined in

[src/liquidity/liquidity.ts:139](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/liquidity.ts#L139)

___

### LiquidityAssociatedPoolKeys

Ƭ **LiquidityAssociatedPoolKeys**: [`LiquidityAssociatedPoolKeysV4`](interfaces/LiquidityAssociatedPoolKeysV4.md)

Associated liquidity pool keys

**`remarks`**
without partial markets keys

#### Defined in

[src/liquidity/liquidity.ts:77](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/liquidity.ts#L77)

___

### LiquidityCreatePoolInstructionParams

Ƭ **LiquidityCreatePoolInstructionParams**: [`LiquidityCreatePoolInstructionParamsV4`](interfaces/LiquidityCreatePoolInstructionParamsV4.md)

Create pool instruction params

#### Defined in

[src/liquidity/liquidity.ts:256](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/liquidity.ts#L256)

___

### LiquidityCreatePoolTransactionParams

Ƭ **LiquidityCreatePoolTransactionParams**: [`LiquidityCreatePoolInstructionParams`](modules.md#liquiditycreatepoolinstructionparams)

Create pool transaction params

#### Defined in

[src/liquidity/liquidity.ts:261](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/liquidity.ts#L261)

___

### LiquidityInitPoolInstructionParams

Ƭ **LiquidityInitPoolInstructionParams**: [`LiquidityInitPoolInstructionParamsV4`](interfaces/LiquidityInitPoolInstructionParamsV4.md)

Init pool instruction params

#### Defined in

[src/liquidity/liquidity.ts:275](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/liquidity.ts#L275)

___

### LiquidityPoolKeys

Ƭ **LiquidityPoolKeys**: [`LiquidityPoolKeysV4`](modules.md#liquiditypoolkeysv4)

Full liquidity pool keys that build transaction need

#### Defined in

[src/liquidity/liquidity.ts:62](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/liquidity.ts#L62)

___

### LiquidityPoolKeysV4

Ƭ **LiquidityPoolKeysV4**: { [T in keyof LiquidityPoolJsonInfo]: string extends LiquidityPoolJsonInfo[T] ? PublicKey : LiquidityPoolJsonInfo[T] }

#### Defined in

[src/liquidity/liquidity.ts:55](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/liquidity.ts#L55)

___

### LiquidityRemoveInstructionParams

Ƭ **LiquidityRemoveInstructionParams**: [`LiquidityRemoveInstructionParamsV4`](interfaces/LiquidityRemoveInstructionParamsV4.md)

Remove liquidity instruction params

#### Defined in

[src/liquidity/liquidity.ts:169](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/liquidity.ts#L169)

___

### LiquiditySide

Ƭ **LiquiditySide**: ``"a"`` \| ``"b"``

#### Defined in

[src/liquidity/liquidity.ts:50](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/liquidity.ts#L50)

___

### LiquidityState

Ƭ **LiquidityState**: [`LiquidityStateV4`](modules.md#liquiditystatev4) \| [`LiquidityStateV5`](modules.md#liquiditystatev5)

#### Defined in

[src/liquidity/layout.ts:126](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/layout.ts#L126)

___

### LiquidityStateLayout

Ƭ **LiquidityStateLayout**: [`LiquidityStateLayoutV4`](modules.md#liquiditystatelayoutv4) \| [`LiquidityStateLayoutV5`](modules.md#liquiditystatelayoutv5)

#### Defined in

[src/liquidity/layout.ts:127](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/layout.ts#L127)

___

### LiquidityStateLayoutV4

Ƭ **LiquidityStateLayoutV4**: typeof [`LIQUIDITY_STATE_LAYOUT_V4`](modules.md#liquidity_state_layout_v4)

#### Defined in

[src/liquidity/layout.ts:59](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/layout.ts#L59)

___

### LiquidityStateLayoutV5

Ƭ **LiquidityStateLayoutV5**: typeof [`LIQUIDITY_STATE_LAYOUT_V5`](modules.md#liquidity_state_layout_v5)

#### Defined in

[src/liquidity/layout.ts:123](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/layout.ts#L123)

___

### LiquidityStateV4

Ƭ **LiquidityStateV4**: [`GetStructureSchema`](modules.md#getstructureschema)<[`LiquidityStateLayoutV4`](modules.md#liquiditystatelayoutv4)\>

#### Defined in

[src/liquidity/layout.ts:60](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/layout.ts#L60)

___

### LiquidityStateV5

Ƭ **LiquidityStateV5**: [`GetStructureSchema`](modules.md#getstructureschema)<[`LiquidityStateLayoutV5`](modules.md#liquiditystatelayoutv5)\>

#### Defined in

[src/liquidity/layout.ts:124](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/layout.ts#L124)

___

### LiquidityVersion

Ƭ **LiquidityVersion**: ``4`` \| ``5``

#### Defined in

[src/liquidity/type.ts:5](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/type.ts#L5)

___

### LpTokens

Ƭ **LpTokens**: { `[iterator]`: () => `IterableIterator`<[`LpTokenInfo`](interfaces/LpTokenInfo.md)\>  } & { [T in string]: LpTokenInfo }

#### Defined in

[src/token/type.ts:42](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/token/type.ts#L42)

___

### LpTokensJsonInfo

Ƭ **LpTokensJsonInfo**: { `[iterator]`: () => `IterableIterator`<[`LpTokenJsonInfo`](interfaces/LpTokenJsonInfo.md)\>  } & { [T in string]: LpTokenJsonInfo }

#### Defined in

[src/token/type.ts:73](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/token/type.ts#L73)

___

### MarketState

Ƭ **MarketState**: [`MarketStateV3`](modules.md#marketstatev3)

#### Defined in

[src/serum/layout.ts:46](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/serum/layout.ts#L46)

___

### MarketStateLayout

Ƭ **MarketStateLayout**: [`MarketStateLayoutV3`](modules.md#marketstatelayoutv3)

#### Defined in

[src/serum/layout.ts:43](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/serum/layout.ts#L43)

___

### MarketStateLayoutV3

Ƭ **MarketStateLayoutV3**: typeof [`MARKET_STATE_LAYOUT_V3`](modules.md#market_state_layout_v3)

#### Defined in

[src/serum/layout.ts:42](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/serum/layout.ts#L42)

___

### MarketStateV3

Ƭ **MarketStateV3**: [`GetStructureSchema`](modules.md#getstructureschema)<[`MarketStateLayoutV3`](modules.md#marketstatelayoutv3)\>

#### Defined in

[src/serum/layout.ts:45](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/serum/layout.ts#L45)

___

### PublicKeyish

Ƭ **PublicKeyish**: `PublicKey` \| `string`

#### Defined in

[src/common/pubkey.ts:15](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/common/pubkey.ts#L15)

___

### ReplaceType

Ƭ **ReplaceType**<`Old`, `From`, `To`\>: { [T in keyof Old]: Old[T] extends From ? Exclude<Old[T], From\> \| To : Old[T] extends Primitive ? From extends Old[T] ? Exclude<Old[T], From\> \| To : Old[T] : ReplaceType<Old[T], From, To\> }

**`example`**
```typescript
interface A {
  keyA: string;
  keyB: string;
  map: {
    hello: string;
    i: number;
  };
  list: (string | number)[];
  keyC: number;
}

type WrappedA = ReplaceType<A, string, boolean> // {
  keyA: boolean;
  keyB: boolean;
  map: {
    hello: boolean;
    i: number;
  };
  list: (number | boolean)[];
  keyC: number;
}
```

#### Type parameters

| Name |
| :------ |
| `Old` |
| `From` |
| `To` |

#### Defined in

[src/common/convert-json.ts:34](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/common/convert-json.ts#L34)

___

### RouteType

Ƭ **RouteType**: ``"amm"`` \| ``"serum"`` \| ``"route"``

#### Defined in

[src/trade/trade.ts:14](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/trade/trade.ts#L14)

___

### RouteVersion

Ƭ **RouteVersion**: ``1``

#### Defined in

[src/route/type.ts:1](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/route/type.ts#L1)

___

### SerumVersion

Ƭ **SerumVersion**: ``3``

#### Defined in

[src/serum/type.ts:2](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/serum/type.ts#L2)

___

### SplAccount

Ƭ **SplAccount**: [`GetStructureSchema`](modules.md#getstructureschema)<[`SplAccountLayout`](modules.md#splaccountlayout)\>

#### Defined in

[src/spl/layout.ts:34](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/spl/layout.ts#L34)

___

### SplAccountLayout

Ƭ **SplAccountLayout**: typeof [`SPL_ACCOUNT_LAYOUT`](modules.md#spl_account_layout)

#### Defined in

[src/spl/layout.ts:32](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/spl/layout.ts#L32)

___

### SplMint

Ƭ **SplMint**: [`GetStructureSchema`](modules.md#getstructureschema)<[`SplMintLayout`](modules.md#splmintlayout)\>

#### Defined in

[src/spl/layout.ts:15](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/spl/layout.ts#L15)

___

### SplMintLayout

Ƭ **SplMintLayout**: typeof [`SPL_MINT_LAYOUT`](modules.md#spl_mint_layout)

#### Defined in

[src/spl/layout.ts:13](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/spl/layout.ts#L13)

___

### SplTokens

Ƭ **SplTokens**: { `[iterator]`: () => `IterableIterator`<[`SplTokenInfo`](interfaces/SplTokenInfo.md)\>  } & { [T in string]: SplTokenInfo }

#### Defined in

[src/token/type.ts:25](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/token/type.ts#L25)

___

### SplTokensJsonInfo

Ƭ **SplTokensJsonInfo**: { `[iterator]`: () => `IterableIterator`<[`SplTokenJsonInfo`](interfaces/SplTokenJsonInfo.md)\>  } & { [T in string]: SplTokenJsonInfo }

#### Defined in

[src/token/type.ts:67](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/token/type.ts#L67)

___

### SwapSide

Ƭ **SwapSide**: ``"in"`` \| ``"out"``

#### Defined in

[src/liquidity/liquidity.ts:49](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/liquidity.ts#L49)

___

### TradeSource

Ƭ **TradeSource**: ``"amm"`` \| ``"serum"`` \| ``"stable"``

#### Defined in

[src/trade/trade.ts:11](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/trade/trade.ts#L11)

___

### UInt

Ƭ **UInt**<`T`, `P`\>: [`Layout`](modules.md#layout)<`T`, `P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `P` | ``""`` |

#### Defined in

[src/marshmallow/buffer-layout.ts:78](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/buffer-layout.ts#L78)

___

### Without

Ƭ **Without**<`T`, `U`\>: { [P in Exclude<keyof T, keyof U\>]?: never }

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[src/common/utility.ts:2](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/common/utility.ts#L2)

___

### XOR

Ƭ **XOR**<`T`, `U`\>: `T` \| `U` extends `object` ? [`Without`](modules.md#without)<`T`, `U`\> & `U` \| [`Without`](modules.md#without)<`U`, `T`\> & `T` : `T` \| `U`

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[src/common/utility.ts:4](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/common/utility.ts#L4)

## Variables

### ASSOCIATED\_TOKEN\_PROGRAM\_ID

• `Const` **ASSOCIATED\_TOKEN\_PROGRAM\_ID**: `PublicKey`

#### Defined in

node_modules/@solana/spl-token/lib/index.d.ts:15

___

### BitStructure

• **BitStructure**: `BitStructureConstructor`

#### Defined in

[src/marshmallow/buffer-layout.ts:74](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/buffer-layout.ts#L74)

___

### Blob

• **Blob**: `BlobConstructor`

#### Defined in

[src/marshmallow/buffer-layout.ts:90](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/buffer-layout.ts#L90)

___

### DEVNET\_FARM\_POOLS

• `Const` **DEVNET\_FARM\_POOLS**: [`FarmPoolBaseInfo`](interfaces/FarmPoolBaseInfo.md)[] = `[]`

#### Defined in

[src/farm/pool.ts:460](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/farm/pool.ts#L460)

___

### DEVNET\_LP\_TOKENS

• `Const` **DEVNET\_LP\_TOKENS**: [`LpTokens`](modules.md#lptokens)

#### Defined in

[src/token/devnet.ts:11](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/token/devnet.ts#L11)

___

### DEVNET\_OFFICIAL\_LIQUIDITY\_POOLS

• `Const` **DEVNET\_OFFICIAL\_LIQUIDITY\_POOLS**: `never`[] = `[]`

#### Defined in

[src/liquidity/pool.ts:291](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/pool.ts#L291)

___

### DEVNET\_SPL\_TOKENS

• `Const` **DEVNET\_SPL\_TOKENS**: [`SplTokens`](modules.md#spltokens)

#### Defined in

[src/token/devnet.ts:4](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/token/devnet.ts#L4)

___

### FARM\_LEDGER\_LAYOUT\_V3\_1

• `Const` **FARM\_LEDGER\_LAYOUT\_V3\_1**: [`Structure`](classes/Structure.md)<`PublicKey` \| `BN` \| `BN`[], ``""``, { `deposited`: `BN` ; `id`: `PublicKey` ; `owner`: `PublicKey` ; `rewardDebts`: `BN`[] ; `state`: `BN`  }\>

#### Defined in

[src/farm/layout.ts:81](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/farm/layout.ts#L81)

___

### FARM\_LEDGER\_LAYOUT\_V3\_2

• `Const` **FARM\_LEDGER\_LAYOUT\_V3\_2**: [`Structure`](classes/Structure.md)<`PublicKey` \| `BN` \| `BN`[], ``""``, { `deposited`: `BN` ; `id`: `PublicKey` ; `owner`: `PublicKey` ; `rewardDebts`: `BN`[] ; `state`: `BN`  }\>

#### Defined in

[src/farm/layout.ts:89](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/farm/layout.ts#L89)

___

### FARM\_LEDGER\_LAYOUT\_V5\_1

• `Const` **FARM\_LEDGER\_LAYOUT\_V5\_1**: [`Structure`](classes/Structure.md)<`PublicKey` \| `BN` \| `BN`[], ``""``, { `deposited`: `BN` ; `id`: `PublicKey` ; `owner`: `PublicKey` ; `rewardDebts`: `BN`[] ; `state`: `BN`  }\>

#### Defined in

[src/farm/layout.ts:98](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/farm/layout.ts#L98)

___

### FARM\_LEDGER\_LAYOUT\_V5\_2

• `Const` **FARM\_LEDGER\_LAYOUT\_V5\_2**: [`Structure`](classes/Structure.md)<`PublicKey` \| `BN` \| `BN`[], ``""``, { `deposited`: `BN` ; `id`: `PublicKey` ; `owner`: `PublicKey` ; `rewardDebts`: `BN`[] ; `state`: `BN`  }\>

#### Defined in

[src/farm/layout.ts:106](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/farm/layout.ts#L106)

___

### FARM\_PROGRAMID\_TO\_VERSION

• `Const` **FARM\_PROGRAMID\_TO\_VERSION**: `Object`

#### Index signature

▪ [key: `string`]: [`FarmVersion`](modules.md#farmversion)

#### Defined in

[src/farm/id.ts:12](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/farm/id.ts#L12)

___

### FARM\_PROGRAM\_ID\_V3

• `Const` **FARM\_PROGRAM\_ID\_V3**: `PublicKey`

#### Defined in

[src/farm/id.ts:7](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/farm/id.ts#L7)

___

### FARM\_PROGRAM\_ID\_V5

• `Const` **FARM\_PROGRAM\_ID\_V5**: `PublicKey`

#### Defined in

[src/farm/id.ts:9](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/farm/id.ts#L9)

___

### FARM\_STATE\_LAYOUT\_V3

• `Const` **FARM\_STATE\_LAYOUT\_V3**: [`Structure`](classes/Structure.md)<`PublicKey` \| `BN` \| `PublicKey`[] \| `BN`[], ``""``, { `lastSlot`: `BN` ; `lpVault`: `PublicKey` ; `nonce`: `BN` ; `perShareRewards`: `BN`[] ; `perSlotRewards`: `BN`[] ; `rewardVaults`: `PublicKey`[] ; `state`: `BN` ; `totalRewards`: `BN`[]  }\>

#### Defined in

[src/farm/layout.ts:12](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/farm/layout.ts#L12)

___

### FARM\_STATE\_LAYOUT\_V5

• `Const` **FARM\_STATE\_LAYOUT\_V5**: [`GetStructureFromLayoutSchema`](modules.md#getstructurefromlayoutschema)<{ `perShareRewards`: `BN`[] ; `perSlotRewards`: `BN`[] ; `rewardVaults`: `PublicKey`[] ; `totalRewards`: `BN`[]  } & { `lastSlot`: `BN` ; `lpVault`: `PublicKey` ; `nonce`: `BN` ; `option`: `number` ; `perShareRewardA`: `BN` ; `perShareRewardB`: `BN` ; `perSlotRewardA`: `BN` ; `perSlotRewardB`: `BN` ; `rewardVaultA`: `PublicKey` ; `rewardVaultB`: `PublicKey` ; `state`: `BN` ; `totalRewardA`: `BN` ; `totalRewardB`: `BN`  }\>

#### Defined in

[src/farm/layout.ts:45](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/farm/layout.ts#L45)

___

### FARM\_VERSION\_TO\_LEDGER\_LAYOUT

• `Const` **FARM\_VERSION\_TO\_LEDGER\_LAYOUT**: { [version in FarmVersion]?: FarmLedgerLayout } & { `[version: number]`: [`FarmLedgerLayout`](modules.md#farmledgerlayout);  }

#### Defined in

[src/farm/layout.ts:143](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/farm/layout.ts#L143)

___

### FARM\_VERSION\_TO\_PROGRAMID

• `Const` **FARM\_VERSION\_TO\_PROGRAMID**: { [key in FarmVersion]?: PublicKey } & { `[K: number]`: `PublicKey`;  }

#### Defined in

[src/farm/id.ts:20](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/farm/id.ts#L20)

___

### FARM\_VERSION\_TO\_STATE\_LAYOUT

• `Const` **FARM\_VERSION\_TO\_STATE\_LAYOUT**: { [version in FarmVersion]?: FarmStateLayout } & { `[version: number]`: [`FarmStateLayout`](modules.md#farmstatelayout);  }

#### Defined in

[src/farm/layout.ts:133](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/farm/layout.ts#L133)

___

### FIVE

• `Const` **FIVE**: `BN`

#### Defined in

[src/entity/constant.ts:13](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/entity/constant.ts#L13)

___

### LIQUIDITY\_FEES\_DENOMINATOR

• `Const` **LIQUIDITY\_FEES\_DENOMINATOR**: `BN`

#### Defined in

[src/liquidity/liquidity.ts:324](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/liquidity.ts#L324)

___

### LIQUIDITY\_FEES\_NUMERATOR

• `Const` **LIQUIDITY\_FEES\_NUMERATOR**: `BN`

#### Defined in

[src/liquidity/liquidity.ts:323](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/liquidity.ts#L323)

___

### LIQUIDITY\_PROGRAMID\_TO\_VERSION

• `Const` **LIQUIDITY\_PROGRAMID\_TO\_VERSION**: `Object`

#### Index signature

▪ [key: `string`]: [`LiquidityVersion`](modules.md#liquidityversion)

#### Defined in

[src/liquidity/id.ts:15](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/id.ts#L15)

___

### LIQUIDITY\_PROGRAM\_ID\_V4

• `Const` **LIQUIDITY\_PROGRAM\_ID\_V4**: `PublicKey`

#### Defined in

[src/liquidity/id.ts:9](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/id.ts#L9)

___

### LIQUIDITY\_PROGRAM\_ID\_V5

• `Const` **LIQUIDITY\_PROGRAM\_ID\_V5**: `PublicKey`

#### Defined in

[src/liquidity/id.ts:12](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/id.ts#L12)

___

### LIQUIDITY\_STATE\_LAYOUT\_V4

• `Const` **LIQUIDITY\_STATE\_LAYOUT\_V4**: [`Structure`](classes/Structure.md)<`PublicKey` \| `BN`, ``""``, { `amountWaveRatio`: `BN` ; `baseDecimal`: `BN` ; `baseLotSize`: `BN` ; `baseMint`: `PublicKey` ; `baseNeedTakePnl`: `BN` ; `baseTotalDeposited`: `BN` ; `baseTotalPnl`: `BN` ; `baseVault`: `PublicKey` ; `depth`: `BN` ; `lpMint`: `PublicKey` ; `lpVault`: `PublicKey` ; `marketId`: `PublicKey` ; `marketProgramId`: `PublicKey` ; `maxOrder`: `BN` ; `maxPriceMultiplier`: `BN` ; `minPriceMultiplier`: `BN` ; `minSeparateDenominator`: `BN` ; `minSeparateNumerator`: `BN` ; `minSize`: `BN` ; `nonce`: `BN` ; `openOrders`: `PublicKey` ; `owner`: `PublicKey` ; `pnlDenominator`: `BN` ; `pnlNumerator`: `BN` ; `pnlOwner`: `PublicKey` ; `quoteDecimal`: `BN` ; `quoteLotSize`: `BN` ; `quoteMint`: `PublicKey` ; `quoteNeedTakePnl`: `BN` ; `quoteTotalDeposited`: `BN` ; `quoteTotalPnl`: `BN` ; `quoteVault`: `PublicKey` ; `resetFlag`: `BN` ; `state`: `BN` ; `status`: `BN` ; `swapBase2QuoteFee`: `BN` ; `swapBaseInAmount`: `BN` ; `swapBaseOutAmount`: `BN` ; `swapFeeDenominator`: `BN` ; `swapFeeNumerator`: `BN` ; `swapQuote2BaseFee`: `BN` ; `swapQuoteInAmount`: `BN` ; `swapQuoteOutAmount`: `BN` ; `systemDecimalValue`: `BN` ; `targetOrders`: `PublicKey` ; `tradeFeeDenominator`: `BN` ; `tradeFeeNumerator`: `BN` ; `volMaxCutRatio`: `BN` ; `withdrawQueue`: `PublicKey`  }\>

#### Defined in

[src/liquidity/layout.ts:4](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/layout.ts#L4)

___

### LIQUIDITY\_STATE\_LAYOUT\_V5

• `Const` **LIQUIDITY\_STATE\_LAYOUT\_V5**: [`Structure`](classes/Structure.md)<`PublicKey` \| `BN` \| `BN`[], ``""``, { `abortTradeFactor`: `BN` ; `accountType`: `BN` ; `amountWaveRatio`: `BN` ; `baseDecimal`: `BN` ; `baseLotSize`: `BN` ; `baseMint`: `PublicKey` ; `baseNeedTakePnl`: `BN` ; `baseTotalPnl`: `BN` ; `baseVault`: `PublicKey` ; `depth`: `BN` ; `lpMint`: `PublicKey` ; `marketId`: `PublicKey` ; `marketProgramId`: `PublicKey` ; `maxOrder`: `BN` ; `maxPriceMultiplier`: `BN` ; `minPriceMultiplier`: `BN` ; `minSeparateDenominator`: `BN` ; `minSeparateNumerator`: `BN` ; `minSize`: `BN` ; `modelDataAccount`: `PublicKey` ; `nonce`: `BN` ; `openOrders`: `PublicKey` ; `orderbookToInitTime`: `BN` ; `owner`: `PublicKey` ; `padding`: `BN`[] ; `pnlDenominator`: `BN` ; `pnlNumerator`: `BN` ; `poolOpenTime`: `BN` ; `priceTick`: `BN` ; `priceTickMultiplier`: `BN` ; `punishCoinAmount`: `BN` ; `punishPcAmount`: `BN` ; `quoteDecimal`: `BN` ; `quoteLotSize`: `BN` ; `quoteMint`: `PublicKey` ; `quoteNeedTakePnl`: `BN` ; `quoteTotalPnl`: `BN` ; `quoteVault`: `PublicKey` ; `resetFlag`: `BN` ; `state`: `BN` ; `status`: `BN` ; `swapBase2QuoteFee`: `BN` ; `swapBaseInAmount`: `BN` ; `swapBaseOutAmount`: `BN` ; `swapFeeDenominator`: `BN` ; `swapFeeNumerator`: `BN` ; `swapQuote2BaseFee`: `BN` ; `swapQuoteInAmount`: `BN` ; `swapQuoteOutAmount`: `BN` ; `systemDecimalsValue`: `BN` ; `targetOrders`: `PublicKey` ; `tradeFeeDenominator`: `BN` ; `tradeFeeNumerator`: `BN` ; `volMaxCutRatio`: `BN`  }\>

#### Defined in

[src/liquidity/layout.ts:62](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/layout.ts#L62)

___

### LIQUIDITY\_VERSION\_TO\_PROGRAMID

• `Const` **LIQUIDITY\_VERSION\_TO\_PROGRAMID**: { [key in LiquidityVersion]?: PublicKey } & { `[K: number]`: `PublicKey`;  }

#### Defined in

[src/liquidity/id.ts:23](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/id.ts#L23)

___

### LIQUIDITY\_VERSION\_TO\_SERUM\_VERSION

• `Const` **LIQUIDITY\_VERSION\_TO\_SERUM\_VERSION**: { [key in LiquidityVersion]?: SerumVersion } & { `[K: number]`: [`SerumVersion`](modules.md#serumversion);  }

#### Defined in

[src/liquidity/id.ts:31](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/id.ts#L31)

___

### LIQUIDITY\_VERSION\_TO\_STATE\_LAYOUT

• `Const` **LIQUIDITY\_VERSION\_TO\_STATE\_LAYOUT**: `Object`

#### Index signature

▪ [version: `number`]: [`LiquidityStateLayout`](modules.md#liquiditystatelayout)

#### Defined in

[src/liquidity/layout.ts:131](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/layout.ts#L131)

___

### Layout

• **Layout**: [`LayoutConstructor`](interfaces/LayoutConstructor.md)

#### Defined in

[src/marshmallow/buffer-layout.ts:25](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/buffer-layout.ts#L25)

___

### MAINNET\_FARM\_POOLS

• `Const` **MAINNET\_FARM\_POOLS**: [`FarmPoolBaseInfo`](interfaces/FarmPoolBaseInfo.md)[]

#### Defined in

[src/farm/pool.ts:5](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/farm/pool.ts#L5)

___

### MAINNET\_LP\_TOKENS

• `Const` **MAINNET\_LP\_TOKENS**: [`LpTokens`](modules.md#lptokens)

#### Defined in

[src/token/mainnet.ts:1103](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/token/mainnet.ts#L1103)

___

### MAINNET\_OFFICIAL\_LIQUIDITY\_POOLS

• `Const` **MAINNET\_OFFICIAL\_LIQUIDITY\_POOLS**: `string`[]

#### Defined in

[src/liquidity/pool.ts:1](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/pool.ts#L1)

___

### MAINNET\_SPL\_TOKENS

• `Const` **MAINNET\_SPL\_TOKENS**: [`SplTokens`](modules.md#spltokens)

#### Defined in

[src/token/mainnet.ts:4](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/token/mainnet.ts#L4)

___

### MARKET\_STATE\_LAYOUT\_V3

• `Const` **MARKET\_STATE\_LAYOUT\_V3**: [`Structure`](classes/Structure.md)<`PublicKey` \| `BN` \| `Buffer`, ``""``, { `asks`: `PublicKey` ; `baseDepositsTotal`: `BN` ; `baseFeesAccrued`: `BN` ; `baseLotSize`: `BN` ; `baseMint`: `PublicKey` ; `baseVault`: `PublicKey` ; `bids`: `PublicKey` ; `eventQueue`: `PublicKey` ; `feeRateBps`: `BN` ; `ownAddress`: `PublicKey` ; `quoteDepositsTotal`: `BN` ; `quoteDustThreshold`: `BN` ; `quoteFeesAccrued`: `BN` ; `quoteLotSize`: `BN` ; `quoteMint`: `PublicKey` ; `quoteVault`: `PublicKey` ; `referrerRebatesAccrued`: `BN` ; `requestQueue`: `PublicKey` ; `vaultSignerNonce`: `BN`  }\>

#### Defined in

[src/serum/layout.ts:4](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/serum/layout.ts#L4)

___

### MARKET\_VERSION\_TO\_STATE\_LAYOUT

• `Const` **MARKET\_VERSION\_TO\_STATE\_LAYOUT**: `Object`

#### Index signature

▪ [version: `number`]: [`MarketStateLayout`](modules.md#marketstatelayout)

#### Defined in

[src/serum/layout.ts:50](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/serum/layout.ts#L50)

___

### MEMO\_PROGRAM\_ID

• `Const` **MEMO\_PROGRAM\_ID**: `PublicKey`

#### Defined in

[src/common/pubkey.ts:12](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/common/pubkey.ts#L12)

___

### ONE

• `Const` **ONE**: `BN`

#### Defined in

[src/entity/constant.ts:10](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/entity/constant.ts#L10)

___

### REAL\_FARM\_STATE\_LAYOUT\_V5

• `Const` **REAL\_FARM\_STATE\_LAYOUT\_V5**: [`Structure`](classes/Structure.md)<`number` \| `PublicKey` \| `BN` \| `Buffer`, ``""``, { `lastSlot`: `BN` ; `lpVault`: `PublicKey` ; `nonce`: `BN` ; `option`: `number` ; `perShareRewardA`: `BN` ; `perShareRewardB`: `BN` ; `perSlotRewardA`: `BN` ; `perSlotRewardB`: `BN` ; `rewardVaultA`: `PublicKey` ; `rewardVaultB`: `PublicKey` ; `state`: `BN` ; `totalRewardA`: `BN` ; `totalRewardB`: `BN`  }\>

#### Defined in

[src/farm/layout.ts:27](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/farm/layout.ts#L27)

___

### ROUTE\_PROGRAMID\_TO\_VERSION

• `Const` **ROUTE\_PROGRAMID\_TO\_VERSION**: `Object`

#### Index signature

▪ [key: `string`]: [`RouteVersion`](modules.md#routeversion)

#### Defined in

[src/route/id.ts:12](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/route/id.ts#L12)

___

### ROUTE\_PROGRAM\_ID\_V1

• `Const` **ROUTE\_PROGRAM\_ID\_V1**: `PublicKey`

#### Defined in

[src/route/id.ts:9](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/route/id.ts#L9)

___

### ROUTE\_VERSION\_TO\_LIQUIDITY\_VERSION

• `Const` **ROUTE\_VERSION\_TO\_LIQUIDITY\_VERSION**: { [key in RouteVersion]?: LiquidityVersion } & { `[K: number]`: [`LiquidityVersion`](modules.md#liquidityversion);  }

#### Defined in

[src/route/id.ts:26](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/route/id.ts#L26)

___

### ROUTE\_VERSION\_TO\_PROGRAMID

• `Const` **ROUTE\_VERSION\_TO\_PROGRAMID**: { [key in RouteVersion]?: PublicKey } & { `[K: number]`: `PublicKey`;  }

#### Defined in

[src/route/id.ts:19](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/route/id.ts#L19)

___

### SERUM\_PROGRAMID\_TO\_VERSION

• `Const` **SERUM\_PROGRAMID\_TO\_VERSION**: `Object`

#### Index signature

▪ [key: `string`]: [`SerumVersion`](modules.md#serumversion)

#### Defined in

[src/serum/id.ts:10](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/serum/id.ts#L10)

___

### SERUM\_PROGRAM\_ID\_V3

• `Const` **SERUM\_PROGRAM\_ID\_V3**: `PublicKey`

#### Defined in

[src/serum/id.ts:7](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/serum/id.ts#L7)

___

### SERUM\_VERSION\_TO\_PROGRAMID

• `Const` **SERUM\_VERSION\_TO\_PROGRAMID**: { [key in SerumVersion]?: PublicKey } & { `[K: number]`: `PublicKey`;  }

#### Defined in

[src/serum/id.ts:17](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/serum/id.ts#L17)

___

### SOL

• `Const` **SOL**: [`NativeTokenInfo`](interfaces/NativeTokenInfo.md)

#### Defined in

[src/token/sol.ts:3](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/token/sol.ts#L3)

___

### SPL\_ACCOUNT\_LAYOUT

• `Const` **SPL\_ACCOUNT\_LAYOUT**: [`Structure`](classes/Structure.md)<`number` \| `PublicKey` \| `BN`, ``""``, { `amount`: `BN` ; `closeAuthority`: `PublicKey` ; `closeAuthorityOption`: `number` ; `delegate`: `PublicKey` ; `delegateOption`: `number` ; `delegatedAmount`: `BN` ; `isNative`: `BN` ; `isNativeOption`: `number` ; `mint`: `PublicKey` ; `owner`: `PublicKey` ; `state`: `number`  }\>

#### Defined in

[src/spl/layout.ts:18](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/spl/layout.ts#L18)

___

### SPL\_MINT\_LAYOUT

• `Const` **SPL\_MINT\_LAYOUT**: [`Structure`](classes/Structure.md)<`number` \| `PublicKey` \| `BN`, ``""``, { `decimals`: `number` ; `freezeAuthority`: `PublicKey` ; `freezeAuthorityOption`: `number` ; `isInitialized`: `number` ; `mintAuthority`: `PublicKey` ; `mintAuthorityOption`: `number` ; `supply`: `BN`  }\>

#### Defined in

[src/spl/layout.ts:3](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/spl/layout.ts#L3)

___

### SYSTEM\_PROGRAM\_ID

• `Const` **SYSTEM\_PROGRAM\_ID**: `PublicKey` = `SystemProgram.programId`

#### Defined in

[src/common/pubkey.ts:11](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/common/pubkey.ts#L11)

___

### SYSVAR\_CLOCK\_PUBKEY

• `Const` **SYSVAR\_CLOCK\_PUBKEY**: `PublicKey`

#### Defined in

node_modules/@solana/web3.js/lib/index.d.ts:3240

___

### SYSVAR\_RENT\_PUBKEY

• `Const` **SYSVAR\_RENT\_PUBKEY**: `PublicKey`

#### Defined in

node_modules/@solana/web3.js/lib/index.d.ts:3244

___

### TEN

• `Const` **TEN**: `BN`

#### Defined in

[src/entity/constant.ts:14](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/entity/constant.ts#L14)

___

### TESTNET\_FARM\_POOLS

• `Const` **TESTNET\_FARM\_POOLS**: [`FarmPoolBaseInfo`](interfaces/FarmPoolBaseInfo.md)[] = `[]`

#### Defined in

[src/farm/pool.ts:458](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/farm/pool.ts#L458)

___

### TESTNET\_LP\_TOKENS

• `Const` **TESTNET\_LP\_TOKENS**: [`LpTokens`](modules.md#lptokens)

#### Defined in

[src/token/testnet.ts:11](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/token/testnet.ts#L11)

___

### TESTNET\_OFFICIAL\_LIQUIDITY\_POOLS

• `Const` **TESTNET\_OFFICIAL\_LIQUIDITY\_POOLS**: `never`[] = `[]`

#### Defined in

[src/liquidity/pool.ts:289](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/pool.ts#L289)

___

### TESTNET\_SPL\_TOKENS

• `Const` **TESTNET\_SPL\_TOKENS**: [`SplTokens`](modules.md#spltokens)

#### Defined in

[src/token/testnet.ts:4](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/token/testnet.ts#L4)

___

### THREE

• `Const` **THREE**: `BN`

#### Defined in

[src/entity/constant.ts:12](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/entity/constant.ts#L12)

___

### TOKEN\_PROGRAM\_ID

• `Const` **TOKEN\_PROGRAM\_ID**: `PublicKey`

#### Defined in

node_modules/@solana/spl-token/lib/index.d.ts:14

___

### TWO

• `Const` **TWO**: `BN`

#### Defined in

[src/entity/constant.ts:11](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/entity/constant.ts#L11)

___

### UInt

• **UInt**: `UIntConstructor`

#### Defined in

[src/marshmallow/buffer-layout.ts:82](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/buffer-layout.ts#L82)

___

### WSOL

• `Const` **WSOL**: [`SplTokenInfo`](interfaces/SplTokenInfo.md)

#### Defined in

[src/token/sol.ts:9](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/token/sol.ts#L9)

___

### ZERO

• `Const` **ZERO**: `BN`

#### Defined in

[src/entity/constant.ts:9](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/entity/constant.ts#L9)

___

### \_100

• `Const` **\_100**: `BN`

#### Defined in

[src/entity/constant.ts:15](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/entity/constant.ts#L15)

___

### \_1000

• `Const` **\_1000**: `BN`

#### Defined in

[src/entity/constant.ts:16](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/entity/constant.ts#L16)

___

### \_10000

• `Const` **\_10000**: `BN`

#### Defined in

[src/entity/constant.ts:17](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/entity/constant.ts#L17)

___

### \_100\_PERCENT

• `Const` **\_100\_PERCENT**: [`Fraction`](classes/Fraction.md)

#### Defined in

[src/entity/percent.ts:4](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/entity/percent.ts#L4)

___

### \_FARM\_PROGRAM\_ID\_V3

• `Const` **\_FARM\_PROGRAM\_ID\_V3**: ``"EhhTKczWMGQt46ynNeRX1WfeagwwJd7ufHvCDjRxjo5Q"``

#### Defined in

[src/farm/id.ts:6](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/farm/id.ts#L6)

___

### \_FARM\_PROGRAM\_ID\_V5

• `Const` **\_FARM\_PROGRAM\_ID\_V5**: ``"9KEPoZmtHUrBbhWN1v1KWLMkkvwY6WLtAVUCPRtRjP4z"``

#### Defined in

[src/farm/id.ts:8](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/farm/id.ts#L8)

___

### \_LIQUIDITY\_PROGRAM\_ID\_V4

• `Const` **\_LIQUIDITY\_PROGRAM\_ID\_V4**: ``"675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8"``

#### Defined in

[src/liquidity/id.ts:8](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/id.ts#L8)

___

### \_LIQUIDITY\_PROGRAM\_ID\_V5

• `Const` **\_LIQUIDITY\_PROGRAM\_ID\_V5**: ``"5quBtoiQqxF9Jv6KYKctB59NT3gtJD2Y65kdnB1Uev3h"``

#### Defined in

[src/liquidity/id.ts:11](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/id.ts#L11)

___

### \_ROUTE\_PROGRAM\_ID\_V1

• `Const` **\_ROUTE\_PROGRAM\_ID\_V1**: ``"routeUGWgWzqBWFcrCfv8tritsqukccJPu3q5GPP3xS"``

#### Defined in

[src/route/id.ts:8](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/route/id.ts#L8)

___

### \_SERUM\_PROGRAM\_ID\_V3

• `Const` **\_SERUM\_PROGRAM\_ID\_V3**: ``"9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin"``

#### Defined in

[src/serum/id.ts:6](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/serum/id.ts#L6)

## Functions

### AccountMeta

▸ **AccountMeta**(`publicKey`, `isSigner`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | `PublicKey` |
| `isSigner` | `boolean` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `isSigner` | `boolean` |
| `isWritable` | `boolean` |
| `pubkey` | `PublicKey` |

#### Defined in

[src/common/pubkey.ts:39](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/common/pubkey.ts#L39)

___

### AccountMetaReadonly

▸ **AccountMetaReadonly**(`publicKey`, `isSigner`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | `PublicKey` |
| `isSigner` | `boolean` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `isSigner` | `boolean` |
| `isWritable` | `boolean` |
| `pubkey` | `PublicKey` |

#### Defined in

[src/common/pubkey.ts:47](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/common/pubkey.ts#L47)

___

### array

▸ **array**<`T`, `P`\>(`elementLayout`, `length`, `property?`): [`Layout`](modules.md#layout)<`T`[], `P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `P` | extends `string` = ``""`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `elementLayout` | [`Layout`](modules.md#layout)<`T`, ``""``\> |
| `length` | `number` |
| `property?` | `P` |

#### Returns

[`Layout`](modules.md#layout)<`T`[], `P`\>

#### Defined in

[src/marshmallow/index.ts:249](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/index.ts#L249)

___

### bits

▸ **bits**<`T`, `P`\>(`word`, `msb?`, `property?`): [`BitStructure`](modules.md#bitstructure-1)<`T`, `P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `P` | extends `string` = ``""`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `word` | [`Layout`](modules.md#layout)<`T`, ``""``\> |
| `msb?` | `boolean` |
| `property?` | `P` |

#### Returns

[`BitStructure`](modules.md#bitstructure-1)<`T`, `P`\>

#### Defined in

[src/marshmallow/buffer-layout.ts:157](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/buffer-layout.ts#L157)

___

### blob

▸ **blob**<`P`\>(`length`, `property?`): [`Blob`](modules.md#blob-1)<`P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `string` = ``""`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `length` | `number` \| [`Layout`](modules.md#layout)<`number`, `P`\> |
| `property?` | `P` |

#### Returns

[`Blob`](modules.md#blob-1)<`P`\>

#### Defined in

[src/marshmallow/buffer-layout.ts:154](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/buffer-layout.ts#L154)

___

### bool

▸ **bool**<`P`\>(`property?`): [`Layout`](modules.md#layout)<`boolean`, `P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `string` = ``""`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `property?` | `P` |

#### Returns

[`Layout`](modules.md#layout)<`boolean`, `P`\>

#### Defined in

[src/marshmallow/index.ts:175](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/index.ts#L175)

___

### chunkArray

▸ **chunkArray**<`T`\>(`arr`, `chunkSize?`, `cache?`): `T`[][]

https://youmightnotneed.com/lodash/

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `arr` | `T`[] | `undefined` |
| `chunkSize` | `number` | `1` |
| `cache` | `T`[][] | `[]` |

#### Returns

`T`[][]

#### Defined in

[src/common/lodash.ts:5](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/common/lodash.ts#L5)

___

### cstr

▸ **cstr**<`P`\>(`property?`): [`Layout`](modules.md#layout)<`string`, `P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `string` = ``""`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `property?` | `P` |

#### Returns

[`Layout`](modules.md#layout)<`string`, `P`\>

#### Defined in

[src/marshmallow/buffer-layout.ts:155](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/buffer-layout.ts#L155)

___

### currencyEquals

▸ **currencyEquals**(`currencyA`, `currencyB`): `boolean`

Compares two currencies for equality

#### Parameters

| Name | Type |
| :------ | :------ |
| `currencyA` | [`Currency`](classes/Currency.md) |
| `currencyB` | [`Currency`](classes/Currency.md) |

#### Returns

`boolean`

#### Defined in

[src/entity/currency.ts:118](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/entity/currency.ts#L118)

___

### decodeBool

▸ **decodeBool**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`boolean`

#### Defined in

[src/marshmallow/index.ts:179](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/index.ts#L179)

___

### divCeil

▸ **divCeil**(`a`, `b`): `BN`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `BN` |
| `b` | `BN` |

#### Returns

`BN`

#### Defined in

[src/entity/bignumber.ts:54](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/entity/bignumber.ts#L54)

___

### encodeBool

▸ **encodeBool**(`value`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`number`

#### Defined in

[src/marshmallow/index.ts:188](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/index.ts#L188)

___

### f32

▸ **f32**<`P`\>(`property?`): [`Layout`](modules.md#layout)<`number`, `P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `string` = ``""`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `property?` | `P` |

#### Returns

[`Layout`](modules.md#layout)<`number`, `P`\>

#### Defined in

[src/marshmallow/buffer-layout.ts:120](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/buffer-layout.ts#L120)

___

### f32be

▸ **f32be**<`P`\>(`property?`): [`Layout`](modules.md#layout)<`number`, `P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `string` = ``""`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `property?` | `P` |

#### Returns

[`Layout`](modules.md#layout)<`number`, `P`\>

#### Defined in

[src/marshmallow/buffer-layout.ts:121](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/buffer-layout.ts#L121)

___

### f64

▸ **f64**<`P`\>(`property?`): [`Layout`](modules.md#layout)<`number`, `P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `string` = ``""`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `property?` | `P` |

#### Returns

[`Layout`](modules.md#layout)<`number`, `P`\>

#### Defined in

[src/marshmallow/buffer-layout.ts:122](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/buffer-layout.ts#L122)

___

### f64be

▸ **f64be**<`P`\>(`property?`): [`Layout`](modules.md#layout)<`number`, `P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `string` = ``""`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `property?` | `P` |

#### Returns

[`Layout`](modules.md#layout)<`number`, `P`\>

#### Defined in

[src/marshmallow/buffer-layout.ts:123](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/buffer-layout.ts#L123)

___

### findProgramAddress

▸ **findProgramAddress**(`seeds`, `programId`): `Promise`<{ `nonce`: `number` ; `publicKey`: `PublicKey`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `seeds` | (`Buffer` \| `Uint8Array`)[] |
| `programId` | `PublicKey` |

#### Returns

`Promise`<{ `nonce`: `number` ; `publicKey`: `PublicKey`  }\>

#### Defined in

[src/common/pubkey.ts:34](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/common/pubkey.ts#L34)

___

### forecastTransactionSize

▸ **forecastTransactionSize**(`instructions`, `signers`): `number`

Forecast transaction size

#### Parameters

| Name | Type |
| :------ | :------ |
| `instructions` | `TransactionInstruction`[] |
| `signers` | `PublicKey`[] |

#### Returns

`number`

#### Defined in

[src/common/web3.ts:184](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/common/web3.ts#L184)

___

### getMultipleAccountsInfo

▸ **getMultipleAccountsInfo**(`connection`, `publicKeys`, `config?`): `Promise`<(`AccountInfo`<`Buffer`\> \| ``null``)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `connection` | `Connection` |
| `publicKeys` | `PublicKey`[] |
| `config?` | [`GetMultipleAccountsInfoConfig`](interfaces/GetMultipleAccountsInfoConfig.md) |

#### Returns

`Promise`<(`AccountInfo`<`Buffer`\> \| ``null``)[]\>

#### Defined in

[src/common/web3.ts:36](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/common/web3.ts#L36)

___

### getMultipleAccountsInfoWithCustomFlags

▸ **getMultipleAccountsInfoWithCustomFlags**<`T`\>(`connection`, `publicKeysWithCustomFlag`, `config?`): `Promise`<{ `accountInfo`: `AccountInfo`<`Buffer`\> \| ``null``  } & `T`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `connection` | `Connection` |
| `publicKeysWithCustomFlag` | `T`[] |
| `config?` | [`GetMultipleAccountsInfoConfig`](interfaces/GetMultipleAccountsInfoConfig.md) |

#### Returns

`Promise`<{ `accountInfo`: `AccountInfo`<`Buffer`\> \| ``null``  } & `T`[]\>

#### Defined in

[src/common/web3.ts:108](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/common/web3.ts#L108)

___

### greedy

▸ **greedy**<`P`\>(`elementSpan?`, `property?`): [`Layout`](modules.md#layout)<`number`, `P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `string` = ``""`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `elementSpan?` | `number` |
| `property?` | `P` |

#### Returns

[`Layout`](modules.md#layout)<`number`, `P`\>

#### Defined in

[src/marshmallow/buffer-layout.ts:93](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/buffer-layout.ts#L93)

___

### i128

▸ **i128**<`P`\>(`property?`): [`BNLayout`](classes/BNLayout.md)<`P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `string` = ``""`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `property?` | `P` |

#### Returns

[`BNLayout`](classes/BNLayout.md)<`P`\>

#### Defined in

[src/marshmallow/index.ts:92](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/index.ts#L92)

___

### i64

▸ **i64**<`P`\>(`property?`): [`BNLayout`](classes/BNLayout.md)<`P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `string` = ``""`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `property?` | `P` |

#### Returns

[`BNLayout`](classes/BNLayout.md)<`P`\>

#### Defined in

[src/marshmallow/index.ts:88](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/index.ts#L88)

___

### inspectAll

▸ **inspectAll**(): `void`

#### Returns

`void`

#### Defined in

[src/common/inspect.ts:49](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/common/inspect.ts#L49)

___

### inspectBN

▸ **inspectBN**(): `void`

#### Returns

`void`

#### Defined in

[src/common/inspect.ts:26](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/common/inspect.ts#L26)

___

### inspectCurrency

▸ **inspectCurrency**(): `void`

#### Returns

`void`

#### Defined in

[src/entity/currency.ts:37](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/entity/currency.ts#L37)

___

### inspectPublicKey

▸ **inspectPublicKey**(): `void`

#### Returns

`void`

#### Defined in

[src/common/inspect.ts:6](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/common/inspect.ts#L6)

___

### inspectToken

▸ **inspectToken**(): `void`

#### Returns

`void`

#### Defined in

[src/entity/currency.ts:88](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/entity/currency.ts#L88)

___

### intersection

▸ **intersection**<`T`\>(`arr`, ...`args`): `T`[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `T`[] |
| `...args` | `T`[][] |

#### Returns

`T`[]

#### Defined in

[src/common/lodash.ts:12](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/common/lodash.ts#L12)

___

### jsonInfo2PoolKeys

▸ **jsonInfo2PoolKeys**<`T`\>(`jsonInfo`): [`ReplaceType`](modules.md#replacetype)<`T`, `string`, `PublicKey`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonInfo` | `T` |

#### Returns

[`ReplaceType`](modules.md#replacetype)<`T`, `string`, `PublicKey`\>

#### Defined in

[src/common/convert-json.ts:44](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/common/convert-json.ts#L44)

___

### ns64

▸ **ns64**<`P`\>(`property?`): [`Layout`](modules.md#layout)<`number`, `P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `string` = ``""`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `property?` | `P` |

#### Returns

[`Layout`](modules.md#layout)<`number`, `P`\>

#### Defined in

[src/marshmallow/buffer-layout.ts:113](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/buffer-layout.ts#L113)

___

### ns64be

▸ **ns64be**<`P`\>(`property?`): [`Layout`](modules.md#layout)<`number`, `P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `string` = ``""`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `property?` | `P` |

#### Returns

[`Layout`](modules.md#layout)<`number`, `P`\>

#### Defined in

[src/marshmallow/buffer-layout.ts:119](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/buffer-layout.ts#L119)

___

### nu64

▸ **nu64**<`P`\>(`property?`): [`Layout`](modules.md#layout)<`number`, `P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `string` = ``""`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `property?` | `P` |

#### Returns

[`Layout`](modules.md#layout)<`number`, `P`\>

#### Defined in

[src/marshmallow/buffer-layout.ts:100](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/buffer-layout.ts#L100)

___

### nu64be

▸ **nu64be**<`P`\>(`property?`): [`Layout`](modules.md#layout)<`number`, `P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `string` = ``""`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `property?` | `P` |

#### Returns

[`Layout`](modules.md#layout)<`number`, `P`\>

#### Defined in

[src/marshmallow/buffer-layout.ts:106](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/buffer-layout.ts#L106)

___

### offset

▸ **offset**<`T`, `P`\>(`layout`, `offset?`, `property?`): [`Layout`](modules.md#layout)<`T`, `P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `P` | extends `string` = ``""`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `layout` | [`Layout`](modules.md#layout)<`T`, `P`\> |
| `offset?` | `number` |
| `property?` | `P` |

#### Returns

[`Layout`](modules.md#layout)<`T`, `P`\>

#### Defined in

[src/marshmallow/buffer-layout.ts:162](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/buffer-layout.ts#L162)

___

### option

▸ **option**<`T`, `P`\>(`layout`, `property?`): [`Layout`](modules.md#layout)<`T` \| ``null``, `P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `P` | extends `string` = ``""`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `layout` | [`Layout`](modules.md#layout)<`T`, ``""``\> |
| `property?` | `P` |

#### Returns

[`Layout`](modules.md#layout)<`T` \| ``null``, `P`\>

#### Defined in

[src/marshmallow/index.ts:171](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/index.ts#L171)

___

### parseBigNumberish

▸ **parseBigNumberish**(`value`): `BN`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`BigNumberish`](modules.md#bignumberish) |

#### Returns

`BN`

#### Defined in

[src/entity/bignumber.ts:13](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/entity/bignumber.ts#L13)

___

### parseSimulateLogToJson

▸ **parseSimulateLogToJson**(`log`, `keyword`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `log` | `string` |
| `keyword` | `string` |

#### Returns

`string`

#### Defined in

[src/common/web3.ts:263](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/common/web3.ts#L263)

___

### parseSimulateValue

▸ **parseSimulateValue**(`log`, `key`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `log` | `string` |
| `key` | `string` |

#### Returns

`string`

#### Defined in

[src/common/web3.ts:272](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/common/web3.ts#L272)

___

### poolKeys2JsonInfo

▸ **poolKeys2JsonInfo**<`T`\>(`jsonInfo`): [`ReplaceType`](modules.md#replacetype)<`T`, `PublicKey`, `string`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonInfo` | `T` |

#### Returns

[`ReplaceType`](modules.md#replacetype)<`T`, `PublicKey`, `string`\>

#### Defined in

[src/common/convert-json.ts:59](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/common/convert-json.ts#L59)

___

### publicKey

▸ **publicKey**<`P`\>(`property?`): [`Layout`](modules.md#layout)<`PublicKey`, `P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `string` = ``""`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `property?` | `P` |

#### Returns

[`Layout`](modules.md#layout)<`PublicKey`, `P`\>

#### Defined in

[src/marshmallow/index.ts:122](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/index.ts#L122)

___

### rustEnum

▸ **rustEnum**<`T`, `P`\>(`variants`, `property?`): [`EnumLayout`](interfaces/EnumLayout.md)<`T`, `P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `P` | extends `string` = ``""`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `variants` | [`Layout`](modules.md#layout)<`any`, ``""``\>[] |
| `property?` | `P` |

#### Returns

[`EnumLayout`](interfaces/EnumLayout.md)<`T`, `P`\>

#### Defined in

[src/marshmallow/index.ts:243](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/index.ts#L243)

___

### s16

▸ **s16**<`P`\>(`property?`): [`Layout`](modules.md#layout)<`number`, `P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `string` = ``""`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `property?` | `P` |

#### Returns

[`Layout`](modules.md#layout)<`number`, `P`\>

#### Defined in

[src/marshmallow/buffer-layout.ts:108](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/buffer-layout.ts#L108)

___

### s16be

▸ **s16be**<`P`\>(`property?`): [`Layout`](modules.md#layout)<`number`, `P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `string` = ``""`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `property?` | `P` |

#### Returns

[`Layout`](modules.md#layout)<`number`, `P`\>

#### Defined in

[src/marshmallow/buffer-layout.ts:114](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/buffer-layout.ts#L114)

___

### s24

▸ **s24**<`P`\>(`property?`): [`Layout`](modules.md#layout)<`number`, `P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `string` = ``""`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `property?` | `P` |

#### Returns

[`Layout`](modules.md#layout)<`number`, `P`\>

#### Defined in

[src/marshmallow/buffer-layout.ts:109](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/buffer-layout.ts#L109)

___

### s24be

▸ **s24be**<`P`\>(`property?`): [`Layout`](modules.md#layout)<`number`, `P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `string` = ``""`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `property?` | `P` |

#### Returns

[`Layout`](modules.md#layout)<`number`, `P`\>

#### Defined in

[src/marshmallow/buffer-layout.ts:115](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/buffer-layout.ts#L115)

___

### s32

▸ **s32**<`P`\>(`property?`): [`Layout`](modules.md#layout)<`number`, `P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `string` = ``""`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `property?` | `P` |

#### Returns

[`Layout`](modules.md#layout)<`number`, `P`\>

#### Defined in

[src/marshmallow/buffer-layout.ts:110](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/buffer-layout.ts#L110)

___

### s32be

▸ **s32be**<`P`\>(`property?`): [`Layout`](modules.md#layout)<`number`, `P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `string` = ``""`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `property?` | `P` |

#### Returns

[`Layout`](modules.md#layout)<`number`, `P`\>

#### Defined in

[src/marshmallow/buffer-layout.ts:116](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/buffer-layout.ts#L116)

___

### s40

▸ **s40**<`P`\>(`property?`): [`Layout`](modules.md#layout)<`number`, `P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `string` = ``""`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `property?` | `P` |

#### Returns

[`Layout`](modules.md#layout)<`number`, `P`\>

#### Defined in

[src/marshmallow/buffer-layout.ts:111](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/buffer-layout.ts#L111)

___

### s40be

▸ **s40be**<`P`\>(`property?`): [`Layout`](modules.md#layout)<`number`, `P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `string` = ``""`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `property?` | `P` |

#### Returns

[`Layout`](modules.md#layout)<`number`, `P`\>

#### Defined in

[src/marshmallow/buffer-layout.ts:117](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/buffer-layout.ts#L117)

___

### s48

▸ **s48**<`P`\>(`property?`): [`Layout`](modules.md#layout)<`number`, `P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `string` = ``""`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `property?` | `P` |

#### Returns

[`Layout`](modules.md#layout)<`number`, `P`\>

#### Defined in

[src/marshmallow/buffer-layout.ts:112](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/buffer-layout.ts#L112)

___

### s48be

▸ **s48be**<`P`\>(`property?`): [`Layout`](modules.md#layout)<`number`, `P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `string` = ``""`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `property?` | `P` |

#### Returns

[`Layout`](modules.md#layout)<`number`, `P`\>

#### Defined in

[src/marshmallow/buffer-layout.ts:118](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/buffer-layout.ts#L118)

___

### s8

▸ **s8**<`P`\>(`property?`): [`Layout`](modules.md#layout)<`number`, `P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `string` = ``""`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `property?` | `P` |

#### Returns

[`Layout`](modules.md#layout)<`number`, `P`\>

#### Defined in

[src/marshmallow/buffer-layout.ts:107](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/buffer-layout.ts#L107)

___

### seq

▸ **seq**<`T`, `P`, `AnotherP`\>(`elementLayout`, `count`, `property?`): [`Layout`](modules.md#layout)<`T`[], `AnotherP`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `P` | extends `string` = ``""`` |
| `AnotherP` | extends `string` = ``""`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `elementLayout` | [`Layout`](modules.md#layout)<`T`, `P`\> |
| `count` | `number` \| `BN` \| [`Layout`](modules.md#layout)<`number` \| `BN`, `P`\> |
| `property?` | `AnotherP` |

#### Returns

[`Layout`](modules.md#layout)<`T`[], `AnotherP`\>

#### Defined in

[src/marshmallow/index.ts:327](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/index.ts#L327)

___

### simulateMultipleInstruction

▸ **simulateMultipleInstruction**(`connection`, `instructions`, `keyword`): `Promise`<`string`[]\>

Simulates multiple instruction

#### Parameters

| Name | Type |
| :------ | :------ |
| `connection` | `Connection` |
| `instructions` | `TransactionInstruction`[] |
| `keyword` | `string` |

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/common/web3.ts:209](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/common/web3.ts#L209)

___

### splitNumber

▸ **splitNumber**(`num`, `decimals`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `string` |
| `decimals` | `number` |

#### Returns

`string`[]

#### Defined in

[src/entity/amount.ts:17](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/entity/amount.ts#L17)

___

### str

▸ **str**<`P`\>(`property?`): [`Layout`](modules.md#layout)<`string`, `P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `string` = ``""`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `property?` | `P` |

#### Returns

[`Layout`](modules.md#layout)<`string`, `P`\>

#### Defined in

[src/marshmallow/index.ts:230](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/index.ts#L230)

___

### struct

▸ **struct**<`T`, `P`\>(`fields`, `property?`, `decodePrefixes?`): `T` extends [`Layout`](modules.md#layout)<infer Value, infer Property\>[] ? [`Structure`](classes/Structure.md)<`Value`, `P`, { [K in Exclude<Extract<Property, string\>, ""\>]: Extract<T[number], Layout<any, K\>\> extends Layout<infer V, any\> ? V : any }\> : `any`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `P` | extends `string` = ``""`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fields` | `T` |
| `property?` | `P` |
| `decodePrefixes?` | `boolean` |

#### Returns

`T` extends [`Layout`](modules.md#layout)<infer Value, infer Property\>[] ? [`Structure`](classes/Structure.md)<`Value`, `P`, { [K in Exclude<Extract<Property, string\>, ""\>]: Extract<T[number], Layout<any, K\>\> extends Layout<infer V, any\> ? V : any }\> : `any`

#### Defined in

[src/marshmallow/index.ts:270](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/index.ts#L270)

___

### tagged

▸ **tagged**<`T`, `P`\>(`tag`, `layout`, `property?`): [`Layout`](modules.md#layout)<`T`, `P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `P` | extends `string` = ``""`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | `BN` |
| `layout` | [`Layout`](modules.md#layout)<`T`, ``""``\> |
| `property?` | `P` |

#### Returns

[`Layout`](modules.md#layout)<`T`, `P`\>

#### Defined in

[src/marshmallow/index.ts:206](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/index.ts#L206)

___

### tenExponentiate

▸ **tenExponentiate**(`shift`): `BN`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shift` | [`BigNumberish`](modules.md#bignumberish) |

#### Returns

`BN`

#### Defined in

[src/entity/bignumber.ts:49](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/entity/bignumber.ts#L49)

___

### u128

▸ **u128**<`P`\>(`property?`): [`BNLayout`](classes/BNLayout.md)<`P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `string` = ``""`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `property?` | `P` |

#### Returns

[`BNLayout`](classes/BNLayout.md)<`P`\>

#### Defined in

[src/marshmallow/index.ts:84](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/index.ts#L84)

___

### u16

▸ **u16**<`P`\>(`property?`): [`Layout`](modules.md#layout)<`number`, `P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `string` = ``""`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `property?` | `P` |

#### Returns

[`Layout`](modules.md#layout)<`number`, `P`\>

#### Defined in

[src/marshmallow/buffer-layout.ts:95](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/buffer-layout.ts#L95)

___

### u16be

▸ **u16be**<`P`\>(`property?`): [`Layout`](modules.md#layout)<`number`, `P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `string` = ``""`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `property?` | `P` |

#### Returns

[`Layout`](modules.md#layout)<`number`, `P`\>

#### Defined in

[src/marshmallow/buffer-layout.ts:101](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/buffer-layout.ts#L101)

___

### u24

▸ **u24**<`P`\>(`property?`): [`Layout`](modules.md#layout)<`number`, `P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `string` = ``""`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `property?` | `P` |

#### Returns

[`Layout`](modules.md#layout)<`number`, `P`\>

#### Defined in

[src/marshmallow/buffer-layout.ts:96](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/buffer-layout.ts#L96)

___

### u24be

▸ **u24be**<`P`\>(`property?`): [`Layout`](modules.md#layout)<`number`, `P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `string` = ``""`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `property?` | `P` |

#### Returns

[`Layout`](modules.md#layout)<`number`, `P`\>

#### Defined in

[src/marshmallow/buffer-layout.ts:102](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/buffer-layout.ts#L102)

___

### u32

▸ **u32**<`P`\>(`property?`): [`UInt`](modules.md#uint-1)<`number`, `P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `string` = ``""`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `property?` | `P` |

#### Returns

[`UInt`](modules.md#uint-1)<`number`, `P`\>

#### Defined in

[src/marshmallow/index.ts:76](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/index.ts#L76)

___

### u32be

▸ **u32be**<`P`\>(`property?`): [`Layout`](modules.md#layout)<`number`, `P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `string` = ``""`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `property?` | `P` |

#### Returns

[`Layout`](modules.md#layout)<`number`, `P`\>

#### Defined in

[src/marshmallow/buffer-layout.ts:103](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/buffer-layout.ts#L103)

___

### u40

▸ **u40**<`P`\>(`property?`): [`Layout`](modules.md#layout)<`number`, `P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `string` = ``""`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `property?` | `P` |

#### Returns

[`Layout`](modules.md#layout)<`number`, `P`\>

#### Defined in

[src/marshmallow/buffer-layout.ts:98](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/buffer-layout.ts#L98)

___

### u40be

▸ **u40be**<`P`\>(`property?`): [`Layout`](modules.md#layout)<`number`, `P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `string` = ``""`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `property?` | `P` |

#### Returns

[`Layout`](modules.md#layout)<`number`, `P`\>

#### Defined in

[src/marshmallow/buffer-layout.ts:104](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/buffer-layout.ts#L104)

___

### u48

▸ **u48**<`P`\>(`property?`): [`Layout`](modules.md#layout)<`number`, `P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `string` = ``""`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `property?` | `P` |

#### Returns

[`Layout`](modules.md#layout)<`number`, `P`\>

#### Defined in

[src/marshmallow/buffer-layout.ts:99](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/buffer-layout.ts#L99)

___

### u48be

▸ **u48be**<`P`\>(`property?`): [`Layout`](modules.md#layout)<`number`, `P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `string` = ``""`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `property?` | `P` |

#### Returns

[`Layout`](modules.md#layout)<`number`, `P`\>

#### Defined in

[src/marshmallow/buffer-layout.ts:105](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/buffer-layout.ts#L105)

___

### u64

▸ **u64**<`P`\>(`property?`): [`BNLayout`](classes/BNLayout.md)<`P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `string` = ``""`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `property?` | `P` |

#### Returns

[`BNLayout`](classes/BNLayout.md)<`P`\>

#### Defined in

[src/marshmallow/index.ts:80](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/index.ts#L80)

___

### u8

▸ **u8**<`P`\>(`property?`): [`UInt`](modules.md#uint-1)<`number`, `P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `string` = ``""`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `property?` | `P` |

#### Returns

[`UInt`](modules.md#uint-1)<`number`, `P`\>

#### Defined in

[src/marshmallow/index.ts:72](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/index.ts#L72)

___

### union

▸ **union**<`UnionSchema`\>(`discr`, `defaultLayout?`, `property?`): [`Union`](classes/Union.md)<`UnionSchema`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `UnionSchema` | extends `Object` = `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `discr` | `any` |
| `defaultLayout?` | `any` |
| `property?` | `string` |

#### Returns

[`Union`](classes/Union.md)<`UnionSchema`\>

#### Defined in

[src/marshmallow/index.ts:305](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/index.ts#L305)

___

### unionLayoutDiscriminator

▸ **unionLayoutDiscriminator**<`P`\>(`layout`, `property?`): `any`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `string` = ``""`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `layout` | [`Layout`](modules.md#layout)<`any`, `P`\> |
| `property?` | `P` |

#### Returns

`any`

#### Defined in

[src/marshmallow/buffer-layout.ts:150](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/buffer-layout.ts#L150)

___

### uniq

▸ **uniq**<`T`\>(`arr`): `T`[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `T`[] |

#### Returns

`T`[]

#### Defined in

[src/common/lodash.ts:20](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/common/lodash.ts#L20)

___

### utf8

▸ **utf8**<`P`\>(`maxSpan`, `property?`): [`Layout`](modules.md#layout)<`string`, `P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `string` = ``""`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxSpan` | `number` |
| `property?` | `P` |

#### Returns

[`Layout`](modules.md#layout)<`string`, `P`\>

#### Defined in

[src/marshmallow/buffer-layout.ts:156](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/buffer-layout.ts#L156)

___

### validateAndParsePublicKey

▸ **validateAndParsePublicKey**(`publicKey`): `PublicKey`

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | [`PublicKeyish`](modules.md#publickeyish) |

#### Returns

`PublicKey`

#### Defined in

[src/common/pubkey.ts:17](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/common/pubkey.ts#L17)

___

### vec

▸ **vec**<`T`, `P`\>(`elementLayout`, `property?`): [`Layout`](modules.md#layout)<`T`[], `P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `P` | extends `string` = ``""`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `elementLayout` | [`Layout`](modules.md#layout)<`T`, ``""``\> |
| `property?` | `P` |

#### Returns

[`Layout`](modules.md#layout)<`T`[], `P`\>

#### Defined in

[src/marshmallow/index.ts:192](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/index.ts#L192)

___

### vecU8

▸ **vecU8**<`P`\>(`property?`): [`Layout`](modules.md#layout)<`Buffer`, `P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `string` = ``""`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `property?` | `P` |

#### Returns

[`Layout`](modules.md#layout)<`Buffer`, `P`\>

#### Defined in

[src/marshmallow/index.ts:219](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/index.ts#L219)

___

### xor

▸ **xor**<`T`\>(`arr`, ...`args`): `T`[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `T`[] |
| `...args` | `T`[][] |

#### Returns

`T`[]

#### Defined in

[src/common/lodash.ts:16](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/common/lodash.ts#L16)

___

### zeros

▸ **zeros**(`length`): `Zeros`

#### Parameters

| Name | Type |
| :------ | :------ |
| `length` | `number` |

#### Returns

`Zeros`

#### Defined in

[src/marshmallow/index.ts:323](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/index.ts#L323)
