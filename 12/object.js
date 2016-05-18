var student = {
    name: "abc",
    age: 18,
    major: "演员",
    sayWhat: function() {
        console.log("什么");
    }
}

console.log(student.name);
console.log(student.major);
student.sayWhat();

for (var i in student) {
    console.log(i + "=" + student[i]);
}

for (var i in window) {
    console.log(i + "=" + window[i]);
}
