import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';

function Thanks (){

    const history = useHistory();
    const dispatch = useDispatch();

    const handleClick = () => {

        dispatch({

            type: 'CLEAR',

        })
        history.push('/');

    }

    return(

        <>
        <header className='App-header'>
            <h1 className='App-title'>THANKS FOR YOUR FEEDBACK!</h1>
        </header>
        <h4>Fillout another feedback</h4>
        <button onClick={handleClick}>Start feedback</button>

        </>
    )
};

export default Thanks;



