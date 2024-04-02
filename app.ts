import inquirer from "inquirer"


//todos arrays
//functions
//operations

let todos:string[]= ["interior", "exterior"]
let condition = true;

 async function createTodo (todos:string[]){

while(condition){

   let userinput = await inquirer.prompt
    ([
        {
           name:"TodoItem", type:"input", message:"What you want to Add Todo Item in listing:",
        },
      
        {   
           name:"AddMore", type:"confirm", message: "Do you want to AddMore:", 
        }
    ]);
 
    todos.push(userinput.TodoItem);
  condition = userinput.AddMore
      console.log("todos:");}


    let ans = await inquirer.prompt({
        name:"select",
        type:"list",
        message:"select an operation",
        choices:["add", "ubdate", "read", "delete"]

    })
    if(ans.select =="add"){
        let addTodo = await inquirer.prompt({

            name:"todo",
            type:"input",
            message:"add item ",

        });
        todos.push(addTodo.todo)
        console.log(todos)
    }
    if(ans.select =="ubdate"){
        let ubdateTodo = await inquirer.prompt({
            name:"todo",  type:"list",  message:"select item for ubdate", choices:todos.map(item => item),
        });
        let addTodo = await inquirer.prompt({

            name:"todo",
            type:"input",
            message:"add item ",
        });
        let newTodos = todos.filter(val => val !==ubdateTodo.todo)
        todos = [...newTodos,addTodo.todo]
        console.log(todos)
    }
    if(ans.select =="read"){
        console.log(todos)
    }
    if(ans.select =="delete"){

        let deleteTodo = await inquirer.prompt({
            name:"todo",  type:"list",  message:"select item for ubdate", choices:todos.map(item => item),
        });
        let newTodos = todos.filter(val => val !==deleteTodo.todo)
        todos = [...newTodos]
        console.log(todos)
    }
}

createTodo(todos)
