const student = {
    name: "John J. Rambo",
    age: 20,
    subjects: ["Mathematics", "Physics", "Computer Science"],
    grades: {
        "Mathematics": 2.3,
        "Physics": 2.7,
        "Computer Science": 2.0
    }
};

console.log("Student Information:");
console.log(`Name: ${student.name}`);
console.log(`Age: ${student.age}`);

console.log("\nSubjects:");
for (const subject of student.subjects) {
    console.log(subject);
}

console.log("\nGrades:");
for (const subject of student.subjects) {
    console.log(`${subject}: ${student.grades[subject]}`);
}

student.grades["Mathematics"] = 2.0;
console.log(`\nUpdated Mathematics grade: ${student.grades["Mathematics"]}`);

student.subjects.push("Chemistry");
student.grades["Chemistry"] = 2.3;
console.log("\nUpdated grades:");
for (const subject of student.subjects) {
    console.log(`${subject}: ${student.grades[subject]}`);
}