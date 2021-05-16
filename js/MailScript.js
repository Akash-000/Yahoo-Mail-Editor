window.onload = function () {
    document.getElementById("Editor").focus();
};

function ShowCcBcc()
{
    let CcBcc = document.getElementsByClassName("Toggle");
    for(let i=0;i<CcBcc.length; i++)
    {
        if(CcBcc[i].style.display === "none")
        {
            CcBcc[i].style.display = "block";
        }
        else
        {
            CcBcc[i].style.display = "none";
        }
    }
}

function addSemiColon(value) {
    value += ';';
    return value;
}

document.getElementById("ReceiverMail").addEventListener("keydown", MyFunctionTo);
function MyFunctionTo(event) {
    if (event.keyCode === 9 || event.keyCode === 32) {
        event.preventDefault();
        let ToValue = document.getElementById("ReceiverMail").value;
        ToValue = addSemiColon(ToValue);
        document.getElementById("ReceiverMail").value = ToValue;

    }
}

document.getElementById("CC").addEventListener("keydown", MyFunctionCC);
function MyFunctionCC(event) {
    if (event.keyCode === 9 || event.keyCode === 32) {
        event.preventDefault();
        let ToValue = document.getElementById("CC").value;
        ToValue = addSemiColon(ToValue);
        document.getElementById("CC").value = ToValue;

    }
}
document.getElementById("BCC").addEventListener("keydown", MyFunctionBCC);
function MyFunctionBCC(event) {
    if (event.keyCode === 9 || event.keyCode === 32) {
        event.preventDefault();
        let ToValue = document.getElementById("BCC").value;
        ToValue = addSemiColon(ToValue);
        document.getElementById("BCC").value = ToValue;
    }
}

function ValidateEmail(inputText) {
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (inputText.match(mailformat)) {
        return true;
    }
    else 
    {
        alert("Invalid Email : " + inputText);
        return false;
    }
}
function ValidateAll(inputText)
{
    let isValid = true;
    let MailList = inputText.split(';');
    if(MailList[MailList.length -1] === "")
    {
        MailList.pop();
    }
    for(let i = 0; i < MailList.length;i++)
    {
        isValid = ValidateEmail(MailList[i]);
        if(isValid == false)
        {
            break;
        }
    }
    return isValid;
}

function ValidateTo()
{
    let isValid = true;
    let ToText = document.getElementById("ReceiverMail").value;
    if(ToText.length === 0)
    {
        alert("Please Provide Receiver Mail ID");
        return false;
    }
    isValid = ValidateAll(ToText);
    return isValid;
}
function ValidateCC()
{
    let isValid = true;
    let CcText = document.getElementById("CC").value;
    if(CcText.length === 0)
    {
        return isValid;
    }
    isValid = ValidateAll(CcText);
    return isValid;
}
function ValidateBCC()
{
    let isValid = true;
    let BccText = document.getElementById("BCC").value;
    if(BccText.length === 0)
    {
        return isValid;
    }
    isValid = ValidateAll(BccText);
    return isValid;
}
function SendMessage()
{
    let SubText = document.getElementById("SubText").value;
    if (SubText.length === 0)
    {
        alert("Please Provide A Subject To Mail");
    }
    if(ValidateTo() && ValidateCC() && ValidateBCC() && SubText.length!=0)
    {
        alert("Message Sent !!!");
    }
}
function BoldText() {
    document.execCommand('bold', false, null);
    const boldText = document.getElementById("boldText");
}
function ItalicText() {
    document.execCommand('italic', false, null);
}


