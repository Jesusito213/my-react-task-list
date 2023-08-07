import { FaEdit } from "react-icons/fa";
import { useForms } from "../hooks/useForms";
import { useRef, useState } from "react";

export default function TaskEdit ({task, handleUpdateTask}) {

  const {updateDescription, onInputChange} = useForms ({
    updateDescription: task.description
  });

  const [disabled, setDisabled] = useState(true)
  const focusInputRef = useRef ()

  const onSubmitUpdate = e => {
    e.preventDefault();

    const id = task.id;
    const description = updateDescription;

    handleUpdateTask(id, description);

    setDisabled(!disabled);

    focusInputRef.current.focus();
  }
     return (
       <form onSubmit={onSubmitUpdate}>
       <input
       type='text'
       className={`input-update ${task.complete ? 'text-decoration-dashed' : ''}`}
       name="updateDescription"
       value= {updateDescription}
       onChange={onInputChange}
       placeholder="que hay que hacer"
       readOnly={disabled}
       ref={focusInputRef}
       />,
       <button className="btn-edit" type="submit"><FaEdit/></button>
       </form>         
    )
}