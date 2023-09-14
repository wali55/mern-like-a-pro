// const studentsInput = prompt("Please input students array");

const studentsStr =
  '[{"name":"wali","age":25,"courses":[{"name":"JavaScript","grade":90},{"name":"Database","grade":85}]},{"name":"hasib","age":24,"courses":[{"name":"JavaScript","grade":92},{"name":"Database","grade":80}]}]';

// const sumOfAge = students.reduce((prev, curr) => prev + curr.age, 0);

// const avg = sumOfAge / students.length;

const students = JSON.parse(studentsStr);

const grades = students.map((student) => student.courses.reduce((acc, curr) => acc + curr.grade, 0));

const sumOfGrades = grades.reduce((acc, curr) => acc += curr, 0);

console.log(sumOfGrades);
