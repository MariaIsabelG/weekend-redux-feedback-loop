import { useDispatch, useSelector } from "react-redux";
import {useState} from 'react';

//LEFT OFF --- TARGETVALUE IS UNDEFINED. I NEED A WAY TO GET THE RADIO BTN VALUE AND SEND IT OVER VIA DISPATCH

function Feeling (){

    //const feedback = useSelector( store => store.studentReducer);

    const [student, setStudent] = useState({ feeling: ''});

    const dispatch = useDispatch();
    
    const handleSubmit = (event) => {

        event.preventDefault();
    
        console.log( 'This is my feeling', event.target.value)
        setStudent({
            ...student, 
            feeling: event.target.value
        })



        dispatch({

            type: 'FEELING',
            payload: student
        })


    }

    return (

        <>
            <header className='App-header'>
                <h1 className='App-title'>How are you feeling today?</h1>
                <h4>Please select a feeling.</h4>
            </header>
            <form onSubmit={(event) => handleSubmit(event)}>
                <div className="radioBtns">
                    <label>
                        <input type="radio" value="horrible"  name="feeling"/>Horrible
                    </label>
                    <label>
                        <input type="radio" value="CouldBeBetter" name="feeling"/>Bad
                    </label>
                    <label>
                        <input type="radio" value="Ok" name="feeling"/>Meh
                    </label>
                    <label>
                        <input type="radio" value="Good" name="feeling"/>Good
                    </label>
                    <label>
                <input type="radio" value="Fabulous" name="feeling"/>Fabulous
                    </label> 
                </div>
                <button type="submit" className="submitBtn">NEXT</button>
            </form>

        </>

    )
};

export default Feeling;