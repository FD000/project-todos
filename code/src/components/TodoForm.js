import React, { useState } from 'react'
import uniqid from 'uniqid'
import { useDispatch } from 'react-redux'

import moment, { defaultFormatUtc } from 'moment'

import todos from '../reducers/todos'
/* Start */

import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import TextField from '@material-ui/core/TextField';






/* End */

const TodoForm = () => {



    const [value, setValue] = useState("")

    const dispatch = useDispatch()

    const onFormSubmit = (e) => {
        e.preventDefault();

        const newTodo = {
            id: uniqid(),
            description:value, //Value above in row 5
            isComplete:false,
            //date: moment().format('LLLL')
            date: Date.now(),
            fromNow: moment().add(3, 'days').calendar(),
            addDue: false
        }

        dispatch(todos.actions.addTodo(newTodo));
        setValue(''); // By writing this we clear are input after sending input
    }

    return(
        
        <form className="form-section">
            <TextField 
                type="text"
                value={value}
                onChange={e => setValue(e.target.value)}
                label="+ Add Todo" 
                variant="outlined"
            />
          
            

                  <Button
                  onClick={onFormSubmit}
        variant="contained"
        color="primary"
        endIcon={<CloudUploadIcon />}
      >
        Send
      </Button>


        </form>
        
    )
}

export default TodoForm