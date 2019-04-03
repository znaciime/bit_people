import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
class FailSearch extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="errorpage">
                <Header />
                <i class="far fa-meh"></i>
                <p><b>We couldnt find any</b></p>
                <p><b>people matching</b></p>
                <p><b>your search</b></p>
                <Footer />
            </div>
        )


    }
}





export default FailSearch;