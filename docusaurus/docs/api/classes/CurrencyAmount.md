---
id: "CurrencyAmount"
title: "Class: CurrencyAmount"
sidebar_label: "CurrencyAmount"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`Fraction`](Fraction.md)

  ↳ **`CurrencyAmount`**

  ↳↳ [`TokenAmount`](TokenAmount.md)

## Constructors

### constructor

• **new CurrencyAmount**(`currency`, `amount`, `isRaw?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `currency` | [`Currency`](Currency.md) | `undefined` |
| `amount` | [`BigNumberish`](../modules.md#bignumberish) | `undefined` |
| `isRaw` | `boolean` | `true` |

#### Overrides

[Fraction](Fraction.md).[constructor](Fraction.md#constructor)

#### Defined in

[src/entity/amount.ts:40](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/entity/amount.ts#L40)

## Properties

### currency

• `Readonly` **currency**: [`Currency`](Currency.md)

#### Defined in

[src/entity/amount.ts:38](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/entity/amount.ts#L38)

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

## Accessors

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

• `get` **raw**(): `BN`

#### Returns

`BN`

#### Defined in

[src/entity/amount.ts:69](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/entity/amount.ts#L69)

## Methods

### add

▸ **add**(`other`): [`CurrencyAmount`](CurrencyAmount.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`CurrencyAmount`](CurrencyAmount.md) |

#### Returns

[`CurrencyAmount`](CurrencyAmount.md)

#### Overrides

[Fraction](Fraction.md).[add](Fraction.md#add)

#### Defined in

[src/entity/amount.ts:95](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/entity/amount.ts#L95)

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

### gt

▸ **gt**(`other`): `boolean`

a greater than b

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`CurrencyAmount`](CurrencyAmount.md) |

#### Returns

`boolean`

#### Defined in

[src/entity/amount.ts:80](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/entity/amount.ts#L80)

___

### invert

▸ **invert**(): [`Fraction`](Fraction.md)

#### Returns

[`Fraction`](Fraction.md)

#### Inherited from

[Fraction](Fraction.md).[invert](Fraction.md#invert)

#### Defined in

[src/entity/fraction.ts:44](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/entity/fraction.ts#L44)

___

### isZero

▸ **isZero**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/entity/amount.ts:73](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/entity/amount.ts#L73)

___

### lt

▸ **lt**(`other`): `boolean`

a less than b

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`CurrencyAmount`](CurrencyAmount.md) |

#### Returns

`boolean`

#### Defined in

[src/entity/amount.ts:89](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/entity/amount.ts#L89)

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

[src/entity/fraction.ts:77](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/entity/fraction.ts#L77)

___

### sub

▸ **sub**(`other`): [`CurrencyAmount`](CurrencyAmount.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`CurrencyAmount`](CurrencyAmount.md) |

#### Returns

[`CurrencyAmount`](CurrencyAmount.md)

#### Overrides

[Fraction](Fraction.md).[sub](Fraction.md#sub)

#### Defined in

[src/entity/amount.ts:101](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/entity/amount.ts#L101)

___

### toExact

▸ **toExact**(`format?`): `string`

To exact

**`example`**
```
1 -> 1
1.234 -> 1.234
1.123456789876543 -> 1.123456789
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `format` | `object` |

#### Returns

`string`

#### Defined in

[src/entity/amount.ts:145](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/entity/amount.ts#L145)

___

### toFixed

▸ **toFixed**(`decimalPlaces?`, `format?`, `rounding?`): `string`

To fixed

**`example`**
```
1 -> 1.000000000
1.234 -> 1.234000000
1.123456789876543 -> 1.123456789
```

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `decimalPlaces` | `number` | `undefined` |
| `format?` | `object` | `undefined` |
| `rounding` | [`Rounding`](../enums/Rounding.md) | `Rounding.ROUND_DOWN` |

#### Returns

`string`

#### Overrides

[Fraction](Fraction.md).[toFixed](Fraction.md#tofixed)

#### Defined in

[src/entity/amount.ts:125](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/entity/amount.ts#L125)

___

### toSignificant

▸ **toSignificant**(`significantDigits?`, `format?`, `rounding?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `significantDigits` | `number` | `undefined` |
| `format?` | `object` | `undefined` |
| `rounding` | [`Rounding`](../enums/Rounding.md) | `Rounding.ROUND_DOWN` |

#### Returns

`string`

#### Overrides

[Fraction](Fraction.md).[toSignificant](Fraction.md#tosignificant)

#### Defined in

[src/entity/amount.ts:107](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/entity/amount.ts#L107)
