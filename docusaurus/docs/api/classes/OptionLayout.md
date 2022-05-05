---
id: "OptionLayout"
title: "Class: OptionLayout<T, P>"
sidebar_label: "OptionLayout"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name |
| :------ |
| `T` |
| `P` |

## Hierarchy

- [`Layout`](../modules.md#layout)<`T` \| ``null``, `P`\>

  ↳ **`OptionLayout`**

## Constructors

### constructor

• **new OptionLayout**<`T`, `P`\>(`layout`, `property?`)

#### Type parameters

| Name |
| :------ |
| `T` |
| `P` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `layout` | [`Layout`](../modules.md#layout)<`T`, ``""``\> |
| `property?` | `P` |

#### Overrides

Layout&lt;T \| null, P\&gt;.constructor

#### Defined in

[src/marshmallow/index.ts:135](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/index.ts#L135)

## Properties

### discriminator

• **discriminator**: [`Layout`](../modules.md#layout)<`number`, ``""``\>

#### Defined in

[src/marshmallow/index.ts:133](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/index.ts#L133)

___

### layout

• **layout**: [`Layout`](../modules.md#layout)<`T`, ``""``\>

#### Defined in

[src/marshmallow/index.ts:132](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/index.ts#L132)

___

### property

• `Optional` **property**: `P`

#### Inherited from

Layout.property

#### Defined in

[src/marshmallow/buffer-layout.ts:14](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/buffer-layout.ts#L14)

___

### span

• **span**: `number`

#### Inherited from

Layout.span

#### Defined in

[src/marshmallow/buffer-layout.ts:13](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/buffer-layout.ts#L13)

## Methods

### decode

▸ **decode**(`b`, `offset?`): ``null`` \| `T`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `b` | `Buffer` | `undefined` |
| `offset` | `number` | `0` |

#### Returns

``null`` \| `T`

#### Overrides

Layout.decode

#### Defined in

[src/marshmallow/index.ts:150](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/index.ts#L150)

___

### encode

▸ **encode**(`src`, `b`, `offset?`): `number`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `src` | ``null`` \| `T` | `undefined` |
| `b` | `Buffer` | `undefined` |
| `offset` | `number` | `0` |

#### Returns

`number`

#### Overrides

Layout.encode

#### Defined in

[src/marshmallow/index.ts:142](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/index.ts#L142)

___

### getSpan

▸ **getSpan**(`b`, `offset?`): `number`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `b` | `Buffer` | `undefined` |
| `offset` | `number` | `0` |

#### Returns

`number`

#### Overrides

Layout.getSpan

#### Defined in

[src/marshmallow/index.ts:160](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/index.ts#L160)

___

### replicate

▸ **replicate**<`AP`\>(`name`): [`Layout`](../modules.md#layout)<``null`` \| `T`, `AP`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AP` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `AP` |

#### Returns

[`Layout`](../modules.md#layout)<``null`` \| `T`, `AP`\>

#### Inherited from

Layout.replicate

#### Defined in

[src/marshmallow/buffer-layout.ts:18](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/buffer-layout.ts#L18)
