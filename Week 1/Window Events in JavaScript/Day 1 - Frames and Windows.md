# Week 1: Window Events in JavaScript

## Day 1 - Frames and Windows

### Popups and Window methods

In JavaScript, popups and window methods are used to interact with browser windows and create various types of pop-up dialog boxes or new browser windows. These methods provide developers with control over how web content is displayed to users. Let's delve into both concepts:

### Popups

Popups are small dialog boxes that appear on top of the current browser window. They are typically used for tasks such as displaying alerts, confirming actions, and collecting user input. JavaScript provides three main functions to work with popups:

- alert(): The alert() method displays a simple dialog box with a message and an "OK" button. It is often used for showing informative messages to the user.

```JS

alert("This is an alert message.");

```

- confirm(): The confirm() method displays a dialog box with a message, an "OK" button, and a "Cancel" button. It returns true if the user clicks "OK" and false if they click "Cancel." This is useful for obtaining user confirmation for an action.

```JS

if (confirm("Are you sure you want to delete this item?")) {
  // Delete the item
} else {
  // Cancel the deletion
}

```

- prompt(): The prompt() method displays a dialog box with a message, an input field for the user to enter text, an "OK" button, and a "Cancel" button. It returns the text entered by the user if they click "OK" and null if they click "Cancel." This is often used to collect user input.

```JS

const userInput = prompt("Please enter your name:", "John Doe");
if (userInput !== null) {
  console.log("Hello, " + userInput);
}

```

### Window Methods

Window methods are functions that allow you to manipulate the properties and behavior of the browser window or open new browser windows. Some common window methods include:

- open(): The open() method opens a new browser window or tab. You can specify the URL to load in the new window and control various window properties such as size, position, and whether it has toolbars and scrollbars.

```JS

window.open("https://www.example.com", "_blank", "width=500,height=300");

```

- close(): The close() method closes the current browser window if it was opened using JavaScript. However, it is generally restricted for security reasons and may not work in all cases.

```JS

window.close();

```

- setTimeout() and setInterval(): These methods are used to schedule the execution of functions after a specified delay (setTimeout) or at regular intervals (setInterval).

```JS

setTimeout(function() {
  alert("This alert will appear after 3 seconds.");
}, 3000);

setInterval(function() {
  console.log("This message will be logged every 2 seconds.");
}, 2000);

```

These are some of the core methods for working with popups and browser windows in JavaScript. While they can be useful for creating interactive user experiences, developers should use them judiciously to avoid annoying or disrupting the user's browsing experience. Additionally, modern web development practices often emphasize using alternative techniques like modal dialogs and pop-up components provided by frameworks to improve user experience and security.

### Window Open

The window.open() method in JavaScript is used to open a new browser window or tab with the specified URL or about:blank if no URL is provided. This method can also be used to control various properties of the new window, such as its dimensions, position, and the presence of various browser features.

Here's the basic syntax of the window.open() method:

```JS

window.open(url, target, options);

```

- url (optional): A string that specifies the URL to be loaded in the new window. If omitted or set to an empty string ("") or "about:blank," an empty window is opened.

- target (optional): A string that specifies the name of the target window. This can be used to open the URL in an existing window or frame. Common values for target include:

- "_blank": Opens the URL in a new tab or window.
- "_self": Opens the URL in the same frame or window (default behavior).
- "_parent": Opens the URL in the parent frame or window.
- "_top": Opens the URL in the top-level browsing context.

- options (optional): A string that specifies a list of comma-separated options for the new window, such as its size, position, and features. These options are passed as a string with key-value pairs separated by commas.

Here's an example of how you can use window.open():

```JS

// Open a new window with a specific URL and size
const newWindow = window.open("https://www.example.com", "_blank", "width=800,height=600");

// Open a new window with no URL (blank)
const emptyWindow = window.open("", "_blank", "width=400,height=300");

// Open a new window with custom features
const customWindow = window.open("https://www.example.com", "_blank", "width=600,height=400,toolbar=no,location=no");

// Open a URL in the same window
window.open("https://www.example.com", "_self");

```

In the examples above, window.open() is used to open new browser windows or tabs with different configurations. You can adjust the options to control the appearance and behavior of the new window according to your requirements.

Please note that modern web browsers often have pop-up blockers that may interfere with the window.open() method, especially if it's called without direct user interaction (e.g., not in response to a user click). To ensure compatibility and avoid pop-up blocking, it's a good practice to use this method judiciously and provide a clear user benefit when opening new windows or tabs.

### A Minimalistic Window

Creating a minimalistic window using the window.open() method involves opening a new browser window or tab with minimal features and content. To create a minimalistic window, you can follow these steps:

