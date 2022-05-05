---
id: "BNLayout"
title: "Class: BNLayout<P>"
sidebar_label: "BNLayout"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `string` = ``""`` |

## Hierarchy

- [`Layout`](../modules.md#layout)<`BN`, `P`\>

  ↳ **`BNLayout`**

## Constructors

### constructor

• **new BNLayout**<`P`\>(`span`, `signed`, `property?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `string` = ``""`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `span` | `number` |
| `signed` | `boolean` |
| `property?` | `P` |

#### Overrides

Layout&lt;BN, P\&gt;.constructor

#### Defined in

[src/marshmallow/index.ts:16](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/index.ts#L16)

## Properties

### blob

• **blob**: [`Layout`](../modules.md#layout)<`Buffer`, ``""``\>

#### Defined in

[src/marshmallow/index.ts:13](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/index.ts#L13)

___

### property

• `Optional` **property**: `P`

#### Inherited from

Layout.property

#### Defined in

[src/marshmallow/buffer-layout.ts:14](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/buffer-layout.ts#L14)

___

### signed

• **signed**: `boolean`

#### Defined in

[src/marshmallow/index.ts:14](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/index.ts#L14)

___

### span

• **span**: `number`

#### Inherited from

Layout.span

#### Defined in

[src/marshmallow/buffer-layout.ts:13](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/buffer-layout.ts#L13)

## Methods

### decode

▸ **decode**(`b`, `offset?`): `BN`

**`override`**

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `b` | `Buffer` | `undefined` |
| `offset` | `number` | `0` |

#### Returns

`BN`

#### Overrides

Layout.decode

#### Defined in

[src/marshmallow/index.ts:24](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/index.ts#L24)

___

### encode

▸ **encode**(`src`, `b`, `offset?`): `number`

**`override`**

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `src` | `BN` | `undefined` |
| `b` | `Buffer` | `undefined` |
| `offset` | `number` | `0` |

#### Returns

`number`

#### Overrides

Layout.encode

#### Defined in

[src/marshmallow/index.ts:33](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/index.ts#L33)

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

[src/marshmallow/buffer-layout.ts:17](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/buffer-layout.ts#L17)

___

### replicate

▸ **replicate**<`AP`\>(`name`): [`Layout`](../modules.md#layout)<`BN`, `AP`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AP` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `AP` |

#### Returns

[`Layout`](../modules.md#layout)<`BN`, `AP`\>

#### Inherited from

Layout.replicate

#### Defined in

[src/marshmallow/buffer-layout.ts:18](https://github.com/alpha-defi/raydium-sdk/blob/108ded9/src/marshmallow/buffer-layout.ts#L18)
