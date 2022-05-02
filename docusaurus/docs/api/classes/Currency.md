---
id: "Currency"
title: "Class: Currency"
sidebar_label: "Currency"
sidebar_position: 0
custom_edit_url: null
---

A currency is any fungible financial instrument on Solana, including SOL and all SPL tokens.

The only instance of the base class `Currency` is SOL.

## Hierarchy

- **`Currency`**

  ↳ [`Token`](Token.md)

## Constructors

### constructor

• **new Currency**(`decimals`, `symbol?`, `name?`)

Constructs an instance of the base class `Currency`. The only instance of the base class `Currency` is `Currency.SOL`.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `decimals` | `number` | `undefined` | decimals of the currency |
| `symbol` | `string` | `"UNKNOWN"` | symbol of the currency |
| `name` | `string` | `"UNKNOWN"` | name of the currency |

#### Defined in

[src/entity/currency.ts:30](https://github.com/alpha-defi/raydium-sdk/blob/ce1010a/src/entity/currency.ts#L30)

## Properties

### decimals

• `Readonly` **decimals**: `number`

#### Defined in

[src/entity/currency.ts:17](https://github.com/alpha-defi/raydium-sdk/blob/ce1010a/src/entity/currency.ts#L17)

___

### name

• `Optional` `Readonly` **name**: `string`

#### Defined in

[src/entity/currency.ts:15](https://github.com/alpha-defi/raydium-sdk/blob/ce1010a/src/entity/currency.ts#L15)

___

### symbol

• `Optional` `Readonly` **symbol**: `string`

#### Defined in

[src/entity/currency.ts:14](https://github.com/alpha-defi/raydium-sdk/blob/ce1010a/src/entity/currency.ts#L14)

___

### SOL

▪ `Static` `Readonly` **SOL**: [`Currency`](Currency.md)

The only instance of the base class `Currency`.

#### Defined in

[src/entity/currency.ts:22](https://github.com/alpha-defi/raydium-sdk/blob/ce1010a/src/entity/currency.ts#L22)
