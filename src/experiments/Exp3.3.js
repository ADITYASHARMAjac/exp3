import React from 'react';

// --- OOP CLASSES LOGIC ---
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Hello, my name is ${this.name}.`;
  }
}

class Student extends Person {
  constructor(name, age, course) {
    super(name, age);
    this.course = course;
  }
  greet() {
    return `Hello, my name is ${this.name} and I'm studying ${this.course}.`;
  }
}

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }
  greet() {
    return `Hello, my name is ${this.name} and I teach ${this.subject}.`;
  }
}

// --- UI COMPONENT ---
const ClassHierarchy = () => {
  const instances = [
    new Person("Aditya", 30),
    new Student("matt", 20, "Computer Science"),
    new Teacher("Dr. gone", 45, "Full Stack Development")
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6">Person Class Hierarchy</h1>
      
      <div className="space-y-4">
        {instances.map((obj, index) => (
          <div key={index} className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <div className="flex justify-between items-start mb-1">
              <h2 className="text-xl font-semibold text-slate-800">
                {obj.name} <span className="text-slate-500 font-medium">({obj.constructor.name})</span>
              </h2>
            </div>
            <p className="text-slate-700 mb-3 font-medium">Age: {obj.age}</p>
            <p className="text-slate-600 italic leading-relaxed">
              "{obj.greet()}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassHierarchy;