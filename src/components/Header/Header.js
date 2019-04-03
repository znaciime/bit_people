import React from 'react'
import { Link } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);

    }



    render() {
        return (
            <>
                <div className="top row">
                    <div className="col-4"></div>
                    <div className="col-4"><Link to='/'><h1>Bit People</h1></Link></div>
                    <div className="col-4">



                    </div>

                </div>
                <div className="row">





                </div>
            </>)
    }


}
export default Header;