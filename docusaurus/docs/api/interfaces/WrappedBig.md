---
id: "WrappedBig"
title: "Interface: WrappedBig"
sidebar_label: "WrappedBig"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `Big`

  ↳ **`WrappedBig`**

## Properties

### c

• **c**: `number`[]

Returns an array of single digits

#### Inherited from

Big.c

#### Defined in

node_modules/@types/big.js/index.d.ts:371

___

### e

• **e**: `number`

Returns the exponent, Integer, -1e+6 to 1e+6 inclusive

#### Inherited from

Big.e

#### Defined in

node_modules/@types/big.js/index.d.ts:375

___

### s

• **s**: `number`

Returns the sign, -1 or 1

#### Inherited from

Big.s

#### Defined in

node_modules/@types/big.js/index.d.ts:379

## Methods

### abs

▸ **abs**(): [`WrappedBig`](WrappedBig.md)

#### Returns

[`WrappedBig`](WrappedBig.md)

#### Overrides

Big.abs

#### Defined in

[src/entity/to-format.ts:22](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/entity/to-format.ts#L22)

___

### add

▸ **add**(`n`): [`WrappedBig`](WrappedBig.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `BigSource` |

#### Returns

[`WrappedBig`](WrappedBig.md)

#### Overrides

Big.add

#### Defined in

[src/entity/to-format.ts:21](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/entity/to-format.ts#L21)

___

### cmp

▸ **cmp**(`n`): `Comparison`

Compare the values.

**`throws`** `NaN` if n is invalid.

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `BigSource` |

#### Returns

`Comparison`

#### Inherited from

Big.cmp

#### Defined in

node_modules/@types/big.js/index.d.ts:167

___

### div

▸ **div**(`n`): [`WrappedBig`](WrappedBig.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `BigSource` |

#### Returns

[`WrappedBig`](WrappedBig.md)

#### Overrides

Big.div

#### Defined in

[src/entity/to-format.ts:23](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/entity/to-format.ts#L23)

___

### eq

▸ **eq**(`n`): `boolean`

Returns true if the value of this Big equals the value of n, otherwise returns false.

**`throws`** `NaN` if n is invalid.

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `BigSource` |

#### Returns

`boolean`

#### Inherited from

Big.eq

#### Defined in

node_modules/@types/big.js/index.d.ts:183

___

### gt

▸ **gt**(`n`): `boolean`

Returns true if the value of this Big is greater than the value of n, otherwise returns false.

**`throws`** `NaN` if n is invalid.

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `BigSource` |

#### Returns

`boolean`

#### Inherited from

Big.gt

#### Defined in

node_modules/@types/big.js/index.d.ts:189

___

### gte

▸ **gte**(`n`): `boolean`

Returns true if the value of this Big is greater than or equal to the value of n, otherwise returns false.

**`throws`** `NaN` if n is invalid.

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `BigSource` |

#### Returns

`boolean`

#### Inherited from

Big.gte

#### Defined in

node_modules/@types/big.js/index.d.ts:195

___

### lt

▸ **lt**(`n`): `boolean`

Returns true if the value of this Big is less than the value of n, otherwise returns false.

**`throws`** `NaN` if n is invalid.

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `BigSource` |

#### Returns

`boolean`

#### Inherited from

Big.lt

#### Defined in

node_modules/@types/big.js/index.d.ts:201

___

### lte

▸ **lte**(`n`): `boolean`

Returns true if the value of this Big is less than or equal to the value of n, otherwise returns false.

**`throws`** `NaN` if n is invalid.

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `BigSource` |

#### Returns

`boolean`

#### Inherited from

Big.lte

#### Defined in

node_modules/@types/big.js/index.d.ts:207

___

### minus

▸ **minus**(`n`): [`WrappedBig`](WrappedBig.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `BigSource` |

#### Returns

[`WrappedBig`](WrappedBig.md)

#### Overrides

Big.minus

#### Defined in

[src/entity/to-format.ts:24](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/entity/to-format.ts#L24)

___

### mod

▸ **mod**(`n`): [`WrappedBig`](WrappedBig.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `BigSource` |

#### Returns

[`WrappedBig`](WrappedBig.md)

#### Overrides

Big.mod

#### Defined in

[src/entity/to-format.ts:25](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/entity/to-format.ts#L25)

___

### mul

▸ **mul**(`n`): [`WrappedBig`](WrappedBig.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `BigSource` |

#### Returns

[`WrappedBig`](WrappedBig.md)

#### Overrides

Big.mul

#### Defined in

[src/entity/to-format.ts:26](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/entity/to-format.ts#L26)

___

### plus

▸ **plus**(`n`): [`WrappedBig`](WrappedBig.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `BigSource` |

#### Returns

[`WrappedBig`](WrappedBig.md)

#### Overrides

Big.plus

#### Defined in

[src/entity/to-format.ts:27](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/entity/to-format.ts#L27)

___

### pow

▸ **pow**(`exp`): [`WrappedBig`](WrappedBig.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `exp` | `number` |

#### Returns

[`WrappedBig`](WrappedBig.md)

#### Overrides

Big.pow

#### Defined in

[src/entity/to-format.ts:28](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/entity/to-format.ts#L28)

___

### prec

▸ **prec**(`sd`, `rm?`): `Big`

Return a new Big whose value is the value of this Big rounded to a maximum precision of sd
significant digits using rounding mode rm, or Big.RM if rm is not specified.

**`throws`** `!prec!` if sd is invalid.

**`throws`** `!Big.RM!` if rm is invalid.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sd` | `number` | Significant digits: integer, 1 to MAX_DP inclusive. |
| `rm?` | `RoundingMode` | Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up). |

#### Returns

`Big`

#### Inherited from

Big.prec

#### Defined in

node_modules/@types/big.js/index.d.ts:254

___

### round

▸ **round**(`dp?`, `rm?`): [`WrappedBig`](WrappedBig.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dp?` | `number` |
| `rm?` | `RoundingMode` |

#### Returns

[`WrappedBig`](WrappedBig.md)

#### Overrides

Big.round

#### Defined in

[src/entity/to-format.ts:29](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/entity/to-format.ts#L29)

___

### sqrt

▸ **sqrt**(): [`WrappedBig`](WrappedBig.md)

#### Returns

[`WrappedBig`](WrappedBig.md)

#### Overrides

Big.sqrt

#### Defined in

[src/entity/to-format.ts:30](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/entity/to-format.ts#L30)

___

### sub

▸ **sub**(`n`): [`WrappedBig`](WrappedBig.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `BigSource` |

#### Returns

[`WrappedBig`](WrappedBig.md)

#### Overrides

Big.sub

#### Defined in

[src/entity/to-format.ts:31](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/entity/to-format.ts#L31)

___

### times

▸ **times**(`n`): [`WrappedBig`](WrappedBig.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `BigSource` |

#### Returns

[`WrappedBig`](WrappedBig.md)

#### Overrides

Big.times

#### Defined in

[src/entity/to-format.ts:32](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/entity/to-format.ts#L32)

___

### toExponential

▸ **toExponential**(`dp?`, `rm?`): `string`

Returns a string representing the value of this Big number in exponential notation to a fixed number of decimal places dp.

If the value of this Big number in exponential notation has more digits to the right of the decimal point than is specified by dp,
the return value will be rounded to dp decimal places using rounding mode Big.RM.

If the value of this Big number in exponential notation has fewer digits to the right of the decimal point than is specified by dp, the return value will be appended with zeros accordingly.

If dp is omitted, or is null or undefined, the number of digits after the decimal point defaults to the minimum number of digits necessary to represent the value exactly.

**`throws`** `!toFix!` if dp is invalid.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dp?` | `number` | Decimal places, 0 to 1e+6 inclusive |
| `rm?` | `RoundingMode` | Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up). |

#### Returns

`string`

#### Inherited from

Big.toExponential

#### Defined in

node_modules/@types/big.js/index.d.ts:298

___

### toFixed

▸ **toFixed**(`dp?`, `rm?`): `string`

Returns a string representing the value of this Big number in normal notation to a fixed number of decimal places dp.

If the value of this Big number in normal notation has more digits to the right of the decimal point than is specified by dp,
the return value will be rounded to dp decimal places using rounding mode Big.RM.

If the value of this Big number in normal notation has fewer fraction digits then is specified by dp, the return value will be appended with zeros accordingly.

Unlike Number.prototype.toFixed, which returns exponential notation if a number is greater or equal to 1021, this method will always return normal notation.

If dp is omitted, or is null or undefined, then the return value is simply the value in normal notation.
This is also unlike Number.prototype.toFixed, which returns the value to zero decimal places.

**`throws`** `!toFix!` if dp is invalid.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dp?` | `number` | Decimal places, 0 to 1e+6 inclusive |
| `rm?` | `RoundingMode` | Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up). |

#### Returns

`string`

#### Inherited from

Big.toFixed

#### Defined in

node_modules/@types/big.js/index.d.ts:316

___

### toFormat

▸ **toFormat**(): `string`

#### Returns

`string`

#### Defined in

[src/entity/to-format.ts:33](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/entity/to-format.ts#L33)

▸ **toFormat**(`options`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `FormatOptions` |

#### Returns

`string`

#### Defined in

[src/entity/to-format.ts:34](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/entity/to-format.ts#L34)

▸ **toFormat**(`fractionLength`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fractionLength` | `number` |

#### Returns

`string`

#### Defined in

[src/entity/to-format.ts:35](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/entity/to-format.ts#L35)

▸ **toFormat**(`fractionLength`, `options`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fractionLength` | `number` |
| `options` | `FormatOptions` |

#### Returns

`string`

#### Defined in

[src/entity/to-format.ts:36](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/entity/to-format.ts#L36)

▸ **toFormat**(`fractionLength`, `missionUnknown`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fractionLength` | `number` |
| `missionUnknown` | `number` |

#### Returns

`string`

#### Defined in

[src/entity/to-format.ts:37](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/entity/to-format.ts#L37)

▸ **toFormat**(`fractionLength`, `missionUnknown`, `options`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fractionLength` | `number` |
| `missionUnknown` | `number` |
| `options` | `FormatOptions` |

#### Returns

`string`

#### Defined in

[src/entity/to-format.ts:38](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/entity/to-format.ts#L38)

___

### toJSON

▸ **toJSON**(): `string`

Returns a string representing the value of this Big number.

If this Big number has a positive exponent that is equal to or greater than 21, or a negative exponent equal to or less than -7, then exponential notation is returned.

The point at which toString returns exponential rather than normal notation can be adjusted by changing
the value of Big.E_POS and Big.E_NEG. By default, Big numbers correspond to Javascript's number type in this regard.

#### Returns

`string`

#### Inherited from

Big.toJSON

#### Defined in

node_modules/@types/big.js/index.d.ts:367

___

### toNumber

▸ **toNumber**(): `number`

Returns a primitive number representing the value of this Big number.

If Big.strict is true an error will be thrown if toNumber is called on a Big number which cannot be converted to a primitive number without a loss of precision.

**`since`** 6.0

#### Returns

`number`

#### Inherited from

Big.toNumber

#### Defined in

node_modules/@types/big.js/index.d.ts:349

___

### toPrecision

▸ **toPrecision**(`sd?`, `rm?`): `string`

Returns a string representing the value of this Big number to the specified number of significant digits sd.

If the value of this Big number has more digits than is specified by sd, the return value will be rounded to sd significant digits using rounding mode Big.RM.

If the value of this Big number has fewer digits than is specified by sd, the return value will be appended with zeros accordingly.

If sd is less than the number of digits necessary to represent the integer part of the value in normal notation, then exponential notation is used.

If sd is omitted, or is null or undefined, then the return value is the same as .toString().

**`throws`** `!toPre!` if sd is invalid.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sd?` | `number` | Significant digits, 1 to 1e+6 inclusive |
| `rm?` | `RoundingMode` | Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up). |

#### Returns

`string`

#### Inherited from

Big.toPrecision

#### Defined in

node_modules/@types/big.js/index.d.ts:332

___

### toString

▸ **toString**(): `string`

Returns a string representing the value of this Big number.

If this Big number has a positive exponent that is equal to or greater than 21, or a negative exponent equal to or less than -7, then exponential notation is returned.

The point at which toString returns exponential rather than normal notation can be adjusted by changing
the value of Big.E_POS and Big.E_NEG. By default, Big numbers correspond to Javascript's number type in this regard.

#### Returns

`string`

#### Inherited from

Big.toString

#### Defined in

node_modules/@types/big.js/index.d.ts:341

___

### valueOf

▸ **valueOf**(): `string`

Returns a string representing the value of this Big number.

If this Big number has a positive exponent that is equal to or greater than 21, or a negative exponent equal to or less than -7, then exponential notation is returned.

The point at which toString returns exponential rather than normal notation can be adjusted by changing
the value of Big.E_POS and Big.E_NEG. By default, Big numbers correspond to Javascript's number type in this regard.

#### Returns

`string`

#### Inherited from

Big.valueOf

#### Defined in

node_modules/@types/big.js/index.d.ts:358
