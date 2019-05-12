//function: find max value of a number list
// console.log("hello");


var aNums = [0];
// console.log(aNums);
var iCount = [0];
// console.log(iCount);
var iMax = aNums;


function findMax(aNums) {
    var iMax = aNums;
// console.log(iMax);

    for(var iCount=0; iCount<aNums.length; iCount++) {
        if(iMax > aNums[iCount]) {
            iMax = aNums[iCount];
        }
        // console.log(aNums);
    }

    return iMax;
}
console.log(iMax);


// FIRST DRAFT CODE

// function findMax() {
//     var iMax = aNums[0];
//
//     for(var i =0; i < aNums.length; i++) {
//         if(iMax > aNums.length) {
//             iMax = aNums [i];
//         }
//
//     }
//     return iMax;
// }


//-----------------------------------------

// // //Input: Get 3 grades for each student
var iSize = parseInt(prompt('Class size?'));
var aGradesPhysics = [];
var aGradesChemistry = [];
var aGradesBiology = [];

//ParseInt does the same as Number but removes anything other than a number from the value if input
//Example parseInt(abc123) will give you 123
for(var i=0; i < iSize; i++) {
    var aGradesPhysics = parseInt(prompt('Student '+[i+1]+': Grade for Physics out of 100'));
    console.log(aGradesPhysics);
    // aGradesPhysics.push(aGradesPhysics);
//
console.log(aGradesPhysics);
//
    var aGradeChemistry = parseInt(prompt('Student '+[i+1]+': Grade for Biology out of 100'));
    // aGradesChemistry.push(aGradesChemistry);

console.log(aNums);
//
    var iGradeBiology = parseInt(prompt('Student '+[i+1]+': Grade for Chemistry out of 100'));
    // aGradesBiology.push(aGradesBiology);
//
console.log(aGradesBiology);
}
//
// // // processing: calculate average grade for each student and find top grade in class
var aAverageGrades = [];

for(var i=0; i<iSize; i++) {
    var fAverage = (aGradesPhysics[i] + aGradesChemistry[i] + aGradesBiology[i]) / aGradesPhysics.length;
    // aAverageGrades.push(fAverage);
}
var iTopGrade = findMaxs(aAverageGrades);

// //output: list result for each student and top grade
//
//
for(var i=1; i<aAverageGrades.length; i++) {
    if(aAverageGrades[i] < 50) {

        document.write('Student '+[i+1]+': Fail'+'<br>');

    } else if(aAverageGrades[i] > 50 && aAverageGrades[i] < 80) {

        document.write('Student '+[i+1]+': Pass<br>');

    } else {

        document.write('Student '+[i+1]': Pass with Distinction'+'<br>');
    }
}

document.write('<h1>The top overall grade is '+iTopgrade+'</h1>');
