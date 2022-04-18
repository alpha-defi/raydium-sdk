---
id: "Base"
title: "Class: Base"
sidebar_label: "Base"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- **`Base`**

  ↳ [`Liquidity`](Liquidity.md)

  ↳ [`Route`](Route.md)

## Constructors

### constructor

• **new Base**()

## Methods

### \_handleTokenAccount

▸ `Static` **_handleTokenAccount**(`params`): `Promise`<`PublicKey`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`HandleTokenAccountParams`](../interfaces/HandleTokenAccountParams.md) |

#### Returns

`Promise`<`PublicKey`\>

#### Defined in

[src/base/base.ts:71](https://github.com/raydium-io/raydium-sdk/blob/3d95730/src/base/base.ts#L71)

___

### \_selectTokenAccount

▸ `Static` **_selectTokenAccount**(`params`): `Promise`<``null`` \| `PublicKey`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`SelectTokenAccountParams`](../interfaces/SelectTokenAccountParams.md) |

#### Returns

`Promise`<``null`` \| `PublicKey`\>

#### Defined in

[src/base/base.ts:38](https://github.com/raydium-io/raydium-sdk/blob/3d95730/src/base/base.ts#L38)
