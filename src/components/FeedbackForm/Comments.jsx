import { useDispatch, useSelector } from "react-redux"; 
import {useState} from 'react';
import {useHistory} from 'react-router-dom';

function Support (){

    const dispatch = useDispatch();
    const history = useHistory();

    const [comments, setComments] = useState('');

    const handleSubmit = (event) => {

        event.preventDefault();

            dispatch({

                type: 'COMMENTS',
                payload: comments
            })

            history.push('/review');
    };

    return (

        <>
            <header className='App-header'>
                <h1 className='App-title'>Anything you'd like to add?</h1>
                <h4>Please comment below.</h4>
            </header>
            <div onChange={(event) => setComments(event.target.value)}>
                <input type="text" className="comments" placeholder="Enter Comment"/>
            </div>
                <button onClick={handleSubmit} className="submitBtn">NEXT</button>
        </>

    )
};

export default Support;