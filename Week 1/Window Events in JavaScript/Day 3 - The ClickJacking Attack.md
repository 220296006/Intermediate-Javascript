# Week 1: Window Events in JavaScript

## Day 3 - The Clickjacking Attack

Clickjacking is a malicious technique used by attackers to deceive website visitors into clicking on something different from what they perceive. This type of attack involves placing a transparent or opaque layer over a legitimate website or web application and then tricking users into interacting with this disguised content. The attacker can control the actions users take, potentially leading to unintended consequences, such as initiating harmful actions or stealing sensitive information.

Here's how a clickjacking attack typically works:

1. Creating a Deceptive Layer: The attacker creates a web page that includes an iframe or other HTML elements to overlay a target website or application. This overlay is usually hidden or partially transparent, making it difficult for users to detect.

2. Luring Users: The attacker entices users to visit the malicious page through various means, such as phishing emails, social engineering, or enticing content. Users are led to believe they are interacting with a legitimate site.

3. Tricking Users: When users interact with what they believe is the legitimate site, they are, in fact, interacting with the hidden layer. This can include clicking on buttons, filling out forms, or even unknowingly making purchases.

4. Unintended Actions: The attacker can control the actions performed by the user. For example, they might trick the user into clicking on "like" buttons, sharing content, or performing financial transactions without their consent.

5. Data Theft and Misuse: In some cases, clickjacking can be used to steal sensitive information. For instance, an attacker might overlay a fake login form over a legitimate website, capturing users' credentials when they try to log in.

To protect against clickjacking attacks, web developers and website owners can implement several security measures:

1. Frame Busting: Use JavaScript to prevent your web page from being embedded in an iframe. For example:

```js

if (top !== self) {
  top.location = self.location;
}

```

2. X-Frame-Options Header: Set the X-Frame-Options HTTP response header to deny the site from being embedded in an iframe. For example:

```math

X-Frame-Options: DENY

```

3. Content Security Policy (CSP): Implement a strict CSP to control which domains can load content within your site.

4. User Education: Educate users about the dangers of clicking on unfamiliar or suspicious links and verify the legitimacy of websites and applications before interacting with them.

5. Browser Security: Modern web browsers have security mechanisms to detect and prevent clickjacking, so it's essential to keep browsers and their security features up-to-date.

Clickjacking attacks are a serious security concern, as they can lead to financial loss, data theft, and other adverse consequences for both users and website owners. Taking preventive measures is crucial to mitigate this threat.

### Old school defenses (weak)

#### Framebusting

rame busting, also known as framekiller or framebusting code, is a security technique used to prevent a webpage from being displayed within an iframe on another website. This technique is employed to protect against clickjacking attacks and to ensure that a webpage is always displayed in a top-level window rather than within an iframe.

Here's how frame busting works and how it can be implemented:

1. The Problem: Without frame busting, a malicious website can embed your webpage within an iframe on their site and trick users into interacting with it, potentially performing unintended actions.

2. The Solution: Frame busting involves adding JavaScript code to your webpage that checks whether it is being displayed in a top-level window or within an iframe. If it's within an iframe, the code breaks out of the iframe and ensures the page is displayed in the top-level window.

Here's a basic example of frame-busting JavaScript code:

```JS
if (top !== self) {
    top.location = self.location;
}

```

In this code:

top refers to the top-level window (the parent window).
self refers to the current window (the iframe).
The code checks if top and self are different, which indicates that the webpage is being displayed within an iframe. If they are different, it sets the top.location to the current window's location, effectively breaking out of the iframe and loading the page in the top-level window.

This code should be included in the head section of your webpage, preferably at the beginning to ensure it executes early in the page's lifecycle.

It's important to note that while frame busting can help protect against clickjacking, it is not foolproof, and there are known techniques that attackers can use to bypass simple frame-busting code. Therefore, it's recommended to combine frame busting with other security measures, such as implementing X-Frame-Options headers, Content Security Policy (CSP), and other security best practices to create a robust defense against clickjacking attacks. Additionally, browser support for certain frame-busting techniques may vary, so testing across different browsers is essential for ensuring effectiveness.

### X-Frame-Options

X-Frame-Options is an HTTP response header that is used to control whether a web page can be displayed within an iframe on another website. It is a security feature designed to prevent clickjacking attacks by specifying who is allowed to embed a webpage in an iframe. This header helps protect web applications from being maliciously framed within iframes on other domains.

