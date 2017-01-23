# JS/DOM Evaluation Challenge

This is an open-book challenge; you may use any notes and Internet searches. You can use any individual research methods you’d like. However, this is intended as an evaluation of your current abilities. As such, no assistance from instructors or peers is allowed. Questions about concepts and code execution are expected to be answered through your own knowledge and research skills. This evaluation is small in scope and is estimated to take current Sigma students a brief amount of time. You will have three hours to demonstrate what you can build or to complete the application.

**Good luck!**

## Instructions

1. Download or clone this repo.
2. Build your application.
3. Turn in as instructed below.

Your task is to build a small web application using **HTML**, **CSS**, and **JavaScript with AngularJS**. Please do not do anything outside of the scope outlined here.

You have 3 hours to complete the evaluation.

## Application Requirements

* Build an application that contains an array of four person objects using the following information:
  - Paul, Cambridge, 39
  - Lynda, Richfield, 18
  - Cindy, Cambridge, 42
  - Rudolph, Richfield, 1
* Each person object should have properties for name, birthplace, and age.
* Each person should be represented on the DOM as a button inside of a div.
* Clicking a person's button will change the same text element on the DOM to read like: "Name was born in birthplace and is age years old." where the name, birthplace, and age are the values of the properties of the clicked-on person.
* Create a button on the DOM that, when clicked, calculates the total age of all of the people based on the following criteria:
  - Only count people 18 or older and only then if they were also born in Cambridge.
  - Display the total of these ages on the DOM.

**NOTE: All output must be on the DOM. NOT an alert or console.log()**

### Styling

Each person listing on the DOM needs to be styled as such:

* A 1 pixel border colored magenta
* 10 pixels of margin on all sides
* 6 pixels of padding on all sides.

They **Do Not** have to appear on the same horizontal row as shown.

## Example
![Example](example.png)

## Completing the Evaluation

When complete, create a new Github repo with your solution. Email a link to this repo to `sigma-instructors@primeacademy.io`
