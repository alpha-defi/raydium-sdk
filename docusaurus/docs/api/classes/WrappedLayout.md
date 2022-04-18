---
id: "WrappedLayout"
title: "Class: WrappedLayout<T, U, P>"
sidebar_label: "WrappedLayout"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `U` | `U` |
| `P` | extends `string` = ``""`` |

## Hierarchy

- [`Layout`](../modules.md#layout)<`U`, `P`\>

  ↳ **`WrappedLayout`**

## Constructors

### constructor

• **new WrappedLayout**<`T`, `U`, `P`\>(`layout`, `decoder`, `encoder`, `property?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `U` | `U` |
| `P` | extends `string` = ``""`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `layout` | [`Layout`](../modules.md#layout)<`T`, ``""``\> |
| `decoder` | (`data`: `T`) => `U` |
| `encoder` | (`src`: `U`) => `T` |
| `property?` | `P` |

#### Overrides

Layout&lt;U, P\&gt;.constructor

#### Defined in

[src/marshmallow/index.ts:101](https://github.com/alpha-defi/raydium-sdk/blob/5597113/src/marshmallow/index.ts#L101)

## Properties

### decoder

• **decoder**: (`data`: `T`) => `U`

#### Type declaration

▸ (`data`): `U`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T` |

##### Returns

`U`

#### Defined in

[src/marshmallow/index.ts:98](https://github.com/alpha-defi/raydium-sdk/blob/5597113/src/marshmallow/index.ts#L98)

___

### encoder

• **encoder**: (`src`: `U`) => `T`

#### Type declaration

▸ (`src`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `U` |

##### Returns

`T`

#### Defined in

[src/marshmallow/index.ts:99](https://github.com/alpha-defi/raydium-sdk/blob/5597113/src/marshmallow/index.ts#L99)

___

### layout

• **layout**: [`Layout`](../modules.md#layout)<`T`, ``""``\>

#### Defined in

[src/marshmallow/index.ts:97](https://github.com/alpha-defi/raydium-sdk/blob/5597113/src/marshmallow/index.ts#L97)

___

### property

• `Optional` **property**: `P`

#### Inherited from

Layout.property

#### Defined in

[src/marshmallow/buffer-layout.ts:14](https://github.com/alpha-defi/raydium-sdk/blob/5597113/src/marshmallow/buffer-layout.ts#L14)

___

### span

• **span**: `number`

#### Inherited from

Layout.span

#### Defined in

[src/marshmallow/buffer-layout.ts:13](https://github.com/alpha-defi/raydium-sdk/blob/5597113/src/marshmallow/buffer-layout.ts#L13)

## Methods

### decode

▸ **decode**(`b`, `offset?`): `U`

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `Buffer` |
| `offset?` | `number` |

#### Returns

`U`

#### Overrides

Layout.decode

#### Defined in

[src/marshmallow/index.ts:109](https://github.com/alpha-defi/raydium-sdk/blob/5597113/src/marshmallow/index.ts#L109)

___

### encode

▸ **encode**(`src`, `b`, `offset?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `U` |
| `b` | `Buffer` |
| `offset?` | `number` |

#### Returns

`number`

#### Overrides

Layout.encode

#### Defined in

[src/marshmallow/index.ts:113](https://github.com/alpha-defi/raydium-sdk/blob/5597113/src/marshmallow/index.ts#L113)

___

### getSpan

▸ **getSpan**(`b`, `offset?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `Buffer` |
| `offset?` | `number` |

#### Returns

`number`

#### Overrides

Layout.getSpan

#### Defined in

[src/marshmallow/index.ts:117](https://github.com/alpha-defi/raydium-sdk/blob/5597113/src/marshmallow/index.ts#L117)

___

### replicate

▸ **replicate**<`AP`\>(`name`): [`Layout`](../modules.md#layout)<`U`, `AP`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AP` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `AP` |

#### Returns

[`Layout`](../modules.md#layout)<`U`, `AP`\>

#### Inherited from

Layout.replicate

#### Defined in

[src/marshmallow/buffer-layout.ts:18](https://github.com/alpha-defi/raydium-sdk/blob/5597113/src/marshmallow/buffer-layout.ts#L18)
