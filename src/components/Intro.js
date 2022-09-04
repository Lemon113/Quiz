import '../Intro.css';

function Intro(props) {
    return (
        <main className="main-intro">
            <div className="quiz-form">
                <h1>Quizzical</h1>
                <h3>Description</h3>

                <button onClick={props.handleClick}>Start quiz</button>
            </div>
        </main>
    )
}

export default Intro