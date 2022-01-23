import React from "react";
import moment from "moment";
import { Form, Formik, Field } from "formik";
import { useDispatch } from "react-redux";
import avatar from "../assets/images/avatar.png";
import { CommentType, CreateCommentType } from "../types/types";
import { createComment } from "../redux/actions";
import { useAppSelector } from "../hooks/useAppDispatch";
import { useParams } from "react-router-dom";

const Comments = () => {
  const { id } = useParams();
  const state = useAppSelector((state) => state);
  const dispatch = useDispatch();

  const sendForm = (values: CreateCommentType) => {
    dispatch(createComment(values));
  };

  return (
    <div className=' pt-4 border-top'>
      <h4 className='mb-5'>Comments</h4>
      <Formik
        initialValues={{
          articleId: id,
          content: "",
          // this will be name of the user
          author: "Annette Bell",
        }}
        onSubmit={(values, { resetForm }) => {
          sendForm(values);
          resetForm();
        }}>
        <Form>
          <div className='d-flex mb-5'>
            <label htmlFor='content'>
              <div className='avatar'>
                {/* avatars will be user picture */}
                <img src={avatar} alt='author' className='w-100' />
              </div>
            </label>
            <Field
              type='text'
              className='form-control'
              id='content'
              name='content'
              placeholder='Join the discussion'
            />
          </div>
        </Form>
      </Formik>
      {state.comments?.map((item: CommentType) => (
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
            <p className='mb-4'>{item.content}</p>
            {/* TODO: implement increase and decrease score */}
            {/* <div className='d-flex align-items-center mb-3'>
              <p className='mb-0'>+{item.score}</p>
              <button className='btn'>nahoru</button>
              <button className='btn'>dolů</button>
            </div> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
