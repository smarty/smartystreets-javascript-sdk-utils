# SMARTY DISCLAIMER: Subject to the terms of the associated license agreement, this software is freely available for your use. This software is FREE, AS IN PUPPIES, and is a gift. Enjoy your new responsibility. This means that while we may consider enhancement requests, we may or may not choose to entertain requests at our sole and absolute discretion.

# Smarty JavaScript SDK Utils

The Smarty JavaScript SDK Utils provide an additional level of analysis for US Street lookups validated through the [Smarty JavaScript SDK](https://www.npmjs.com/package/smartystreets-javascript-sdk). This package consists of the following utilities for Smarty API response analysis.

## `isValid()`
Determines if the lookup is considered mail deliverable by the USPS. Returns **[&lt;Boolean&gt;](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**.

### Parameters
  - `lookup`: **([&lt;Object&gt;](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object))** a validated [US Street Lookup](https://github.com/smartystreets/smartystreets-javascript-sdk/blob/master/src/us_street/Lookup.js)

## `isInvalid()`
Determines if the lookup is not considered mail deliverable by the USPS. Returns **[&lt;Boolean&gt;](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**.
  
### Parameters
  - `lookup`: **([&lt;Object&gt;](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object))** a validated [US Street Lookup](https://github.com/smartystreets/smartystreets-javascript-sdk/blob/master/src/us_street/Lookup.js)

## `isAmbiguous()`
Determines if the lookup returned multiple possible match candidates. Returns **[&lt;Boolean&gt;](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**.
  
### Parameters
  - `lookup`: **([&lt;Object&gt;](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object))** a validated [US Street Lookup](https://github.com/smartystreets/smartystreets-javascript-sdk/blob/master/src/us_street/Lookup.js)

## `isMissingSecondary()`
Determines if the lookup requires a secondary address. Returns **[&lt;Boolean&gt;](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**.

### Parameters
  - `lookup`: **([&lt;Object&gt;](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object))** a validated [US Street Lookup](https://github.com/smartystreets/smartystreets-javascript-sdk/blob/master/src/us_street/Lookup.js)


# Example
This example is modified from the [US Street API code example](https://github.com/smartystreets/smartystreets-javascript-sdk/blob/master/examples/us_street.js).

    const SmartySDK = require("smartystreets-javascript-sdk");
    const SmartyCore = SmartySDK.core;
    const Lookup = SmartySDK.usStreet.Lookup;
    const utils = require("smartystreets-javascript-sdk-utils");
    
    let authId = process.env.SMARTY_AUTH_ID;
    let authToken = process.env.SMARTY_AUTH_TOKEN;
    
    let clientBuilder = new SmartyCore.ClientBuilder(new SmartyCore.StaticCredentials(authId, authToken));
    let client = clientBuilder.buildUsStreetApiClient();
    
    let lookup1 = new Lookup();
    lookup1.street = "1600 Pennsylvania Ave NW";
    lookup1.city = "Washington";
    lookup1.state = "DC";
        
    client.send(lookup1)
        .then(handleSuccess)
        .catch(handleError);
    
    function handleSuccess(response) {
        response.lookups.map(lookup => console.log(lookup.result));
        
        // Is lookup1 valid?
        console.log(utils.isValid(response.lookups[0]));
        
        // Is lookup1 invalid?
        console.log(utils.isInvalid(response.lookups[0]));
        
        // Is lookup1 ambiguous?
        console.log(utils.isAmbiguous(response.lookups[0]));
        
        // Is lookup1 missing a secondary address?
        console.log(utils.isMissingSecondary(response.lookups[0]));
    }
    
    function handleError(response) {
        console.log(response);
    }
