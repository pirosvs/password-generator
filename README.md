# password-generator

## Description
![Short random password with many character sets example] (https://ibb.co/Ss8D1d5)
![Long random password using max length example] (https://ibb.co/rxy07dJ)
![Password outside length bounds error alert] (https://ibb.co/5kPPwnz)

This project generates a randomized password based on user inputs determining which characters to use and the length of the password. This allows for the user to quickly and easily generate a new, secure password through interacting with a few simple questions. Data security is of ever increasing concern, as has consistently been the case for years. Especially with the popularization of password managers, randomized passwords are increasingly useable even for people who will not go out of their way to invest in better data security. Additionally, thinking of a truly random password is harder than one might image, as humans have a tendency to seek out patterns and create memorable passwords that, while more secure than typing a pet name and adding 1 to the end, do not reach the greatest potential for security. This project acknowledges that need and rise in demand for secure, randomized passwords and offers one method of creating these passwords. Finally, this project allows the exclusion of certain characters so that the user can customize which special characters they prefer, are more likely to remember, or are able to type at the time of creation.

Skills used in this project include starting HTML and CSS, as well as JavaScript. This project uses a function with nested conditional statements and a for loop in order to create a password within the parameters of the user's input choices. Randomization function has been changed to take an argument to make it more globally useable, as below.

```
function randomChoice(options) {
  console.log(options);
  return options[Math.floor(Math.random() * options.length)];
}
```

Additionally, with the use of an empty array to which selected character sets are concatenated, we can consolidate our main conditional into one for loop as opposed to many. See below:

```
var selectedChoice = [];
```

```
var lowCase = window.confirm("Would you like to include lower case letters?");
    if (lowCase) {
      selectedChoice = selectedChoice.concat(charLowCase);
    }
```

Thus, only the selected character sets have the values of their arrays put into one larger array, and specific boolean values determining which sets are used need not be checked, we only need to confirm that at least one set has been chosen.

Main password generation function makes use of alerts to let the user know password requirements and allow user to exit generation, a prompt to allow user to mostly independently determine password length, and a series of confirms to determine which types of characters to include.

## Credits
Credit to the Trilogy Education in tandem with UCB coding bootcamp for the code for the design of the page. Credit as well to learning assistant d.kang109 for helping me figure out why the password was returning as html, and to my housemate Lyra for helping me not write like 16 else if's by showing me I didn't need to provide every possible match of choices, as well as for parameterizing my randomization function.

## License
This project falls under the MIT license.


## Author
Damien Armstrong can be found on:
Linkedin (https://www.linkedin.com/in/damien-armstrong-412319138/)
Github (https://github.com/pirosvs)