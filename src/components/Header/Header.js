import React from 'react'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: "" }
    }
    render() {
        return (
            <>
                <div className="top row">
                    <div className="col-4"></div>
                    <div className="col-4"><h1>Bit People</h1></div>
                    <div className="col-4">
                        <a onClick={this.props.onButtonClick} className="button " ><i className="fas fa-th-large"></i></a>
                        <a onClick={this.props.onButtonClick2} className="refresh" ><i className="fas fa-redo-alt"></i></a>
                    </div>

                </div>
                <div className="row">
                    <div className="col-4"></div>
                    <input type="text " className="col-4"
                    ></input>
                    <div className="col-4"></div>
                </div>
            </>)
    }


}
export default Header;