import { useDispatch, useSelector } from "react-redux";
import {useState} from 'react';
import {useHistory} from 'react-router-dom';


function Feeling (){

    const history = useHistory();
    const dispatch = useDispatch();


    let [ feeling, setFeeling] = useState( {} );
    
    const handleSubmit = (event) => {

        event.preventDefault();

        if(feeling !== ''){
            
            dispatch({

                type: 'FEELING',
                payload: feeling
            })
            history.push('/understanding');
        } else { 
            alert('Please select a feeling');
        }
    };

    return (

        <>
                <header className='App-header'>
                    <h1 className='App-title'>How are you feeling today?</h1>
                    <h4>Please select a feeling.</h4>
                </header>
            <div>
                <div className="radioBtns" onChange={(event) => setFeeling(event.target.value)}>
                    <label>
                        <input type="radio" value="horrible"  name="feeling" />Horrible
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
                <button onClick={handleSubmit} className="submitBtn">NEXT</button>
            </div>
        </>

    )
};

export default Feeling;