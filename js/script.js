//function: find max value of a number list
// console.log("hello");

function findMax(aNums) {
    var iMax = aNums[0];

    for(var iCount=0; iCount<aNums.length; iCount++) {
        if(iMax > aNums[iCount]) {
            iMax = aNums[iCount];
        }
    }

    return iMax;
}



// FIRST & SECOND DRAFT CODE

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


// var aNums = [0];
// // console.log(aNums);
// var iCount = [0];
// // console.log(iCount);
// var iMax = aNums;
//
//
// function findMax(aNums) {
//     var iMax = aNums;
// // console.log(iMax);
//
//     for(var iCount=0; iCount<aNums.length; iCount++) {
//         if(iMax > aNums[iCount]) {
//             iMax = aNums[iCount];
//         }
//         // console.log(aNums);
//     }
//
//     return iMax;
// }
// console.log(iMax);



//-----------------------------------------

// // //Input: Get 3 grades for each student
var iSize = parseInt(prompt('Class size?'));
console.log(iSize);
var aGradesPhysics = [];

var aGradesChemistry = [];

var aGradesBiology = [];


//ParseInt does the same as Number but removes anything other than a number from the value if input
//Example parseInt(abc123) will give you 123
for(var iCount=0; iCount<iSize; iCount++) {
    var iGradesPhysics = parseInt(prompt('Student '+(iCount+1)+': Grade for Physics out of 100'));
    aGradesPhysics.push(aGradesPhysics);
//     var iGradeChemistry = parseInt(prompt('Student '+(iCount+1)+': Grade for Biology out of 100'));
//     aGradesChemistry.push(aGradesChemistry);
//
//     var iGradesBiology = parseInt(prompt('Student '+(iCount+1)+': Grade for Chemistry out of 100'));
//     aGradesBiology.push(aGradesBiology);
}
//
// // processing: calculate average grade for each student and find top grade in class
// var aAverageGrades = [];
//
// for(var iCount=0; iCount<iSize; iCount++) {
//     var fAverage = (aGradesPhysics[iCount] + aGradesChemistry[iCount] + aGradesBiology[iCount]) / aGradesPhysics.length;
//     aAverageGrades.push(fAverage);
// }
// var iTopGrade = findMax(aAverageGrades);
//
// //output: list result for each student and top grade
//
//
// for(var iCount=1; iCount<aAverageGrades.length; iCount++) {
//     if(aAverageGrades[iCount] < 50) {
//
//         document.write('Student '+(iCount+1)+ ': Fail'+' ');
//
//     } else if(aAverageGrades[iCount] > 50 && aAverageGrades[iCount] < 80) {
//
//         document.write('Student '+(iCount+1)+ ': Pass ');
//
//     } else {
//
//         document.write('Student '+(iCount+1)+ ': Pass with Distinction'+' ');
//     }
// }
//
// document.write('<h1>The top overall grade is ' +aAverageGrades+'</h1>');
