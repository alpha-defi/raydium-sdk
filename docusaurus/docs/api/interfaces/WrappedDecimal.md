---
id: "WrappedDecimal"
title: "Interface: WrappedDecimal"
sidebar_label: "WrappedDecimal"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `Decimal`

  ↳ **`WrappedDecimal`**

## Methods

### abs

▸ **abs**(): [`WrappedDecimal`](WrappedDecimal.md)

#### Returns

[`WrappedDecimal`](WrappedDecimal.md)

#### Overrides

Decimal.abs

#### Defined in

[src/entity/to-format.ts:51](https://github.com/alpha-defi/raydium-sdk/blob/4217474/src/entity/to-format.ts#L51)

___

### absoluteValue

▸ **absoluteValue**(): [`WrappedDecimal`](WrappedDecimal.md)

#### Returns

[`WrappedDecimal`](WrappedDecimal.md)

#### Overrides

Decimal.absoluteValue

#### Defined in

[src/entity/to-format.ts:50](https://github.com/alpha-defi/raydium-sdk/blob/4217474/src/entity/to-format.ts#L50)

___

### add

▸ **add**(`y`): [`WrappedDecimal`](WrappedDecimal.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `Numeric` |

#### Returns

[`WrappedDecimal`](WrappedDecimal.md)

#### Overrides

Decimal.add

#### Defined in

[src/entity/to-format.ts:69](https://github.com/alpha-defi/raydium-sdk/blob/4217474/src/entity/to-format.ts#L69)

___

### cmp

▸ **cmp**(`y`): ``0`` \| ``1`` \| ``-1``

Return
  1    if the value of this Decimal is greater than the value of `y`,
 -1    if the value of this Decimal is less than the value of `y`,
  0    if they have the same value

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `Numeric` |

#### Returns

``0`` \| ``1`` \| ``-1``

#### Inherited from

Decimal.cmp

#### Defined in

node_modules/decimal.js-light/decimal.d.ts:37

___

### comparedTo

▸ **comparedTo**(`y`): ``0`` \| ``1`` \| ``-1``

Return
  1    if the value of this Decimal is greater than the value of `y`,
 -1    if the value of this Decimal is less than the value of `y`,
  0    if they have the same value

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `Numeric` |

#### Returns

``0`` \| ``1`` \| ``-1``

#### Inherited from

Decimal.comparedTo

#### Defined in

node_modules/decimal.js-light/decimal.d.ts:29

___

### decimalPlaces

▸ **decimalPlaces**(): `number`

Return the number of decimal places of the value of this Decimal.

#### Returns

`number`

#### Inherited from

Decimal.decimalPlaces

#### Defined in

node_modules/decimal.js-light/decimal.d.ts:42

___

### div

▸ **div**(`y`): [`WrappedDecimal`](WrappedDecimal.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `Numeric` |

#### Returns

[`WrappedDecimal`](WrappedDecimal.md)

#### Overrides

Decimal.div

#### Defined in

[src/entity/to-format.ts:53](https://github.com/alpha-defi/raydium-sdk/blob/4217474/src/entity/to-format.ts#L53)

___

### dividedBy

▸ **dividedBy**(`y`): [`WrappedDecimal`](WrappedDecimal.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `Numeric` |

#### Returns

[`WrappedDecimal`](WrappedDecimal.md)

#### Overrides

Decimal.dividedBy

#### Defined in

[src/entity/to-format.ts:52](https://github.com/alpha-defi/raydium-sdk/blob/4217474/src/entity/to-format.ts#L52)

___

### dividedToIntegerBy

▸ **dividedToIntegerBy**(`y`): [`WrappedDecimal`](WrappedDecimal.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `Numeric` |

#### Returns

[`WrappedDecimal`](WrappedDecimal.md)

#### Overrides

Decimal.dividedToIntegerBy

#### Defined in

[src/entity/to-format.ts:54](https://github.com/alpha-defi/raydium-sdk/blob/4217474/src/entity/to-format.ts#L54)

___

### dp

▸ **dp**(): `number`

Return the number of decimal places of the value of this Decimal.

#### Returns

`number`

#### Inherited from

Decimal.dp

#### Defined in

node_modules/decimal.js-light/decimal.d.ts:47

___

### eq

▸ **eq**(`y`): `boolean`

Return true if the value of this Decimal is equal to the value of `y`, otherwise return false.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `Numeric` |

#### Returns

`boolean`

#### Inherited from

Decimal.eq

#### Defined in

node_modules/decimal.js-light/decimal.d.ts:85

___

### equals

▸ **equals**(`y`): `boolean`

Return true if the value of this Decimal is equal to the value of `y`, otherwise return false.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `Numeric` |

#### Returns

`boolean`

#### Inherited from

Decimal.equals

#### Defined in

node_modules/decimal.js-light/decimal.d.ts:80

___

### exp

▸ **exp**(): [`WrappedDecimal`](WrappedDecimal.md)

#### Returns

[`WrappedDecimal`](WrappedDecimal.md)

#### Overrides

Decimal.exp

#### Defined in

[src/entity/to-format.ts:63](https://github.com/alpha-defi/raydium-sdk/blob/4217474/src/entity/to-format.ts#L63)

___

### exponent

▸ **exponent**(): `number`

Return the (base 10) exponent value of this Decimal (this.e is the base 10000000 exponent).

#### Returns

`number`

#### Inherited from

Decimal.exponent

#### Defined in

node_modules/decimal.js-light/decimal.d.ts:90

___

### greaterThan

▸ **greaterThan**(`y`): `boolean`

Return true if the value of this Decimal is greater than the value of `y`, otherwise return
false.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `Numeric` |

#### Returns

`boolean`

#### Inherited from

Decimal.greaterThan

#### Defined in

node_modules/decimal.js-light/decimal.d.ts:96

___

### greaterThanOrEqualTo

▸ **greaterThanOrEqualTo**(`y`): `boolean`

Return true if the value of this Decimal is greater than or equal to the value of `y`,
otherwise return false.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `Numeric` |

#### Returns

`boolean`

#### Inherited from

Decimal.greaterThanOrEqualTo

#### Defined in

node_modules/decimal.js-light/decimal.d.ts:109

___

### gt

▸ **gt**(`y`): `boolean`

Return true if the value of this Decimal is greater than the value of `y`, otherwise return
false.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `Numeric` |

#### Returns

`boolean`

#### Inherited from

Decimal.gt

#### Defined in

node_modules/decimal.js-light/decimal.d.ts:102

___

### gte

▸ **gte**(`y`): `boolean`

Return true if the value of this Decimal is greater than or equal to the value of `y`,
otherwise return false.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `Numeric` |

#### Returns

`boolean`

#### Inherited from

Decimal.gte

#### Defined in

node_modules/decimal.js-light/decimal.d.ts:116

___

### idiv

▸ **idiv**(`y`): [`WrappedDecimal`](WrappedDecimal.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `Numeric` |

#### Returns

[`WrappedDecimal`](WrappedDecimal.md)

#### Overrides

Decimal.idiv

#### Defined in

[src/entity/to-format.ts:55](https://github.com/alpha-defi/raydium-sdk/blob/4217474/src/entity/to-format.ts#L55)

___

### isInteger

▸ **isInteger**(): `boolean`

Return true if the value of this Decimal is an integer, otherwise return false.

#### Returns

`boolean`

#### Inherited from

Decimal.isInteger

#### Defined in

node_modules/decimal.js-light/decimal.d.ts:122

___

### isNegative

▸ **isNegative**(): `boolean`

Return true if the value of this Decimal is negative, otherwise return false.

#### Returns

`boolean`

#### Inherited from

Decimal.isNegative

#### Defined in

node_modules/decimal.js-light/decimal.d.ts:134

___

### isPositive

▸ **isPositive**(): `boolean`

Return true if the value of this Decimal is positive, otherwise return false.

#### Returns

`boolean`

#### Inherited from

Decimal.isPositive

#### Defined in

node_modules/decimal.js-light/decimal.d.ts:146

___

### isZero

▸ **isZero**(): `boolean`

Return true if the value of this Decimal is 0, otherwise return false.

#### Returns

`boolean`

#### Inherited from

Decimal.isZero

#### Defined in

node_modules/decimal.js-light/decimal.d.ts:158

___

### isint

▸ **isint**(): `boolean`

Return true if the value of this Decimal is an integer, otherwise return false.

#### Returns

`boolean`

#### Inherited from

Decimal.isint

#### Defined in

node_modules/decimal.js-light/decimal.d.ts:128

___

### isneg

▸ **isneg**(): `boolean`

Return true if the value of this Decimal is negative, otherwise return false.

#### Returns

`boolean`

#### Inherited from

Decimal.isneg

#### Defined in

node_modules/decimal.js-light/decimal.d.ts:140

___

### ispos

▸ **ispos**(): `boolean`

Return true if the value of this Decimal is positive, otherwise return false.

#### Returns

`boolean`

#### Inherited from

Decimal.ispos

#### Defined in

node_modules/decimal.js-light/decimal.d.ts:152

___

### lessThan

▸ **lessThan**(`y`): `boolean`

Return true if the value of this Decimal is less than `y`, otherwise return false.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `Numeric` |

#### Returns

`boolean`

#### Inherited from

Decimal.lessThan

#### Defined in

node_modules/decimal.js-light/decimal.d.ts:164

___

### lessThanOrEqualTo

▸ **lessThanOrEqualTo**(`y`): `boolean`

Return true if the value of this Decimal is less than or equal to `y`, otherwise return false.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `Numeric` |

#### Returns

`boolean`

#### Inherited from

Decimal.lessThanOrEqualTo

#### Defined in

node_modules/decimal.js-light/decimal.d.ts:176

___

### ln

▸ **ln**(): [`WrappedDecimal`](WrappedDecimal.md)

#### Returns

[`WrappedDecimal`](WrappedDecimal.md)

#### Overrides

Decimal.ln

#### Defined in

[src/entity/to-format.ts:65](https://github.com/alpha-defi/raydium-sdk/blob/4217474/src/entity/to-format.ts#L65)

___

### log

▸ **log**(`base?`): [`WrappedDecimal`](WrappedDecimal.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `base?` | `Numeric` |

#### Returns

[`WrappedDecimal`](WrappedDecimal.md)

#### Overrides

Decimal.log

#### Defined in

[src/entity/to-format.ts:57](https://github.com/alpha-defi/raydium-sdk/blob/4217474/src/entity/to-format.ts#L57)

___

### logarithm

▸ **logarithm**(`base?`): [`WrappedDecimal`](WrappedDecimal.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `base?` | `Numeric` |

#### Returns

[`WrappedDecimal`](WrappedDecimal.md)

#### Overrides

Decimal.logarithm

#### Defined in

[src/entity/to-format.ts:56](https://github.com/alpha-defi/raydium-sdk/blob/4217474/src/entity/to-format.ts#L56)

___

### lt

▸ **lt**(`y`): `boolean`

Return true if the value of this Decimal is less than `y`, otherwise return false.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `Numeric` |

#### Returns

`boolean`

#### Inherited from

Decimal.lt

#### Defined in

node_modules/decimal.js-light/decimal.d.ts:170

___

### lte

▸ **lte**(`y`): `boolean`

Return true if the value of this Decimal is less than or equal to `y`, otherwise return false.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `Numeric` |

#### Returns

`boolean`

#### Inherited from

Decimal.lte

#### Defined in

node_modules/decimal.js-light/decimal.d.ts:182

___

### minus

▸ **minus**(`y`): [`WrappedDecimal`](WrappedDecimal.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `Numeric` |

#### Returns

[`WrappedDecimal`](WrappedDecimal.md)

#### Overrides

Decimal.minus

#### Defined in

[src/entity/to-format.ts:58](https://github.com/alpha-defi/raydium-sdk/blob/4217474/src/entity/to-format.ts#L58)

___

### mod

▸ **mod**(`y`): [`WrappedDecimal`](WrappedDecimal.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `Numeric` |

#### Returns

[`WrappedDecimal`](WrappedDecimal.md)

#### Overrides

Decimal.mod

#### Defined in

[src/entity/to-format.ts:61](https://github.com/alpha-defi/raydium-sdk/blob/4217474/src/entity/to-format.ts#L61)

___

### modulo

▸ **modulo**(`y`): [`WrappedDecimal`](WrappedDecimal.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `Numeric` |

#### Returns

[`WrappedDecimal`](WrappedDecimal.md)

#### Overrides

Decimal.modulo

#### Defined in

[src/entity/to-format.ts:60](https://github.com/alpha-defi/raydium-sdk/blob/4217474/src/entity/to-format.ts#L60)

___

### mul

▸ **mul**(`y`): [`WrappedDecimal`](WrappedDecimal.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `Numeric` |

#### Returns

[`WrappedDecimal`](WrappedDecimal.md)

#### Overrides

Decimal.mul

#### Defined in

[src/entity/to-format.ts:73](https://github.com/alpha-defi/raydium-sdk/blob/4217474/src/entity/to-format.ts#L73)

___

### naturalExponetial

▸ **naturalExponetial**(): [`WrappedDecimal`](WrappedDecimal.md)

#### Returns

[`WrappedDecimal`](WrappedDecimal.md)

#### Overrides

Decimal.naturalExponetial

#### Defined in

[src/entity/to-format.ts:62](https://github.com/alpha-defi/raydium-sdk/blob/4217474/src/entity/to-format.ts#L62)

___

### naturalLogarithm

▸ **naturalLogarithm**(): [`WrappedDecimal`](WrappedDecimal.md)

#### Returns

[`WrappedDecimal`](WrappedDecimal.md)

#### Overrides

Decimal.naturalLogarithm

#### Defined in

[src/entity/to-format.ts:64](https://github.com/alpha-defi/raydium-sdk/blob/4217474/src/entity/to-format.ts#L64)

___

### neg

▸ **neg**(): [`WrappedDecimal`](WrappedDecimal.md)

#### Returns

[`WrappedDecimal`](WrappedDecimal.md)

#### Overrides

Decimal.neg

#### Defined in

[src/entity/to-format.ts:67](https://github.com/alpha-defi/raydium-sdk/blob/4217474/src/entity/to-format.ts#L67)

___

### negated

▸ **negated**(): [`WrappedDecimal`](WrappedDecimal.md)

#### Returns

[`WrappedDecimal`](WrappedDecimal.md)

#### Overrides

Decimal.negated

#### Defined in

[src/entity/to-format.ts:66](https://github.com/alpha-defi/raydium-sdk/blob/4217474/src/entity/to-format.ts#L66)

___

### plus

▸ **plus**(`y`): [`WrappedDecimal`](WrappedDecimal.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `Numeric` |

#### Returns

[`WrappedDecimal`](WrappedDecimal.md)

#### Overrides

Decimal.plus

#### Defined in

[src/entity/to-format.ts:68](https://github.com/alpha-defi/raydium-sdk/blob/4217474/src/entity/to-format.ts#L68)

___

### pow

▸ **pow**(`y`): [`WrappedDecimal`](WrappedDecimal.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `Numeric` |

#### Returns

[`WrappedDecimal`](WrappedDecimal.md)

#### Overrides

Decimal.pow

#### Defined in

[src/entity/to-format.ts:79](https://github.com/alpha-defi/raydium-sdk/blob/4217474/src/entity/to-format.ts#L79)

___

### precision

▸ **precision**(`zeros`): `number`

Return the number of significant digits of the value of this Decimal.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `zeros` | `number` \| `boolean` | Whether to count integer-part trailing zeros: true, false, 1 or 0. |

#### Returns

`number`

#### Inherited from

Decimal.precision

#### Defined in

node_modules/decimal.js-light/decimal.d.ts:301

___

### sd

▸ **sd**(`zeros`): `number`

Return the number of significant digits of the value of this Decimal.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `zeros` | `number` \| `boolean` | Whether to count integer-part trailing zeros: true, false, 1 or 0. |

#### Returns

`number`

#### Inherited from

Decimal.sd

#### Defined in

node_modules/decimal.js-light/decimal.d.ts:308

___

### sqrt

▸ **sqrt**(): [`WrappedDecimal`](WrappedDecimal.md)

#### Returns

[`WrappedDecimal`](WrappedDecimal.md)

#### Overrides

Decimal.sqrt

#### Defined in

[src/entity/to-format.ts:71](https://github.com/alpha-defi/raydium-sdk/blob/4217474/src/entity/to-format.ts#L71)

___

### squareRoot

▸ **squareRoot**(): [`WrappedDecimal`](WrappedDecimal.md)

#### Returns

[`WrappedDecimal`](WrappedDecimal.md)

#### Overrides

Decimal.squareRoot

#### Defined in

[src/entity/to-format.ts:70](https://github.com/alpha-defi/raydium-sdk/blob/4217474/src/entity/to-format.ts#L70)

___

### sub

▸ **sub**(`y`): [`WrappedDecimal`](WrappedDecimal.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `Numeric` |

#### Returns

[`WrappedDecimal`](WrappedDecimal.md)

#### Overrides

Decimal.sub

#### Defined in

[src/entity/to-format.ts:59](https://github.com/alpha-defi/raydium-sdk/blob/4217474/src/entity/to-format.ts#L59)

___

### times

▸ **times**(`y`): [`WrappedDecimal`](WrappedDecimal.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `Numeric` |

#### Returns

[`WrappedDecimal`](WrappedDecimal.md)

#### Overrides

Decimal.times

#### Defined in

[src/entity/to-format.ts:72](https://github.com/alpha-defi/raydium-sdk/blob/4217474/src/entity/to-format.ts#L72)

___

### toDecimalPlaces

▸ **toDecimalPlaces**(`dp?`, `rm?`): `Decimal`

Return a new Decimal whose value is the value of this Decimal rounded to a maximum of `dp`
decimal places using rounding mode `rm` or `rounding` if `rm` is omitted.

If `dp` is omitted, return a new Decimal whose value is the value of this Decimal.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dp?` | `number` | Decimal places. Integer, 0 to MAX_DIGITS inclusive. |
| `rm?` | `number` | Rounding mode. Integer, 0 to 8 inclusive. |

#### Returns

`Decimal`

#### Inherited from

Decimal.toDecimalPlaces

#### Defined in

node_modules/decimal.js-light/decimal.d.ts:348

___

### toExponential

▸ **toExponential**(`dp?`, `rm?`): `string`

Return a string representing the value of this Decimal in exponential notation rounded to
`dp` fixed decimal places using rounding mode `rounding`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dp?` | `number` | Decimal places. Integer, 0 to MAX_DIGITS inclusive. |
| `rm?` | `number` | Rounding mode. Integer, 0 to 8 inclusive. |

#### Returns

`string`

#### Inherited from

Decimal.toExponential

#### Defined in

node_modules/decimal.js-light/decimal.d.ts:370

___

### toFixed

▸ **toFixed**(`dp?`, `rm?`): `string`

Return a string representing the value of this Decimal in normal (fixed-point) notation to
`dp` fixed decimal places and rounded using rounding mode `rm` or `rounding` if `rm` is
omitted.

As with JavaScript numbers, (-0).toFixed(0) is '0', but e.g. (-0.00001).toFixed(0) is '-0'.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dp?` | `number` | Decimal places. Integer, 0 to MAX_DIGITS inclusive. |
| `rm?` | `number` | Rounding mode. Integer, 0 to 8 inclusive.  (-0).toFixed(0) is '0', but (-0.1).toFixed(0) is '-0'. (-0).toFixed(1) is '0.0', but (-0.01).toFixed(1) is '-0.0'. (-0).toFixed(3) is '0.000'. (-0.5).toFixed(0) is '-0'. |

#### Returns

`string`

#### Inherited from

Decimal.toFixed

#### Defined in

node_modules/decimal.js-light/decimal.d.ts:388

___

### toFormat

▸ **toFormat**(`options`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `FormatOptions` |

#### Returns

`string`

#### Defined in

[src/entity/to-format.ts:82](https://github.com/alpha-defi/raydium-sdk/blob/4217474/src/entity/to-format.ts#L82)

▸ **toFormat**(`fractionLength`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fractionLength` | `number` |

#### Returns

`string`

#### Defined in

[src/entity/to-format.ts:83](https://github.com/alpha-defi/raydium-sdk/blob/4217474/src/entity/to-format.ts#L83)

▸ **toFormat**(`fractionLength`, `options`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fractionLength` | `number` |
| `options` | `FormatOptions` |

#### Returns

`string`

#### Defined in

[src/entity/to-format.ts:84](https://github.com/alpha-defi/raydium-sdk/blob/4217474/src/entity/to-format.ts#L84)

▸ **toFormat**(`fractionLength`, `missionUnknown`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fractionLength` | `number` |
| `missionUnknown` | `number` |

#### Returns

`string`

#### Defined in

[src/entity/to-format.ts:85](https://github.com/alpha-defi/raydium-sdk/blob/4217474/src/entity/to-format.ts#L85)

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

[src/entity/to-format.ts:86](https://github.com/alpha-defi/raydium-sdk/blob/4217474/src/entity/to-format.ts#L86)

___

### toInteger

▸ **toInteger**(): [`WrappedDecimal`](WrappedDecimal.md)

#### Returns

[`WrappedDecimal`](WrappedDecimal.md)

#### Overrides

Decimal.toInteger

#### Defined in

[src/entity/to-format.ts:76](https://github.com/alpha-defi/raydium-sdk/blob/4217474/src/entity/to-format.ts#L76)

___

### toJSON

▸ **toJSON**(): `string`

Return a string representing the value of this Decimal.

Return exponential notation if this Decimal has a positive exponent equal to or greater than
`toExpPos`, or a negative exponent equal to or less than `toExpNeg`.

#### Returns

`string`

#### Inherited from

Decimal.toJSON

#### Defined in

node_modules/decimal.js-light/decimal.d.ts:509

___

### toNumber

▸ **toNumber**(): `number`

Return the value of this Decimal converted to a number primitive.

#### Returns

`number`

#### Inherited from

Decimal.toNumber

#### Defined in

node_modules/decimal.js-light/decimal.d.ts:408

___

### toPower

▸ **toPower**(`y`): [`WrappedDecimal`](WrappedDecimal.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `Numeric` |

#### Returns

[`WrappedDecimal`](WrappedDecimal.md)

#### Overrides

Decimal.toPower

#### Defined in

[src/entity/to-format.ts:78](https://github.com/alpha-defi/raydium-sdk/blob/4217474/src/entity/to-format.ts#L78)

___

### toPrecision

▸ **toPrecision**(`sd?`, `rm?`): `string`

Return a string representing the value of this Decimal rounded to `sd` significant digits
using rounding mode `rounding`.

Return exponential notation if `sd` is less than the number of digits necessary to represent
the integer part of the value in normal notation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sd?` | `number` | Significant digits. Integer, 1 to MAX_DIGITS inclusive. |
| `rm?` | `number` | Rounding mode. Integer, 0 to 8 inclusive. |

#### Returns

`string`

#### Inherited from

Decimal.toPrecision

#### Defined in

node_modules/decimal.js-light/decimal.d.ts:451

___

### toSignificantDigits

▸ **toSignificantDigits**(`sd?`, `rm?`): [`WrappedDecimal`](WrappedDecimal.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sd?` | `number` |
| `rm?` | `number` |

#### Returns

[`WrappedDecimal`](WrappedDecimal.md)

#### Overrides

Decimal.toSignificantDigits

#### Defined in

[src/entity/to-format.ts:80](https://github.com/alpha-defi/raydium-sdk/blob/4217474/src/entity/to-format.ts#L80)

___

### toString

▸ **toString**(): `string`

Return a string representing the value of this Decimal.

Return exponential notation if this Decimal has a positive exponent equal to or greater than
`toExpPos`, or a negative exponent equal to or less than `toExpNeg`.

#### Returns

`string`

#### Inherited from

Decimal.toString

#### Defined in

node_modules/decimal.js-light/decimal.d.ts:482

___

### toWrappedDecimalPlaces

▸ **toWrappedDecimalPlaces**(`dp?`, `rm?`): [`WrappedDecimal`](WrappedDecimal.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dp?` | `number` |
| `rm?` | `number` |

#### Returns

[`WrappedDecimal`](WrappedDecimal.md)

#### Defined in

[src/entity/to-format.ts:74](https://github.com/alpha-defi/raydium-sdk/blob/4217474/src/entity/to-format.ts#L74)

___

### todp

▸ **todp**(`dp?`, `rm?`): [`WrappedDecimal`](WrappedDecimal.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dp?` | `number` |
| `rm?` | `number` |

#### Returns

[`WrappedDecimal`](WrappedDecimal.md)

#### Overrides

Decimal.todp

#### Defined in

[src/entity/to-format.ts:75](https://github.com/alpha-defi/raydium-sdk/blob/4217474/src/entity/to-format.ts#L75)

___

### toint

▸ **toint**(): [`WrappedDecimal`](WrappedDecimal.md)

#### Returns

[`WrappedDecimal`](WrappedDecimal.md)

#### Overrides

Decimal.toint

#### Defined in

[src/entity/to-format.ts:77](https://github.com/alpha-defi/raydium-sdk/blob/4217474/src/entity/to-format.ts#L77)

___

### tosd

▸ **tosd**(`sd?`, `rm?`): [`WrappedDecimal`](WrappedDecimal.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sd?` | `number` |
| `rm?` | `number` |

#### Returns

[`WrappedDecimal`](WrappedDecimal.md)

#### Overrides

Decimal.tosd

#### Defined in

[src/entity/to-format.ts:81](https://github.com/alpha-defi/raydium-sdk/blob/4217474/src/entity/to-format.ts#L81)

___

### val

▸ **val**(): `string`

Return a string representing the value of this Decimal.

Return exponential notation if this Decimal has a positive exponent equal to or greater than
`toExpPos`, or a negative exponent equal to or less than `toExpNeg`.

#### Returns

`string`

#### Inherited from

Decimal.val

#### Defined in

node_modules/decimal.js-light/decimal.d.ts:500

___

### valueOf

▸ **valueOf**(): `string`

Return a string representing the value of this Decimal.

Return exponential notation if this Decimal has a positive exponent equal to or greater than
`toExpPos`, or a negative exponent equal to or less than `toExpNeg`.

#### Returns

`string`

#### Inherited from

Decimal.valueOf

#### Defined in

node_modules/decimal.js-light/decimal.d.ts:491
