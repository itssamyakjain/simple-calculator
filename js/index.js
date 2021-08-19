var str = ""  // input is stored as string
const userinput = document.getElementById('userinput');  // input is a single character at a time on one click  
const output = document.getElementById('output');

function calcad(value){
    str+=value;
    userinput.value = str;
}

// function works similar as backspace
function removeCharacter(){
    str=str.substring(0,str.length-1);
    userinput.value=str;
}

// computes the valid expressions
function execute(){
    if(str.length==0 || str==""){
        alert("Needs an input");
        return;
    }
    try{
        ans=eval(str);                //evaluates the input string
        output.value=ans;
    }
    catch(err){
        alert("Invalid Input!")
    }
}

// reset the values to empty string
function reset(){
    userinput.value="";
    output.value="";
    str="";
}