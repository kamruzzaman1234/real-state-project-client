// src/components/Comments.js
import React, { useState } from 'react';

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment) {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  return (
    <div className="mt-8">
      <h3 className="text-lg text-white font-semibold mb-4">Comments</h3>
      <form onSubmit={handleCommentSubmit}>
        <textarea
          className="w-full p-2 border border-gray-300 rounded-lg"
          placeholder="Write your comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button className="bg-[#FF5A3A] text-white px-4 py-2 rounded-lg mt-2">Post Comment</button>
      </form>
      <div className="mt-4">
        {comments.length > 0 ? (
          comments.map((com, index) => (
            <div key={index} className="border-b text-white border-gray-300 py-2">
              {com}
            </div>
          ))
        ) : (
          <p className="text-white">No comments yet.</p>
        )}
      </div>
    </div>
  );
};

export default Comments;
