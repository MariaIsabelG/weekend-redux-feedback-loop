import { useDispatch, useSelector } from "react-redux"; 
import {useState} from 'react';
//import {useHistory} from 'react-router-dom';

function Understanding (){

    // const [understanding, setUnderstanding] = useState(0);

    // const dispatch = useDispatch();
    
    const handleSubmit = (event) => {

        event.preventDefault();

        console.log('This is submitting the form')

        // dispatch({

        //     type: 'UNDERSTANDING',
        //     payload: {understanding}
        // })
    }

    return (

        <>
            <header className='App-header'>
                <h1 className='App-title'>How well do you undertand today's content?</h1>
                <h4>Please select from below.</h4>
            </header>
            <form onSubmit={(event) => handleSubmit(event)}>
                {/* onChange={(event) => setUnderstanding(event.target.value)}> */}
                <div className="radioBtns">
                    <label>
                        <input type="radio" value="1"  name="feeling"/>1
                    </label>
                    <label>
                        <input type="radio" value="2" name="feeling"/>2
                    </label>
                    <label>
                        <input type="radio" value="3" name="feeling"/>3
                    </label>
                    <label>
                        <input type="radio" value="4" name="feeling"/>4
                    </label>
                    <label>
                <input type="radio" value="5" name="feeling"/>5
                    </label> 
                </div>
                <button  type="button" className="submitBtn">NEXT</button>
            </form>

        </>

    )
};

export default Understanding;

// onClick={handleClick}