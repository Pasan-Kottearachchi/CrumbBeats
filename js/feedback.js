function getName1() {
    return document.getElementById("cname1").value;
}
function getName2() {
    return document.getElementById("cname2").value;
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
    var custName1=getName1();
    var custName2=getName2();
    var custMail=getMail();
    var custNo=getNo();
    var custComment=getComment();


    alert("Thank you "+custName1+" "+custName2+" for giving us a feedback! Your mail is "+custMail+" and the telephone number is "+custNo+
        ". We value your comment "+custComment);
}