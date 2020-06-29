function getName() {
    return document.getElementById("cname").value;
}
function getMail() {
    return document.getElementById("mail").value;
}
function getNo() {
    return document.getElementById("number").value;
}

function getComment() {
    return document.getElementById("comment").value;
}

function validateForm() {
    var custName=getName();
    var custMail=getMail();
    var custNo=getNo();
    var custComment=getComment();


    alert("Thank you "+custName+" for giving us a feedback! Your mail is "+custMail+" and the telephone number is "+custNo+". We value your comment "+custComment);
}