import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';

function RenderDish({ dish }) {
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

function RenderComments({ comments }) {
    if (comments == null) {
        return <div />;
    }

    return (
        <div>
            <h4>Comments</h4>
            <ul className="list-unstyled">
                {comments.map(({ comment, author, date }) => {
                    const options = {
                        year: 'numeric',
                        month: 'short',
                        day: '2-digit',
                    };
                    const formattedDate = new Intl.DateTimeFormat(
                        'en-US',
                        options
                    ).format(new Date(Date.parse(date)));

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

const DishDetail = (props) => {
    if (props.dish == null) {
        return <div />;
    }

    return (
        <div className="row">
            <div className="col-12 col-md-5 m-1">
                {RenderDish(props.dish)}
            </div>
            <div className="col-12 col-md-5 m-1">
                {RenderComments(props.dish.comments)}
            </div>
        </div>
    );
};

export default DishDetail;
