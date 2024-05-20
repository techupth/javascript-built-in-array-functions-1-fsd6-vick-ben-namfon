const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(accumulator, students) {
  // Start coding here
  return accumulator + students.score;
}

const totalScore = students.reduce(getAverageStudentScore, 0); // Output: 87.5
const averageScore = totalScore / students.length;
console.log(averageScore);
