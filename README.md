# Password Generator Starter Code
I started by making arrays of each character type 
Added window prompts to select weither or not to include each character type in the generated password
if a character type was selected it is added to an empty array named allChar
then I took the allchar array and put it in a for loop that would run for as long as the generated password array was less than the number of characters entered in the prompt
in the for loop it would pick a random index number from the allChar array and push it into the generatedPasswordArr
then to ensure that at least one of each selected charactertype was included in the generatedPasswordArr I created a garanteedChars array that would pull a random character out of each selected character type selected.
I then spliced that into the generatedPasswordArr so it would overwrite the begining of the array
the generatedPasswordArr will then display in the textbox when the generate password button is pressed.
I couldn't quite get the if statment to work to ensure that at least one character type was selected
here is a link to the live application: https://jaydencowley.github.io/friendly-parakeet/