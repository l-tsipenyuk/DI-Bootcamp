//  Exercise 4: Todo List Using ES6 Module Syntax
// 4.1. Create a directory named todoApp.
// 4.2. Inside the todoApp directory, create two files: todo.js and app.js.
// 4.3. In todo.js, define an ES6 module that exports a TodoList class.
// 4.4. The TodoList class should have methods to add tasks, mark tasks as complete, and list all tasks
// 4.5. Export the TodoList class.

// class TodoList {
//     constructor(task) {
//         this.allTasks = [];
//     }
//     addTask(task) {
//         this.allTasks.push(task)
//     }
//     taskCompleted(task) {
//         console.log(`${task} is completed.`)
//     }
//     listAllTasks() {
//         console.log(this.allTasks)
//     }
// }

// export {TodoList};
// const task1 = new TodoList()
// task1.addTask("Do the homework")
// task1.addTask("Clean the livingroom")
// task1.taskCompleted("Do the homework")
// task1.listAllTasks()