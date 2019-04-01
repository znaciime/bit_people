import React from 'react'

const Header = (props) => {
    return (
        <div className="top"><h1>Bit People</h1>
            <button onClick={props.onButtonClick} className="button" type="button">Switch View</button>
        </div>
    )
}
export default Header;