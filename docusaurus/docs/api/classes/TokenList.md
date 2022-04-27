---
id: "TokenList"
title: "Class: TokenList"
sidebar_label: "TokenList"
sidebar_position: 0
custom_edit_url: null
---

Token list

## Constructors

### constructor

• **new TokenList**(`tokenList`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenList` | ([`LpTokenInfo`](../interfaces/LpTokenInfo.md) \| [`SplTokenInfo`](../interfaces/SplTokenInfo.md))[] |

#### Defined in

[src/token/util.ts:11](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/token/util.ts#L11)

## Methods

### filterByMint

▸ **filterByMint**(`mint`): ([`LpTokenInfo`](../interfaces/LpTokenInfo.md) \| [`SplTokenInfo`](../interfaces/SplTokenInfo.md))[]

Filter token by mint of token list.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mint` | `string` | Token's mint address |

#### Returns

([`LpTokenInfo`](../interfaces/LpTokenInfo.md) \| [`SplTokenInfo`](../interfaces/SplTokenInfo.md))[]

#### Defined in

[src/token/util.ts:18](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/token/util.ts#L18)

___

### filterUniqueByMint

▸ **filterUniqueByMint**<`T`\>(`mint`, `tokenType?`): `T` extends ``"all"`` ? [`LpTokenInfo`](../interfaces/LpTokenInfo.md) \| [`SplTokenInfo`](../interfaces/SplTokenInfo.md) : `T` extends ``"spl"`` ? [`SplTokenInfo`](../interfaces/SplTokenInfo.md) : [`LpTokenInfo`](../interfaces/LpTokenInfo.md)

Filter unique token by mint of token list, must and can only have one result.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends ``"all"`` \| ``"spl"`` \| ``"lp"`` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `mint` | `string` | `undefined` |
| `tokenType` | `T` \| ``"all"`` \| ``"spl"`` \| ``"lp"`` | `"all"` |

#### Returns

`T` extends ``"all"`` ? [`LpTokenInfo`](../interfaces/LpTokenInfo.md) \| [`SplTokenInfo`](../interfaces/SplTokenInfo.md) : `T` extends ``"spl"`` ? [`SplTokenInfo`](../interfaces/SplTokenInfo.md) : [`LpTokenInfo`](../interfaces/LpTokenInfo.md)

#### Defined in

[src/token/util.ts:25](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/token/util.ts#L25)

___

### getList

▸ **getList**(): ([`LpTokenInfo`](../interfaces/LpTokenInfo.md) \| [`SplTokenInfo`](../interfaces/SplTokenInfo.md))[]

Get list of token list

#### Returns

([`LpTokenInfo`](../interfaces/LpTokenInfo.md) \| [`SplTokenInfo`](../interfaces/SplTokenInfo.md))[]

#### Defined in

[src/token/util.ts:48](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/token/util.ts#L48)
