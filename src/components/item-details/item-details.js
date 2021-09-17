import React, { Component } from "react";
import Spinner from "../spinner/"
import "./item-details.css"


const Record = ({ item, field, label }) => {
    return (
        <li className="list-group-item">
            <span>{label + " "}</span>
            <span>{item[field]}</span>
        </li>
    )
}
export {
    Record
}

export default class ItemDetails extends Component {

    state = {
        item: null,
        image: null,
        loading: false
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
        const { item, image, loading } = this.state;
        const children = this.props.children
        const spinner = loading ? <Spinner /> : null;
        const content = !loading ? < Details item={item} image={image} children={children} /> : null;
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

const Details = ({ item, image, children }) => {
    const { name } = item
    return (
        <React.Fragment>
            <div className="img-inner">
                <img alt="/#" src={image} />
            </div>
            <div className="card-body">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(children, (child) => {
                            return React.cloneElement(child, { item });
                        })
                    }
                </ul>
            </div>
        </React.Fragment>
    )
}

