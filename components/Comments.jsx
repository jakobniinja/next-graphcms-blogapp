import React, { useEffect, useState } from 'react';
import Moment from 'moment';
import parse from 'html-react-parser';
import { getComments } from '../services';

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    // getComments(slug)

  }, []);

  return (

    <>
      <h2>comments</h2>
    </>
  );
};

export default Comments;
