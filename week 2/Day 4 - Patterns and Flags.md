# Day 4 - Patterns and Flags

Patterns and flags often refer to regular expressions in the context of programming and text processing. Regular expressions (regex or regexp) are powerful tools for pattern matching and searching within strings. Flags are used to modify how regular expressions behave when matching patterns. Let's dive into patterns and flags in regular expressions:

Patterns (Regular Expressions):
A regular expression is a pattern that defines a set of strings. It allows you to match, search, and manipulate text based on that pattern. Regular expressions consist of various characters and symbols that have special meanings. Here are some common components:

1. Literals: Ordinary characters like letters and digits match themselves. For example, the regular expression /hello/ will match the string "hello."

2. Metacharacters: Special characters with meanings, such as . (dot) to match any character, \* (asterisk) to match zero or more occurrences, + (plus) to match one or more occurrences, ? (question mark) to match zero or one occurrence, etc.

3. Character Classes: Square brackets [...] allow you to define a character set. For example, [aeiou] matches any vowel.

4. Quantifiers: Curly braces {} allow you to specify the exact number of occurrences or a range of occurrences. For example, \d{3} matches exactly three digits.

5. Anchors: Anchors like ^ (caret) and $ (dollar sign) specify the start and end of a line or string, respectively.

6. Grouping and Alternation: Parentheses () group parts of the pattern, and | (pipe) is used for alternation. For example, (foo|bar) matches either "foo" or "bar."

Flags:
Flags in regular expressions are optional parameters that modify the behavior of the regex pattern. They are typically placed after the closing delimiter of the regular expression (e.g., /pattern/flags). Here are some common flags:

1. i (Case Insensitive): Makes the pattern match case-insensitively. For example, /apple/i matches "apple," "Apple," "aPpLe," etc.

2. g (Global): Matches all occurrences of the pattern in a string rather than just the first one. Without this flag, regex stops after the first match.

3. m (Multiline): Allows ^ and $ to match the start/end of each line within a multi-line string, rather than just the start/end of the entire string.

4. s (Dot All): Allows . to match newline characters (\n) as well. By default, . matches any character except newline.

5. u (Unicode): Enables full Unicode matching, allowing you to work with Unicode characters correctly.

y (Sticky): Requires that the match must start at the current position in the target string.

x (Extended): Ignores whitespace and allows you to write more readable and structured regex patterns.

For example, you can use the /pattern/gi regular expression with the global and case-insensitive flags to find all case-insensitive occurrences of a pattern in a string.

Regular expressions and their flags are a powerful way to handle complex string matching and manipulation tasks in programming languages that support regex, such as JavaScript, Python, and many others. They are particularly useful for tasks like validation, data extraction, and text processing.

## Usage

Regular expressions with their associated flags have a wide range of usage in various programming and scripting languages for text processing tasks. Here are some common use cases for regular expressions:

1. Text Search and Matching:

- Find occurrences of a specific word or phrase in a text.
- Match email addresses, URLs, or other patterns in text.

2. Data Validation:

-Validate user inputs, such as email addresses, phone numbers, or dates.
-Ensure that data conforms to a specific format or structure.

3. Text Extraction:

- Extract information from structured text, like extracting URLs from an HTML document.
- Capture parts of a string using capturing groups.

4. String Manipulation:

- Replace or modify text based on a pattern, such as censoring offensive words.
- Split a string into an array using a delimiter.

5. Data Parsing:

- Parse data from logs, CSV files, or other structured formats.
- Extract specific fields from structured data.

6. URL Routing:

- Implement routing in web applications using regular expressions to match URL patterns.

7. Code Search and Analysis:

- Search for patterns in source code, like finding all function calls with specific arguments.
- Analyze code to identify coding style violations or security vulnerabilities.

8. Data Scrubbing:

- Clean and normalize data by removing unwanted characters or formatting inconsistencies.

9. Password Policies:

- Enforce strong password policies by checking if passwords meet specific criteria.

10. Lexical Analysis (Lexing):

- Tokenize and analyze programming languages or domain-specific languages using regular expressions.

