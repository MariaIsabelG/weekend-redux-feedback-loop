import { useDispatch, useSelector } from "react-redux"; 
import {useState} from 'react';
import {useHistory} from 'react-router-dom';

function Support (){

    const dispatch = useDispatch();
    const history = useHistory();

    const [support, setSupport] = useState(0);

    const handleSubmit = (event) => {

        event.preventDefault();

        if(support !== 0){
            dispatch({

                type: 'SUPPORT',
                payload: support
            })

            history.push('/comments');
        } else { 
            alert('Please select a level of support');
        }
    };

    return (

        <>
            <header className='App-header'>
                <h1 className='App-title'>How supported do you feel?</h1>
                <h4>1 = Not at all  5 = Very much supported</h4>
            </header>
            <div onChange={(event) => setSupport(event.target.value)}>
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
                <button onClick={handleSubmit} className="submitBtn">NEXT</button>
            </div>
        </>

    )
};

export default Support;