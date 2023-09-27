# Week 1: Window Events in JavaScript

## Day 2 - Cross-window Communication

### Same Origin

The concept of "same origin" is a fundamental security principle in web development. It refers to the notion that web pages or web applications running in a web browser have certain restrictions in interacting with content from different origins (domains, protocols, and ports). These restrictions are in place to protect the security and privacy of users.

In the context of the same-origin policy:

- Origin: An origin is defined by a combination of three components:

1. Protocol: This is typically HTTP or HTTPS.
2. Domain: This is the web address, such as example.com.
3. Port: This is an optional component that specifies the port number (e.g., 80 for HTTP, 443 for HTTPS) if it's not the default for the protocol.

The same-origin policy stipulates that web pages or scripts from one origin cannot directly access data or interact with content from a different origin. Here's what this means:

1. Different Origins: If two resources (e.g., web pages, scripts, or iframes) have different origins, they are considered to be from different domains, protocols, or ports.

2. Access Restrictions: Web content from one origin cannot make XMLHttpRequests, fetch requests, or use certain JavaScript methods to directly access or manipulate the DOM of another origin.

3. Cookies and Storage: Cookies and client-side storage (like Local Storage and Session Storage) are bound to the same-origin policy. A web page can only access cookies and storage data that belong to the same origin.

4. Security: This policy is crucial for security. It helps prevent cross-site request forgery (CSRF), cross-site scripting (XSS), and other security vulnerabilities by limiting how different origins can interact.

5. Cross-Origin Resource Sharing (CORS): To enable controlled sharing of resources between different origins, web servers can implement CORS headers. This allows servers to specify which origins are permitted to access their resources.

6. JSONP: JSONP (JSON with Padding) is a technique used to circumvent the same-origin policy by making cross-origin requests by including a script tag. However, it has security risks and is not recommended unless you trust the source.

It's important to note that while the same-origin policy provides security benefits, it can also impose limitations on web development. Developers often need to implement server-side solutions or use techniques like JSONP or Cross-Origin Resource Sharing (CORS) to enable cross-origin interactions when necessary.

In summary, the "same origin" concept is a security measure in web development that restricts interactions between web resources from different origins to protect users from potential security threats.

### In action: iframe

The same-origin policy plays a significant role when working with iframes (inline frames) in web development. An iframe is an HTML element that allows you to embed one web page within another. The same-origin policy applies to interactions between the parent window and the content inside the iframe. Here's how it works in action:

1. Same-Origin Iframes:

When an iframe and its parent window have the same origin (i.e., same protocol, domain, and port), they can communicate and interact freely. JavaScript in the parent window can access and manipulate the DOM of the iframe, and vice versa.

```html
<!-- Parent Window -->
<iframe src="same-origin-page.html"></iframe>

<script>
  const iframe = document.querySelector('iframe');
  const iframeDocument = iframe.contentDocument; // Access the iframe's document
  iframeDocument.getElementById('iframe-content').textContent = 'Updated from parent window';
</script>

```

```html

<!-- same-origin-page.html (Content Inside Iframe) -->
<div id="iframe-content">Content inside the iframe</div>
<script>
  // JavaScript inside the iframe can access the parent window
  window.parent.document.body.style.backgroundColor = 'lightblue';
</script>

```

2. Cross-Origin Iframes:

When an iframe and its parent window have different origins (cross-origin), the same-origin policy restricts direct interactions. JavaScript in the parent window cannot access the DOM of the iframe, and vice versa, by default.

```html

<!-- Parent Window (example.com) -->
<iframe src="https://different-origin.com/cross-origin-page.html"></iframe>
<script>
  const iframe = document.querySelector('iframe');
  const iframeDocument = iframe.contentDocument; // Will throw a security error
</script>

```

```html
<!-- cross-origin-page.html (Content Inside Cross-Origin Iframe) -->
<div id="iframe-content">Content inside the cross-origin iframe</div>

```

3. Cross-Origin Communication:

