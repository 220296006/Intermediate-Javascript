# Day 3 - Fetch Cross Origin Requests

Cross-origin requests in JavaScript are subject to the same-origin policy, which restricts web pages from making requests to a different domain (origin) than the one that served the web page. However, you can make cross-origin requests using the fetch() function in JavaScript, but you need to consider security restrictions and methods to handle them.

Here are some common techniques to handle cross-origin requests using the fetch() function:

1. CORS (Cross-Origin Resource Sharing): The most common and secure way to make cross-origin requests is by using CORS. CORS is a mechanism that allows servers to specify who can access their resources. Servers can send appropriate HTTP headers to indicate which origins (domains) are allowed to access their resources. To make a cross-origin request, you must have permission from the server, and the server must respond with the appropriate CORS headers.

Example:

```JS

fetch('https://api.example.com/data', {
  method: 'GET',
  headers: {
    'Origin': 'https://yourwebsite.com',
  },
})
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => {
    console.log('Data received:', data);
  })
  .catch((error) => {
    console.error('Fetch error:', error);
  });

```

In this example, you set the Origin header to specify the origin of your web page. The server at '<https://api.example.com>' can check this header and decide whether to respond with appropriate CORS headers to allow the request.

2. JSONP (JSON with Padding): JSONP is an older technique that allows you to make cross-origin requests by inserting a script tag into the DOM. JSONP is not as secure as CORS and has limitations, but it can be used in situations where CORS is not available.

Example:

```JS

function handleResponse(data) {
  console.log(data);
}

const script = document.createElement('script');
script.src = 'https://example.com/api/data?callback=handleResponse';
document.body.appendChild(script);


```

On the server side, you need to set the appropriate CORS headers to allow requests from specific origins:

In Node.js with Express:


```JS
const express = require('express');
const app = express();

// Enable CORS for a specific origin
const cors = require('cors');
const corsOptions = {
  origin: 'https://your-allowed-origin.com',
};
app.use(cors(corsOptions));

// ...rest of your server setup

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


```

In other server environments, you can configure CORS similarly by setting appropriate headers in the HTTP response.

3. Proxy Server:
If you don't have control over the server's CORS configuration, you can set up a server-side proxy that forwards requests from your domain to the target domain. Your JavaScript code then sends requests to your own server, which acts as a middleman.

Your server makes the actual request to the target server and forwards the response back to your JavaScript code. This approach allows you to bypass the same-origin policy entirely.

This method can be used when you need to access data from a third-party API that doesn't support CORS.

Choose the method that best suits your specific needs and constraints when making cross-origin requests in JavaScript. CORS is the recommended approach when you have control over the server, as it provides more security and control over access policies. However, JSONP and proxy servers may be necessary in situations where CORS cannot be configured.

## Simple Request

n the context of Cross-Origin Requests (CORS), "simple requests" are a specific type of HTTP request that can be made from a web page in one domain to a server in a different domain without requiring preflight checks (OPTIONS request) by the browser. Simple requests are considered safe and do not trigger CORS preflight requests because they meet certain criteria.

To be considered a "simple request," the request must satisfy the following conditions:

It uses HTTP methods that are considered safe: GET, HEAD, or POST.
It only uses simple request headers. Simple headers include headers such as Accept, Accept-Language, Content-Language, Content-Type with values application/x-www-form-urlencoded, multipart/form-data, or text/plain. These headers are considered safe and do not trigger preflight checks.
It does not use any event listeners to listen to events such as progress, load, error, or abort.
It does not include any custom headers other than the simple headers mentioned in point 2.
If a request meets all these conditions, it is considered a simple request, and the browser sends the request directly to the server without sending a preflight OPTIONS request. The server can then respond to the request, and if it includes the appropriate CORS headers, the browser allows the response to be accessed by the web page making the request.

Here's an example of a simple GET request:


```JS
const url = 'https://api.example.com/data';

fetch(url, {
  method: 'GET',
  headers: {
    'Accept': 'application/json', // A simple header
  },
})
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => {
    console.log('Response data:', data);
  })
  .catch((error) => {
    console.error('Fetch error:', error);
  });


```

n this example, we are making a simple GET request to '<https://api.example.com/data>'. The request meets the criteria for a simple request because it uses the GET method and includes only simple headers (Accept). As a result, it does not trigger CORS preflight checks, and the browser sends the request directly to the server.

## CORS for Simple Requests

 Cross-Origin Resource Sharing (CORS) is a security feature implemented by web browsers to control and manage cross-origin requests made by web applications. CORS rules determine whether a web page from one domain can make requests for resources (such as data, images, or APIs) hosted on a different domain. Simple requests, as discussed earlier, have specific CORS handling rules that make them easier to manage.

Here's how CORS works for simple requests:

1. Origin: The "origin" of a web page is the combination of the scheme (e.g., http or https), domain (e.g., example.com), and port (if specified). For example, the origin of a web page at <https://example.com> is <https://example.com>.

