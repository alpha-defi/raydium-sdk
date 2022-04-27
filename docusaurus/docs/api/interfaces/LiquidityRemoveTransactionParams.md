---
id: "LiquidityRemoveTransactionParams"
title: "Interface: LiquidityRemoveTransactionParams"
sidebar_label: "LiquidityRemoveTransactionParams"
sidebar_position: 0
custom_edit_url: null
---

Remove liquidity transaction params

## Properties

### amountIn

• **amountIn**: [`TokenAmount`](../classes/TokenAmount.md)

#### Defined in

[src/liquidity/liquidity.ts:182](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/liquidity/liquidity.ts#L182)

___

### config

• `Optional` **config**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bypassAssociatedCheck?` | `boolean` |

#### Defined in

[src/liquidity/liquidity.ts:183](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/liquidity/liquidity.ts#L183)

___

### connection

• **connection**: `Connection`

#### Defined in

[src/liquidity/liquidity.ts:175](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/liquidity/liquidity.ts#L175)

___

### poolKeys

• **poolKeys**: [`LiquidityPoolKeysV4`](../modules.md#liquiditypoolkeysv4)

#### Defined in

[src/liquidity/liquidity.ts:176](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/liquidity/liquidity.ts#L176)

___

### userKeys

• **userKeys**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `owner` | `PublicKey` |
| `payer?` | `PublicKey` |
| `tokenAccounts` | [`TokenAccount`](TokenAccount.md)[] |

#### Defined in

[src/liquidity/liquidity.ts:177](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/liquidity/liquidity.ts#L177)
