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
  • The radio button inputs may be modified by entering whatever desired number in the input value and reflecting such in the input content, e.g.:

  ``` <input type="radio" name="duration" value="25" id="radio3">
      <label for="radio3">25 min</label>```

  In this example, radio button 3 will register 25min on the countdown clock instead of its 15min default setting. Though it will function, the clock code will not format any value greater than 59mins to reflect hours, days, et cetera. It will also produce undesirable behavior in not showing more than two digits in either minute or second text fields.