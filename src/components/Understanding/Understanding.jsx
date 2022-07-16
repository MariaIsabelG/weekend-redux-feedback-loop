import { useDispatch, useSelector } from "react-redux"; 
import {useState} from 'react';
import {useHistory} from 'react-router-dom';

function Understanding (){

    const [understanding, setUnderstanding] = useState(0);

    const dispatch = useDispatch();
    
    const handleSubmit = (event) => {

        event.preventDefault();

        dispatch({

            type: 'UNDERSTANDING',
            payload: {understanding}
        })
    }

    return (

        <>
           <p>TEST</p>

        </>

    )
};

export default Understanding;