2. Same-Origin Requests: By default, web browsers allow same-origin requests, meaning a web page from one origin can make requests to resources on the same origin without any CORS restrictions.

3. Cross-Origin Requests: When a web page from one origin (the "originating" or "client" origin) wants to make a request to a different origin (the "target" or "server" origin), the browser enforces CORS restrictions. These restrictions include sending an HTTP OPTIONS preflight request (preflight check) before the actual request to determine if the server allows the cross-origin request.

4. Preflight Check (OPTIONS Request): For non-simple requests (e.g., requests that use methods other than GET, HEAD, or POST, or have custom headers), the browser sends a preflight OPTIONS request to the server to check if it allows the request. The server responds with CORS headers, including Access-Control-Allow-Origin, to indicate which origins are permitted to access its resources.

5. Simple Requests: For simple requests (GET, HEAD, or POST with simple headers), the browser does not send a preflight OPTIONS request. Instead, it directly sends the request to the server.

6. Server CORS Headers: The server must include appropriate CORS headers in its response to indicate which origins are allowed to access its resources. The primary CORS header is Access-Control-Allow-Origin, which specifies the allowed origins. For simple requests, this header should typically be set to either the specific origin or the wildcard * to allow any origin.

Here's an example of a server response with CORS headers for a simple request:

```html

HTTP/1.1 200 OK
Access-Control-Allow-Origin: https://example.com
Content-Type: application/json


```

n this example, the server allows requests from the specific origin <https://example.com>.

It's important for server administrators to configure their servers to include the appropriate CORS headers in responses, depending on their CORS policy. Additionally, web developers should be aware of CORS when making cross-origin requests in their web applications and ensure that the server's CORS policy aligns with their application's requirements. Violating CORS policies can result in the browser blocking access to the requested resource.

## Response Headers

In the context of web development and HTTP, "Response Headers" refer to the metadata that accompanies an HTTP response from a web server. These headers provide information about the response, such as the server type, content type, caching directives, and more. Response headers are sent by the server to the client's web browser to provide instructions on how to handle the response and ensure proper communication between the client and server.

Here are some common response headers and their meanings:

1. HTTP Status Code: While not a header in the traditional sense, the HTTP status code is an essential part of an HTTP response. It indicates the outcome of the request, such as "200 OK" for a successful request, "404 Not Found" for a missing resource, or "500 Internal Server Error" for a server error.

2. Content-Type: The Content-Type header specifies the media type (MIME type) of the response body. It tells the client's browser how to interpret the content. For example, Content-Type: application/json indicates that the response contains JSON data.

3. Content-Length: The Content-Length header specifies the size of the response body in bytes. It helps the client know how much data to expect.

4. Cache-Control: The Cache-Control header provides caching directives to the client's browser or intermediary caches. It controls whether the response should be cached and for how long. For example, Cache-Control: no-cache prevents caching.

