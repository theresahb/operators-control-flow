// Question 3

const scienceSubjects = "Physics, Chemistry, Biology, Technical Drawing";
const socialScienceSubjects = "Accounting, Commerce, Marketing, Geography";
const artsSubjects = "Government, Economics, Literature, History";
const generalSubjects = "English, Mathematics";

const classGroup = prompt("Enter your programme of study");

if (classGroup === 'Science' || classGroup === 'science') {
    console.log('Science subjects: ' + scienceSubjects);
}
else if (classGroup === 'Social Science' || classGroup === 'social science') {
    console.log('Social Science subjects: ' + socialScienceSubjects);
}
else if (classGroup === 'Arts' || classGroup === 'arts') {
    console.log('Arts subjects: ' + artsSubjects);
}
else {
    console.log('General subjects: ' + generalSubjects);
}