11. Data Extraction from Documents:

- Extract structured data from documents, such as PDFs or spreadsheets, using regular expressions.

12. Log File Analysis:

- Parse and analyze log files to extract useful information or detect errors.
  Examples of Programming Languages with Regular

Expression Support:

- JavaScript: Regular expressions are built into - JavaScript and can be used with the RegExp object or regular expression literals (/pattern/).
- Python: The re module provides regular expression support in Python.
- Java: Java's java.util.regex package provides regular expression functionality.
- PHP: PHP supports regular expressions through functions like preg_match() and preg_replace().
- Ruby: Ruby has built-in regular expression support with the =~ operator and the Regexp class.
  .NET (C#): C# includes the System.Text.RegularExpressions namespace for regular expressions.

When working with regular expressions, it's essential to consider performance, maintainability, and edge cases. Regular expressions can be powerful but can also become complex and hard to read, so it's essential to strike a balance between efficiency and readability in your code.

## Flags

In the context of regular expressions, "flags" are modifiers that you can append to the end of a regular expression pattern to control how the pattern matching behaves. Flags alter the behavior of the regular expression in various ways. Here are some commonly used flags:

1. i (Case Insensitive): When you include the i flag, the pattern matching becomes case-insensitive. This means the regex will match both uppercase and lowercase characters interchangeably. For example, /apple/i would match "apple," "Apple," "aPpLe," etc.

2. g (Global): The g flag indicates that the regular expression should search for all occurrences of the pattern in the input string, rather than stopping after the first match. This is especially useful when you want to find or replace all instances of a pattern in a string.

3. m (Multiline): The m flag changes the behavior of ^ and $. Normally, ^ matches the start of the input string, and $ matches the end of the input string. When the m flag is used, ^ and $ also match the start and end of each line within a multiline string.

4. s (Dot All): The s flag makes the dot . character match any character, including newline characters (\n). By default, . matches any character except newline.

5. u (Unicode): When the u flag is used, the regular expression operates in full Unicode mode. This is important for working with Unicode characters and character classes correctly.

6. (Sticky): The y flag (also known as the sticky flag) requires that a match must start at the current position in the target string. It's often used with the RegExp.prototype.exec() method for matching successive non-overlapping matches.

7. x (Extended): The x flag allows you to write regular expressions in a more readable and spaced-out format. It ignores whitespace and allows comments to be included. This is helpful for complex regex patterns that need to be well-documented.

Here's an example of using flags in a regular expression:

```JS

const pattern = /apple/gi; // Case-insensitive global search for "apple"
const input = 'I have an apple, and my friend has an Apple.';
const matches = input.match(pattern);
console.log(matches); // Outputs: ["apple", "Apple"]

```

In this example, the g flag is used for a global search, and the i flag makes the search case-insensitive, resulting in both "apple" and "Apple" being matched.

Flags are a powerful way to customize how your regular expressions behave, allowing you to control things like case sensitivity, global searches, multiline matching, and more to suit your specific needs when working with text and patterns.

## Methods of RegExp and String

Regular expressions (RegExp) and strings in JavaScript come with a variety of methods that allow you to work with and manipulate text using regular expressions. Here are some commonly used methods of both RegExp and String objects:

RegExp Object Methods:

1. test(): The test() method of a RegExp object checks if a given string matches the regular expression pattern and returns true or false accordingly.

```JS

const pattern = /apple/;
const text = 'I have an apple.';
const isMatch = pattern.test(text); // true

```

2. exec(): The exec() method searches for a match in a given string and returns information about the match, including the matched text and capturing groups. It returns null if there's no match.

```JS

const pattern = /apple/g;
const text = 'I have an apple, and my friend has an Apple.';
let match;
while ((match = pattern.exec(text)) !== null) {
  console.log(`Matched: ${match[0]}`);
}

```

3. toString(): The toString() method returns the regular expression pattern as a string.

```JS

const pattern = /apple/i;
const patternString = pattern.toString(); // "/apple/i"

```

String Object Methods with Regular Expressions:

1. match(): The match() method of a string allows you to find all matches of a regular expression pattern and returns an array of matches.

```JS

const text = 'I have 3 apples and 2 oranges.';
const pattern = /\d+/g;
const matches = text.match(pattern); // ["3", "2"]

```

2. search(): The search() method searches for a regular expression pattern within a string and returns the index of the first match. If no match is found, it returns -1.

```JS

const text = 'I have an apple and a banana.';
const pattern = /banana/;
const index = text.search(pattern); // 19 (index of "banana")

```

3. replace(): The replace() method allows you to replace matches of a regular expression pattern with a specified replacement string.

```JS

const text = 'I have an apple and a banana.';
const pattern = /apple|banana/g;
const newText = text.replace(pattern, 'fruit');
// "I have an fruit and a fruit."

```

4. split(): The split() method splits a string into an array of substrings using a regular expression pattern as the delimiter.

```JS

const text = 'apple,banana,orange';
const pattern = /,/;
const parts = text.split(pattern); // ["apple", "banana", "orange"]

```

5. matchAll(): The matchAll() method returns an iterator of all matches of a regular expression pattern in a string, including capturing groups.

```JS
const text = 'I have 3 apples and 2 oranges.';
const pattern = /(\d+) (\w+)/g;
const matches = [...text.matchAll(pattern)];
/*
[
  ["3 apples", "3", "apples"],
  ["2 oranges", "2", "oranges"]
]
*/

```

These methods provide powerful tools for working with regular expressions and strings in JavaScript. They allow you to search for, extract, and manipulate text based on complex patterns, making them useful for tasks like validation, data extraction, and text processing.

## Character classes

In regular expressions, "character classes" are a way to specify a group of characters that you want to match within a pattern. They allow you to match any one character from a set of characters. Character classes are enclosed in square brackets [...] and can be used to match single characters at a specific position in a string.

Here are some common ways to use character classes in regular expressions:

1. Literal Characters: You can specify individual characters within the character class to match those characters exactly. For example, [abc] matches either "a," "b," or "c."

```JS
const pattern = /[abc]/;
const text = 'apple';
const match = text.match(pattern); // "a" (first character that matches)

```

2. Ranges: You can specify a range of characters using a hyphen - within the character class. For example, [a-z] matches any lowercase letter from "a" to "z."

```JS

const pattern = /[a-z]/;
const text = 'Hello123';
const match = text.match(pattern); // "e" (first lowercase letter that matches)

```

3. Negation: By placing a caret ^ at the beginning of the character class, you can negate it to match any character that is not in the specified set. For example, [^0-9] matches any character that is not a digit.

```JS
const pattern = /[^0-9]/;
const text = 'Hello123';
const match = text.match(pattern); // "H" (first non-digit character that matches)

```

4. Escape Special Characters: Certain characters have special meanings in regular expressions, such as . or *. To match these characters literally, you can escape them using a backslash \ within the character class. For example, [\*+] matches either an asterisk (*) or a plus sign (+).

```JS

const pattern = /[\*+]/;
const text = '2 + 3 * 4';
const match = text.match(pattern); // "+" (first character that matches)

```

5. Character Class Shorthand: Some character classes have shorthand notations for common character sets. For example:

- \d matches any digit (equivalent to [0-9]).
- \w matches any word character (letters, digits, or underscore).
- \s matches any whitespace character (spaces, tabs, line breaks, etc.).

```JS

const pattern = /\d\s\w/;
const text = '2 a';
const match = text.match(pattern); // "2 a"

```

Character classes are useful for matching specific types of characters within a larger pattern. They provide a way to define sets of characters concisely and precisely in regular expressions, making it easier to perform tasks like data validation, text extraction, and pattern matching.

## Word boundary \b

In regular expressions, the \b (word boundary) is a metacharacter that represents a position in the string where a "word" begins or ends. It does not match any actual characters but rather a position between characters. Word boundaries are useful for precisely defining where you want to locate words within a text.

Here's how the \b word boundary works:

- \b matches at the beginning or end of a word, where a word is defined as a sequence of word characters (letters, digits, or underscores).
- \b does not consume any characters; it only checks the position between characters.
- \b is often used with other regular expression patterns to locate whole words.

Here are some examples of using \b:

1. Word Matching:

```JS

const pattern = /\bapple\b/;
const text = 'I have an apple and a pineapple.';
const match = text.match(pattern); // "apple"

```

In this example, the \b ensures that "apple" is matched as a whole word, and "pineapple" is not considered a match because it is part of a larger word.

2. Word Boundary in Replacement:

```JS

const text = 'I like apples.';
const pattern = /\bapples\b/;
const newText = text.replace(pattern, 'bananas');
// "I like bananas."
```

Using \b in replacement ensures that only the whole word "apples" is replaced and not a part of a larger word.

3. Finding Words in a Text:

```JS

const pattern = /\b\w{5}\b/g; // Matches 5-letter words
const text = 'Apple mango pear plum grape.';
const matches = text.match(pattern); // ["Apple", "grape"]

```

This example finds 5-letter words in the text using \b to ensure whole-word matches.

4. Word Boundary and Non-Word Characters:

```JS

const pattern = /\b\d+\b/;
const text = '123 apple 456';
const matches = text.match(pattern); // ["123", "456"]

```

\b allows matching whole numbers while ignoring the adjacent letters.

Word boundaries are particularly useful when you want to find, replace, or manipulate whole words within a text, such as when performing text processing, data extraction, or search operations where you need to consider word boundaries.

## Inverse Classes

In regular expressions, "inverse classes" or "negated character classes" are used to match any character that is not in a specified set of characters. You can create inverse classes by using the ^ (caret) character as the first character within a character class [...]. This negates the character class, causing it to match characters that are not in the set.

Here's how to create and use inverse classes:

1. Negating a Character Class:

To create an inverse class, place a ^ immediately after the opening square bracket [. For example, [^abc] matches any character that is not "a," "b," or "c."

```JS

const pattern = /[^abc]/;
const text = 'apple';
const match = text.match(pattern); // "p" (matches the first character that is not "a", "b", or "c")

```

2. Using Inverse Classes for Character Sets:

You can use inverse classes with character sets and ranges as well. For example, [^0-9] matches any character that is not a digit.

```JS
const pattern = /[^0-9]/;
const text = 'Hello123';
const match = text.match(pattern); // "H" (first character that is not a digit)

```

3. Using Inverse Classes with Shorthand Character Classes:

Inverse classes can also be used with shorthand character classes. For example, [\D] matches any non-digit character, and [\S] matches any non-whitespace character.

```JS

const pattern = /[\D]/;
const text = 'Hello123';
const match = text.match(pattern); // "H" (first non-digit character)

```

Inverse classes are handy when you need to match characters that don't belong to a specific set or when you want to exclude certain characters from a pattern. They are commonly used for data validation, input sanitization, and text processing tasks where you need to identify characters that should be excluded from a match.

## Spaces are regular characters

In regular expressions, spaces are indeed treated as regular characters by default. This means that a space character in a regular expression pattern matches a space character in the input text. For example, the regular expression pattern /apple banana/ will match the string "apple banana" exactly as it is, including the space character.

Here's an example of using a regular expression pattern with space characters:

```JS

const pattern = /apple banana/;
const text = 'I like apple banana.';
const match = text.match(pattern); // "apple banana"

```

In this example, the regular expression /apple banana/ is used to search for the string "apple banana" in the input text, and it matches it successfully.

If you want to match spaces or any other specific characters more flexibly, you can include those characters in your regular expression pattern. For example, if you want to match one or more spaces, you can use the \s+ pattern, where \s represents any whitespace character (including spaces, tabs, and line breaks), and + means one or more occurrences:

```JS

const pattern = /apple\s+banana/;
const text = 'I like apple     banana.'; // Multiple spaces between "apple" and "banana"
const match = text.match(pattern); // "apple     banana"

```

In this case, the regular expression matches "apple" followed by one or more whitespace characters (including spaces) and then "banana."

Remember that spaces and other characters in regular expressions can be combined and used creatively to match specific patterns in text, making regular expressions a powerful tool for text processing and pattern matching.