To enable controlled communication between a cross-origin parent window and its iframe, you can use techniques like Cross-Origin Communication (such as the postMessage API) or Cross-Origin Resource Sharing (CORS) headers on the server hosting the iframe content.

- postMessage API: This allows secure messaging between the parent window and the iframe, even when they have different origins. The parent window can send messages to the iframe, and vice versa.

```JS

// Parent window 

const iframe = document.querySelector('iframe');
iframe.contentWindow.postMessage('Hello from parent window!', 'https://different-origin.com');

```

```JS

// Inside cross-origin iframe
window.addEventListener('message', (event) => {
  if (event.origin === 'https://parent-origin.com') {
    // Handle the message
    console.log(event.data);
  }
});

```

4. Security Considerations: Cross-origin iframes and communication should be implemented carefully to prevent security vulnerabilities. Only trusted sources should be allowed to communicate, and proper validation of incoming messages is essential to prevent potential attacks.

In summary, iframes provide a way to embed external content within a web page, but the same-origin policy enforces security restrictions on interactions between iframes and their parent windows when they have different origins. Developers can use techniques like the postMessage API to facilitate secure communication between cross-origin iframes and parent windows.

### Windows on subdomains: document.domain

When you're working with multiple subdomains of the same parent domain and need to enable communication or interaction between them while respecting the same-origin policy, you can use the document.domain property. This property allows you to relax the same-origin policy restrictions for documents served from different subdomains of the same parent domain.

Here's how it works:

2. Setting document.domain:

To enable cross-subdomain communication, both the parent window (or frame) and the child window (or frame) need to set their document.domain property to the same value, which should be the common parent domain.

For example, if you have two subdomains, subdomain1.example.com and subdomain2.example.com, you can set document.domain as follows in both documents:

In subdomain1.example.com:

```JS

document.domain = "example.com";

```

In subdomain2.example.com:

```JS

In subdomain2.example.com:

```

After setting document.domain to the same value, the same-origin policy restrictions are relaxed, and the two documents can communicate with each other.

2. Interacting Between Subdomains:

Once document.domain is set correctly in both documents, you can access and manipulate the DOM, as well as perform other interactions, between the subdomains.

For example, you can access elements in an iframe from a parent window:

```JS

// Parent window (subdomain1.example.com)
const iframe = document.getElementById("myIframe");
const iframeDocument = iframe.contentDocument;
iframeDocument.getElementById("elementInIframe").textContent = "Updated from parent window";

```

Or you can access variables or functions between the subdomains:

```JS

// Parent window (subdomain1.example.com)
const childWindow = window.frames[0];
const message = childWindow.getMessageFromIframe();
console.log(message);

```

3. Security Considerations:

Be cautious when using document.domain to relax the same-origin policy. It should only be used when you have control over both the parent and child documents and trust the content on both subdomains. Incorrect use of document.domain can potentially introduce security risks.

4. Limitations:

document.domain can only be set to a less specific domain (e.g., from a subdomain to a parent domain). You cannot set it to a different domain.
The use of document.domain is only applicable for subdomains within the same parent domain. It does not work across completely different domains.

In summary, document.domain is a mechanism that allows relaxing the same-origin policy for documents served from subdomains of the same parent domain. It's useful for enabling communication and interaction between subdomains while maintaining security. However, it should be used judiciously and only in situations where you have control over the content and trust the sources involved.

### Iframe: wrong document pitfall

A common pitfall when working with iframes is the "wrong document" error, which occurs when you attempt to access or manipulate elements in an iframe but mistakenly use the wrong document object. This error typically happens when you have multiple iframes on a page, and you're not explicitly specifying the correct iframe's document.

Here's a common scenario and how to avoid the "wrong document" pitfall:

Scenario:
You have a web page with multiple iframes, and you want to manipulate the content within one of those iframes using JavaScript.

Pitfall:
You mistakenly use the document object without specifying the correct iframe's contentDocument, which leads to the "wrong document" error.

