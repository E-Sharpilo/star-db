import React, { Component } from "react";
import Spinner from "../spinner/"


const withData = (Viev, getData) => {
    return class extends Component {
        state = {
            data: null,
        };

        componentDidMount() {
            getData().then((data) => {
                this.setState({
                    data
                })
            })
        }
        render() {
            const { data } = this.state;
            if (!data) {
                return <Spinner />
            }
            return <Viev{...this.props} data={data} />
        }
    }
}

export default withData;