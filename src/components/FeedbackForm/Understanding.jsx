import { useDispatch, useSelector } from "react-redux"; 
import {useState} from 'react';
import {useHistory} from 'react-router-dom';

function Understanding (){

    const dispatch = useDispatch();
    const history = useHistory();

    const [understanding, setUnderstanding] = useState(0);

    const handleSubmit = (event) => {

        event.preventDefault();

        if(understanding !== 0){
            dispatch({

                type: 'UNDERSTANDING',
                payload: understanding
            })

            history.push('/support');
        } else { 
            alert('Please select a level of understanding');
        }
    };

    return (

        <>
            <header className='App-header'>
                <h1 className='App-title'>How well do you undertand today's content?</h1>
                <h4>1 = I dont understand 5 = I can teach the content</h4>
            </header>
            <div onChange={(event) => setUnderstanding(event.target.value)}>
                <div className="radioBtns" >
                    <label>
                        <input type="radio" value="1"  name="feeling" />1
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
                <button onClick={handleSubmit} className="btn">NEXT</button>
            </div>
        </>

    )
};

export default Understanding;
