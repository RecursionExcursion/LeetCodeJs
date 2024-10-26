var average = function (salary) {
  var temp;

  for (let i = 0; i < salary.length; i++) {
    for (let j = salary.length - 1; j > i; j--) {
      if (salary[i] > salary[j]) {
        temp = salary[i];
        salary[i] = salary[j];
        salary[j] = temp;
      }
    }
  }

  salary = salary.slice(1, salary.length - 1);

  var sum = 0;

  salary.forEach((e) => (sum += e));

  const dec = 1.0;

  return (sum * dec) / (salary.length * dec);
};

var salary = [4000, 3000, 1000, 2000];

console.log(average(salary));

salary = [1000, 2000, 3000];

console.log(average(salary));

salary = [
  25000, 48000, 57000, 86000, 33000, 10000, 42000, 3000, 54000, 29000, 79000,
  40000,
];
console.log(average(salary));