```JS

// Open a minimalistic window with an empty page
const minimalisticWindow = window.open("about:blank", "_blank", "width=200,height=100,toolbar=no,menubar=no,location=no,status=no,resizable=no");

```

- "about:blank" is used as the URL, which opens an empty page.
- "_blank" specifies that the new window should be opened in a new tab or window.
- The "width=200,height=100" option sets the dimensions of the window to 200 pixels in width and 100 pixels in height.
- The options "toolbar=no,menubar=no,location=no,status=no,resizable=no" are used to remove various browser features, including the toolbar, menu bar, location bar, status bar, and the ability to resize the window.

This will open a very minimalistic window with no visible browser controls or content. You can adjust the dimensions and features according to your needs for your specific use case.

Remember that modern web browsers often have pop-up blockers, so the user's browser settings may affect whether the new window is displayed as intended. Therefore, it's essential to use such features sparingly and ensure they provide clear value to the user to avoid triggering pop-up blocking mechanisms.

### Accessing popup from window

To access a popup window from the parent window in JavaScript, you need to keep a reference to the popup window when you open it using the window.open() method. Once you have a reference to the popup window, you can interact with its content and manipulate it as needed. Here's how you can do it:

1. Open the Popup Window:
When you open the popup window, store the reference to it in a variable. You can do this by assigning the result of the window.open() method to a variable.

```JS

const popupWindow = window.open("https://www.example.com", "_blank", "width=400,height=300");

```

2. Access and Manipulate the Popup:
Once you have a reference to the popup window, you can access its properties and methods just like you would with any other JavaScript window object. For example, you can access the document object of the popup to modify its content:

```JS

// Access and manipulate the popup's document
const popupDocument = popupWindow.document;
popupDocument.body.innerHTML = "<h1>Hello from Popup!</h1>";

```

You can also add event listeners to the popup window or perform other interactions, such as updating content or triggering actions within the popup.

3. Close the Popup (Optional):
If you need to close the popup window from the parent window, you can use the close() method on the reference to the popup window.

```JS

// Close the popup window
popupWindow.close();

```

Here's a complete example:

```JS

// Open the popup window
const popupWindow = window.open("https://www.example.com", "_blank", "width=400,height=300");

// Access and manipulate the popup's document
const popupDocument = popupWindow.document;
popupDocument.body.innerHTML = "<h1>Hello from Popup!</h1>";

// Close the popup window after a delay (optional)
setTimeout(() => {
  popupWindow.close();
}, 5000);

```

Keep in mind that browser security policies might restrict interactions between windows or tabs if they are not from the same origin (same domain). If you're working with popups from different origins, you might encounter security restrictions, such as the same-origin policy, which can limit what you can do with the popup's content from the parent window.

### Closing a popup

To close a popup window using JavaScript, you can use the window.close() method. This method is called on the reference to the popup window, and it will close the window that was opened using window.open(). Here's how you can do it:

```JS

// Open the popup window
const popupWindow = window.open("https://www.example.com", "_blank", "width=400,height=300");

// Close the popup window
popupWindow.close();

```

In the code above, a new popup window is opened, and then the popupWindow.close() method is called to close it.

Please note the following considerations:

1. Popup Blockers: Popup blockers in modern browsers may prevent the window.open() method from opening popups if it's not triggered by a user action (e.g., a button click). Likewise, they may also block the popupWindow.close() method if the popup wasn't opened as a result of a user action.

2. Cross-Origin Restrictions: If the popup and the parent window are from different origins (different domains), you may encounter cross-origin security restrictions. In some cases, you won't be able to close the popup window programmatically due to these restrictions.

3. Timing: Ensure that you're calling popupWindow.close() at the appropriate time. For example, you might want to close the popup in response to a user action or after a certain event has occurred.

4. User Experience: Be mindful of user experience when working with popups. Closing popups without the user's consent or understanding can be disruptive and may not be a good practice in some cases.

Remember to use popups judiciously and only when they provide clear value to the user to avoid triggering popup blockers and ensure a positive user experience.

### Scrolling and Resizing

In JavaScript, you can control scrolling and resizing of browser windows or elements using various methods and properties. Here, I'll explain how to handle scrolling and resizing for both the entire browser window and specific HTML elements.

#### Scrolling

1. Scrolling the Browser Window:
You can control scrolling of the entire browser window using the window object.

- To scroll to a specific position, use window.scrollTo(x, y) or window.scrollBy(x, y) to scroll by a certain amount.

```JS

window.scrollTo(0, 500); // Scrolls to vertical position 500px

```

- To scroll to a specific element, you can use the element's scrollIntoView() method.

```JS

const elementToScrollTo = document.getElementById("target-element");
elementToScrollTo.scrollIntoView();

```

