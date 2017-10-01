import React from 'react'

const Input = props => {
    const { value, onClick } = props
    return (
        <div>
            <p>{value}</p>
            <input type="submit" value="Submit" onClick={() => { onClick("Redux Works: " + new Date()) }} />
        </div>
    )
}

export default Input