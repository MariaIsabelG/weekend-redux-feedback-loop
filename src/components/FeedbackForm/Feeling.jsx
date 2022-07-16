import { useDispatch, useSelector } from "react-redux";
import {useState} from 'react';
import {useHistory} from 'react-router-dom';


function Feeling (){

    const history = useHistory();
    const dispatch = useDispatch();
    
    const [feeling, setFeeling] = useState('');

    const handleSubmit = (event) => {

        event.preventDefault();
        dispatch({

            type: 'FEELING',
            payload: {feeling}
        })   
        
        history.push('/understanding');
    };

    return (

        <>
            <header className='App-header'>
                <h1 className='App-title'>How are you feeling today?</h1>
                <h4>Please select a feeling.</h4>
            </header>
            <form onClick={(event) => handleSubmit(event)}
                    onChange={(event) => setFeeling(event.target.value)}>
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
                <button type="feelingBtn" className="submitBtn">NEXT</button>
            </form>

        </>

    )
};

export default Feeling;