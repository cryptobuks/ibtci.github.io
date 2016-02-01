# IBTC.CASH API

**Sponsored micropayment** system in bitcoin for developers and webmasters / Documentation for use the ibtc.cash api with **JSON RPC 2** or **PHP** or **jQuery**.

* Integrates into your existing payment system without thrird party branding.
* Minimum limit for withdrawal is less than 5 cents.
* Send your json RPC 2 queries to our API.
* No account nor approval is needed.
* You can be up and running now.
* Very easy to use.

## Introduction

This system allows you to receive bitcoin on your platform. Your customer goes to visit ibtc.cash and recovering a code of a money value. Just make a call containing the ticket code of your customer and the bitcoin address that will receive the bitcoins. You will receive your bitcoins, within 24 hours, working days and the minimum limit for withdrawal is less than 5 cents. With a simple query you can be informed about the status of your transactions.

This application consists of 2 JSON RPC call. You can download the PHP or jQuery package, which contains the class JSON RPC Client and an example of use. After downloading, install the JSON RPC Client on your app and use it in your scrypt.

The value of the payment received in satoshi. Divide by 100000000 to get the value in BTC.

#### API URL

**The URL for all requests** / Use this URL to communicate with our API. Observe the closing slash and protocol HTTPS.

* `https://ibtc.cash/api/`

***

# Function pay_info
`pay_info(ADDR)`

This function returns all information about the bitcoin address.

**Parameter**

| Fields | Type| Description |
|------|------|-------------|
|**ADDR**|String|The bitcoin address that received the transaction.|

**Return** JSON reply

```php
{
    addr : // The bitcoin address (1M1L7b4tdrY95wYbfqVAhwYEw214WHyB9H).
    minSend : // Minimum sold befor sending the bitcoin in satoshi. (10000).
    percentBefortSend : // The percentage befor sending the bitcoin. (1 -> 100).
    nbTickets : // Number of ticket total (Default 0).
    nbTicketsWait : // Number of ticket wait to send you (Default 0).
    nbTicketsSend : // Number of ticket sending you (Default 0).
    sumTotal : // Amount total donat by ibtc.cash (Default 0).
    sumWait : // Amount wait to send you (Default 0).
    sumSend : // Amount sending you (Default 0).
    waitTicket : [ // List of tickets.
        [0] : {
            date : // Date of ticket in timestamp (1454174032).
            satsum : // Amount in satoshi (50).
            code : // Code of ticket (8b8419733a5e3cce06ed56ac1d7d3df3346031e8). 
        }
        [1] : ...
    ]
    sendTx : [ // list of bitcoin transaction.
        [0] : {
            tx : // Transaction bitcoin id (317d91f17018041939f2b72c184f119c99e8eea92747e1de93533347b589bcaa).
            nbTicket : // Number of ticket in this transaction (120).
            sumTx : // Amount in this transaction in satoshi (10000).
            list : [ // List of tickets in this transaction.
                [0] : {
                    date : // Date of ticket in timestamp (1454174032).
                    satsum : // Amount in satoshi (50).
                    code : // Code of ticket (8b8419733a5e3cce06ed56ac1d7d3df3346031e8).
                }
                [1] : ...
            ]
        }
        [1] : ...
    ]
}
```

***

# Function pay_send
`pay_send(ADDR, CODE)`

This function associate the client ticket code to your address bitcoin. Return info ticket if success.

| Fields | Type| Description |
|------|------|-------------|
|**ADDR**|String|The bitcoin address that received the transaction.|
|**CODE**|String|The ticket code received by your client in ibtc.cash.|

**Return** JSON reply

```php
{
    addr : // The bitcoin address (1M1L7b4tdrY95wYbfqVAhwYEw214WHyB9H).
    ticket : {
        date : // Date of ticket in timestamp (1454174032).
        satsum : // Amount in satoshi (50).
        code : // Code of ticket (8b8419733a5e3cce06ed56ac1d7d3df3346031e8). 
    }
}
```

***

## Manage Error

**Main error** / List of error that can be returned by the API.

| Code | Error |
|----------|--------|
|`SERV_ERROR_NOT_FIND_FILE`|Error loading the execution file.|
|`SERV_ERROR_CONNECT_MYSQL`|MySQL server connection impossible. Error in the access data.|
|`SERV_ERROR_INVALID_PARAM_OR_METHODE`|Incorrect methods or settings. Error in the access data.|
|`SERV_ERROR_OFFLINE_MESSAGE`|The application is currently down for maintenance. Sorry for the inconvenience.|
|`SERV_ERROR_DATABASE`|Cannot connect to the SQL database. Error in the data.|
|`FORM_WARNING_ADDR_BTC_INVALID`|Invalid bitcoin address|
|`FORM_WARNING_TICKET_CODE_INVALID`|Le code du ticket n'est pas valide.|
|`WARNING_TICKET_ALREADY_USE`|Ce ticket est invalide ou déjà utilisé|
|`WARNING_TICKET_EXPIRED`|Le ticket utiliser est expiré.|

# PHP

