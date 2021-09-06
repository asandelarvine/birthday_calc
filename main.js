const akansForm = document.getElementById('akansForm');
const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const calcBtn = document.getElementById('calculateButton');
const result = document.getElementById('reslut');


function calculateDayOfBirth(birthDate, gender){

    const dateOfBirth = new Date(birthDate);
    const dayOfTheWeek = dateOfBirth.getDay();

    const dayOfBirth = daysOfTheWeek[dayOfTheWeek];

    return akanNames.find(function(akan){
   return akan.dayOfBirth == dayOfBirth && akan.gender.toLowerCase() == gender.toLowerCase();
    });

}

calculateButton.addEventListener('click', function(){
    const akan = calculateDayOfBirth(akansForm.date.value, akansForm.gender.value );
    result.innerHTML = akan.name;
    alert(akan.name);
})


/*function getDateForDayInWeek(dayNumber) {
    dayNumber = Number(dayNumber);
    // Validate input
    if (dayNumber < 0 ||
        dayNumber > 7 ||
        parseInt(dayNumber) != dayNumber) {
      return; // undefined
    }
    let d = new Date();
    d.setDate(d.getDate() - d.getDay() + dayNumber);
    return d.getDate();
  }
  
  // eg
  console.log('Today is ' + 
    new Date().toLocaleString(undefined, {
      month:'long', weekday:'long', day:'numeric'
    })
  );*/