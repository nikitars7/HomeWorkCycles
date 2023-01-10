'use strict'

const askFunc = () => {
   let personAge = prompt('Fill in your age', '');
   let personCity = prompt('What city have u inhabit? =)', '');
   let personSport = prompt('What is your favourite kind of sport ?', '');

   if (personAge === null) {
      personAge = 'You didn`t log your age';
   }
   else if (personAge.trim() === '') {
      personAge = 'You didn`t log your age';
   }
   else {
      personAge = `Your age is ${personAge}`;
   }

   switch (personCity) {
      case 'Kyiv': {
         personCity = 'You live in the capital of Ukraine '
         break;
      }
      case 'Washington': {
         personCity = 'You live in the capital of USA '
         break;
      }
      case 'London': {
         personCity = 'You live in the capital of GreatBritain '
         break;
      }
      case null:
      case '': {
         personCity = 'You didn`t log your city'
         break;
      }
      default: {
         personCity = `You live in ${personCity}`
         break;
      }
   }

   switch (personSport) {
      case 'strongman': {
         personSport = 'Great! Do you want to be like Oleksei Novikov?';
         break;
      }
      case 'boxing': {
         personSport = 'Great! Do you want to be like Usik?';
         break;
      }
      case 'armwrestling': {
         personSport = 'Great! Do you want to be like Levan ?';
         break;
      }
      case null:
      case '': {
         personSport = 'You didn`t log your favourite Sport';
         break;
      }
      default: {
         personSport = `${personSport} is so exciting`;
         break;
      }
   }

   alert(`
   ${personAge}
   ${personCity}
   ${personSport}`
   );
}

askFunc();



