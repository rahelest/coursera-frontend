import React, { Component } from 'react';

class DishDetail extends Component {
    render() {
        if (this.props.dish == null) {
            return <div />;
        }

        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">{/* Dish details */}</div>
                <div className="col-12 col-md-5 m-1">{/* Comments */}</div>
            </div>
        );
    }
}

export default DishDetail;
