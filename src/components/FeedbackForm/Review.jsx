import axios from 'axios';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Review (){

    const history = useHistory();

    const response = useSelector(store => store.studentReducer);

    const handleSubmit = event => {

        axios.post('/form', response)
        .then(response =>{
        console.log( 'Sucess posting data')
        //history.push('/thanks')
        }).catch((error =>{
            console.log( 'Error in posting data', error);
        }))
        history.push('/thanks');
    }


    return (
        <>
        <header className='App-header'>
            <h1 className='App-title'>Review</h1>
        </header>
        <div >
            <p>Feeling: {response[0]}</p>
            <p>Understanding: {response[1]}</p>
            <p>Support: {response[2]}</p>
            <p>Comments: {response[3]}</p>

            <button onClick={handleSubmit}>SUBMIT</button> 
        </div>
        </>
    )

};

export default Review;

