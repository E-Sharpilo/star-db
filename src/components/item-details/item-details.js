import React, { Component } from "react";
import Spinner from "../spinner"

import "./item-details.css"

export default class ItemDetails extends Component {

    state = {
        item: null,
        loading: true,
        image: null
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    updateItem() {
        const { itemId, getData, getImageUrl } = this.props;
        if (!itemId) {
            return;
        }
        getData(itemId)
            .then((item) => {
                this.setState({
                    item,
                    loading: false,
                    image: getImageUrl(item)
                })
            })
    }

    render() {
        const { loading, item, image } = this.state;
        const spinner = loading ? <Spinner /> : null;
        const content = !loading ? < DetailsItem item={item} image={image} /> : null;
        if (!this.state.item) {
            return <span>Select item</span>
        }
        return (
            <div className="item-details card" >
                {spinner}
                {content}
            </div>
        )
    }
}


const DetailsItem = ({ item, image }) => {
    const { name, hairColor, gender, height, eyeColor, birth } = item;

    return (
        <React.Fragment>
            <div className="img-inner">
                <img alt="/#" src={image} />
            </div>
            <div className="card-body">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Gender: <span>{gender}</span></li>
                    <li className="list-group-item">Birth Year: <span>{birth}</span></li>
                    <li className="list-group-item">Height: <span>{height}</span></li>
                    <li className="list-group-item">Hair Color: <span>{hairColor}</span></li>
                    <li className="list-group-item">Eye Color: <span>{eyeColor}</span></li>
                </ul>
            </div>
        </React.Fragment>
    )
}