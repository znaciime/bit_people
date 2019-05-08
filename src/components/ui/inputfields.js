import React from 'react'
import { Link } from 'react-router-dom'

class InputFields extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: ""
        }
    }
    handleChange = (event) => {

        this.setState({
            inputValue: event.target.value,

        })
        return this.props.handleChange(event.target.value)

    }
    render() {
        return (<div className="row aboutInputs">
            <div className=" col-xs-12 col-sm-12 col-md-3  searchIcon"><i className="fas fa-search"></i></div>
            <div className=" col-xs-12 col-sm-12 col-md-6 col-lg-6"><input className="inputfield" type="text " value={this.state.inputValue} onChange={this.handleChange} placeholder="Search people"></input></div>
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                <Link to="/about" className="about"><button><b>About</b></button></Link>
                <button onClick={this.props.onButtonClick} className="button " ><b>Switch view</b><i className="fas fa-th-large"></i></button>
                <button onClick={this.props.onButtonClick2} className="refresh" ><b>Refresh People</b><i className="fas fa-redo-alt"></i></button>
            </div>
        </div>)
    }
}
export default InputFields;