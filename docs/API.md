<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

## Client

ARK client

**Parameters**

-   `main` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** true if mainnet

### getCurrentPeer

Lazy-get the current peer.

**Parameters**

-   `force` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** true to force the peer to a new one

Returns **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** peer address

### callServer

Call the server with the specified options;

**Parameters**

-   `options` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** for rest call

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** rest client

### get

Perform a GET call an ARK peer.

**Parameters**

-   `url` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** endpoint

Returns **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)** Server response

### getBalance

Get balance for account.

**Parameters**

-   `account` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** ARK account address

Returns **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)** Server response

### getTransactions

Get transactions for account.

**Parameters**

-   `account` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** ARK account address
-   `offset` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** delta from the oldest tx

Returns **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)** Server response

## ARK_START_MOMENT

Date of ARK Mainnet go-live

## isNumeric

Test whether a string is numeric

**Parameters**

-   `n` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** string to test

Returns **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** true if numeric

## toMoment

Converts a string into a `moment`

**Parameters**

-   `work` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** date string to convert

Returns **moment** date object.

## arkTimestampToMoment

Ark timestamps are seconds from the "epoch", which is the mainnet go-live date.

**Parameters**

-   `seconds` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** timestamp

Returns **moment** true date

## formatTransactions

Convert a list of transactions into human readable versions.

**Parameters**

-   `transactions` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)>** list of transactions as returned by server

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)>** List of reformatted transactions

## transactionsToCSV

Convert a list of transactions into a CSV string.

**Parameters**

-   `transactions` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)>** list of transactions as returned by server

Returns **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** CSV of transactions