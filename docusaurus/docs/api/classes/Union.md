---
id: "Union"
title: "Class: Union<Schema>"
sidebar_label: "Union"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name |
| :------ |
| `Schema` |

## Hierarchy

- `Union`<`Schema`\>

  ↳ **`Union`**

## Constructors

### constructor

• **new Union**<`Schema`\>()

#### Type parameters

| Name |
| :------ |
| `Schema` |

#### Inherited from

\_Union<Schema\>.constructor

#### Defined in

[src/marshmallow/buffer-layout.ts:59](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/buffer-layout.ts#L59)

• **new Union**<`Schema`\>(`discr`, `defaultLayout`, `property?`)

#### Type parameters

| Name |
| :------ |
| `Schema` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `discr` | [`Layout`](../modules.md#layout)<`any`, `any`\> |
| `defaultLayout` | [`Layout`](../modules.md#layout)<`any`, `any`\> |
| `property?` | `string` |

#### Inherited from

\_Union<Schema\>.constructor

#### Defined in

[src/marshmallow/buffer-layout.ts:60](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/buffer-layout.ts#L60)

## Properties

### property

• `Optional` **property**: ``""``

#### Inherited from

\_Union.property

#### Defined in

[src/marshmallow/buffer-layout.ts:14](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/buffer-layout.ts#L14)

___

### registry

• **registry**: `object`

#### Inherited from

\_Union.registry

#### Defined in

[src/marshmallow/buffer-layout.ts:50](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/buffer-layout.ts#L50)

___

### span

• **span**: `number`

#### Inherited from

\_Union.span

#### Defined in

[src/marshmallow/buffer-layout.ts:13](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/buffer-layout.ts#L13)

## Methods

### addVariant

▸ **addVariant**(`variant`, `layout`, `property?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `variant` | `number` |
| `layout` | `Structure`<`any`, `any`, `Partial`<`Schema`\>\> \| [`Layout`](../modules.md#layout)<`any`, keyof `Schema`\> |
| `property?` | `string` |

#### Returns

`any`

#### Inherited from

\_Union.addVariant

#### Defined in

[src/marshmallow/buffer-layout.ts:52](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/buffer-layout.ts#L52)

___

### decode

▸ **decode**(`b`, `offset?`): `Partial`<`Schema`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `Buffer` |
| `offset?` | `number` |

#### Returns

`Partial`<`Schema`\>

#### Inherited from

\_Union.decode

#### Defined in

[src/marshmallow/buffer-layout.ts:51](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/buffer-layout.ts#L51)

___

### decodeInstruction

▸ **decodeInstruction**(`instruction`): `Partial`<`Schema`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `instruction` | `any` |

#### Returns

`Partial`<`Schema`\>

#### Defined in

[src/marshmallow/index.ts:301](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/index.ts#L301)

___

### encode

▸ **encode**(`src`, `b`, `offset?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `any` |
| `b` | `Buffer` |
| `offset?` | `number` |

#### Returns

`number`

#### Inherited from

\_Union.encode

#### Defined in

[src/marshmallow/buffer-layout.ts:16](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/buffer-layout.ts#L16)

___

### encodeInstruction

▸ **encodeInstruction**(`instruction`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `instruction` | `any` |

#### Returns

`Buffer`

#### Defined in

[src/marshmallow/index.ts:295](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/index.ts#L295)

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

\_Union.getSpan

#### Defined in

[src/marshmallow/buffer-layout.ts:17](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/buffer-layout.ts#L17)

___

### replicate

▸ **replicate**<`AP`\>(`name`): [`Layout`](../modules.md#layout)<`any`, `AP`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AP` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `AP` |

#### Returns

[`Layout`](../modules.md#layout)<`any`, `AP`\>

#### Inherited from

\_Union.replicate

#### Defined in

[src/marshmallow/buffer-layout.ts:18](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/buffer-layout.ts#L18)
