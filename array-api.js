// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  const result = fruits.join(' | ');
  console.log(result);

  const result2 = fruits.join();
  console.log(result2);
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const result = fruits.split(',');
  console.log(result);
}


// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
  console.log(array);
  // 배열자체를 반대로 변화시킴
}


// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2,5);
  console.log(result);
  console.log(array);
}

class student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new student('A', 29, true, 45),
  new student('B', 28, false, 80),
  new student('C', 30, true, 90),
  new student('D', 40, false, 66),
  new student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  const result = students.find(function(student, index){
    //console.log(student, index);
    return student.score === 90;
  });
  console.log(result);
}

//짧은버전
{
  const result = students.find((student) => student.score === 90);
  console.log(result);
}

// Q6. make an array of enrolled students
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((student) => student.score);
  console.log(result);
}
{
  const result = students.map((student) => student.score * 2);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
//학생들 중에 50점보다 낮은 사람이 있는지 없는지 확인하기
{
  
  const result = students.some((student) => student.score < 50);
  console.log(result);

  const result2 = students.every((student) => student.score < 50);
  console.log(result2);
}

// Q9. compute students' average score
{
  const result = students.reduce((prev,curr) => {
    console.log('---------');
    console.log(prev);
    console.log(curr);
    return prev + curr.score ;
  },0);
  
  console.log(result);
}
//간단한 표기
{
  const result = students.reduce((prev,curr) => prev + curr.score, 0);
  console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students.map(student => student.score).join();
  console.log(result);
}

// 50점 이상인 아이들만 join
{
  const result = students
  .map((student) => student.score)
  .filter((score) => score >= 50)
  .join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
// 학생들의 점수를 정렬해서 낮은 순서대로 string
{
  const result = students.map(student => student.score)
  .sort((a,b) => a - b) //b가 a보다 크다면 -value니까
  .join();
  console.log(result);
}
