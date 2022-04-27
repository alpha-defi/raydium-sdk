---
id: "Logger"
title: "Class: Logger"
sidebar_label: "Logger"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new Logger**(`moduleName`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `moduleName` | `string` |

#### Defined in

[src/common/logger.ts:161](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/common/logger.ts#L161)

## Properties

### moduleName

• `Readonly` **moduleName**: `string`

#### Defined in

[src/common/logger.ts:155](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/common/logger.ts#L155)

___

### version

• `Readonly` **version**: `string` = `version`

#### Defined in

[src/common/logger.ts:154](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/common/logger.ts#L154)

___

### errors

▪ `Static` **errors**: typeof [`ErrorCode`](../enums/ErrorCode.md) = `ErrorCode`

#### Defined in

[src/common/logger.ts:157](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/common/logger.ts#L157)

___

### levels

▪ `Static` **levels**: typeof [`LogLevel`](../enums/LogLevel.md) = `LogLevel`

#### Defined in

[src/common/logger.ts:159](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/common/logger.ts#L159)

## Methods

### \_log

▸ **_log**(`logLevel`, `args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `logLevel` | [`LogLevel`](../enums/LogLevel.md) |
| `args` | `any`[] |

#### Returns

`void`

#### Defined in

[src/common/logger.ts:165](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/common/logger.ts#L165)

___

### assert

▸ **assert**(`condition`, `message`, `code?`, `params?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | `any` |
| `message` | `string` |
| `code?` | [`ErrorCode`](../enums/ErrorCode.md) |
| `params?` | `any` |

#### Returns

`void`

#### Defined in

[src/common/logger.ts:238](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/common/logger.ts#L238)

___

### assertArgument

▸ **assertArgument**(`condition`, `message`, `name`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | `any` |
| `message` | `string` |
| `name` | `string` |
| `value` | `any` |

#### Returns

`void`

#### Defined in

[src/common/logger.ts:245](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/common/logger.ts#L245)

___

### checkAbstract

▸ **checkAbstract**(`target`, `kind`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |
| `kind` | `any` |

#### Returns

`void`

#### Defined in

[src/common/logger.ts:318](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/common/logger.ts#L318)

___

### checkArgumentCount

▸ **checkArgumentCount**(`count`, `expectedCount`, `message?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |
| `expectedCount` | `number` |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[src/common/logger.ts:290](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/common/logger.ts#L290)

___

### checkNew

▸ **checkNew**(`target`, `kind`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |
| `kind` | `any` |

#### Returns

`void`

#### Defined in

[src/common/logger.ts:312](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/common/logger.ts#L312)

___

### checkNormalize

▸ **checkNormalize**(`message?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[src/common/logger.ts:252](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/common/logger.ts#L252)

___

### checkSafeUint53

▸ **checkSafeUint53**(`value`, `message?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[src/common/logger.ts:264](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/common/logger.ts#L264)

___

### debug

▸ **debug**(...`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`void`

#### Defined in

[src/common/logger.ts:177](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/common/logger.ts#L177)

___

### info

▸ **info**(...`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`void`

#### Defined in

[src/common/logger.ts:181](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/common/logger.ts#L181)

___

### makeError

▸ **makeError**(`message`, `code?`, `params?`): `Error`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `code?` | [`ErrorCode`](../enums/ErrorCode.md) |
| `params?` | `any` |

#### Returns

`Error`

#### Defined in

[src/common/logger.ts:189](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/common/logger.ts#L189)

___

### throwArgumentError

▸ **throwArgumentError**(`message`, `name`, `value`): `never`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `name` | `string` |
| `value` | `any` |

#### Returns

`never`

#### Defined in

[src/common/logger.ts:231](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/common/logger.ts#L231)

___

### throwError

▸ **throwError**(`message`, `code?`, `params?`): `never`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `code?` | [`ErrorCode`](../enums/ErrorCode.md) |
| `params?` | `any` |

#### Returns

`never`

#### Defined in

[src/common/logger.ts:227](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/common/logger.ts#L227)

___

### warn

▸ **warn**(...`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`void`

#### Defined in

[src/common/logger.ts:185](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/common/logger.ts#L185)

___

### from

▸ `Static` **from**(`version`): [`Logger`](Logger.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `version` | `string` |

#### Returns

[`Logger`](Logger.md)

#### Defined in

[src/common/logger.ts:366](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/common/logger.ts#L366)

___

### globalLogger

▸ `Static` **globalLogger**(): [`Logger`](Logger.md)

#### Returns

[`Logger`](Logger.md)

#### Defined in

[src/common/logger.ts:330](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/common/logger.ts#L330)

___

### setCensorship

▸ `Static` **setCensorship**(`censorship`, `permanent?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `censorship` | `boolean` |
| `permanent?` | `boolean` |

#### Returns

`void`

#### Defined in

[src/common/logger.ts:337](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/common/logger.ts#L337)

___

### setLogLevel

▸ `Static` **setLogLevel**(`moduleName`, `logLevel`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `moduleName` | `string` |
| `logLevel` | ``"DEBUG"`` \| ``"INFO"`` \| ``"WARNING"`` \| ``"ERROR"`` \| ``"OFF"`` |

#### Returns

`void`

#### Defined in

[src/common/logger.ts:357](https://github.com/alpha-defi/raydium-sdk/blob/7094668/src/common/logger.ts#L357)
