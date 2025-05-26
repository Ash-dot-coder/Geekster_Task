const fs = require("fs");
const path = require("path");
const readline = require("readline");

const tasksFilePath = path.join(__dirname, "tasks.json");

// Read tasks from file
function loadTasks() {
  if (!fs.existsSync(tasksFilePath)) {
    fs.writeFileSync(tasksFilePath, "[]");
  }
  const data = fs.readFileSync(tasksFilePath, "utf8");
  return JSON.parse(data);
}

// Save tasks to file
function saveTasks(tasks) {
  fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 2));
}

// Add a task
function addTask(taskDescription) {
  const tasks = loadTasks();
  tasks.push({ description: taskDescription, completed: false });
  saveTasks(tasks);
  console.log("✅ Task added!");
}

// View tasks
function viewTasks() {
  const tasks = loadTasks();
  if (tasks.length === 0) {
    console.log("😴 No tasks found.");
  } else {
    tasks.forEach((task, index) => {
      const status = task.completed ? "✅" : "❌";
      console.log(`${index + 1}. [${status}] ${task.description}`);
    });
  }
}

// Mark task as complete
function markComplete(index) {
  const tasks = loadTasks();
  if (tasks[index]) {
    tasks[index].completed = true;
    saveTasks(tasks);
    console.log("✅ Task marked as complete!");
  } else {
    console.log("❌ Task not found!");
  }
}

// Remove a task
function removeTask(index) {
  const tasks = loadTasks();
  if (tasks[index]) {
    tasks.splice(index, 1);
    saveTasks(tasks);
    console.log("🗑️ Task removed!");
  } else {
    console.log("❌ Task not found!");
  }
}

// CLI setup
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function showMenu() {
  console.log("\n📝 Task Manager");
  console.log("1. Add Task");
  console.log("2. View Tasks");
  console.log("3. Mark Task as Complete");
  console.log("4. Remove Task");
  console.log("5. Exit");
  rl.question("Choose an option: ", handleMenu);
}

function handleMenu(option) {
  switch (option) {
    case "1":
      rl.question("Enter task description: ", (desc) => {
        addTask(desc);
        showMenu();
      });
      break;
    case "2":
      viewTasks();
      showMenu();
      break;
    case "3":
      rl.question("Enter task number to mark complete: ", (num) => {
        markComplete(parseInt(num) - 1);
        showMenu();
      });
      break;
    case "4":
      rl.question("Enter task number to remove: ", (num) => {
        removeTask(parseInt(num) - 1);
        showMenu();
      });
      break;
    case "5":
      rl.close();
      break;
    default:
      console.log("❌ Invalid choice.");
      showMenu();
  }
}

// Start the app
showMenu();
