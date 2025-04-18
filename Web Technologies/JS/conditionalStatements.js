console.log("PERCENTAGE");

let percentage = 55;

console.log("- BY IF-ELSE CONDITION");

if (percentage > 90) {
    console.log("A+");
} else if (percentage >= 80 && percentage <= 90) {
    console.log("A");
} else if (percentage >= 70 && percentage <= 80) {
    console.log("B");
} else if (percentage >= 60 && percentage <= 70) {
    console.log("C");
} else if (percentage >= 50 && percentage <= 60) {
    console.log("D");
} else if (percentage >= 40 && percentage <= 50) {
    console.log("E");
} else {
    console.log("F");
}

console.log("- BY SWITCH CONDITION");

switch (true) {
    case (percentage > 90):
        console.log("A+");
        break;

    case (percentage >= 80 && percentage <= 90):
        console.log("A");
        break;

    case (percentage >= 70 && percentage <= 80):
        console.log("B");
        break;

    case (percentage >= 60 && percentage <= 70):
        console.log("C");
        break;

    case (percentage >= 50 && percentage <= 60):
        console.log("D");
        break;

    case (percentage >= 40 && percentage <= 50):
        console.log("E");
        break;

    default:
        console.log("F");
}

console.log();

console.log("DAY")

let day = 3;

console.log("- BY IF-ELSE CONDITION");

if (day == 1) {
    console.log("MONDAY");
} else if (day == 2) {
    console.log("TUESDAY");
} else if (day == 3) {
    console.log("WEDNESDAY");
} else if (day == 4) {
    console.log("THURSDAY");
} else if (day == 5) {
    console.log("FRIDAY");
} else if (day == 6) {
    console.log("SATURDAY");
} else if(day==7){
    console.log("SUNDAY");
} else{
    console.log("PLEASE ENTER VALID NUMBER BETWEEN 1 TO 7")
}

console.log("- BY SWITCH CONDITION");

switch (day) {
    case 1:
        console.log("MONDAY");
        break;

    case 2:
        console.log("TUESDAY");
        break;

    case 3:
        console.log("WEDNESDAY");
        break;

    case 4:
        console.log("THURSDAY");
        break;

    case 5:
        console.log("FRIDAY");
        break;

    case 6:
        console.log("SATURDAY");
        break;

    case 7:
        console.log("SUNDAY");
        break;

    default:
        console.log("PLEASE ENTER VALID NUMBER BETWEEN 1 TO 7");
}