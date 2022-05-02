---
id: "Spl"
title: "Class: Spl"
sidebar_label: "Spl"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new Spl**()

## Methods

### getAssociatedTokenAccount

▸ `Static` **getAssociatedTokenAccount**(`__namedParameters`): `Promise`<`PublicKey`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.mint` | `PublicKey` |
| `__namedParameters.owner` | `PublicKey` |

#### Returns

`Promise`<`PublicKey`\>

#### Defined in

[src/spl/spl.ts:16](https://github.com/alpha-defi/raydium-sdk/blob/4217474/src/spl/spl.ts#L16)

___

### insertCreateWrappedNativeAccountInstructions

▸ `Static` **insertCreateWrappedNativeAccountInstructions**(`__namedParameters`): `Promise`<`PublicKey`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.amount` | [`BigNumberish`](../modules.md#bignumberish) |
| `__namedParameters.commitment?` | `Commitment` |
| `__namedParameters.connection` | `Connection` |
| `__namedParameters.instructions` | `TransactionInstruction`[] |
| `__namedParameters.owner` | `PublicKey` |
| `__namedParameters.payer` | `PublicKey` |
| `__namedParameters.signers` | `Signer`[] |

#### Returns

`Promise`<`PublicKey`\>

#### Defined in

[src/spl/spl.ts:104](https://github.com/alpha-defi/raydium-sdk/blob/4217474/src/spl/spl.ts#L104)

___

### makeCloseAccountInstruction

▸ `Static` **makeCloseAccountInstruction**(`__namedParameters`): `TransactionInstruction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.multiSigners?` | `Signer`[] |
| `__namedParameters.owner` | `PublicKey` |
| `__namedParameters.payer` | `PublicKey` |
| `__namedParameters.tokenAccount` | `PublicKey` |

#### Returns

`TransactionInstruction`

#### Defined in

[src/spl/spl.ts:208](https://github.com/alpha-defi/raydium-sdk/blob/4217474/src/spl/spl.ts#L208)

___

### makeCreateAssociatedTokenAccountInstruction

▸ `Static` **makeCreateAssociatedTokenAccountInstruction**(`__namedParameters`): `TransactionInstruction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.associatedAccount` | `PublicKey` |
| `__namedParameters.mint` | `PublicKey` |
| `__namedParameters.owner` | `PublicKey` |
| `__namedParameters.payer` | `PublicKey` |

#### Returns

`TransactionInstruction`

#### Defined in

[src/spl/spl.ts:20](https://github.com/alpha-defi/raydium-sdk/blob/4217474/src/spl/spl.ts#L20)

___

### makeCreateWrappedNativeAccountInstructions

▸ `Static` **makeCreateWrappedNativeAccountInstructions**(`__namedParameters`): `Promise`<{ `instructions`: `TransactionInstruction`[] ; `newAccount`: `Keypair`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.amount` | [`BigNumberish`](../modules.md#bignumberish) |
| `__namedParameters.commitment?` | `Commitment` |
| `__namedParameters.connection` | `Connection` |
| `__namedParameters.owner` | `PublicKey` |
| `__namedParameters.payer` | `PublicKey` |

#### Returns

`Promise`<{ `instructions`: `TransactionInstruction`[] ; `newAccount`: `Keypair`  }\>

#### Defined in

[src/spl/spl.ts:42](https://github.com/alpha-defi/raydium-sdk/blob/4217474/src/spl/spl.ts#L42)

___

### makeInitAccountInstruction

▸ `Static` **makeInitAccountInstruction**(`__namedParameters`): `TransactionInstruction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.mint` | `PublicKey` |
| `__namedParameters.owner` | `PublicKey` |
| `__namedParameters.tokenAccount` | `PublicKey` |

#### Returns

`TransactionInstruction`

#### Defined in

[src/spl/spl.ts:169](https://github.com/alpha-defi/raydium-sdk/blob/4217474/src/spl/spl.ts#L169)

___

### makeInitMintInstruction

▸ `Static` **makeInitMintInstruction**(`__namedParameters`): `TransactionInstruction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.decimals` | `number` |
| `__namedParameters.freezeAuthority?` | ``null`` \| `PublicKey` |
| `__namedParameters.mint` | `PublicKey` |
| `__namedParameters.mintAuthority` | `PublicKey` |

#### Returns

`TransactionInstruction`

#### Defined in

[src/spl/spl.ts:135](https://github.com/alpha-defi/raydium-sdk/blob/4217474/src/spl/spl.ts#L135)

___

### makeMintToInstruction

▸ `Static` **makeMintToInstruction**(`__namedParameters`): `TransactionInstruction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.amount` | [`BigNumberish`](../modules.md#bignumberish) |
| `__namedParameters.authority` | `PublicKey` |
| `__namedParameters.dest` | `PublicKey` |
| `__namedParameters.mint` | `PublicKey` |
| `__namedParameters.multiSigners?` | `Signer`[] |

#### Returns

`TransactionInstruction`

#### Defined in

[src/spl/spl.ts:149](https://github.com/alpha-defi/raydium-sdk/blob/4217474/src/spl/spl.ts#L149)

___

### makeTransferInstruction

▸ `Static` **makeTransferInstruction**(`__namedParameters`): `TransactionInstruction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.amount` | [`BigNumberish`](../modules.md#bignumberish) |
| `__namedParameters.destination` | `PublicKey` |
| `__namedParameters.multiSigners?` | `Signer`[] |
| `__namedParameters.owner` | `PublicKey` |
| `__namedParameters.source` | `PublicKey` |

#### Returns

`TransactionInstruction`

#### Defined in

[src/spl/spl.ts:181](https://github.com/alpha-defi/raydium-sdk/blob/4217474/src/spl/spl.ts#L181)
