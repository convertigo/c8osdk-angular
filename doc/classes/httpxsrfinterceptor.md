[c8osdkjscore](../README.md) › [HttpXsrfInterceptor](httpxsrfinterceptor.md)

# Class: HttpXsrfInterceptor

## Hierarchy

* **HttpXsrfInterceptor**

## Implements

* HttpInterceptor

## Index

### Constructors

* [constructor](httpxsrfinterceptor.md#constructor)

### Properties

* [c8o](httpxsrfinterceptor.md#private-c8o)
* [fetch](httpxsrfinterceptor.md#private-fetch)
* [headerName](httpxsrfinterceptor.md#private-headername)
* [tokenExtractor](httpxsrfinterceptor.md#private-tokenextractor)

### Methods

* [intercept](httpxsrfinterceptor.md#intercept)

## Constructors

###  constructor

\+ **new HttpXsrfInterceptor**(`tokenExtractor`: HttpXsrfTokenExtractor, `c8o`: [C8o](c8o.md)): *[HttpXsrfInterceptor](httpxsrfinterceptor.md)*

*Defined in [lib/c8oHttpxsrfInterceptor.service.ts:10](https://github.com/convertigo/c8osdk-angular/blob/bf28c50/projects/c8osdkangular/src/lib/c8oHttpxsrfInterceptor.service.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`tokenExtractor` | HttpXsrfTokenExtractor |
`c8o` | [C8o](c8o.md) |

**Returns:** *[HttpXsrfInterceptor](httpxsrfinterceptor.md)*

## Properties

### `Private` c8o

• **c8o**: *[C8o](c8o.md)*

*Defined in [lib/c8oHttpxsrfInterceptor.service.ts:11](https://github.com/convertigo/c8osdk-angular/blob/bf28c50/projects/c8osdkangular/src/lib/c8oHttpxsrfInterceptor.service.ts#L11)*

___

### `Private` fetch

• **fetch**: *string* = "Fetch"

*Defined in [lib/c8oHttpxsrfInterceptor.service.ts:10](https://github.com/convertigo/c8osdk-angular/blob/bf28c50/projects/c8osdkangular/src/lib/c8oHttpxsrfInterceptor.service.ts#L10)*

___

### `Private` headerName

• **headerName**: *string* = "x-xsrf-token"

*Defined in [lib/c8oHttpxsrfInterceptor.service.ts:9](https://github.com/convertigo/c8osdk-angular/blob/bf28c50/projects/c8osdkangular/src/lib/c8oHttpxsrfInterceptor.service.ts#L9)*

___

### `Private` tokenExtractor

• **tokenExtractor**: *HttpXsrfTokenExtractor*

*Defined in [lib/c8oHttpxsrfInterceptor.service.ts:11](https://github.com/convertigo/c8osdk-angular/blob/bf28c50/projects/c8osdkangular/src/lib/c8oHttpxsrfInterceptor.service.ts#L11)*

## Methods

###  intercept

▸ **intercept**(`req`: HttpRequest‹any›, `next`: HttpHandler): *Observable‹HttpEvent‹any››*

*Defined in [lib/c8oHttpxsrfInterceptor.service.ts:15](https://github.com/convertigo/c8osdk-angular/blob/bf28c50/projects/c8osdkangular/src/lib/c8oHttpxsrfInterceptor.service.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`req` | HttpRequest‹any› |
`next` | HttpHandler |

**Returns:** *Observable‹HttpEvent‹any››*
