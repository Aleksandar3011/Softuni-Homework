function passwordValidator(password) {
  let isLengthValid = isLengthEnough(password);
  let isLetterAndDigitsValid = isLetterAndDigits(password);
  let isHavigAtLeatTwoDigitsValid = isHavigAtLeastTwoDigits(password);

  if (isLengthValid && isLetterAndDigitsValid && isHavigAtLeatTwoDigitsValid) {
    console.log(`Password is valid`);
  } else {
    if (!isLengthValid) {
      console.log(`Password must be between 6 and 10 characters`);
    }
    if (!isLetterAndDigitsValid) {
      console.log(`Password must consist only of letters and digits`);
    }
    if (!isHavigAtLeatTwoDigitsValid) {
      console.log(`Password must have at least 2 digits`);
    }
  }

  function isLengthEnough(passwordString) {
    return passwordString.length >= 6 && passwordString.length <= 10;
  }

  function isLetterAndDigits(password) {
    for (let currCharIndex of password) {
      let currCharr = currCharIndex.charCodeAt(0);
      if (
        !(currCharr >= 48 && currCharr <= 57) &&
        !(currCharr >= 65 && currCharr <= 90) &&
        !(currCharr >= 97 && currCharr <= 122)) 
        {
        return false;
      }
    }
    return true;
  }

  function isHavigAtLeastTwoDigits(password) {
    let count = 0;
    for (let currIndex of password) {
      let currCharrA = currIndex.charCodeAt(0);
      if (currCharrA >= 48 && currCharrA <= 57) {
        count++;
      }
    }
    return count >= 2 ? true : false;
  }

}

passwordValidator("MyPass123");