Solution:
Always explicitly specify the correct iframe's contentDocument or contentWindow.document to access its content. Here's an example:

```html

<!DOCTYPE html>
<html>
<head>
    <title>Parent Page</title>
</head>
<body>
    <iframe id="myIframe" src="iframe.html"></iframe>
    <script>
        const iframe = document.getElementById("myIframe");
        const iframeDocument = iframe.contentDocument; // Access the iframe's document

        // Incorrect (may lead to "wrong document" error):
        // const elementInIframe = document.getElementById("elementInIframe");

        // Correct way to access an element within the iframe:
        const elementInIframe = iframeDocument.getElementById("elementInIframe");
        elementInIframe.textContent = "Updated from parent window";
    </script>
</body>
</html>

```

In the example above:

We first access the iframe element.
Then, we access the contentDocument property of the iframe to get its document object.
Finally, we use getElementById on the iframeDocument to access and manipulate an element within the iframe.
By explicitly specifying the correct document object (in this case, iframeDocument), you avoid the "wrong document" error and ensure that you're working with the content of the desired iframe.

### Collection: window.frames

The window.frames collection in JavaScript is an array-like object that allows you to access and manipulate the iframes and frames within a window. Each iframe or frame is represented as an element in this collection, and you can use it to interact with their contents, such as accessing their documents and executing scripts.

Here are some common tasks and operations you can perform with the window.frames collection:

1. Accessing an iframe by index:

You can access a specific iframe by its index in the window.frames collection, just like you would access an element in an array.

```JS

const firstIframe = window.frames[0]; // Access the first iframe
const secondIframe = window.frames[1]; // Access the second iframe

```

2. Accessing an iframe by name or ID:

If an iframe has a name or ID attribute set, you can also access it using the name or ID as a property of the window.frames collection.

```JS
const myIframe = window.frames['iframeName']; // Access by name

```

3. Accessing an iframe by its HTML element:

If you have a reference to the HTML element of an iframe, you can access its contentDocument directly.

```JS

const iframeElement = document.getElementById('myIframe');
const iframeDocument = iframeElement.contentDocument;

```

4. Looping through all iframes:

You can iterate through all iframes within the current window using a loop.

```JS

for (let i = 0; i < window.frames.length; i++) {
  const iframe = window.frames[i];
  // Access and manipulate each iframe as needed
}

```

5. Executing scripts in iframes:

You can execute scripts within iframes by accessing the iframe's contentWindow and then using the eval() method or adding a script element to the iframe's document.

```JS

const iframe = window.frames[0];
const iframeWindow = iframe.contentWindow;
iframeWindow.eval("console.log('Script executed in iframe.');");

```

6. Checking if an iframe exists:

You can check if an iframe with a specific index, name, or ID exists in the window.frames collection.

```JS

const exists = window.frames['myIframe'] !== undefined;

```

7. Manipulating iframe content:

You can access the document of an iframe and manipulate its content just like you would with the main window's document.

```JS

const iframe = window.frames[0];
const iframeDocument = iframe.contentDocument;
const elementInIframe = iframeDocument.getElementById('elementInIframe');
elementInIframe.textContent = 'Updated content';

```

Keep in mind that the window.frames collection is only accessible for iframes and frames that are part of the same origin (i.e., they must have the same protocol, domain, and port). Cross-origin iframes are subject to the same-origin policy restrictions, and you may need to use techniques like the postMessage API to communicate between them securely.

### The “sandbox” iframe attribute

The sandbox attribute is an HTML attribute that can be applied to an iframe element. It allows you to create a secure, sandboxed environment for the content displayed within the iframe, enhancing security by restricting what the content can do and access. This is particularly useful when embedding third-party content on a website, such as advertisements or widgets, while mitigating potential security risks.

1. The sandbox attribute accepts a list of space-separated tokens, each of which defines a specific security constraint or policy. These tokens determine the restrictions applied to the content within the iframe. Here are some common sandbox attribute values:

2. allow-same-origin: Allows the iframe's content to be treated as being from the same origin as the parent document. This means it can access its own origin's resources without restriction.

