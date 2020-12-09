let elStudent = document.querySelector('#studentsSelector');

let studentSelectorFragment = document.createDocumentFragment();

students.forEach(student => {
  let studentOption = document.createElement('option');
  studentOption.value = student.id;
  studentOption.textContent = `${student.firstName} ${student.lastName}`;
  studentSelectorFragment.appendChild(studentOption);
});

elStudent.appendChild(studentSelectorFragment);


