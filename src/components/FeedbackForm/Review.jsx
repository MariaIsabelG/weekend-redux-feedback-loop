import { useSelector } from 'react-redux';

function Review (){

    const response = useSelector(store => store.studentReducer);

    console.log('These are my responses', response);

    return (
        <>
        <header className='App-header'>
            <h1 className='App-title'>Review</h1>
        </header>
        <div>
            <p>Feeling: {response[0]}</p>
            <p>Understanding: {response[1]}</p>
            <p>Support: {response[2]}</p>
            <p>Comments: {response[3]}</p> 
        </div>
        </>
    )

};

export default Review;