import React from "react";
import { withRouter } from "react-router-dom";
import Col2Style from "../col-2-style"
import { PersonList, PersonDetails } from "../sw-components/"

const PeoplePage = ({ match, history }) => {
    const { id } = match.params
    return (
        <Col2Style
            left={<PersonList onItemSelected={(id) => history.push(id)} />}
            right={<PersonDetails itemId={id}></PersonDetails>} />
    )
}

export default withRouter(PeoplePage)
