import React from 'react'
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";

function Params() {
    return (
        <Router>
            <Link to={{pathname: "https://us-central1-sfhacksdhw-21f89.cloudfunctions.net/getUrls", search: "?user=Hervin"}}>
                Link
            </Link>
        </Router>

    )
}

export default class Form extends React.Component {
    state = {
        username: '',
    }

    url = "https://us-central1-sfhacksdhw-21f89.cloudfunctions.net/getUrls?user="

    render() {
        return (
            <Router>
                <Link to={{pathname: "https://us-central1-sfhacksdhw-21f89.cloudfunctions.net/getUrls", search: "?user=Hervin"}}>
                    Link
                </Link>
            </Router>
        )
    }
}
