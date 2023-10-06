let courses = {
   "170": {
      title: "Introduction to Programming",
      description: "Develop algorithms",
      creditHours: 5, 
   },
   "250": {
      title: "Web Development",
      description: "Build web applications",
      creditHours: 3,
   },
   "310": {
      title: "Operating Systems",
      description: "Process management and memory management",
      creditHours: 3,
   },
   "430": {
      title: "Artificial Intelligence",
      description: "Simulate human thinking",
      creditHours: 2,
   }
};

for (let courseNum in courses) {
   if (courses[courseNum].creditHours === 3) {
   console.log(courseNum + " - " + courses[courseNum].title + ", " + courses[courseNum].description + ", " + courses[courseNum].creditHours);
   }
}
