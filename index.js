function saturdayFun(activity='roller-skate'){
    return(`This Saturday, I want to ${activity}!`);
}
saturdayFun();

function mondayWork(toDoList='go to the office'){
    return (`This Monday, I will ${toDoList}.`);
}
mondayWork();

function wrapAdjective(special="*"){
    let greet = "You are";
      return function(greet2="a hard worker"){
          return `${greet} ${special}${greet2}${special}!`;
        }
    };
wrapAdjective("*");
wrapAdjective("||")("a dedicated programmer");

// Your code here
