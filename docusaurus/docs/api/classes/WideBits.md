---
id: "WideBits"
title: "Class: WideBits<P>"
sidebar_label: "WideBits"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `string` = ``""`` |

## Hierarchy

- [`Layout`](../modules.md#layout)<`Record`<`string`, `boolean`\>, `P`\>

  ↳ **`WideBits`**

## Constructors

### constructor

• **new WideBits**<`P`\>(`property?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `string` = ``""`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `property?` | `P` |

#### Overrides

Layout&lt;Record&lt;string, boolean\&gt;, P\&gt;.constructor

#### Defined in

[src/marshmallow/index.ts:46](https://github.com/alpha-defi/raydium-sdk/blob/ce1010a/src/marshmallow/index.ts#L46)

## Properties

### \_lower

• **\_lower**: `any`

#### Defined in

[src/marshmallow/index.ts:43](https://github.com/alpha-defi/raydium-sdk/blob/ce1010a/src/marshmallow/index.ts#L43)

___

### \_upper

• **\_upper**: `any`

#### Defined in

[src/marshmallow/index.ts:44](https://github.com/alpha-defi/raydium-sdk/blob/ce1010a/src/marshmallow/index.ts#L44)

___

### property

• `Optional` **property**: `P`

#### Inherited from

Layout.property

#### Defined in

[src/marshmallow/buffer-layout.ts:14](https://github.com/alpha-defi/raydium-sdk/blob/ce1010a/src/marshmallow/buffer-layout.ts#L14)

___

### span

• **span**: `number`

#### Inherited from

Layout.span

#### Defined in

[src/marshmallow/buffer-layout.ts:13](https://github.com/alpha-defi/raydium-sdk/blob/ce1010a/src/marshmallow/buffer-layout.ts#L13)

## Methods

### addBoolean

▸ **addBoolean**(`property`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `property` | `string` |

#### Returns

`void`

#### Defined in

[src/marshmallow/index.ts:53](https://github.com/alpha-defi/raydium-sdk/blob/ce1010a/src/marshmallow/index.ts#L53)

___

### decode

▸ **decode**(`b`, `offset?`): `Record`<`string`, `boolean`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `b` | `Buffer` | `undefined` |
| `offset` | `number` | `0` |

#### Returns

`Record`<`string`, `boolean`\>

#### Overrides

Layout.decode

#### Defined in

[src/marshmallow/index.ts:61](https://github.com/alpha-defi/raydium-sdk/blob/ce1010a/src/marshmallow/index.ts#L61)

___

### encode

▸ **encode**(`src`, `b`, `offset?`): `any`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `src` | `any` | `undefined` |
| `b` | `Buffer` | `undefined` |
| `offset` | `number` | `0` |

#### Returns

`any`

#### Overrides

Layout.encode

#### Defined in

[src/marshmallow/index.ts:67](https://github.com/alpha-defi/raydium-sdk/blob/ce1010a/src/marshmallow/index.ts#L67)

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

[src/marshmallow/buffer-layout.ts:17](https://github.com/alpha-defi/raydium-sdk/blob/ce1010a/src/marshmallow/buffer-layout.ts#L17)

___

### replicate

▸ **replicate**<`AP`\>(`name`): [`Layout`](../modules.md#layout)<`Record`<`string`, `boolean`\>, `AP`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AP` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `AP` |

#### Returns

[`Layout`](../modules.md#layout)<`Record`<`string`, `boolean`\>, `AP`\>

#### Inherited from

Layout.replicate

#### Defined in

[src/marshmallow/buffer-layout.ts:18](https://github.com/alpha-defi/raydium-sdk/blob/ce1010a/src/marshmallow/buffer-layout.ts#L18)