2. Scrolling HTML Elements:

For scrolling specific HTML elements, you can use the scrollTop and scrollLeft properties. For example, to scroll a div element horizontally, you can do the following:

```JS

const elementToScroll = document.getElementById("target-element");
elementToScroll.scrollLeft += 100; // Scrolls the element 100px to the right

```

#### Resizing

1. Resizing the Browser Window:
To resize the entire browser window, you can use the window.resizeTo(width, height) method.

```JS

window.resizeTo(800, 600); // Resizes the window to 800px wide and 600px high

```

2. Resizing HTML Elements:
You can resize HTML elements by setting their style properties in JavaScript. For example, to change the width and height of a div element:

```JS

const elementToResize = document.getElementById("target-element");
elementToResize.style.width = "400px";
elementToResize.style.height = "300px";

```

Please note the following considerations:

- Resizing the browser window using window.resizeTo() might not always work, as many modern browsers restrict resizing for security and user experience reasons.

- When manipulating scrolling or resizing, be mindful of user experience and accessibility. Sudden or excessive scrolling and resizing can be disruptive to users.

- Always perform scrolling and resizing operations based on user actions or specific application requirements, and ensure they enhance the user experience rather than causing annoyance or confusion.

- Cross-origin policies may apply when manipulating elements within iframes or elements from different domains.

Remember that scrolling and resizing operations should be used thoughtfully in web applications to provide a better user experience, and excessive or unexpected resizing and scrolling should be avoided.

### Scrolling a window

To scroll the content of a browser window using JavaScript, you can use the window.scrollTo() method or the window.scrollBy() method. These methods allow you to control the vertical and horizontal scrolling of the entire window. Here's how you can use them:

1. window.scrollTo(x, y): This method scrolls the window to the specified coordinates (x, y) on the page, where (0, 0) represents the top-left corner of the page.

```JS

// Scroll to the top of the page
window.scrollTo(0, 0);

// Scroll to a specific vertical position (e.g., 500 pixels from the top)
window.scrollTo(0, 500);

// Scroll to a specific horizontal position (e.g., 300 pixels from the left)
window.scrollTo(300, 0);

// Scroll to a specific position both vertically and horizontally
window.scrollTo(300, 500);


```

2. window.scrollBy(x, y): This method scrolls the window by the specified number of pixels horizontally (x) and vertically (y) relative to its current position.

```JS

// Scroll down by 200 pixels
window.scrollBy(0, 200);

// Scroll left by 100 pixels
window.scrollBy(-100, 0);

// Scroll diagonally up and to the right by 50 pixels
window.scrollBy(50, -50);

```

These methods are useful for programmatically controlling the scroll position of the entire browser window. You can use them in response to user interactions, such as button clicks or other events, to create smooth scrolling effects or to navigate to specific parts of a web page.

Keep in mind that modern web browsers often have smooth scrolling behavior enabled by default, so if you want to create custom scrolling animations or behavior, you may need to disable the browser's built-in smooth scrolling or work with libraries that provide more advanced scrolling options.

### Focus/Blur on a window

In JavaScript, you can use the focus() and blur() methods to control the focus of the browser window or an HTML element. These methods are used to bring a window or element into focus (make it active) or remove focus from it. Here's how to use them:

1. Focus on a Browser Window:

- To bring focus to the current browser window, you can use window.focus():

```JS

window.focus();

```

- To bring focus to a specific popup window or open a new one and give it focus, you can use:

```JS

const popupWindow = window.open("https://www.example.com", "_blank");
popupWindow.focus();

```

2. Focus on an HTML Element:

To bring focus to an HTML element, such as an input field or a button, you can use the focus() method:

```JS

const inputElement = document.getElementById("myInput");
inputElement.focus();

```

3. Blur an HTML Element:

To remove focus (blur) from an HTML element, you can use the blur() method:

```JS

const inputElement = document.getElementById("myInput");
inputElement.blur();

```

- Keep in mind the following considerations:

- The focus() method is often used to make an element or window active and ready for user interaction.

- The blur() method is used to remove focus from an element or window.

- When using window.focus(), it may not work as expected in some cases due to browser settings and user preferences, especially when it comes to switching between windows.

- Focusing and blurring can be used in various user interface interactions, such as managing form field focus, controlling pop-up windows, or enhancing accessibility.

- Be cautious when programmatically setting focus, as it can affect the user experience. Ensure that you have a clear and user-friendly reason for doing so.

- Pop-up windows may be subject to browser pop-up blockers, so they may not receive focus as expected unless the user explicitly triggers them (e.g., via a button click).

In most cases, focusing and blurring are used to enhance user interactions and improve accessibility in web applications.
