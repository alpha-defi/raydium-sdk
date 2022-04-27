---
id: "Market"
title: "Class: Market"
sidebar_label: "Market"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new Market**()

## Methods

### getAssociatedAuthority

▸ `Static` **getAssociatedAuthority**(`__namedParameters`): `Promise`<{ `nonce`: `number` ; `publicKey`: `PublicKey`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.marketId` | `PublicKey` |
| `__namedParameters.programId` | `PublicKey` |

#### Returns

`Promise`<{ `nonce`: `number` ; `publicKey`: `PublicKey`  }\>

#### Defined in

[src/serum/serum.ts:41](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/serum/serum.ts#L41)

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
| `state` | [`Structure`](Structure.md)<`PublicKey` \| `BN` \| `Buffer`, ``""``, { `asks`: `PublicKey` ; `baseDepositsTotal`: `BN` ; `baseFeesAccrued`: `BN` ; `baseLotSize`: `BN` ; `baseMint`: `PublicKey` ; `baseVault`: `PublicKey` ; `bids`: `PublicKey` ; `eventQueue`: `PublicKey` ; `feeRateBps`: `BN` ; `ownAddress`: `PublicKey` ; `quoteDepositsTotal`: `BN` ; `quoteDustThreshold`: `BN` ; `quoteFeesAccrued`: `BN` ; `quoteLotSize`: `BN` ; `quoteMint`: `PublicKey` ; `quoteVault`: `PublicKey` ; `referrerRebatesAccrued`: `BN` ; `requestQueue`: `PublicKey` ; `vaultSignerNonce`: `BN`  }\> |

#### Defined in

[src/serum/serum.ts:36](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/serum/serum.ts#L36)

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

[src/serum/serum.ts:12](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/serum/serum.ts#L12)

___

### getStateLayout

▸ `Static` **getStateLayout**(`version`): [`Structure`](Structure.md)<`PublicKey` \| `BN` \| `Buffer`, ``""``, { `asks`: `PublicKey` ; `baseDepositsTotal`: `BN` ; `baseFeesAccrued`: `BN` ; `baseLotSize`: `BN` ; `baseMint`: `PublicKey` ; `baseVault`: `PublicKey` ; `bids`: `PublicKey` ; `eventQueue`: `PublicKey` ; `feeRateBps`: `BN` ; `ownAddress`: `PublicKey` ; `quoteDepositsTotal`: `BN` ; `quoteDustThreshold`: `BN` ; `quoteFeesAccrued`: `BN` ; `quoteLotSize`: `BN` ; `quoteMint`: `PublicKey` ; `quoteVault`: `PublicKey` ; `referrerRebatesAccrued`: `BN` ; `requestQueue`: `PublicKey` ; `vaultSignerNonce`: `BN`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `version` | `number` |

#### Returns

[`Structure`](Structure.md)<`PublicKey` \| `BN` \| `Buffer`, ``""``, { `asks`: `PublicKey` ; `baseDepositsTotal`: `BN` ; `baseFeesAccrued`: `BN` ; `baseLotSize`: `BN` ; `baseMint`: `PublicKey` ; `baseVault`: `PublicKey` ; `bids`: `PublicKey` ; `eventQueue`: `PublicKey` ; `feeRateBps`: `BN` ; `ownAddress`: `PublicKey` ; `quoteDepositsTotal`: `BN` ; `quoteDustThreshold`: `BN` ; `quoteFeesAccrued`: `BN` ; `quoteLotSize`: `BN` ; `quoteMint`: `PublicKey` ; `quoteVault`: `PublicKey` ; `referrerRebatesAccrued`: `BN` ; `requestQueue`: `PublicKey` ; `vaultSignerNonce`: `BN`  }\>

#### Defined in

[src/serum/serum.ts:29](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/serum/serum.ts#L29)

___

### getVersion

▸ `Static` **getVersion**(`programId`): ``3``

#### Parameters

| Name | Type |
| :------ | :------ |
| `programId` | `PublicKey` |

#### Returns

``3``

#### Defined in

[src/serum/serum.ts:19](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/serum/serum.ts#L19)
