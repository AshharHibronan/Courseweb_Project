import React, {Component} from 'react'
import {Button} from 'reactstrap';

export default class ManageAdminContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Button color="success" onClick={() => {
                    document.location.href = "registerAdmin.html";
                }}>Add Admin</Button>
            </div>
        )
    }
}