export const taskReducer = (initialStates, action) => {
  switch (action.type) {
      case 'Add task':
          return [... initialStates, action.payload]
      case 'Delete task':
          return initialStates.filter(task => task.id !== action.payload)
      case 'Complete task':
          return initialStates.map(task =>{
              if(task.id === action.payload){
                  return{
                      ...task,
                      complete: !task.complete
                  }
              }
              return task;
          })
      case 'Update task':
          return initialStates.map(task =>{
              if(task.id === action.payload.id){
                  return{
                      ...task,
                      description: action.payload.description,
                  }
              }
              return task;
          })


      default:
          return initialStates
  }
}