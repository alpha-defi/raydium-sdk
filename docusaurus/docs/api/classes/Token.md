---
id: "Token"
title: "Class: Token"
sidebar_label: "Token"
sidebar_position: 0
custom_edit_url: null
---

Represents an SPL token with a unique address and some metadata.

## Hierarchy

- [`Currency`](Currency.md)

  ↳ **`Token`**

## Constructors

### constructor

• **new Token**(`mint`, `decimals`, `symbol?`, `name?`)

Constructs an instance of the base class `Currency`. The only instance of the base class `Currency` is `Currency.SOL`.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `mint` | [`PublicKeyish`](../modules.md#publickeyish) | `undefined` |
| `decimals` | `number` | `undefined` |
| `symbol` | `string` | `"UNKNOWN"` |
| `name` | `string` | `"UNKNOWN"` |

#### Overrides

[Currency](Currency.md).[constructor](Currency.md#constructor)

#### Defined in

[src/entity/currency.ts:69](https://github.com/alpha-defi/raydium-sdk/blob/ce1010a/src/entity/currency.ts#L69)

## Properties

### decimals

• `Readonly` **decimals**: `number`

#### Inherited from

[Currency](Currency.md).[decimals](Currency.md#decimals)

#### Defined in

[src/entity/currency.ts:17](https://github.com/alpha-defi/raydium-sdk/blob/ce1010a/src/entity/currency.ts#L17)

___

### mint

• `Readonly` **mint**: `PublicKey`

#### Defined in

[src/entity/currency.ts:62](https://github.com/alpha-defi/raydium-sdk/blob/ce1010a/src/entity/currency.ts#L62)

___

### name

• `Optional` `Readonly` **name**: `string`

#### Inherited from

[Currency](Currency.md).[name](Currency.md#name)

#### Defined in

[src/entity/currency.ts:15](https://github.com/alpha-defi/raydium-sdk/blob/ce1010a/src/entity/currency.ts#L15)

___

### symbol

• `Optional` `Readonly` **symbol**: `string`

#### Inherited from

[Currency](Currency.md).[symbol](Currency.md#symbol)

#### Defined in

[src/entity/currency.ts:14](https://github.com/alpha-defi/raydium-sdk/blob/ce1010a/src/entity/currency.ts#L14)

___

### SOL

▪ `Static` `Readonly` **SOL**: [`Currency`](Currency.md)

The only instance of the base class `Currency`.

#### Inherited from

[Currency](Currency.md).[SOL](Currency.md#sol)

#### Defined in

[src/entity/currency.ts:22](https://github.com/alpha-defi/raydium-sdk/blob/ce1010a/src/entity/currency.ts#L22)

___

### WSOL

▪ `Static` `Readonly` **WSOL**: [`Token`](Token.md)

The only instance of the base class `Token`.

#### Defined in

[src/entity/currency.ts:67](https://github.com/alpha-defi/raydium-sdk/blob/ce1010a/src/entity/currency.ts#L67)

## Methods

### equals

▸ **equals**(`other`): `boolean`

Returns true if the two tokens are equivalent, i.e. have the same mint address.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Token`](Token.md) | other token to compare |

#### Returns

`boolean`

#### Defined in

[src/entity/currency.ts:79](https://github.com/alpha-defi/raydium-sdk/blob/ce1010a/src/entity/currency.ts#L79)
