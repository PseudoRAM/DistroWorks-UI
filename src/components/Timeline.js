import React from 'react';
import styled from 'styled-components';

const Holder = styled.div`
  width: 100%;
`;

const BusinessImg = styled.img`
  height: 24px !important;
  width: 24px !important;
`;

const FigureHolder = styled.figure`
  height: 24px !important;
  width: 24px !important;
  background: #fff !important;
  line-height: inherit !important;
`;

const PositionTitle = styled.p`
  font-weight: 400;
  margin: 0 !important;
`;

const PositionDuration = styled.p`
  font-weight: 200;
  font-size: 12px;
  margin: 0 0 0.3rem !important;
`;

const Reviews = styled.p`
  font-weight: 200;
  font-size: 14px;
  margin: 0 0 0.8rem !important;
`;

const Reviewee = styled.span`
  display: block;
  font-style: italic;
  color: #666;
  text-align: right;
  padding-right: 20px;
  font-size: 13px;

  margin-bottom: 10px;
`;

const EmptyHolder = styled.div`
  background: #fff !important;
`;
/* const getTimeLine = () => {

} */

const getPositions = (noContent = false) => {
  if (!noContent) {
    const pList = [];
    pList.push(
      addPosition(
        'Developer',
        'Westpac',
        'March 2019',
        'April 2019',
        'https://d2ojpxxtu63wzl.cloudfront.net/static/b440edf67d07eb0232088356081ea6f3_367c5a7a015287bda91e94ecc3c19740721e55bca1e1fcc1b8700f0019f302a5',
        [
          { review: 'He is a good lad', reviewer: 'Jim Beam, CEO' },
          {
            review: 'He is a very good lad',
            reviewer: 'Joe Smith, Solution Designer'
          }
        ]
      )
    );
    pList.push(
      addPosition(
        'Developer',
        'Accenture',
        'April 2019',
        'June 2019',
        'data:image/png;base64,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',
        [
          {
            review: 'What a good developer',
            reviewer: 'Bob Norris, Developer'
          }
        ]
      )
    );
    pList.push(
      addPosition(
        'UX Designer',
        'Telstra',
        'June 2019',
        null,
        'http://2.bp.blogspot.com/-eNkFmA6rjpY/TnZbIVnfHdI/AAAAAAAACJg/__LO9rHraNg/s500/Telstra+icon+blue.png',
        []
      )
    );
    return pList;
  } else {
    return (
      <EmptyHolder className='empty'>
        <p className='empty-title h5'>You have no experience listed</p>
        <p className='empty-subtitle'>
          Please add work experience to create job history review timeline.
        </p>
      </EmptyHolder>
    );
  }
};

const getReviews = reviews => {
  const reviewDivs = [];
  for (let i = 0; i < reviews.length; i++) {
    reviewDivs.push(
      <span>
        &#8220;{reviews[i].review}&#8220;
        {!reviews[i].reviewer ? null : (
          <Reviewee>- {reviews[i].reviewer}</Reviewee>
        )}
      </span>
    );
  }
  return reviewDivs;
};

const addPosition = (
  position,
  business,
  start,
  end = null,
  img,
  reviews = null
) => {
  return (
    <div className='timeline-item' id='timeline-example-1'>
      <div className='timeline-left'>
        <a
          className='timeline-icon icon-lg tooltip'
          href='#timeline-example-2'
          data-tooltip='February 2017'
        >
          <FigureHolder className='avatar avatar-xl'>
            <BusinessImg src={img} alt='...' />
          </FigureHolder>
        </a>
      </div>
      <div className='timeline-content'>
        <div className='tile'>
          <div className='tile-content'>
            <PositionTitle>{position}</PositionTitle>
            <PositionDuration className='tile-subtitle'>
              {business} | {start} - {!end ? 'Prescent' : end}
            </PositionDuration>
            <Reviews className='tile-title'>{getReviews(reviews)}</Reviews>
          </div>
        </div>
      </div>
    </div>
  );
};

class Timeline extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    return <Holder className='timeline'>{getPositions(false)}</Holder>;
  }
}

export default Timeline;
