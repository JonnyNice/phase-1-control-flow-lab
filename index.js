function scuberGreetingForFeet(poolDepth){
  let rideCost
    if (poolDepth <= 400)
      {rideCost = 'This one is on me!'}
      else if (poolDepth < 2000) 
        {rideCost = 'That will be twenty bucks.'}
          else if (poolDepth <= 2500)
            {rideCost = 'I will gladly take your thirty bucks.'} 
              else if (poolDepth >= 2501)
               {rideCost = 'No can do.'} 
  return rideCost
  
}

function ternaryCheckCity(city){
  let response;
  city === "NYC" ? response = "Ok, sounds good." : response = "No go.";
  return response;
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}
