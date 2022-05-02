---
id: "Structure"
title: "Class: Structure<T, P, D>"
sidebar_label: "Structure"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name |
| :------ |
| `T` |
| `P` |
| `D` |

## Hierarchy

- `Structure`<`T`, `P`, `D`\>

  ↳ **`Structure`**

## Constructors

### constructor

• **new Structure**<`T`, `P`, `D`\>()

#### Type parameters

| Name |
| :------ |
| `T` |
| `P` |
| `D` |

#### Inherited from

\_Structure<T, P, D\>.constructor

#### Defined in

[src/marshmallow/buffer-layout.ts:38](https://github.com/alpha-defi/raydium-sdk/blob/ce1010a/src/marshmallow/buffer-layout.ts#L38)

• **new Structure**<`T`, `P`, `D`\>(`fields`, `property?`, `decodePrefixes?`)

#### Type parameters

| Name |
| :------ |
| `T` |
| `P` |
| `D` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fields` | `T` |
| `property?` | `P` |
| `decodePrefixes?` | `boolean` |

#### Inherited from

\_Structure<T, P, D\>.constructor

#### Defined in

[src/marshmallow/buffer-layout.ts:39](https://github.com/alpha-defi/raydium-sdk/blob/ce1010a/src/marshmallow/buffer-layout.ts#L39)

## Properties

### property

• `Optional` **property**: `P`

#### Inherited from

\_Structure.property

#### Defined in

[src/marshmallow/buffer-layout.ts:14](https://github.com/alpha-defi/raydium-sdk/blob/ce1010a/src/marshmallow/buffer-layout.ts#L14)

___

### span

• **span**: `number`

#### Inherited from

\_Structure.span

#### Defined in

[src/marshmallow/buffer-layout.ts:32](https://github.com/alpha-defi/raydium-sdk/blob/ce1010a/src/marshmallow/buffer-layout.ts#L32)

## Methods

### decode

▸ **decode**(`b`, `offset?`): `D`

**`override`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `Buffer` |
| `offset?` | `number` |

#### Returns

`D`

#### Overrides

\_Structure.decode

#### Defined in

[src/marshmallow/index.ts:265](https://github.com/alpha-defi/raydium-sdk/blob/ce1010a/src/marshmallow/index.ts#L265)

___

### encode

▸ **encode**(`src`, `b`, `offset?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `D` |
| `b` | `Buffer` |
| `offset?` | `number` |

#### Returns

`number`

#### Inherited from

\_Structure.encode

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

#### Inherited from

\_Structure.getSpan

#### Defined in

[src/marshmallow/buffer-layout.ts:17](https://github.com/alpha-defi/raydium-sdk/blob/ce1010a/src/marshmallow/buffer-layout.ts#L17)

___

### layoutFor

▸ **layoutFor**<`AP`\>(`property`): [`Layout`](../modules.md#layout)<`D`[`AP`], ``""``\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AP` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `property` | `AP` |

#### Returns

[`Layout`](../modules.md#layout)<`D`[`AP`], ``""``\>

#### Inherited from

\_Structure.layoutFor

#### Defined in

[src/marshmallow/buffer-layout.ts:34](https://github.com/alpha-defi/raydium-sdk/blob/ce1010a/src/marshmallow/buffer-layout.ts#L34)

___

### offsetOf

▸ **offsetOf**<`AP`\>(`property`): `number`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AP` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `property` | `AP` |

#### Returns

`number`

#### Inherited from

\_Structure.offsetOf

#### Defined in

[src/marshmallow/buffer-layout.ts:35](https://github.com/alpha-defi/raydium-sdk/blob/ce1010a/src/marshmallow/buffer-layout.ts#L35)

___

### replicate

▸ **replicate**<`AP`\>(`name`): [`Layout`](../modules.md#layout)<`D`, `AP`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AP` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `AP` |

#### Returns

[`Layout`](../modules.md#layout)<`D`, `AP`\>

#### Inherited from

\_Structure.replicate

#### Defined in

[src/marshmallow/buffer-layout.ts:18](https://github.com/alpha-defi/raydium-sdk/blob/ce1010a/src/marshmallow/buffer-layout.ts#L18)
