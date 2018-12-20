import React, { Component } from 'react';

class Review extends Component {
    
    render() {
        return (
        <div class="grid-container">
            <div class="grid-item">
                <div class="row">
                    <div class="col-sm-4">
                        <h4>{this.props.review.title} </h4>
                    </div>
                    <div class="col-sm-4">
                        <span> Price: {this.props.review.comment} </span>
                    </div>
                </div>
            </div>
        </div>    
        )
}    
}

export default Review;
