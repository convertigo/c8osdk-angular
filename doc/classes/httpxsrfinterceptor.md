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

* [tokenExtractor](httpxsrfinterceptor.md#private-tokenextractor)

### Methods

* [intercept](httpxsrfinterceptor.md#intercept)

## Constructors

###  constructor

\+ **new HttpXsrfInterceptor**(`tokenExtractor`: HttpXsrfTokenExtractor): *[HttpXsrfInterceptor](httpxsrfinterceptor.md)*

Defined in lib/c8oHttpxsrfInterceptor.service.ts:7

**Parameters:**

Name | Type |
------ | ------ |
`tokenExtractor` | HttpXsrfTokenExtractor |

**Returns:** *[HttpXsrfInterceptor](httpxsrfinterceptor.md)*

## Properties

### `Private` tokenExtractor

• **tokenExtractor**: *HttpXsrfTokenExtractor*

Defined in lib/c8oHttpxsrfInterceptor.service.ts:9

## Methods

###  intercept

▸ **intercept**(`req`: HttpRequest‹any›, `next`: HttpHandler): *Observable‹HttpEvent‹any››*

Defined in lib/c8oHttpxsrfInterceptor.service.ts:12

**Parameters:**

Name | Type |
------ | ------ |
`req` | HttpRequest‹any› |
`next` | HttpHandler |

**Returns:** *Observable‹HttpEvent‹any››*
