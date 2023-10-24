var currentTime = new Date();

function calculateAge(yearBorn) {
    var age = currentTime.getFullYear() - yearBorn;
    return age;
}

function main() {
    var yourName = prompt("Enter you name: ");
    console.log(yourName);

    var yearBorn = prompt("Enter the year you were born: ");
    age = calculateAge(yearBorn);
    console.log("Tuoi cua ban la: " + age);

    var gender = prompt("Are you male or female? (male or female): ")
    switch (gender) {
        case "male":
            console.log("You are a man");
            break;
        case "female":
            console.log("You are a woman");
            break;
        default:
            console.log("Wrong gender input, underfine!")
    }

    var is_close = confirm("Do you want to continue?")
}
main()