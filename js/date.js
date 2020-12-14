const students = [
  {id: 1, firstName: 'Abdulatifxon', lastName: 'Anvarxonov'},
  {id: 2, firstName: 'Shuhratbek', lastName: 'Qobulov'},
  {id: 3, firstName: 'Farrux', lastName: 'Abbosov'},
  {id: 4, firstName: 'Muhammadjavohir', lastName: 'Suratov'},
  {id: 5, firstName: 'Ilhom', lastName: 'Shamidinov'}
]

const studentsInfo = [
  // first student info
  {id: 1, studentId: 1, dateOfTheLesson: '2020-12-01', studentScore: 5, wasStudentAttendLesson: true},
  {id: 2, studentId: 1, dateOfTheLesson: '2020-12-02', studentScore: 4, wasStudentAttendLesson: true},
  {id: 3, studentId: 1, dateOfTheLesson: '2020-12-03', studentScore: 5, wasStudentAttendLesson: true},
  {id: 4, studentId: 1, dateOfTheLesson: '2020-12-04', studentScore: 4, wasStudentAttendLesson: true},
  {id: 5, studentId: 1, dateOfTheLesson: '2020-12-07', studentScore: 4, wasStudentAttendLesson: true},
  {id: 6, studentId: 1, dateOfTheLesson: '2020-12-08', studentScore: 4, wasStudentAttendLesson: true},
  {id: 7, studentId: 1, dateOfTheLesson: '2020-12-09', studentScore: 5, wasStudentAttendLesson: true},

  // second student info
  {id: 8, studentId: 2, dateOfTheLesson: '2020-12-01', studentScore: 0, wasStudentAttendLesson: false},
  {id: 9, studentId: 2, dateOfTheLesson: '2020-12-02', studentScore: 3, wasStudentAttendLesson: true},
  {id: 10, studentId: 2, dateOfTheLesson: '2020-12-03', studentScore: 0, wasStudentAttendLesson: false},
  {id: 11, studentId: 2, dateOfTheLesson: '2020-12-04', studentScore: 0, wasStudentAttendLesson: false},
  {id: 12, studentId: 2, dateOfTheLesson: '2020-12-07', studentScore: 4, wasStudentAttendLesson: true},
  {id: 13, studentId: 2, dateOfTheLesson: '2020-12-08', studentScore: 2, wasStudentAttendLesson: true},
  {id: 14, studentId: 2, dateOfTheLesson: '2020-12-09', studentScore: 0, wasStudentAttendLesson: false},

  // third student info
  {id: 15, studentId: 3, dateOfTheLesson: '2020-12-01', studentScore: 5, wasStudentAttendLesson: true},
  {id: 16, studentId: 3, dateOfTheLesson: '2020-12-02', studentScore: 0, wasStudentAttendLesson: false},
  {id: 17, studentId: 3, dateOfTheLesson: '2020-12-03', studentScore: 5, wasStudentAttendLesson: true},
  {id: 18, studentId: 3, dateOfTheLesson: '2020-12-04', studentScore: 0, wasStudentAttendLesson: false},
  {id: 19, studentId: 3, dateOfTheLesson: '2020-12-07', studentScore: 5, wasStudentAttendLesson: true},
  {id: 20, studentId: 3, dateOfTheLesson: '2020-12-08', studentScore: 4, wasStudentAttendLesson: true},
  {id: 21, studentId: 3, dateOfTheLesson: '2020-12-09', studentScore: 0, wasStudentAttendLesson: false},

  // fourth student info
  {id: 22, studentId: 4, dateOfTheLesson: '2020-12-01', studentScore: 5, wasStudentAttendLesson: true},
  {id: 23, studentId: 4, dateOfTheLesson: '2020-12-02', studentScore: 4, wasStudentAttendLesson: true},
  {id: 24, studentId: 4, dateOfTheLesson: '2020-12-03', studentScore: 5, wasStudentAttendLesson: true},
  {id: 25, studentId: 4, dateOfTheLesson: '2020-12-04', studentScore: 4, wasStudentAttendLesson: true},
  {id: 26, studentId: 4, dateOfTheLesson: '2020-12-07', studentScore: 4, wasStudentAttendLesson: true},
  {id: 27, studentId: 4, dateOfTheLesson: '2020-12-08', studentScore: 0, wasStudentAttendLesson: false},
  {id: 28, studentId: 4, dateOfTheLesson: '2020-12-09', studentScore: 0, wasStudentAttendLesson: false},

  // fifth student info
  {id: 29, studentId: 5, dateOfTheLesson: '2020-12-01', studentScore: 0, wasStudentAttendLesson: false},
  {id: 30, studentId: 5, dateOfTheLesson: '2020-12-02', studentScore: 4, wasStudentAttendLesson: true},
  {id: 31, studentId: 5, dateOfTheLesson: '2020-12-03', studentScore: 0, wasStudentAttendLesson: false},
  {id: 32, studentId: 5, dateOfTheLesson: '2020-12-04', studentScore: 3, wasStudentAttendLesson: true},
  {id: 33, studentId: 5, dateOfTheLesson: '2020-12-07', studentScore: 5, wasStudentAttendLesson: true},
  {id: 34, studentId: 5, dateOfTheLesson: '2020-12-08', studentScore: 4, wasStudentAttendLesson: true},
  {id: 35, studentId: 5, dateOfTheLesson: '2020-12-09', studentScore: 0, wasStudentAttendLesson: false},
]