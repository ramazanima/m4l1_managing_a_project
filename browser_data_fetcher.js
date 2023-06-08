class Project {
  constructor(name, description, startDate, endDate) {
    this.name = name;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  getTasks() {
    return this.tasks;
  }

  getTaskCount() {
    return this.tasks.length;
  }
}

class Task {
  constructor(title, description, assignedTo, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.assignedTo = assignedTo;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isCompleted = false;
  }

  completeTask() {
    this.isCompleted = true;
  }
}

// Create a new project
const myProject = new Project(
  'Project ABC',
  'This is a sample project',
  '2023-06-01',
  '2023-06-30'
);

// Create tasks and add them to the project
const task1 = new Task(
  'Task 1',
  'Complete feature A',
  'John Doe',
  '2023-06-10',
  'High'
);
myProject.addTask(task1);

const task2 = new Task(
  'Task 2',
  'Write documentation',
  'Jane Smith',
  '2023-06-15',
  'Medium'
);
myProject.addTask(task2);

// Get project information
console.log('Project Name:', myProject.name);
console.log('Project Description:', myProject.description);
console.log('Project Start Date:', myProject.startDate);
console.log('Project End Date:', myProject.endDate);

// Get tasks within the project
const tasks = myProject.getTasks();
console.log('Task Count:', myProject.getTaskCount());
console.log('Tasks:');
tasks.forEach((task, index) => {
  console.log(`Task ${index + 1}: ${task.title}`);
  console.log('  Description:', task.description);
  console.log('  Assigned To:', task.assignedTo);
  console.log('  Due Date:', task.dueDate);
  console.log('  Priority:', task.priority);
});





// Request Handler

// // Function to fetch browser data asynchronously
// async function fetchBrowserData() {
//   try {
//     const response = await fetch('https://api.example.com/browser-data');
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.log('Error fetching browser data:', error);
//     throw error;
//   }
// }

// // Function to handle the user request
// async function handleUserRequest() {
//   try {
//     const browserData = await fetchBrowserData();
//     console.log('Browser data:', browserData);
//     // Process the browser data or perform any desired operations
//   } catch (error) {
//     console.log('Error handling user request:', error);
//     // Handle the error gracefully
//   }
// }

// // Call the function to handle the user request
// handleUserRequest();
