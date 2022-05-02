---
id: "Farm"
title: "Class: Farm"
sidebar_label: "Farm"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new Farm**()

## Methods

### fetchMultipleInfo

▸ `Static` **fetchMultipleInfo**(`__namedParameters`): `Promise`<{ `[id: string]`: { `ledger?`: [`FarmLedger`](../modules.md#farmledger) ; `lpVault`: [`SplAccount`](../modules.md#splaccount) ; `state`: [`FarmState`](../modules.md#farmstate) ; `wrapped?`: { `pendingRewards`: `BN`[]  }  };  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`FarmFetchMultipleInfoParams`](../interfaces/FarmFetchMultipleInfoParams.md) |

#### Returns

`Promise`<{ `[id: string]`: { `ledger?`: [`FarmLedger`](../modules.md#farmledger) ; `lpVault`: [`SplAccount`](../modules.md#splaccount) ; `state`: [`FarmState`](../modules.md#farmstate) ; `wrapped?`: { `pendingRewards`: `BN`[]  }  };  }\>

#### Defined in

[src/farm/farm.ts:425](https://github.com/alpha-defi/raydium-sdk/blob/ce1010a/src/farm/farm.ts#L425)

___

### getAssociatedAuthority

▸ `Static` **getAssociatedAuthority**(`__namedParameters`): `Promise`<{ `nonce`: `number` ; `publicKey`: `PublicKey`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.poolId` | `PublicKey` |
| `__namedParameters.programId` | `PublicKey` |

#### Returns

`Promise`<{ `nonce`: `number` ; `publicKey`: `PublicKey`  }\>

#### Defined in

[src/farm/farm.ts:104](https://github.com/alpha-defi/raydium-sdk/blob/ce1010a/src/farm/farm.ts#L104)

___

### getAssociatedLedgerAccount

▸ `Static` **getAssociatedLedgerAccount**(`__namedParameters`): `Promise`<`PublicKey`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.owner` | `PublicKey` |
| `__namedParameters.poolId` | `PublicKey` |
| `__namedParameters.programId` | `PublicKey` |

#### Returns

`Promise`<`PublicKey`\>

#### Defined in

[src/farm/farm.ts:108](https://github.com/alpha-defi/raydium-sdk/blob/ce1010a/src/farm/farm.ts#L108)

___

### getLayouts

▸ `Static` **getLayouts**(`version`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `version` | `number` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `ledger` | [`FarmLedgerLayout`](../modules.md#farmledgerlayout) |
| `state` | [`FarmStateLayout`](../modules.md#farmstatelayout) |

#### Defined in

[src/farm/farm.ts:99](https://github.com/alpha-defi/raydium-sdk/blob/ce1010a/src/farm/farm.ts#L99)

___

### getLedgerLayout

▸ `Static` **getLedgerLayout**(`version`): [`FarmLedgerLayout`](../modules.md#farmledgerlayout)

#### Parameters

| Name | Type |
| :------ | :------ |
| `version` | `number` |

#### Returns

[`FarmLedgerLayout`](../modules.md#farmledgerlayout)

#### Defined in

[src/farm/farm.ts:92](https://github.com/alpha-defi/raydium-sdk/blob/ce1010a/src/farm/farm.ts#L92)

___

### getProgramId

▸ `Static` **getProgramId**(`version`): `PublicKey`

#### Parameters

| Name | Type |
| :------ | :------ |
| `version` | `number` |

#### Returns

`PublicKey`

#### Defined in

[src/farm/farm.ts:67](https://github.com/alpha-defi/raydium-sdk/blob/ce1010a/src/farm/farm.ts#L67)

___

### getStateLayout

▸ `Static` **getStateLayout**(`version`): [`FarmStateLayout`](../modules.md#farmstatelayout)

#### Parameters

| Name | Type |
| :------ | :------ |
| `version` | `number` |

#### Returns

[`FarmStateLayout`](../modules.md#farmstatelayout)

#### Defined in

[src/farm/farm.ts:85](https://github.com/alpha-defi/raydium-sdk/blob/ce1010a/src/farm/farm.ts#L85)

___

### getVersion

▸ `Static` **getVersion**(`programId`): [`FarmVersion`](../modules.md#farmversion)

#### Parameters

| Name | Type |
| :------ | :------ |
| `programId` | [`PublicKeyish`](../modules.md#publickeyish) |

#### Returns

[`FarmVersion`](../modules.md#farmversion)

#### Defined in

[src/farm/farm.ts:74](https://github.com/alpha-defi/raydium-sdk/blob/ce1010a/src/farm/farm.ts#L74)

___

### makeCreateAssociatedLedgerAccountInstruction

▸ `Static` **makeCreateAssociatedLedgerAccountInstruction**(`params`): `TransactionInstruction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`FarmCreateAssociatedLedgerAccountInstructionParams`](../interfaces/FarmCreateAssociatedLedgerAccountInstructionParams.md) |

#### Returns

`TransactionInstruction`

#### Defined in

[src/farm/farm.ts:353](https://github.com/alpha-defi/raydium-sdk/blob/ce1010a/src/farm/farm.ts#L353)

___

### makeCreateAssociatedLedgerAccountInstructionV3

▸ `Static` **makeCreateAssociatedLedgerAccountInstructionV3**(`__namedParameters`): `TransactionInstruction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`FarmCreateAssociatedLedgerAccountInstructionParams`](../interfaces/FarmCreateAssociatedLedgerAccountInstructionParams.md) |

#### Returns

`TransactionInstruction`

#### Defined in

[src/farm/farm.ts:366](https://github.com/alpha-defi/raydium-sdk/blob/ce1010a/src/farm/farm.ts#L366)

___

### makeCreateAssociatedLedgerAccountInstructionV5

▸ `Static` **makeCreateAssociatedLedgerAccountInstructionV5**(`__namedParameters`): `TransactionInstruction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`FarmCreateAssociatedLedgerAccountInstructionParams`](../interfaces/FarmCreateAssociatedLedgerAccountInstructionParams.md) |

#### Returns

`TransactionInstruction`

#### Defined in

[src/farm/farm.ts:395](https://github.com/alpha-defi/raydium-sdk/blob/ce1010a/src/farm/farm.ts#L395)

___

### makeDepositInstruction

▸ `Static` **makeDepositInstruction**(`params`): `TransactionInstruction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`FarmDepositInstructionParams`](../interfaces/FarmDepositInstructionParams.md) |

#### Returns

`TransactionInstruction`

#### Defined in

[src/farm/farm.ts:125](https://github.com/alpha-defi/raydium-sdk/blob/ce1010a/src/farm/farm.ts#L125)

___

### makeDepositInstructionV3

▸ `Static` **makeDepositInstructionV3**(`__namedParameters`): `TransactionInstruction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`FarmDepositInstructionParams`](../interfaces/FarmDepositInstructionParams.md) |

#### Returns

`TransactionInstruction`

#### Defined in

[src/farm/farm.ts:138](https://github.com/alpha-defi/raydium-sdk/blob/ce1010a/src/farm/farm.ts#L138)

___

### makeDepositInstructionV5

▸ `Static` **makeDepositInstructionV5**(`__namedParameters`): `TransactionInstruction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`FarmDepositInstructionParams`](../interfaces/FarmDepositInstructionParams.md) |

#### Returns

`TransactionInstruction`

#### Defined in

[src/farm/farm.ts:189](https://github.com/alpha-defi/raydium-sdk/blob/ce1010a/src/farm/farm.ts#L189)

___

### makeWithdrawInstruction

▸ `Static` **makeWithdrawInstruction**(`params`): `TransactionInstruction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`FarmDepositInstructionParams`](../interfaces/FarmDepositInstructionParams.md) |

#### Returns

`TransactionInstruction`

#### Defined in

[src/farm/farm.ts:239](https://github.com/alpha-defi/raydium-sdk/blob/ce1010a/src/farm/farm.ts#L239)

___

### makeWithdrawInstructionV3

▸ `Static` **makeWithdrawInstructionV3**(`__namedParameters`): `TransactionInstruction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`FarmDepositInstructionParams`](../interfaces/FarmDepositInstructionParams.md) |

#### Returns

`TransactionInstruction`

#### Defined in

[src/farm/farm.ts:252](https://github.com/alpha-defi/raydium-sdk/blob/ce1010a/src/farm/farm.ts#L252)

___

### makeWithdrawInstructionV5

▸ `Static` **makeWithdrawInstructionV5**(`__namedParameters`): `TransactionInstruction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`FarmDepositInstructionParams`](../interfaces/FarmDepositInstructionParams.md) |

#### Returns

`TransactionInstruction`

#### Defined in

[src/farm/farm.ts:303](https://github.com/alpha-defi/raydium-sdk/blob/ce1010a/src/farm/farm.ts#L303)
