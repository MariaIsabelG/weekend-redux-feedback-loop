import { useDispatch } from "react-redux";


function Feeling (){

    const dispatch = useDispatch();
    
    const handleSubmit = event => {

        event.preventDefault();

        dispatch({

            type: 'FEELING',
            payload: payload
        })
        

    }

    return (

        <>
            <header className='App-header'>
                <h1 className='App-title'>How are you feeling today?</h1>
                <h4>Please select a feeling.</h4>
            </header>
            <form onSubmit={handleSubmit}>
                <div className="radioBtns">
                    <label>
                        <input type="radio" value="horrible"  name="feeling"/>Horrible
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
            </form>

            <button type="submit" className="submitBtn">NEXT</button>
            
        </>

    )
};

export default Feeling;