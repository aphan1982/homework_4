# 04 Web APIs: Code Quiz

<!-- //PURPOSE & FUNCTIONALITY OF APPLET// -->
  This applet enables a user to test his or her knowledge of web APIs and other coding fundamentals. Each answer is evaluated as correct or correct or incorrect within a specific timeframe. A final score is registered within local storage.

  The styling and general format has not changed from the original "Develop" homework assignment I received. When a visitor clicks the red "Generate Password" button,

  ![a relative link](./Assets/images/generate_btn_arrow.png "red \"Generate Password\" button")

  a series of prompt widows will appear, first verifying that the user selects an appropriate number value for the final password length (a range from 8-128 characters), then asking what characters should be allowable in the final password--lowercase,

  ![a relative link](./Assets/images/lowercase_select.png "lowercase example")
  
  uppercase,

  ![a relative link](./Assets/images/uppercase_select.png "uppercase example")
  
  numeric,

  ![a relative link](./Assets/images/numeric_select.png "numeric example") 
  
  and special character

  ![a relative link](./Assets/images/special_char_select.png "special character example")
  
  values. Once completed, the applet will display a randomly generated password meeting the user's criteria.
  
  ![a relative link](./Assets/images/final_password.png "final password example")

<!-- //NOTES// -->
  • During the creation of the listening event for the button element, I wished to trigger a prompt that would allow a selection of one or more options--a check-box scenario--rather than the typical, binary prompt choice. A little research showed that this would be achievable via jQuery; therefore, I decided to abandon this approach in favor of the "series of prompts" mentioned in the assignment instructions.

  • There are a couple areas that I'm sure that I could trim the fat to make the code cleaner and more efficient. One of these was the creation of arrays--"libraries"--from which possible characters could be drawn:

  ```
  var majCharArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  ```

  rather than a .split() method. I didn't feel this to make too much of a difference to the overall functionality of the code and saw an increased potential in potential bug creation. Another was the choice to create an object to store all the user's selection criteria, just to convert it back into a string to be passed back to the DOM:

  ```
  // If user selection fails to conform to acceptable password criteria, this will not run:
    if (lengthSelectIsValid) {
    var numArray = new Array(lengthSelect);
    console.log(numArray);
    }
    // Runs incrementally down each character position and randomly assigns value from the total array of possible characters:
    var i;
    for (i = 0; i < numArray.length; i++) {
      numArray[i] = possibleChars[Math.floor(Math.random() * possibleChars.length)];
      console.log(numArray);
    }
    // Converts resultant array to string that can be passed back to DOM:
    password = numArray.join('');
    console.log(password);
    console.log(typeof(password));
    passwordText.value = password;
  }
  ```

  In this case I opted to err on the side of keeping things array-based, since that was how I structured my libraries from which I was drawing my potential characters.

  Overall, I felt that the experience of this applet would be much better had it relied on radio buttons, text area fields, or checkboxes rather than prompts; however, the spirit of the assignment was to navigate through prompts.