5. Location: The Location header is used in redirection responses (e.g., "302 Found" or "301 Moved Permanently) to specify the URL to which the client should redirect.

6. Access-Control-Allow-Origin: In the context of CORS (Cross-Origin Resource Sharing), the Access-Control-Allow-Origin header specifies which origins are allowed to access a resource on a different domain. It helps control cross-origin requests.

7. Server: The Server header typically identifies the type and version of the web server software handling the request. For example, Server: Apache or Server: nginx.

8. Set-Cookie: The Set-Cookie header is used to set cookies in the client's browser. It instructs the browser to store a cookie for subsequent requests to the same domain.

9. WWW-Authenticate: This header is used in response to a request that requires authentication. It specifies the authentication method the client should use.

10. Last-Modified and ETag: These headers are related to conditional requests. Last-Modified indicates when the resource was last modified, and ETag provides a unique identifier for the resource's current state. These headers are used with the If-Modified-Since and If-None-Match request headers to support conditional GET requests.

Response headers are essential for the proper functioning and security of web applications. Web developers use response headers to control caching, enforce security policies, enable cross-origin resource sharing, and communicate various instructions to the client's browser. Understanding and configuring response headers correctly is a fundamental aspect of web development and web server administration.

## No-Simple Requests

In the context of Cross-Origin Resource Sharing (CORS), "non-simple requests" are a type of HTTP request that does not meet the criteria for a "simple request." Unlike simple requests, non-simple requests trigger a preflight check, which involves sending an HTTP OPTIONS request (preflight request) to the server before making the actual request. This preflight check is performed by the browser to ensure that the server allows cross-origin requests.

To be considered a "non-simple request," an HTTP request must meet at least one of the following criteria:

1. It uses an HTTP method other than GET, HEAD, or POST. For example, requests using methods like PUT, DELETE, or PATCH are considered non-simple.

2. It includes custom headers in the request, other than the simple headers that are allowed for simple requests. Custom headers are headers that are not in the list of predefined, safe headers.

3. It includes certain types of content in the request body, such as a media type other than application/x-www-form-urlencoded, multipart/form-data, or text/plain. For example, if the request uses application/json as the content type, it is considered non-simple.

When a non-simple request is made, the following happens:

1. The browser first sends a preflight OPTIONS request (HTTP method OPTIONS) to the target server to check if the server allows the actual request.

2. The preflight request includes the Origin header, indicating the origin from which the request is coming.

3. The server responds to the preflight request with CORS headers, including Access-Control-Allow-Origin, Access-Control-Allow-Methods, and Access-Control-Allow-Headers, among others. These headers specify which origins, methods, and headers are allowed to access the server's resources.

4. If the server allows the request based on the CORS headers in the preflight response, the browser proceeds to send the actual non-simple request (e.g., POST or PUT).

5. If the server denies the request or does not provide the required CORS headers in the preflight response, the browser blocks the actual request, and JavaScript running on the client side will not be able to access the response data.

To handle non-simple requests on the server side, server administrators must configure their servers to respond to preflight OPTIONS requests appropriately and specify which origins, methods, and headers are allowed. This configuration ensures that cross-origin requests are handled securely and according to the server's policy.

## Credentials

In the context of web development and Cross-Origin Resource Sharing (CORS), "credentials" refer to the mechanism that allows web applications to include and share cookies, HTTP authentication, and other credentials when making cross-origin requests. CORS provides different levels of credential support, which can be controlled using the credentials property in the fetch() function or the withCredentials property in XMLHttpRequest.

There are three possible values for the credentials property:

1. "same-origin": This is the default behavior. When credentials is set to "same-origin," credentials (such as cookies and HTTP authentication) are included in the request only if the target URL has the same origin as the requesting web page. Cross-origin requests will not include credentials.

Example:

```JS

fetch('https://api.example.com/data', {
  credentials: 'same-origin'
});

```

2. "include": When credentials is set to "include," credentials are always included in the request, regardless of the origin of the target URL. This allows cookies and other credentials to be sent with cross-origin requests.

Example:

```JS

fetch('https://api.example.com/data', {
  credentials: 'include'
});

```
Note: Using "include" can be a security risk if not used carefully, as it allows cross-origin servers to access user-specific data stored in cookies or use HTTP authentication credentials.

3. "omit": When credentials is set to "omit," credentials are never included in the request, even if the request is to the same origin as the web page. This is useful when you want to prevent credentials from being sent with any requests.

Example:


```JS

fetch('https://api.example.com/data', {
  credentials: 'omit'
});


```

The choice of the credentials value depends on the security and privacy requirements of your application:

Use "same-origin" when you only want to include credentials for same-origin requests, which is the default behavior and is generally safe.

Use "include" when you need to send credentials with cross-origin requests, but be cautious about the security implications.

Use "omit" when you want to ensure that no credentials are sent with any requests, including same-origin ones.

It's essential to make an informed decision about the use of credentials in your web application and to configure your server accordingly to handle requests with or without credentials based on your chosen setting. Additionally, ensure that you understand the security implications of including or omitting credentials in cross-origin requests to protect sensitive user data.


## Fetch API

The Fetch API is a modern JavaScript interface for making network requests (HTTP requests) in web applications. It provides a more flexible and powerful way to fetch resources from servers compared to the older XMLHttpRequest.

Key features and concepts of the Fetch API:

1. Promise-Based: Fetch is based on promises, which allow for more structured and readable asynchronous code. This makes it easier to handle responses and errors.

2. HTTP Requests: You can use Fetch to make various types of HTTP requests, including GET, POST, PUT, DELETE, and more.

3. Headers: Fetch allows you to set custom headers for requests, including authentication tokens, content type, and other metadata.

4. Response Handling: It provides a Response object that represents the response from the server. You can access the response body and headers, and perform various operations on it.

5. Cross-Origin Requests: Fetch supports Cross-Origin Resource Sharing (CORS) for making requests to different domains, and you can configure CORS settings as needed.

6. FormData: You can easily work with form data using the FormData API, which allows you to create and manipulate form data for sending with POST requests.

7. Abort Controller: Fetch includes support for the Abort Controller and AbortSignal interfaces, allowing you to cancel ongoing fetch requests programmatically.

Here's a basic example of using the Fetch API to make a GET request:

```JS

fetch('https://api.example.com/data')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse response body as JSON
  })
  .then((data) => {
    console.log('Response data:', data);
  })
  .catch((error) => {
    console.error('Fetch error:', error);
  });

```

In this example:

We use the fetch() function to send a GET request to '<https://api.example.com/data>'.
The .then() method is used to handle the response. If the response is not OK (status code 200-299), we throw an error. Otherwise, we parse the JSON response and log the data.
The .catch() method is used to handle any errors that occur during the fetch.
The Fetch API is a powerful tool for handling network requests in modern web applications. It provides a more modern and flexible alternative to XMLHttpRequest, making it easier to work with APIs and fetch data from servers.