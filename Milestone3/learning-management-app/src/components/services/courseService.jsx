const courses = [
  {
    id: 1,
    name: "SER341",
    summary: "It's a course",
    assignments: {
      id: 1,
      name: "",
      dueDate: "",
      description: "",
      submissions: {
        id: 1,
        studentName: "",
        grade: "",
        completitionStatus: "",
      },
    },
  },
  {
    id: 2,
    name: "SER120",
    summary: "It's a course",
  },
  {
    id: 3,
    name: "SER490",
    summary: "It's a course",
  },
  {
    id: 4,
    name: "SER200",
    summary: "It's a course",
  },
];
export function getCourses() {
  return courses;
}
