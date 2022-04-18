---
id: "Percent"
title: "Class: Percent"
sidebar_label: "Percent"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`Fraction`](Fraction.md)

  ↳ **`Percent`**

## Constructors

### constructor

• **new Percent**(`numerator`, `denominator?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `numerator` | [`BigNumberish`](../modules.md#bignumberish) | `undefined` |
| `denominator` | [`BigNumberish`](../modules.md#bignumberish) | `ONE` |

#### Inherited from

[Fraction](Fraction.md).[constructor](Fraction.md#constructor)

#### Defined in

[src/entity/fraction.ts:34](https://github.com/alpha-defi/raydium-sdk/blob/5597113/src/entity/fraction.ts#L34)

## Properties

### denominator

• `Readonly` **denominator**: `BN`

#### Inherited from

[Fraction](Fraction.md).[denominator](Fraction.md#denominator)

#### Defined in

[src/entity/fraction.ts:32](https://github.com/alpha-defi/raydium-sdk/blob/5597113/src/entity/fraction.ts#L32)

___

### numerator

• `Readonly` **numerator**: `BN`

#### Inherited from

[Fraction](Fraction.md).[numerator](Fraction.md#numerator)

#### Defined in

[src/entity/fraction.ts:31](https://github.com/alpha-defi/raydium-sdk/blob/5597113/src/entity/fraction.ts#L31)

## Accessors

### quotient

• `get` **quotient**(): `BN`

#### Returns

`BN`

#### Inherited from

Fraction.quotient

#### Defined in

[src/entity/fraction.ts:40](https://github.com/alpha-defi/raydium-sdk/blob/5597113/src/entity/fraction.ts#L40)

## Methods

### add

▸ **add**(`other`): [`Fraction`](Fraction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`BigNumberish`](../modules.md#bignumberish) \| [`Fraction`](Fraction.md) |

#### Returns

[`Fraction`](Fraction.md)

#### Inherited from

[Fraction](Fraction.md).[add](Fraction.md#add)

#### Defined in

[src/entity/fraction.ts:49](https://github.com/alpha-defi/raydium-sdk/blob/5597113/src/entity/fraction.ts#L49)

___

### div

▸ **div**(`other`): [`Fraction`](Fraction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`BigNumberish`](../modules.md#bignumberish) \| [`Fraction`](Fraction.md) |

#### Returns

[`Fraction`](Fraction.md)

#### Inherited from

[Fraction](Fraction.md).[div](Fraction.md#div)

#### Defined in

[src/entity/fraction.ts:84](https://github.com/alpha-defi/raydium-sdk/blob/5597113/src/entity/fraction.ts#L84)

___

### invert

▸ **invert**(): [`Fraction`](Fraction.md)

#### Returns

[`Fraction`](Fraction.md)

#### Inherited from

[Fraction](Fraction.md).[invert](Fraction.md#invert)

#### Defined in

[src/entity/fraction.ts:44](https://github.com/alpha-defi/raydium-sdk/blob/5597113/src/entity/fraction.ts#L44)

___

### mul

▸ **mul**(`other`): [`Fraction`](Fraction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`BigNumberish`](../modules.md#bignumberish) \| [`Fraction`](Fraction.md) |

#### Returns

[`Fraction`](Fraction.md)

#### Inherited from

[Fraction](Fraction.md).[mul](Fraction.md#mul)

#### Defined in

[src/entity/fraction.ts:77](https://github.com/alpha-defi/raydium-sdk/blob/5597113/src/entity/fraction.ts#L77)

___

### sub

▸ **sub**(`other`): [`Fraction`](Fraction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`BigNumberish`](../modules.md#bignumberish) \| [`Fraction`](Fraction.md) |

#### Returns

[`Fraction`](Fraction.md)

#### Inherited from

[Fraction](Fraction.md).[sub](Fraction.md#sub)

#### Defined in

[src/entity/fraction.ts:63](https://github.com/alpha-defi/raydium-sdk/blob/5597113/src/entity/fraction.ts#L63)

___

### toFixed

▸ **toFixed**(`decimalPlaces?`, `format?`, `rounding?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `decimalPlaces` | `number` | `2` |
| `format?` | `object` | `undefined` |
| `rounding?` | [`Rounding`](../enums/Rounding.md) | `undefined` |

#### Returns

`string`

#### Overrides

[Fraction](Fraction.md).[toFixed](Fraction.md#tofixed)

#### Defined in

[src/entity/percent.ts:11](https://github.com/alpha-defi/raydium-sdk/blob/5597113/src/entity/percent.ts#L11)

___

### toSignificant

▸ **toSignificant**(`significantDigits?`, `format?`, `rounding?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `significantDigits` | `number` | `5` |
| `format?` | `object` | `undefined` |
| `rounding?` | [`Rounding`](../enums/Rounding.md) | `undefined` |

#### Returns

`string`

#### Overrides

[Fraction](Fraction.md).[toSignificant](Fraction.md#tosignificant)

#### Defined in

[src/entity/percent.ts:7](https://github.com/alpha-defi/raydium-sdk/blob/5597113/src/entity/percent.ts#L7)
