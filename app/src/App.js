import React, { Component } from 'react';
import './App.css';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Review from './Review';

class App extends Component {
  render() {
    return (
      <Query
        query={gql`
          {
            products {
              id
              name
              price
              reviews {
                title
                comment
                rating
              }
            }
          }
        `}
        >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;

          return data.products.map(({ id, name, price, reviews }) => (
            <div key={id}>
              <h2>{name}</h2>
              <p>INR {price}/ea</p>
              Ratings:
              {reviews.map((review) => <Review key={id} review={review} />)}
              <hr />
            </div>
          ));
        }}
      </Query>
    );
  }
}

export default App;
