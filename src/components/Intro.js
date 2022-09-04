import '../Intro.css';

function Intro(props) {
    return (
        <main>
            <div className="quiz-form">
                <h1>Quizzical</h1>
                <h3>Description</h3>

                <button onClick={props.handleClick}>Start quiz</button>
            </div>
            <img id="blob-top" src={"./blob_2.png"}/>
            <img id="blob-bot" src={"./blob_1.png"}/>
        </main>
    )
}

export default Intro