import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    renderDish(dish) {
        return (
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    renderComments(comments) {
        if (comments == null) {
            return <div />;
        }

        return (
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {comments.map(({ comment, author, date }) => {
                        const options = {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric',
                        };
                        const formattedDate = new Intl.DateTimeFormat(
                            'en-US',
                            options
                        ).format(new Date(date));

                        return (
                            <li className="mt-4">
                                <div>{comment}</div>
                                <div className="mt-2">
                                    --{author}, {formattedDate}
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }

    render() {
        if (this.props.dish == null) {
            return <div />;
        }

        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.dish.comments)}
                </div>
            </div>
        );
    }
}

export default DishDetail;
