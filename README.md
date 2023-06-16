# ☑ To do list
You can manage your to-do list in three tabs.

## 📝 Description.
* The user enters a value.
Clicking the * + button adds a new to-do.
* Clicking the delete button deletes the to-do.
* Clicking the check button underlines the end of the to-do.
* 1. true || false at the moment of clicking the check button.
* 2. if true, it is considered finished and underlined.
* 3. if false, consider it in progress and leave it as is.
* When you click the not done, done tab, the underbar moves.
* ALL, NOT DONE, DONE Shows only the items of each. 

### ✔️ Things to remember
```sh
function randomIDGenerate() {
  return '_' + Math.random().toString(36).substr(2, 9);
}
```
This code is responsible for generating a unique ID by combining the _ character with a randomly generated string.

* Math.random(): The Math.random() function returns a random number greater than 0 and less than 1.

* toString(36): The toString(36) method converts a number to a hexadecimal number. Here, hexadecimal takes the numbers 0 through 9 and the alphabet from A through Z.

* substr(2, 9): The substr(2, 9) method extracts a portion of a string. Here, it extracts 9 characters from index 2 of the generated hexadecimal string.
_ + : Adds the _ character to the front of the generated string.

As a result, the code above generates a unique ID by combining the _ character with a randomly generated string of 9 digits of numbers and alphabets. This allows you to give each to-do item a unique identifier. For example, an ID of the form _j7df4gh9k might be generated.

### 📌 Key behavior:

##### addTask()
This function is called when the user enters a to-do in the input field and clicks the "Add" button or presses the Enter key. It creates the entered to-do as an object and adds it to the taskList array, then initializes the input field and calls the render() function to re-render the to-do list.
##### render()
Renders the to-do list with the to-do list filtered according to the currently selected mode. Each to-do is generated as an HTML string, and completed to-dos are underlined.
##### toggleComplete(id)
Function called when the Complete button is clicked. It toggles the isComplete property of the to-do object matching the passed ID to change its completion status, then calls the filter() function to update the filtered list and the render() function to reflect the changes.
##### deleteTask(id)
The function that is called when the delete button is clicked. It removes the to-do object matching the passed ID from the taskList array, then calls the filter() function to update the filtered list and calls the render() function to reflect the changes.
##### filter(event)
This function is called when a tab is clicked. It updates the mode of the selected tab and adjusts the position of the underline, then updates the filterList array accordingly and calls the render() function to reflect the changes.
