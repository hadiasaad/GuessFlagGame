document.getElementById("questions").style.display = "none";

function startGame() {
    document.getElementById("questions").style.display = "block";
    document.getElementById("secondQuestion").style.display = "none";
    document.getElementById("thirdQuestion").style.display = "none";
    document.getElementById("fourthQuestion").style.display = "none";
    document.getElementById("fifthQuestion").style.display = "none";
    document.getElementById("sixthQuestion").style.display = "none";
    document.getElementById("seventhQuestion").style.display = "none";
    document.getElementById("eigthQuestion").style.display = "none";
    document.getElementById("ninthQuestion").style.display = "none";
    document.getElementById("tenthQuestion").style.display = "none";
    document.getElementById("instructions").style.display ="none";
}
document.getElementById('startButton').addEventListener('click', openTest);

document.getElementById("secondQuestion").style.display = "none";
function removeQuestion1() {
    document.getElementById("secondQuestion").style.display = "block";
    document.getElementById("firstQuestion").style.display ="none";
    document.getElementById("correct").style.display="none";
}
document.getElementById('nextButton1').addEventListener('click', openTest);

document.getElementById("thirdQuestion").style.display = "none";
function removeQuestion2() {
    document.getElementById("thirdQuestion").style.display = "block";
    document.getElementById("secondQuestion").style.display ="none";
}
document.getElementById('nextButton2').addEventListener('click', openTest);

document.getElementById("fourthQuestion").style.display = "none";
function removeQuestion3() {
    document.getElementById("fourthQuestion").style.display = "block";
    document.getElementById("thirdQuestion").style.display ="none";
}
document.getElementById('nextButton3').addEventListener('click', openTest);

document.getElementById("fifthQuestion").style.display = "none";
function removeQuestion4() {
    document.getElementById("fifthQuestion").style.display = "block";
    document.getElementById("fourthQuestion").style.display ="none";
}
document.getElementById('nextButton4').addEventListener('click', openTest);

document.getElementById("sixthQuestion").style.display = "none";
function removeQuestion5() {
    document.getElementById("sixthQuestion").style.display = "block";
    document.getElementById("fifthQuestion").style.display = "none";
}
document.getElementById('nextButton5').addEventListener('click', openTest);

document.getElementById("seventhQuestion").style.display = "none";
function removeQuestion6() {
    document.getElementById("seventhQuestion").style.display = "block";
    document.getElementById("sixthQuestion").style.display = "none";
}
document.getElementById('nextButton6').addEventListener('click', openTest);

document.getElementById("eigthQuestion").style.display = "none";
function removeQuestion7() {
    document.getElementById("eigthQuestion").style.display = "block";
    document.getElementById("seventhQuestion").style.display = "none";
}
document.getElementById('nextButton7').addEventListener('click', openTest);

document.getElementById("ninthQuestion").style.display = "none";
function removeQuestion8() {
    document.getElementById("ninthQuestion").style.display = "block";
    document.getElementById("eigthQuestion").style.display = "none";
}
document.getElementById('nextButton8').addEventListener('click', openTest);

document.getElementById("tenthQuestion").style.display = "none";
function removeQuestion9() {
    document.getElementById("tenthQuestion").style.display = "block";
    document.getElementById("ninthQuestion").style.display = "none";
}
document.getElementById('nextButton9').addEventListener('click', openTest);


function showCorrectAnswer(){
    const correct = document.getElementById("correct");
    correct.style.backgroundColor = "green";
    const wrong = document.getElementById("wrong");
    wrong.style.backgroundColor = "red";
    const wrong2 = document.getElementById("wrong2");
    wrong2.style.backgroundColor = "red";
}  
function showCorrectAnswer2(){
    const correct2 = document.getElementById("correct2");
    correct2.style.backgroundColor = "green";
    const wrong3 = document.getElementById("wrong3");
    wrong3.style.backgroundColor = "red";
    const wrong4 = document.getElementById("wrong4");
    wrong4.style.backgroundColor = "red";
}   
function showCorrectAnswer3(){
    const correct3 = document.getElementById("correct3");
    correct3.style.backgroundColor = "green";
    const wrong5 = document.getElementById("wrong5");
    wrong5.style.backgroundColor = "red";
    const wrong6 = document.getElementById("wrong6");
    wrong6.style.backgroundColor = "red";
}   
function showCorrectAnswer4(){
    const correct4 = document.getElementById("correct4");
    correct4.style.backgroundColor = "green";
    const wrong7 = document.getElementById("wrong7");
    wrong7.style.backgroundColor = "red";
    const wrong8 = document.getElementById("wrong8");
    wrong8.style.backgroundColor = "red";
 
}   
function showCorrectAnswer5(){
    const correct5 = document.getElementById("correct5");
    correct5.style.backgroundColor = "green";

    const wrong9 = document.getElementById("wrong9");
    wrong9.style.backgroundColor = "red";
 
    const wrong10 = document.getElementById("wrong10");
    wrong10.style.backgroundColor = "red";
 
}   
function showCorrectAnswer6(){
    const correct6 = document.getElementById("correct6");
    correct6.style.backgroundColor = "green"
    const wrong11 = document.getElementById("wrong11");
    wrong11.style.backgroundColor = "red"
    const wrong12 = document.getElementById("wrong12");
    wrong12.style.backgroundColor = "red";
}   
function showCorrectAnswer7(){
    const correct7 = document.getElementById("correct7");
    correct7.style.backgroundColor = "green";

    const wrong13 = document.getElementById("wrong13");
    wrong13.style.backgroundColor = "red";
    const wrong14 = document.getElementById("wrong14");
    wrong14.style.backgroundColor = "red";
}   
function showCorrectAnswer8(){
    const correct8 = document.getElementById("correct8");
    correct8.style.backgroundColor = "green";

    const wrong15 = document.getElementById("wrong15");
    wrong15.style.backgroundColor = "red";
    const wrong16 = document.getElementById("wrong16");
    wrong16.style.backgroundColor = "red";
}   
function showCorrectAnswer9(){
    const correct9 = document.getElementById("correct9");
    correct9.style.backgroundColor = "green";
    const wrong17 = document.getElementById("wrong17");
    wrong17.style.backgroundColor = "red";
    const wrong18 = document.getElementById("wrong18");
    wrong18.style.backgroundColor = "red";
 
}   
function showCorrectAnswer10(){
    const correct10 = document.getElementById("correct10");
    correct10.style.backgroundColor = "green";
    const wrong19 = document.getElementById("wrong19");
    wrong19.style.backgroundColor = "red";
    const wrong20 = document.getElementById("wrong20");
    wrong20.style.backgroundColor = "red";
}    