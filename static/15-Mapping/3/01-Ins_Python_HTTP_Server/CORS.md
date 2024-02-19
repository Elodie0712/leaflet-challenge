# A Little More About CORS

Modern browsers have a **same-origin policy** that generally prevents **scripts** hosted from one web server to make **calls** to another server. Here’s an example:

Let’s say you navigate to a news website and then are served an ad coming from adspamnetwork.com. If browser restrictions aren't in place, and if you happen to be logged in to PayPal, the JavaScript code in the ad might make an API call to PayPal and make unauthorized transfers from your account.

For this reason, browsers restrict a server from one site (adspamnetwork.com, for example) from making a request to a server from another site (paypal.com).

So, how does a website, such as ebay.com, make API calls to PayPal?

**Cross-origin resource sharing (CORS)** is a mechanism that tells browsers to access selected resources from a web server through information in the HTTP headers in a web application. CORS provides a way to allow cross-origin requests.

The following steps allow a website to make API calls to PayPal:

1. The browser generally makes a preflight request to the server.

2. The preflight request checks with the server about whether the browser's origin can make a request to it. The preflight request also gets other details, including the types of requests that the server allows and the types of files that the server permits to be transferred.

3. The browser makes the request. The code on the PayPal server contains a CORS header that explicitly permits ebay.com to make API requests.

For more info about CORS, refer to [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS), [web.dev](https://www.html5rocks.com/en/tutorials/cors/#toc-handling-a-not-so-simple-request) or [Stack Overflow](https://stackoverflow.com/questions/10636611/how-does-access-control-allow-origin-header-work).

- - -

© 2022 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