3. allow-scripts: Allows the execution of JavaScript within the iframe. Without this token, JavaScript execution is disabled.

4. allow-forms: Allows the use of form elements and the submission of forms within the iframe.

5. allow-popups: Allows the creation of new browsing contexts (popups or new windows) from within the iframe.

6. allow-popups-to-escape-sandbox: Allows popups or new windows opened from the iframe to navigate to a new page outside the sandbox.

7. allow-modals: Allows the use of modal dialog boxes (e.g., alert(), confirm(), prompt()) within the iframe.

8. allow-top-navigation: Allows the iframe's content to navigate the top-level window (the parent window).

9. allow-top-navigation-by-user-activation: Allows top-level navigation only when triggered by a user action, such as a click event.

10. allow-orientation-lock: Allows the content to lock the device's orientation.

11. allow-pointer-lock: Allows the content to use the Pointer Lock API, which captures the mouse pointer.

12. allow-presentation: Allows the content to initiate a presentation session (used in conjunction with the Presentation API).

13. allow-popups-to-escape-sandbox: Allows popups or new windows opened from the iframe to navigate to a new page outside the sandbox.

For example, to create an iframe that allows scripts to run but restricts form submission and top-level navigation, you can use the following code:

```html

<iframe src="https://example.com" sandbox="allow-scripts allow-same-origin"></iframe>

```

It's important to carefully consider the security requirements of your web application when using the sandbox attribute. While it can enhance security by isolating third-party content, it may also restrict functionality, so it should be used judiciously.

Additionally, note that the exact behavior of the sandbox attribute may vary between browsers, so it's important to test and ensure that it functions as expected in your target browsers.

### Cross Window Messaging

ross-window messaging is a technique in web development that allows communication between different windows or iframes in a web page, even if they have different origins (i.e., domains, protocols, or ports). This communication is typically achieved using the postMessage API, which provides a secure and controlled way to send and receive data or messages between windows or iframes.

The postMessage API involves two main participants:

1. Sender Window (or iframe): This is the window or iframe that initiates the message and sends it to another window or iframe. It can be a parent window sending a message to a child iframe or vice versa, or even between sibling iframes or windows.

2. Receiver Window (or iframe): This is the window or iframe that listens for and receives messages sent by the sender. It can be a child iframe receiving a message from a parent window or another iframe.

Here's how you can use the postMessage API for cross-window messaging:

Sender Window (or iframe):

```JS

const targetWindow = document.getElementById('target-iframe').contentWindow; // Get a reference to the iframe's window
const messageData = {
  username: 'Alice',
  content: 'Hello, Bob!'
};

// Send a message to the target window/iframe
targetWindow.postMessage(messageData, 'https://example.com'); // Specify the target origin

```

Receiver Window (or iframe):

```JS

// Listen for incoming messages
window.addEventListener('message', (event) => {
  // Verify that the sender's origin is trusted (optional)
  if (event.origin === 'https://trusted-origin.com') {
    const receivedData = event.data;
    console.log(`Received message from ${event.origin}:`, receivedData);
    
    // Respond to the message, if needed
    const responseMessage = 'Message received!';
    event.source.postMessage(responseMessage, event.origin);
  }
});

```

Key points to note:

- In the sender window, you use the postMessage method to send data (messageData in the example) to a target window or iframe. You also specify the target window's origin (domain, protocol, and port) to ensure security.

- In the receiver window, you add an event listener to listen for the 'message' event. You can verify the origin of the sender's message to ensure it comes from a trusted source if necessary.

- The event object received in the listener contains the data sent by the sender (event.data), the source window (event.source), and the sender's origin (event.origin).

- You can send a response back to the sender window if needed, using event.source.postMessage().

Cross-window messaging is a powerful way to enable communication and data exchange between different parts of a web page or between different web applications. It is often used for implementing features like cross-origin authentication, embedding third-party widgets, and achieving seamless interactions in single-page applications.





