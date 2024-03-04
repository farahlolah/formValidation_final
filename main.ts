let nameCheck: number = 0;
let emailCheck: number = 0;
let cardNumberCheck: number = 0;

function checkName(): void {
  let name: string = (document.getElementById('name') as HTMLInputElement)
    .value;
  let regExp: RegExp = /[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\]/;

  if (/\d/.test(name)) {
    (document.getElementById('name') as HTMLElement).className = 'error';
    let error: string = 'Name cannot contain digits. Please re-try.';
    (document.getElementById('errorMessage1') as HTMLElement).innerHTML = error;
    nameCheck = 0;
  } else if (regExp.test(name)) {
    (document.getElementById('name') as HTMLElement).className = 'error';
    let error: string = 'Name cannot contain symbols. Please re-try.';
    (document.getElementById('errorMessage1') as HTMLElement).innerHTML = error;
    nameCheck = 0;
  } else if (name == '') {
    (document.getElementById('name') as HTMLElement).className = 'error';
    let error: string = 'Name cannot be blank. Please re-try.';
    (document.getElementById('errorMessage1') as HTMLElement).innerHTML = error;
    nameCheck = 0;
  } else {
    (document.getElementById('name') as HTMLElement).className = 'correct';
    let error: string = '';
    (document.getElementById('errorMessage1') as HTMLElement).innerHTML = error;
    nameCheck = 1;
  }
}

function checkEmail(): void {
  let email: string = (document.getElementById('email') as HTMLInputElement)
    .value;
  let regExp: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (email == '') {
    (document.getElementById('email') as HTMLElement).className = 'error';
    let error: string = 'Email cannot be blank. Please re-try.';
    (document.getElementById('errorMessage2') as HTMLElement).innerHTML = error;
    emailCheck = 0;
  } else if (!regExp.test(email)) {
    (document.getElementById('email') as HTMLElement).className = 'error';
    let error: string =
      'Email does not follow the correct format (ie johndoe@email.com). Please re-try.';
    (document.getElementById('errorMessage2') as HTMLElement).innerHTML = error;
    emailCheck = 0;
  } else {
    (document.getElementById('email') as HTMLElement).className = 'correct';
    let error: string = '';
    (document.getElementById('errorMessage2') as HTMLElement).innerHTML = error;
    emailCheck = 1;
  }
}

function checkNumber(): void {
  let cardNumber: string = (
    document.getElementById('cardNumber') as HTMLInputElement
  ).value;
  let regExp: RegExp = /[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\]/;
  let oddSum: number = 0;
  let evenSum: number = 0;
  let numToString: string[] = cardNumber.toString().split('');

  for (let i: number = 0; i < numToString.length; i++) {
    if (i % 2 === 0) {
      if (parseInt(numToString[i]) * 2 >= 10) {
        evenSum += parseInt(numToString[i]) * 2 - 9;
      } else {
        evenSum += parseInt(numToString[i]) * 2;
      }
    } else {
      oddSum += parseInt(numToString[i]);
    }
  }

  if (cardNumber == '') {
    (document.getElementById('cardNumber') as HTMLElement).className = 'error';
    let error: string = 'Card number cannot be blank. Please re-try.';
    (document.getElementById('errorMessage3') as HTMLElement).innerHTML = error;
    cardNumberCheck = 0;
  } else if (/[a-zA-Z]/.test(cardNumber)) {
    (document.getElementById('cardNumber') as HTMLElement).className = 'error';
    let error: string = 'Card number cannot contain letters. Please re-try.';
    (document.getElementById('errorMessage3') as HTMLElement).innerHTML = error;
    cardNumberCheck = 0;
  } else if (regExp.test(cardNumber)) {
    (document.getElementById('cardNumber') as HTMLElement).className = 'error';
    let error: string = 'Card number cannot contain symbols. Please re-try.';
    (document.getElementById('errorMessage3') as HTMLElement).innerHTML = error;
    cardNumberCheck = 0;
  } else if ((oddSum + evenSum) % 10 != 0) {
    (document.getElementById('cardNumber') as HTMLElement).className = 'error';
    let error: string = 'Card number is not valid. Please re-try.';
    (document.getElementById('errorMessage3') as HTMLElement).innerHTML = error;
    cardNumberCheck = 0;
  } else if (cardNumber.length < 16) {
    (document.getElementById('cardNumber') as HTMLElement).className = 'error';
    let error: string =
      'Card number cannot be less than 16 numbers. Please re-try.';
    (document.getElementById('errorMessage3') as HTMLElement).innerHTML = error;
    cardNumberCheck = 0;
  } else {
    (document.getElementById('cardNumber') as HTMLElement).className =
      'correct';
    let error: string = '';
    (document.getElementById('errorMessage3') as HTMLElement).innerHTML = error;
    cardNumberCheck = 1;
  }
}

function sendMail(): void {
  if (nameCheck == 1 && emailCheck == 1 && cardNumberCheck == 1) {
    let email: string = (document.getElementById('email') as HTMLInputElement)
      .value;
    let name: string = (document.getElementById('name') as HTMLInputElement)
      .value;
    let cardNumber: string = (
      document.getElementById('cardNumber') as HTMLInputElement
    ).value;
    let subject: string = 'New Booking!';
    let mailtoLink: string =
      'mailto:farahwael158@gmail.com?subject=' +
      subject +
      '&body=' +
      email +
      ' - ' +
      name +
      ' - ' +
      cardNumber;
    window.location.href = mailtoLink;
  } else {
    (document.getElementById('myForm') as HTMLFormElement).addEventListener(
      'submit',
      function (e) {
        e.preventDefault();
      }
    );
  }
}
