---
id: "TokenAmount"
title: "Class: TokenAmount"
sidebar_label: "TokenAmount"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`CurrencyAmount`](CurrencyAmount.md)

  ↳ **`TokenAmount`**

## Constructors

### constructor

• **new TokenAmount**(`token`, `amount`, `isRaw?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `token` | [`Token`](Token.md) | `undefined` |
| `amount` | [`BigNumberish`](../modules.md#bignumberish) | `undefined` |
| `isRaw` | `boolean` | `true` |

#### Overrides

[CurrencyAmount](CurrencyAmount.md).[constructor](CurrencyAmount.md#constructor)

#### Defined in

[src/entity/amount.ts:154](https://github.com/alpha-defi/raydium-sdk/blob/5597113/src/entity/amount.ts#L154)

## Properties

### currency

• `Readonly` **currency**: [`Currency`](Currency.md)

#### Inherited from

[CurrencyAmount](CurrencyAmount.md).[currency](CurrencyAmount.md#currency)

#### Defined in

[src/entity/amount.ts:38](https://github.com/alpha-defi/raydium-sdk/blob/5597113/src/entity/amount.ts#L38)

___

### denominator

• `Readonly` **denominator**: `BN`

#### Inherited from

[CurrencyAmount](CurrencyAmount.md).[denominator](CurrencyAmount.md#denominator)

#### Defined in

[src/entity/fraction.ts:32](https://github.com/alpha-defi/raydium-sdk/blob/5597113/src/entity/fraction.ts#L32)

___

### numerator

• `Readonly` **numerator**: `BN`

#### Inherited from

[CurrencyAmount](CurrencyAmount.md).[numerator](CurrencyAmount.md#numerator)

#### Defined in

[src/entity/fraction.ts:31](https://github.com/alpha-defi/raydium-sdk/blob/5597113/src/entity/fraction.ts#L31)

___

### token

• `Readonly` **token**: [`Token`](Token.md)

#### Defined in

[src/entity/amount.ts:152](https://github.com/alpha-defi/raydium-sdk/blob/5597113/src/entity/amount.ts#L152)

## Accessors

### quotient

• `get` **quotient**(): `BN`

#### Returns

`BN`

#### Inherited from

CurrencyAmount.quotient

#### Defined in

[src/entity/fraction.ts:40](https://github.com/alpha-defi/raydium-sdk/blob/5597113/src/entity/fraction.ts#L40)

___

### raw

• `get` **raw**(): `BN`

#### Returns

`BN`

#### Inherited from

CurrencyAmount.raw

#### Defined in

[src/entity/amount.ts:69](https://github.com/alpha-defi/raydium-sdk/blob/5597113/src/entity/amount.ts#L69)

## Methods

### add

▸ **add**(`other`): [`TokenAmount`](TokenAmount.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`TokenAmount`](TokenAmount.md) |

#### Returns

[`TokenAmount`](TokenAmount.md)

#### Overrides

[CurrencyAmount](CurrencyAmount.md).[add](CurrencyAmount.md#add)

#### Defined in

[src/entity/amount.ts:159](https://github.com/alpha-defi/raydium-sdk/blob/5597113/src/entity/amount.ts#L159)

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

[CurrencyAmount](CurrencyAmount.md).[div](CurrencyAmount.md#div)

#### Defined in

[src/entity/fraction.ts:84](https://github.com/alpha-defi/raydium-sdk/blob/5597113/src/entity/fraction.ts#L84)

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

#### Inherited from

[CurrencyAmount](CurrencyAmount.md).[gt](CurrencyAmount.md#gt)

#### Defined in

[src/entity/amount.ts:80](https://github.com/alpha-defi/raydium-sdk/blob/5597113/src/entity/amount.ts#L80)

___

### invert

▸ **invert**(): [`Fraction`](Fraction.md)

#### Returns

[`Fraction`](Fraction.md)

#### Inherited from

[CurrencyAmount](CurrencyAmount.md).[invert](CurrencyAmount.md#invert)

#### Defined in

[src/entity/fraction.ts:44](https://github.com/alpha-defi/raydium-sdk/blob/5597113/src/entity/fraction.ts#L44)

___

### isZero

▸ **isZero**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[CurrencyAmount](CurrencyAmount.md).[isZero](CurrencyAmount.md#iszero)

#### Defined in

[src/entity/amount.ts:73](https://github.com/alpha-defi/raydium-sdk/blob/5597113/src/entity/amount.ts#L73)

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

#### Inherited from

[CurrencyAmount](CurrencyAmount.md).[lt](CurrencyAmount.md#lt)

#### Defined in

[src/entity/amount.ts:89](https://github.com/alpha-defi/raydium-sdk/blob/5597113/src/entity/amount.ts#L89)

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

[CurrencyAmount](CurrencyAmount.md).[mul](CurrencyAmount.md#mul)

#### Defined in

[src/entity/fraction.ts:77](https://github.com/alpha-defi/raydium-sdk/blob/5597113/src/entity/fraction.ts#L77)

___

### sub

▸ **sub**(`other`): [`CurrencyAmount`](CurrencyAmount.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`CurrencyAmount`](CurrencyAmount.md) |

#### Returns

[`CurrencyAmount`](CurrencyAmount.md)

#### Inherited from

[CurrencyAmount](CurrencyAmount.md).[sub](CurrencyAmount.md#sub)

#### Defined in

[src/entity/amount.ts:101](https://github.com/alpha-defi/raydium-sdk/blob/5597113/src/entity/amount.ts#L101)

___

### subtract

▸ **subtract**(`other`): [`TokenAmount`](TokenAmount.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`TokenAmount`](TokenAmount.md) |

#### Returns

[`TokenAmount`](TokenAmount.md)

#### Defined in

[src/entity/amount.ts:165](https://github.com/alpha-defi/raydium-sdk/blob/5597113/src/entity/amount.ts#L165)

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

#### Inherited from

[CurrencyAmount](CurrencyAmount.md).[toExact](CurrencyAmount.md#toexact)

#### Defined in

[src/entity/amount.ts:145](https://github.com/alpha-defi/raydium-sdk/blob/5597113/src/entity/amount.ts#L145)

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

#### Inherited from

[CurrencyAmount](CurrencyAmount.md).[toFixed](CurrencyAmount.md#tofixed)

#### Defined in

[src/entity/amount.ts:125](https://github.com/alpha-defi/raydium-sdk/blob/5597113/src/entity/amount.ts#L125)

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

#### Inherited from

[CurrencyAmount](CurrencyAmount.md).[toSignificant](CurrencyAmount.md#tosignificant)

#### Defined in

[src/entity/amount.ts:107](https://github.com/alpha-defi/raydium-sdk/blob/5597113/src/entity/amount.ts#L107)
