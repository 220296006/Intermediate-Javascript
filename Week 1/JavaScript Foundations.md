# JavaScript Foundations

## Popups and window methods

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

```JS


```

```JS


```

```JS


```