*Example file `php/index.php`*

```php
/*
 * Import lib.
 */
require_once 'jsonRPC2Client.php';
```
Import the json rpc client in your code.


```php
// call API.
$call = new jsonRPC2Client("https://ibtc.cash/api/");
```
Initialize the json rpc for call ibtc.cash api.


```php
// call.
$rep = $call->pay_info('1M1L7b4tdrY95wYbfqVAhwYEw214WHyB9H');

// or call.
$rep = $call->pay_send('YOUR_BTC_ADDR', 'TIKET_CODE');
```
It'll just make the call function.

```php
<pre>
    <code>
        <?php print_r($rep); ?>
    </code>
</pre>
```
Print the reply to html. This return Array :

```php
$rep = Array
(
    ['addr'] => // The bitcoin address (1M1L7b4tdrY95wYbfqVAhwYEw214WHyB9H).
    ['minSend'] => // Minimum sold befor sending the bitcoin in satoshi. (10000).
    ['percentBefortSend'] => // The percentage befor sending the bitcoin. (1 -> 100).
    ['nbTickets'] => // Number of ticket total (Default 0).
    ['nbTicketsWait'] => // Number of ticket wait to send you (Default 0).
    ['nbTicketsSend'] => // Number of ticket sending you (Default 0).
    ['sumTotal'] => // Amount total donat by ibtc.cash (Default 0).
    ['sumWait'] => // Amount wait to send you (Default 0).
    ['sumSend'] => // Amount sending you (Default 0).
    ['waitTicket'] => Array // List of tickets.
    (
        [0] => Array
        (
            ['date'] => // Date of ticket in timestamp (1454174032).
            ['satsum'] => // Amount in satoshi (50).
            ['code'] => // Code of ticket (8b8419733a5e3cce06ed56ac1d7d3df3346031e8). 
        )
        [1] => ...
    )
    ['sendTx'] => Array // list of bitcoin transaction.
    (
        [0] => Array
        (
            ['tx'] => // Transaction bitcoin id (317d91f17018041939f2b72c184f119c99e8eea92747e1de93533347b589bcaa).
            ['nbTicket'] => // Number of ticket in this transaction (120).
            ['sumTx'] => // Amount in this transaction in satoshi (10000).
            ['list'] => Array // List of tickets in this transaction.
            (
                [0] : Array
                (
                    ['date'] => // Date of ticket in timestamp (1454174032).
                    ['satsum'] => // Amount in satoshi (50).
                    ['code'] => // Code of ticket (8b8419733a5e3cce06ed56ac1d7d3df3346031e8).
                )
                [1] => ...
            )
        )
        [1] => ...
    )
)
```

### Manage Error

Management error in the API. Use try catch in php.

```php
try {
	
	// Call
	$rep = $call->pay_info('1M1L7b4tdrY95wYbfqVAhwYEw214WHyB9H');
	
} catch (Exception $e) {
	
	// Init error
	throw new Exception($e->getMessage());
}

/* $e->getMessage() = FORM_WARNING_ADDR_BTC_INVALID
 *                  = SERV_ERROR_OFFLINE_MESSAGE
 *                  = ...
 */
```

**WARNING** / You need to enable fopen in your php for externe comunication.

***

# jQuery

Cross-domain is active here. You can use this system in your application or your website.

*Example file `jQuery/index.html`*

```js
<!-- start: Framework jQuery -->
<script type="text/javascript" src="jquery.min.js"></script>

<!-- plug: Class Json RPC client -->
<script type="text/javascript" src="jquery.jsonrpc.min.js"></script>
```
Import the json rpc client and jQuery in your html code.


```js
// Init le JSON RPC url & NameSpace.
$.jsonRPC.setup({ endPoint : 'https://ibtc.cash/api/', namespace : '' });
```
Initialize the json rpc for call ibtc.cash api in balise `<script>`.

```js
// connexion server.
$.jsonRPC.request('pay_info', {
	
	// Param send.
	params : ['1M1L7b4tdrY95wYbfqVAhwYEw214WHyB9H'],
	
	// success.
	success : function(data) {
		
		// Add result to code.
		var result = data.result;
		
		// Print to console.
		console.log(result);
		
		// Alert good call.
		alert('See the console Please for more info '+result.addr);
	},
	
	// erreur server.
	error : function(data) {
			
		// data.error = FORM_WARNING_ADDR_BTC_INVALID
		//            = SERV_ERROR_OFFLINE_MESSAGE
		//            = ...
		alert('Error code : '+data.error);
	}
});
```
It'll just make the call function. This return object :

```js
var result = {
    addr : // The bitcoin address (1M1L7b4tdrY95wYbfqVAhwYEw214WHyB9H).
    minSend : // Minimum sold befor sending the bitcoin in satoshi. (10000).
    percentBefortSend : // The percentage befor sending the bitcoin. (1 -> 100).
    // ... See more from Function pay_info.
}
```

# Complementary

Any excessive or illegal use may be canceled and the associated address prohibited. We do not need to store or hold any bitcoins in our server.