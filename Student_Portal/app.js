



var physicsMarks = document.querySelector(`#input1`);
var mathsMarks = document.querySelector(`#input2`);
var computerMarks = document.querySelector(`#input3`);
var chemistryMarks = document.querySelector(`#input4`);
var urduMarks = document.querySelector(`#input5`);
var totalMarks = document.querySelector(`#totalmarks`)
var percentge = document.querySelector(`#percentage`)
var grade_1 = document.querySelector(`#grade`)

function studentPortal() {
    console.log(physicsMarks.value);
    console.log(mathsMarks.value);
    console.log(computerMarks.value);
    console.log(chemistryMarks.value);
    console.log(urduMarks.value);
    
    var total_Marks = 500;
    var obtainedMarks = +physicsMarks.value + +mathsMarks.value + +computerMarks.value + +chemistryMarks.value + +urduMarks.value;
    console.log("Obtained Marks==>", obtainedMarks);
    totalMarks.innerHTML = obtainedMarks;
    
    var studentpercentage = obtainedMarks/total_Marks*100;
    percentge.innerHTML=studentpercentage;

if (studentpercentage >= 85) {
    grade_1.innerHTML='You Got A+'
}else if (studentpercentage >= 70){
    grade_1.innerHTML='A grade'
}else if (studentpercentage >= 60){
    grade_1.innerHTML='B grade'
}else if (studentpercentage >= 50){
    grade_1.innerHTML='C'
}else{
    grade_1.innerHTML='Sorry Fail'
}

    
    physicsMarks.value = "";
    mathsMarks.value = "";
    computerMarks.value = "";
    chemistryMarks.value = "";
    urduMarks.value = "";
}

