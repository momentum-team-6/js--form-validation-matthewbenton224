console.log('Add validation!');

const form = document.querySelector("#parking-form")

function displayCost() {
    let displayDiv = document.querySelector("#total")
    displayDiv.innerHTML = "Your total cost is ${amount}"
    let numberOfDays = document.querySelector("#days").value
    let today = new Date()
    let amount = 0
    console.log("amount 0" + amount)

    for (let i=0; i < numberOfDays; i++) {
        let day = new Date()
        day.setDate(today.getDate() + i)
        // weekend cost
    if (day.getDay() === 0 || day.getDay() === 6) {
        amount += 7
        // weekday cost
    } else {
        amount += 5
    }
}
console.log("amount total" + amount)
}

form.addEventListener("submit", function(event) {
    event.preventDefault()
    validate()
    displayCost()
    debugger
})

//function calculateCost() {
//    let numberOfDays = document.querySelector("#days").value
//    let today = new Date()
//    let amount = 0
//    console.log("amount 0" + amount)

 //   for (let i=0; i < numberOfDays; i++) {
//        let day = new Date()
//        day.setDate(today.getDate() + i)
//        // weekend cost
//    if (day.getDay() === 0 || day.getDay() === 6) {
//        amount += 7
//        // weekday cost
//    } else {
//        amount += 5
//    }
//}
//console.log("amount total" + amount)
//displayCost(amount)
//}


function validateCardNumber(number) {
   var regex = new RegExp("^[0-9]{16}$");
    if (!regex.test(number))
        return false;

    return luhnCheck(number);
}

function luhnCheck(val) {
    var sum = 0;
    for (var i = 0; i < val.length; i++) {
        var intVal = parseInt(val.substr(i, 1));
        if (i % 2 == 0) {
            intVal *= 2;
            if (intVal > 9) {
                intVal = 1 + (intVal % 10);
            }
        }
        sum += intVal;
    }
    return (sum % 10) == 0;
}

function validate() {
    let creditCardNum = document.querySelector("#credit-card").value
    validateCardNumber(creditCardNum)
}

var reCvv = new RegExp("^[0-9]{3}$")
//var ReDays = new RegExp("^[0-9]{1,2}$")

var reDays = new RegExp("^([1-9]|[`1] [0-9]|30)$")

var reCarYear = new RegExp("^(19[0-9][1-9]|200[0-9]|201[0-9]|202[01]$)")

var reExpDate = new RegExp("^(0[1-9]/2[1-9]1[1-2]/2[0-9])$")

reCvv.addEventListener("input", function(event) {
    if (reCvv.test(cvv.value)===false) {
        cvv.setCustomValidity("3-digit code required")
    }
    else {
        cvv.setCustomValidity("")
    }
})
