// import moment from 'moment';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { getRecentPosts, getSimilarPosts } from '../services';

const PostWidget = ({ categories, slug }) => {
  const [relatedPost, setRelatedPost] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => setRelatedPost(result));
    } else {
      getRecentPosts().then((result) => setRelatedPost(result));
    }
  }, [slug]);
  console.log(`rl post:${relatedPost}`);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8 ">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {slug ? 'Released Post' : 'Recent Posts'}
      </h3>
      {relatedPost.map((post) => (
        <div key={post.title} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <img
              src={post.featuredImage.url}
              alt={post.title}
              width="60px"
              height="60px"
              className="align-middle rounded-full"
            />
          </div>
          <div className="flex-grow ml-4 ">
            <p className="text-gray-500 font-xs">
              {moment(post.createAt).format('MMM DD YYYY')}{' '}
            </p>
            <Link
              rel="stylesheet"
              href={`/post/${slug}`}
              key={post.title}
              className="text-md "
            >
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
