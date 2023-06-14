function scuberGreetingForFeet(distance){
  // Write your code here!
  let message;
 
  if (distance <= 400) {
    message = 'This one is on me!';
  }

  else if ( distance >= 2000 && distance < 2500) {
    message = 'I will gladly take your thirty bucks.';
  }
  else if (distance > 2500) {
    message = 'No can do.';
  }
  return message;
}


console.log(scuberGreetingForFeet(2000));

function ternaryCheckCity(city){
  // let ternaryCheckCity = city ? "NYC" : "!!NYC";
  // return  "Ok, sounds good.";
  // return "No go.";

  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

// function switchOnCharmFromTip(passengerGenerosity)
  // Write your code here!
//   let passengerFeedBack;
//   switch (passengerGenerosity) {
//     case 1:
//       passengerFeedBack = "Thank you so much."
//       break;
//       case 2:
//         passengerFeedBack = "Thank you."
//         break;
//         default:
//           passengerFeedBack = "Bye." ;


//   }
//   return passengerFeedBack;
// }

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
}