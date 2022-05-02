---
id: "Fraction"
title: "Class: Fraction"
sidebar_label: "Fraction"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- **`Fraction`**

  ↳ [`CurrencyAmount`](CurrencyAmount.md)

  ↳ [`Percent`](Percent.md)

  ↳ [`Price`](Price.md)

## Constructors

### constructor

• **new Fraction**(`numerator`, `denominator?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `numerator` | [`BigNumberish`](../modules.md#bignumberish) | `undefined` |
| `denominator` | [`BigNumberish`](../modules.md#bignumberish) | `ONE` |

#### Defined in

[src/entity/fraction.ts:34](https://github.com/alpha-defi/raydium-sdk/blob/ce1010a/src/entity/fraction.ts#L34)

## Properties

### denominator

• `Readonly` **denominator**: `BN`

#### Defined in

[src/entity/fraction.ts:32](https://github.com/alpha-defi/raydium-sdk/blob/ce1010a/src/entity/fraction.ts#L32)

___

### numerator

• `Readonly` **numerator**: `BN`

#### Defined in

[src/entity/fraction.ts:31](https://github.com/alpha-defi/raydium-sdk/blob/ce1010a/src/entity/fraction.ts#L31)

## Accessors

### quotient

• `get` **quotient**(): `BN`

#### Returns

`BN`

#### Defined in

[src/entity/fraction.ts:40](https://github.com/alpha-defi/raydium-sdk/blob/ce1010a/src/entity/fraction.ts#L40)

## Methods

### add

▸ **add**(`other`): [`Fraction`](Fraction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`BigNumberish`](../modules.md#bignumberish) \| [`Fraction`](Fraction.md) |

#### Returns

[`Fraction`](Fraction.md)

#### Defined in

[src/entity/fraction.ts:49](https://github.com/alpha-defi/raydium-sdk/blob/ce1010a/src/entity/fraction.ts#L49)

___

### div

▸ **div**(`other`): [`Fraction`](Fraction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`BigNumberish`](../modules.md#bignumberish) \| [`Fraction`](Fraction.md) |

#### Returns

[`Fraction`](Fraction.md)

#### Defined in

[src/entity/fraction.ts:84](https://github.com/alpha-defi/raydium-sdk/blob/ce1010a/src/entity/fraction.ts#L84)

___

### invert

▸ **invert**(): [`Fraction`](Fraction.md)

#### Returns

[`Fraction`](Fraction.md)

#### Defined in

[src/entity/fraction.ts:44](https://github.com/alpha-defi/raydium-sdk/blob/ce1010a/src/entity/fraction.ts#L44)

___

### mul

▸ **mul**(`other`): [`Fraction`](Fraction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`BigNumberish`](../modules.md#bignumberish) \| [`Fraction`](Fraction.md) |

#### Returns

[`Fraction`](Fraction.md)

#### Defined in

[src/entity/fraction.ts:77](https://github.com/alpha-defi/raydium-sdk/blob/ce1010a/src/entity/fraction.ts#L77)

___

### sub

▸ **sub**(`other`): [`Fraction`](Fraction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`BigNumberish`](../modules.md#bignumberish) \| [`Fraction`](Fraction.md) |

#### Returns

[`Fraction`](Fraction.md)

#### Defined in

[src/entity/fraction.ts:63](https://github.com/alpha-defi/raydium-sdk/blob/ce1010a/src/entity/fraction.ts#L63)

___

### toFixed

▸ **toFixed**(`decimalPlaces`, `format?`, `rounding?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `decimalPlaces` | `number` | `undefined` |
| `format` | `object` | `undefined` |
| `rounding` | [`Rounding`](../enums/Rounding.md) | `Rounding.ROUND_HALF_UP` |

#### Returns

`string`

#### Defined in

[src/entity/fraction.ts:105](https://github.com/alpha-defi/raydium-sdk/blob/ce1010a/src/entity/fraction.ts#L105)

___

### toSignificant

▸ **toSignificant**(`significantDigits`, `format?`, `rounding?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `significantDigits` | `number` | `undefined` |
| `format` | `object` | `undefined` |
| `rounding` | [`Rounding`](../enums/Rounding.md) | `Rounding.ROUND_HALF_UP` |

#### Returns

`string`

#### Defined in

[src/entity/fraction.ts:90](https://github.com/alpha-defi/raydium-sdk/blob/ce1010a/src/entity/fraction.ts#L90)
