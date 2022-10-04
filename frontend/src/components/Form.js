import React from "react"
import { useState } from "react"

const Form = () => {
    const [inputValue, setInputValue] = useState("")

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    return (
        <form className="ui form">
            <div className="ui grid center aligned">
                <div className="row">
                    <div className="column five wide">
                        <input value={inputValue} onChange={handleInputChange} type="text" placeholder="Enter something to do" />
                    </div>
                    <div className="column one wide">
                        <button className="ui button circular icon green" type="submit"><i className="plus icon"></i></button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Form