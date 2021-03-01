let valueBeforeAction = 0;
var actionToBePerformed = "";



// document.getElementById("calcArea").value = 0;

// reset = () => {
//     document.getElementById("calcArea").value = 0
//     document.getElementById("history").value = ""
// }

getHistory = () => {
    return document.getElementById("history").value;
}

getResult = () => {
    return document.getElementById("result").value;
}

printResult = (num) => {
    document.getElementById("result").value = num;
}

printHistory = (num) => {
    document.getElementById("history").value = num;
}

const numberElements = document.getElementsByClassName("number");
for (let index = 0; index < numberElements.length; index++) {
    const element = numberElements[index];
    element.addEventListener('click', function(){
        let output = getResult();
        output += this.id
        printResult(output);
    })
    
}

const operatorElements = document.getElementsByClassName("operator");
for (let index = 0; index < operatorElements.length; index++) {
    const element = operatorElements[index];
    element.addEventListener('click', function(){

        let history = getHistory();
        let output = getResult();

        if(this.id == "clear"){
            printResult("");
            printHistory("");
        }
        else if(this.id == "del"){
            const output = getResult();
            let result = output.toString();
            result = result.substr(0, result.length-1);
            printResult(result)
        }
        else if(this.id == "="){

            history += output;
            const finalResult = eval(history);
            printHistory('')
            printResult(finalResult);
        }
        else{
            let value = history + output;
            if(value != ""){
                if(isNaN(value[value.length - 1])){
                    value = value.substr(0, value.length - 1);
                }
            }
            value += this.id;
            
            printHistory(value);
            printResult("");
        }
    })
    
}



// ##############################################################################################

const addValue = (value) => {
    const isAction = isAnAction(value)
    if(isAction != "number"){
        actionToBePerformed = isAction;
        const currentValue = getCurrentValue();
        switch (actionToBePerformed) {
            case 'add':
                const finalValueForAddition = doAddition(currentValue);
                valueBeforeAction = finalValueForAddition;
                setHistDisplayValue(currentValue + " + "); // update the hist
                setCurrentValue(finalValueForAddition)
                break;
    
            case 'subtract':
                const finalValueForSubtraction = doSubtraction(currentValue);
                valueBeforeAction = finalValueForSubtraction;
                setHistDisplayValue(currentValue + " + "); // update the hist
                setCurrentValue(finalValueForSubtraction)
                break;
            
            case 'division':
                doDivision(currentValue);
                break;
    
            case 'multiply':
                doMultiplication(currentValue);
                break;
        }
    }
    else if(isAction == "number"){
        const currentValue = getCurrentValue();
        const addedValue = +currentValue == 0 ? value : currentValue + value; 
        setCurrentValue(addedValue);
    }
}

doAddition = (value) => {
    const finalValue = valueBeforeAction + +value;
    return finalValue;
}

doSubtraction = (value) => {
    const finalValue = valueBeforeAction - (+value);
    return finalValue;
}

addAction = () => {
    actionToBePerformed = isAnAction(value)
}

getCurrentValue = () => {
    const currentValue = document.getElementById("calcArea").value;
    return currentValue;
}

setHistDisplayValue = (value) => {
    document.getElementById("history").value += value
}
setCurrentValue = (currentValue) => {
    document.getElementById("calcArea").value = +currentValue;
}

isAnAction = (key) => {
    let action = "";
    switch (key) {
        case '+':
            action = "add";
            break;

        case '-':
            action = "subtract";
            break;
        
        case '/':
            action = "division";
            break;

        case '*':
            action = "multiply";
            break;
    
        default:
            action = "number";
            break;
    }

    return action;
}

// document.getElementById("one").addEventListener("click",()=>{
//     document.getElementById("calcArea").value=output+"1";
//     output=document.getElementById("calcArea").value
//     console.log(output)
// })
// document.getElementById("two").addEventListener("click",()=>{
//     document.getElementById("calcArea").value=output+"2";
//     output=document.getElementById("calcArea").value
//     console.log(output)
// })
// document.getElementById("three").addEventListener("click",()=>{
//     document.getElementById("calcArea").value=output+"3";
//     output=document.getElementById("calcArea").value
//     console.log(output)
// })
// document.getElementById("four").addEventListener("click",()=>{
//     document.getElementById("calcArea").value=output+"4";
//     output=document.getElementById("calcArea").value
//     console.log(output)
// })
// document.getElementById("five").addEventListener("click",()=>{
//     document.getElementById("calcArea").value=output+"5";
//     output=document.getElementById("calcArea").value
//     console.log(output)
// })
// document.getElementById("six").addEventListener("click",()=>{
//     document.getElementById("calcArea").value=output+"6";
//     output=document.getElementById("calcArea").value
//     console.log(output)
// })
// document.getElementById("seven").addEventListener("click",()=>{
//     document.getElementById("calcArea").value=output+"7";
//     output=document.getElementById("calcArea").value
//     console.log(output)
// })
// document.getElementById("eight").addEventListener("click",()=>{
//     document.getElementById("calcArea").value=output+"8";
//     output=document.getElementById("calcArea").value
//     console.log(output)
// })
// document.getElementById("nine").addEventListener("click",()=>{
//     document.getElementById("calcArea").value=output+"9";
//     output=document.getElementById("calcArea").value
//     console.log(output)
// })
// document.getElementById("zero").addEventListener("click",()=>{
//     document.getElementById("calcArea").value=output+"0";
//     output=document.getElementById("calcArea").value
//     console.log(output)
// })
// document.getElementById("decimal").addEventListener("click",()=>{
    
//     for (let index = 0; index < value.length; index++) {
//         console.log(value+"updated value")
//         var dec="."
//         console.log(!(!value.search(dec))+" rev")
//         if (!(!value.search(dec))) 
//         {
//             console.log("inside if")
//             alert("Please \n Try to enter a real number")
//             break;
            
//         } 
//         else 
//         {
//             console.log("inside else")
//             document.getElementById("calcArea").value=value+".";
//             value=document.getElementById("calcArea").value
//             document.getElementById("history").value=value;
//             break
            
//         }     
//     }
// })
// document.getElementById("AC").addEventListener("click",()=>{
//     document.getElementById("calcArea").value=""
//     document.getElementById("history").value=""
// })

// document.getElementById("addition").addEventListener("click",()=>{
//     document.getElementById("history").value=output+"+"
//     hist=document.getElementById("history").value
//     document.getElementById("calcArea").value=""
//     output=document.getElementById("calcArea").value
//     hist.toString()
//     hist=hist.substr(0,hist.length-1)
//     console.log(hist+" number hist")
//     console.log (Number(output)+Number(hist)+" this")
//     console.log(output+" fianal output")
// })