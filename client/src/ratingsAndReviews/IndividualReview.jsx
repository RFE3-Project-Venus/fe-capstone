import React from 'react';
import PropTypes from 'prop-types';
import StarRow from '../starRow.jsx';

class IndividualReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpfulRated: false,
    };
  }
  helpfulVote() {
    if (this.state.helpfulRated === false) { this.props.review.helpfulness++; }
    this.setState({helpfulRated: true});
  }

  render() {
    let review = this.props.review;
    // let body;
    // if (props.review.body.length <= 250) {
    //   body = <p>{props.review.body}</p>
    // } else {
    //   body = <p id='review-body'>{props.review.body.slice(0,250) + '...'}
    //   <span onClick={() => {document.getElementById('review-body').value = this.state.reviewBodyExtra}}>Show more...</span>
    //   </p>
    // }
    // review.summary = 'It was the best of shreks, it was the worst of shreks, it was the age of shrekdom, it was the age of shrekishness, it was the epoch of shreklief, it was the epoch of inshrekulity'; //long summary test
    let summary = review.summary;
    if (summary.length > 60) {
      summary = <div><b>{review.summary.slice(0, 60)}...</b><p>...{review.summary.slice(60, review.summary.length)}</p></div>;
    } else {
      summary = <b>{review.summary}</b>;
    }

    let body = null;
    review.body = 'It was the best of shreks, it was the worst of shreks, it was the age of shrekdom, it was the age of shrekishness, it was the epoch of shreklief, it was the epoch of inshrekulity, it was the shrekson of light, it was the shrekson of darkness, it was  the swamp of hope, it was the farquaad of shrekspair.'; //long summary test
    if (review.body.length <= 250) {
      body = <p>{review.body}</p>;
    } else {
      body = <div>
        <p id='review-body'>{review.body.slice(0, 251)}</p>
        <span id='review-body-show' onClick={ ()=> { document.getElementById('review-body').innerHTML = review.body; document.getElementById('review-body-show').style.visibility = 'hidden';}} >Show More...</span>
      </div>;
    }

    let response = null;
    //review.response = 'im a seller and give me all ya monayyyy~';
    if (review.response) {
      response = <p className='seller-response'>{review.response}</p>;
    }

    //review.rating = 2.5;
    //review.recommend = false;
    let recommend = null;
    if (review.recommend) {
      recommend = <span>&#10003; I recommend this product</span>;
    }
    return (
      <div>
        <StarRow size={15} rating={review.rating * 20} />
        <span>{review.reviewer_name}</span>
        <p>{new Date(review.date).toLocaleString('en-US', {month: 'long', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'})}</p>
        <div>{summary}</div>
        {/* <b>{review.summary} - <em>use ... to truncate me into one line</em></b> */}
        <div>{body}</div>
        {/* <p>{review.body} - <em>slice me into 250 char, w a <b>Show more</b> link</em></p> */}
        <p>{recommend}</p>
        <span>{response}</span>
        <p>Helpful? <span onClick={() => { this.helpfulVote(); }}>Yes</span> ({review.helpfulness})</p>
        <p>{JSON.stringify(this.props.review)}</p>
      </div>
    );
  }
}

IndividualReview.propTypes = {
  review: PropTypes.object
};

export default IndividualReview;
