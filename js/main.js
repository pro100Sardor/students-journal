let elStudents = document.querySelector('#studentsSelector');
let elStudentName = document.querySelector('#studentName');
let elStudentInfoTable = document.querySelector('#studentInfoTable');
let elStudentInfoTableBody = elStudentInfoTable.querySelector('#student-info-table__body');

let studentSelectorFragment = document.createDocumentFragment();

students.forEach(student => {
  let studentOption = document.createElement('option');

  studentOption.classList.add("page-main__students-option");

  studentOption.value = student.id;

  studentOption.textContent = `${student.firstName} ${student.lastName}`;

  studentSelectorFragment.appendChild(studentOption);
});

elStudents.appendChild(studentSelectorFragment);

function studentSelector(evt) {
  elStudentName.textContent = '';
  let elSelectedStudent = students.find(student => student.id === Number(elStudents.value));
  elStudentName.textContent = `${elSelectedStudent.firstName} ${elSelectedStudent.lastName}'s information`;

  elStudentInfoTableBody.innerHTML = '';

  let selectedStudentInfoFragment = document.createDocumentFragment();

  studentsInfo.forEach(studentInfos => {

    if (studentInfos.studentId === Number(elStudents.value)) {

      let studentInfoTableRow = document.createElement('tr');

      for(let studentInfo in studentInfos) {
        if(studentInfo === 'id' || studentInfo === 'studentId') {
          continue;
        }
        let studentInfoTableDate = document.createElement('td');
        studentInfoTableDate.textContent = studentInfos[studentInfo];
        studentInfoTableRow.appendChild(studentInfoTableDate);
      }

      selectedStudentInfoFragment.appendChild(studentInfoTableRow);
    }
  });

  elStudentInfoTableBody.appendChild(selectedStudentInfoFragment);

  elStudentInfoTable.classList.remove("d-none");
}

elStudents.addEventListener('change', studentSelector);



