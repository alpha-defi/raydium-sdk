---
id: "Price"
title: "Class: Price"
sidebar_label: "Price"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`Fraction`](Fraction.md)

  ↳ **`Price`**

## Constructors

### constructor

• **new Price**(`baseCurrency`, `denominator`, `quoteCurrency`, `numerator`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `baseCurrency` | [`Currency`](Currency.md) |
| `denominator` | [`BigNumberish`](../modules.md#bignumberish) |
| `quoteCurrency` | [`Currency`](Currency.md) |
| `numerator` | [`BigNumberish`](../modules.md#bignumberish) |

#### Overrides

[Fraction](Fraction.md).[constructor](Fraction.md#constructor)

#### Defined in

[src/entity/price.ts:17](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/entity/price.ts#L17)

## Properties

### baseCurrency

• `Readonly` **baseCurrency**: [`Currency`](Currency.md)

#### Defined in

[src/entity/price.ts:11](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/entity/price.ts#L11)

___

### denominator

• `Readonly` **denominator**: `BN`

#### Inherited from

[Fraction](Fraction.md).[denominator](Fraction.md#denominator)

#### Defined in

[src/entity/fraction.ts:32](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/entity/fraction.ts#L32)

___

### numerator

• `Readonly` **numerator**: `BN`

#### Inherited from

[Fraction](Fraction.md).[numerator](Fraction.md#numerator)

#### Defined in

[src/entity/fraction.ts:31](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/entity/fraction.ts#L31)

___

### quoteCurrency

• `Readonly` **quoteCurrency**: [`Currency`](Currency.md)

#### Defined in

[src/entity/price.ts:12](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/entity/price.ts#L12)

___

### scalar

• `Readonly` **scalar**: [`Fraction`](Fraction.md)

#### Defined in

[src/entity/price.ts:14](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/entity/price.ts#L14)

## Accessors

### adjusted

• `get` **adjusted**(): [`Fraction`](Fraction.md)

#### Returns

[`Fraction`](Fraction.md)

#### Defined in

[src/entity/price.ts:34](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/entity/price.ts#L34)

___

### quotient

• `get` **quotient**(): `BN`

#### Returns

`BN`

#### Inherited from

Fraction.quotient

#### Defined in

[src/entity/fraction.ts:40](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/entity/fraction.ts#L40)

___

### raw

• `get` **raw**(): [`Fraction`](Fraction.md)

#### Returns

[`Fraction`](Fraction.md)

#### Defined in

[src/entity/price.ts:30](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/entity/price.ts#L30)

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

[src/entity/fraction.ts:49](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/entity/fraction.ts#L49)

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

[src/entity/fraction.ts:84](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/entity/fraction.ts#L84)

___

### invert

▸ **invert**(): [`Price`](Price.md)

#### Returns

[`Price`](Price.md)

#### Overrides

[Fraction](Fraction.md).[invert](Fraction.md#invert)

#### Defined in

[src/entity/price.ts:38](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/entity/price.ts#L38)

___

### mul

▸ **mul**(`other`): [`Price`](Price.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Price`](Price.md) |

#### Returns

[`Price`](Price.md)

#### Overrides

[Fraction](Fraction.md).[mul](Fraction.md#mul)

#### Defined in

[src/entity/price.ts:42](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/entity/price.ts#L42)

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

[src/entity/fraction.ts:63](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/entity/fraction.ts#L63)

___

### toFixed

▸ **toFixed**(`decimalPlaces?`, `format?`, `rounding?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `decimalPlaces` | `number` |
| `format?` | `object` |
| `rounding?` | [`Rounding`](../enums/Rounding.md) |

#### Returns

`string`

#### Overrides

[Fraction](Fraction.md).[toFixed](Fraction.md#tofixed)

#### Defined in

[src/entity/price.ts:53](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/entity/price.ts#L53)

___

### toSignificant

▸ **toSignificant**(`significantDigits?`, `format?`, `rounding?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `significantDigits` | `number` |
| `format?` | `object` |
| `rounding?` | [`Rounding`](../enums/Rounding.md) |

#### Returns

`string`

#### Overrides

[Fraction](Fraction.md).[toSignificant](Fraction.md#tosignificant)

#### Defined in

[src/entity/price.ts:49](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/entity/price.ts#L49)
