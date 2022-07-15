import {useHistory} from 'react-router-dom';

function Home (){

    const history = useHistory();

    const handleClick = () => {

        history.push('/feeling');

    }

    return(

        <>
        <header className='App-header'>
            <h1 className='App-title'>Feedback!</h1>
            <h4>Don't forget it!</h4>
        </header>

        <button onClick={handleClick}>Start Feedback</button>

        </>
    )
};

export default Home;