The X-Frame-Options header can have one of three values:

1. DENY: This setting denies any website from embedding the web page in an iframe, regardless of the source. It ensures that the web page cannot be displayed in an iframe under any circumstances.

```http

X-Frame-Options: DENY

```

2. SAMEORIGIN: This setting allows the web page to be displayed in an iframe, but only if the parent window's origin matches the origin of the web page. It prevents framing by websites with different origins.


```http

X-Frame-Options: SAMEORIGIN

```

3. ALLOW-FROM uri: This option allows you to specify a specific URI (web address) that is allowed to embed your webpage in an iframe. Any other origins will be denied.

Example usage in an HTTP response:

```http

X-Frame-Options: ALLOW-FROM https://example.com

```

Here's how X-Frame-Options helps protect against clickjacking:

- DENY: By setting DENY, you ensure that your webpage cannot be framed by any website, preventing clickjacking attacks completely.

- SAMEORIGIN: This option allows your web pages to be embedded within iframes on your own site, but not on other websites, enhancing security while maintaining functionality.

- ALLOW-FROM: You can specify specific trusted websites that are allowed to embed your content in iframes, providing a more fine-grained control over embedding.

To implement X-Frame-Options, you typically need to configure it on your web server. The specific method for configuring this header may vary depending on your web server technology (e.g., Apache, Nginx, IIS).

Example for Apache (.htaccess file):


```http

Header always append X-Frame-Options SAMEORIGIN

```

Example for Nginx (nginx.conf file):


```http

add_header X-Frame-Options SAMEORIGIN;

```

Keep in mind that while X-Frame-Options is a useful security feature, it may not be supported in all modern browsers, and its use is being phased out in favor of the Content-Security-Policy (CSP) header, which offers more comprehensive control over security policies, including frame embedding restrictions. Therefore, it's a good practice to implement both X-Frame-Options and CSP headers for added security.

### The SameSite

The Samsite cookie attribute is an important security feature introduced to enhance the protection of web applications against certain types of cross-site request forgery (CSRF) and cross-site scripting (XSS) attacks. It defines when and how cookies should be sent in cross-origin requests, helping to prevent unauthorized or unintended cookie sharing.

The SameSite attribute can have three possible values:

1. Strict (SameSite=Strict): Cookies with this attribute are only sent in requests initiated from the same site (same origin). They are not sent in cross-site requests, including those generated by links, prerendering, or other embedded content. This setting provides the highest level of protection but may affect the functionality of certain services and require careful testing.

Example:

```JS

Set-Cookie: sessionId=abc123; SameSite=Strict; Secure

```

2. Lax (SameSite=Lax): Cookies with this attribute are sent in cross-site requests if they are top-level navigations (e.g., user clicks a link). However, they are not sent in requests initiated by loading resources, such as images, scripts, or iframes. This is the default behavior if the SameSite attribute is not explicitly set.

Example:

```JS

Set-Cookie: sessionId=abc123; SameSite=Lax; Secure

```

None (SameSite=None): Cookies with this attribute are sent in all requests, regardless of the origin. This setting is typically used when cross-origin sharing of cookies is necessary, such as when implementing single sign-on (SSO) or embedding content from a different origin. However, when using SameSite=None, the cookie must also have the Secure attribute, meaning it can only be sent over HTTPS connections.

Example:

```JS

Set-Cookie: sessionId=abc123; SameSite=None; Secure


```

Important considerations:

- When using SameSite=None, it's crucial to ensure that your web application is served over HTTPS. Browsers will only allow cookies with SameSite=None over secure connections.

- While SameSite can help mitigate certain security risks, it is not a standalone security solution. It should be used in conjunction with other security practices, such as input validation, session management, and security headers like Content Security Policy (CSP).

- SameSite is widely supported in modern browsers. However, older browsers may not fully support it, so it's essential to test your application's behavior across various browsers and versions.

- The use of the SameSite attribute can affect the functionality of web applications, so it's essential to thoroughly test your application after implementing or modifying cookie settings.

In summary, the SameSite cookie attribute is a valuable tool for enhancing web application security by controlling how cookies are shared in cross-origin requests. By using this attribute appropriately, web developers can reduce the risk of CSRF and XSS attacks.