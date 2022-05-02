---
id: "Layout"
title: "Interface: Layout<T, P>"
sidebar_label: "Layout"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `P` | ``""`` |

## Properties

### property

• `Optional` **property**: `P`

#### Defined in

[src/marshmallow/buffer-layout.ts:14](https://github.com/alpha-defi/raydium-sdk/blob/ce1010a/src/marshmallow/buffer-layout.ts#L14)

___

### span

• **span**: `number`

#### Defined in

[src/marshmallow/buffer-layout.ts:13](https://github.com/alpha-defi/raydium-sdk/blob/ce1010a/src/marshmallow/buffer-layout.ts#L13)

## Methods

### decode

▸ **decode**(`b`, `offset?`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `Buffer` |
| `offset?` | `number` |

#### Returns

`T`

#### Defined in

[src/marshmallow/buffer-layout.ts:15](https://github.com/alpha-defi/raydium-sdk/blob/ce1010a/src/marshmallow/buffer-layout.ts#L15)

___

### encode

▸ **encode**(`src`, `b`, `offset?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `T` |
| `b` | `Buffer` |
| `offset?` | `number` |

#### Returns

`number`

#### Defined in

[src/marshmallow/buffer-layout.ts:16](https://github.com/alpha-defi/raydium-sdk/blob/ce1010a/src/marshmallow/buffer-layout.ts#L16)

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

#### Defined in

[src/marshmallow/buffer-layout.ts:17](https://github.com/alpha-defi/raydium-sdk/blob/ce1010a/src/marshmallow/buffer-layout.ts#L17)

___

### replicate

▸ **replicate**<`AP`\>(`name`): [`Layout`](../modules.md#layout)<`T`, `AP`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AP` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `AP` |

#### Returns

[`Layout`](../modules.md#layout)<`T`, `AP`\>

#### Defined in

[src/marshmallow/buffer-layout.ts:18](https://github.com/alpha-defi/raydium-sdk/blob/ce1010a/src/marshmallow/buffer-layout.ts#L18)
