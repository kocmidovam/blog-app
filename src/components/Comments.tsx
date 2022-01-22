import React from "react";
import moment from "moment";
import avatar from "../assets/images/avatar.png";
import { CommentType } from "../types/types";

type Props = {
  comments: CommentType[];
};

const Comments = ({ comments }: Props) => {
  console.log("comments", comments);

  return (
    <div className=' pt-4'>
      <h4 className='mb-5'>Comments</h4>
      {comments?.map((item: CommentType) => (
        <div className='d-flex' key={item.commentId}>
          <div className='avatar'>
            <img src={avatar} alt={item.author} className='w-100' />
          </div>
          <div>
            <div className='d-flex align-items-center mb-1'>
              <p className='fw-bold mb-0 me-3'>{item.author}</p>
              <p className='text-muted fs-7 mb-0'>
                {moment
                  .utc(item.createdAt)
                  .local()
                  .startOf("seconds")
                  .fromNow()}
              </p>
            </div>

            <p className='mb-2'>{item.content}</p>
            <div className='d-flex align-items-center mb-3'>
              <p className='mb-0'>+{item.score}</p>
              <button className='btn'>nahoru</button>
              <button className='btn'>dolů</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
