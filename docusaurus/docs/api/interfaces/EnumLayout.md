---
id: "EnumLayout"
title: "Interface: EnumLayout<T, P>"
sidebar_label: "EnumLayout"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `P` | extends `string` = ``""`` |

## Hierarchy

- [`Layout`](../modules.md#layout)<`T`, `P`\>

  ↳ **`EnumLayout`**

## Properties

### property

• `Optional` **property**: `P`

#### Inherited from

Layout.property

#### Defined in

[src/marshmallow/buffer-layout.ts:14](https://github.com/raydium-io/raydium-sdk/blob/3d95730/src/marshmallow/buffer-layout.ts#L14)

___

### registry

• **registry**: `Record`<`string`, [`Layout`](../modules.md#layout)<`any`, ``""``\>\>

#### Defined in

[src/marshmallow/index.ts:240](https://github.com/raydium-io/raydium-sdk/blob/3d95730/src/marshmallow/index.ts#L240)

___

### span

• **span**: `number`

#### Inherited from

Layout.span

#### Defined in

[src/marshmallow/buffer-layout.ts:13](https://github.com/raydium-io/raydium-sdk/blob/3d95730/src/marshmallow/buffer-layout.ts#L13)

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

#### Inherited from

Layout.decode

#### Defined in

[src/marshmallow/buffer-layout.ts:15](https://github.com/raydium-io/raydium-sdk/blob/3d95730/src/marshmallow/buffer-layout.ts#L15)

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

#### Inherited from

Layout.encode

#### Defined in

[src/marshmallow/buffer-layout.ts:16](https://github.com/raydium-io/raydium-sdk/blob/3d95730/src/marshmallow/buffer-layout.ts#L16)

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

#### Inherited from

Layout.getSpan

#### Defined in

[src/marshmallow/buffer-layout.ts:17](https://github.com/raydium-io/raydium-sdk/blob/3d95730/src/marshmallow/buffer-layout.ts#L17)

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

#### Inherited from

Layout.replicate

#### Defined in

[src/marshmallow/buffer-layout.ts:18](https://github.com/raydium-io/raydium-sdk/blob/3d95730/src/marshmallow/buffer-layout.ts#L18)
