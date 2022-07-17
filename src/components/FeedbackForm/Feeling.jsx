import { useDispatch, useSelector } from "react-redux";
import {useState} from 'react';
import {useHistory} from 'react-router-dom';


function Feeling (){

    const history = useHistory();
    const dispatch = useDispatch();


    let [ feeling, setFeeling] = useState( 0 );
    
    const handleSubmit = (event) => {

        event.preventDefault();

        if(feeling !== 0){
            
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
                    <h1 className='App-title'>How fabulous do you feel today?</h1>
                    <h4>1 = Not at all 5 = Extra fabulous</h4>
                </header>
            <div>
                <div className="radioBtns" onChange={(event) => setFeeling(event.target.value)}>
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

export default Feeling;