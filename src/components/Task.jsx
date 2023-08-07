import { useForms } from "../hooks/useForms"

export default function Task ({handleNewTask}) {

   const {description, onInputChange, onResetForm} = useForms ({
      description: '',
   });

   const onFormSubmit = e => {
      e.preventDefault();
      
      if(description.length <= 1) return

      let newTask = {
         id: new Date().getTime(),
         description: description,
         complete : false,
      }

      handleNewTask(newTask);
      onResetForm();
  }

   return (
       <form onSubmit={onFormSubmit}>
        <input
        type='text'
        className='input-add'
        name="description"
        value={description}
        onChange={onInputChange}
        placeholder="New Task"
        />,
        <button className="btn-add" type="submit">+</button>
        </form>         
     )
      
}