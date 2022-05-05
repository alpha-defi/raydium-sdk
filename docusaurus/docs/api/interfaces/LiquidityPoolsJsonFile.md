---
id: "LiquidityPoolsJsonFile"
title: "Interface: LiquidityPoolsJsonFile"
sidebar_label: "LiquidityPoolsJsonFile"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`JsonFileMetaData`](JsonFileMetaData.md)

  ↳ **`LiquidityPoolsJsonFile`**

## Properties

### name

• `Readonly` **name**: `string`

#### Inherited from

[JsonFileMetaData](JsonFileMetaData.md).[name](JsonFileMetaData.md#name)

#### Defined in

[src/common/json-file.ts:2](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/common/json-file.ts#L2)

___

### official

• `Readonly` **official**: [`LiquidityPoolJsonInfo`](LiquidityPoolJsonInfo.md)[]

#### Defined in

[src/liquidity/type.ts:45](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/type.ts#L45)

___

### timestamp

• `Readonly` **timestamp**: `string`

#### Inherited from

[JsonFileMetaData](JsonFileMetaData.md).[timestamp](JsonFileMetaData.md#timestamp)

#### Defined in

[src/common/json-file.ts:3](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/common/json-file.ts#L3)

___

### unOfficial

• `Readonly` **unOfficial**: [`LiquidityPoolJsonInfo`](LiquidityPoolJsonInfo.md)[]

#### Defined in

[src/liquidity/type.ts:46](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/liquidity/type.ts#L46)

___

### version

• `Readonly` **version**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `major` | `number` |
| `minor` | `number` |
| `patch` | `number` |

#### Inherited from

[JsonFileMetaData](JsonFileMetaData.md).[version](JsonFileMetaData.md#version)

#### Defined in

[src/common/json-file.ts:4](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/common/json-file.ts#L4)
