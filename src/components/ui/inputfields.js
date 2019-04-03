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
            <div className="col-3 searchIcon"><i class="fas fa-search"></i></div>
            <div className="col-6 "><input className="inputfield" type="text " value={this.state.inputValue} onChange={this.handleChange} placeholder="Search people"></input></div>
            <div className="col-3">
                <Link to="/about" className="about"><b>About</b></Link>
                <a onClick={this.props.onButtonClick} className="button " >Switch view<i className="fas fa-th-large"></i></a>
                <a onClick={this.props.onButtonClick2} className="refresh" >Refresh People<i className="fas fa-redo-alt"></i></a>
            </div>
        </div>)
    }
}
export default InputFields;