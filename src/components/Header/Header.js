import React from 'react'
import { Link } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
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
        return (
            <>
                <div className="top row">
                    <div className="col-4"></div>
                    <div className="col-4"><Link to='/'><h1>Bit People</h1></Link></div>
                    <div className="col-4">
                        <Link to="/about" className="about">About</Link>
                        <a onClick={this.props.onButtonClick} className="button " ><i className="fas fa-th-large"></i></a>
                        <a onClick={this.props.onButtonClick2} className="refresh" ><i className="fas fa-redo-alt"></i></a>
                    </div>

                </div>
                <div className="row">
                    <div className="col-4">
                        <div className="col-10"></div>
                        <div className="col-2"><i class="fas fa-search"></i>
                        </div>


                    </div>
                    <input type="text " className="col-4" value={this.state.inputValue} onChange={this.handleChange} placeholder="Search people"></input>
                    <div className="col-4"></div>
                </div>
            </>)
    }


}
export default Header;