import {nanoid} from "nanoid"

function Question(props) {
    const options = props.options.map(option => {
        const id = nanoid()
        return <button className={option === props.selected ? "selected" : ""} key={id} onClick={() => props.optionClicked(option)}>{option}</button>
    })

    return (
        <div className="question">
            <h1>q</h1>
            <div className="buttons">
                {options}
            </div>
            <div className="separator"></div>
        </div>
    )
}

export default Question