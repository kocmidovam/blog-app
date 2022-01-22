import React, { ChangeEvent, useRef } from "react";
import { Form, Formik, Field } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createArticle } from "../redux/actions";
import { mainAxios } from "../apis/apiData";
import { CreateArticleType } from "../types/types";

const createArticleSchema = Yup.object().shape({
  title: Yup.string().required("Article title is required"),
  perex: Yup.string().required("Perex for article is required"),
  content: Yup.string().required("Article content is required"),
});

const MAX_SIZE = 2097152;

const ArticleCreate = () => {
  const inputEl = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sendForm = (values: CreateArticleType) => {
    dispatch(createArticle(values));

    setTimeout(() => {
      navigate(`/`);
    }, 2000);
  };

  const handlePhotoChange = async (files: FileList | null) => {
    if (files) {
      console.log("image", URL.createObjectURL(files[0]));
      if (files[0].size < MAX_SIZE) {
        let formData = new FormData();
        formData.append("file", files[0], files[0].name);
        console.log("data", formData.get("file"));

        // try {
        //   const { data } = await mainAxios.post("/images", formData);
        //   console.log("image data", data);
        //   return data;
        // } catch (error) {
        //   console.error(error);
        // }
      }
    }
  };

  return (
    <Formik
      initialValues={{
        title: "",
        perex: "",
        content: "",
        image: "",
      }}
      validationSchema={createArticleSchema}
      onSubmit={(values, { resetForm }) => {
        console.log("data for send", values);
        sendForm(values);
        resetForm();
      }}>
      {({ values, errors, touched, handleSubmit }) => (
        <div className='container'>
          <div className='d-flex mt-5 mb-5'>
            <h3 className='me-4'>Create new article</h3>
            <button
              className='btn btn-primary'
              type='submit'
              onClick={() => handleSubmit()}>
              Publish Article
            </button>
          </div>
          <Form>
            <div className='mb-4'>
              <label htmlFor='title' className='mb-3 required'>
                Article Title
              </label>
              <Field
                type='text'
                className='form-control'
                id='title'
                name='title'
                placeholder='My First Article'
              />
              {errors.title && touched.title ? (
                <div className='text-danger mt-2'>{errors.title}</div>
              ) : null}
            </div>

            <div className='mb-4'>
              <label htmlFor='perex' className='mb-3 required'>
                Perex
              </label>
              <Field
                component='textarea'
                rows='3'
                className='form-control'
                id='perex'
                name='perex'
                placeholder='Perex'
              />
              {errors.perex && touched.perex ? (
                <div className='text-danger mt-2'>{errors.perex}</div>
              ) : null}
            </div>

            {/* <div className='mb-4'>
              <label className='mb-3'>Featured image</label>
              <input
                ref={inputEl}
                type='file'
                name='image'
                accept='.png, .jpg, .jpeg'
                className='form-control'
                onChange={(e: ChangeEvent) =>
                  handlePhotoChange((e.target as HTMLInputElement).files)
                }
              />
            </div> */}
            <div className='mb-4'>
              <label htmlFor='content' className='mb-3 required'>
                Content
              </label>
              <Field
                component='textarea'
                rows='8'
                className='form-control'
                id='content'
                name='content'
                placeholder="Doesn't support markdown yet"
              />
              {errors.content && touched.content ? (
                <div className='text-danger mt-2'>{errors.content}</div>
              ) : null}
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default ArticleCreate;
