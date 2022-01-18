import React, { useRef } from "react";
import { Form, Formik, Field } from "formik";

const ArticleCreate = () => {
  const inputEl = useRef<HTMLInputElement>(null);
  return (
    <Formik
      initialValues={{
        title: "",
        perex: "",
        content: "",
        image: "",
      }}
      // validationSchema={createArticleSchema}
      onSubmit={(values, { resetForm }) => {
        console.log("data for send", values);
        // resetForm()
      }}>
      {({ values, errors, touched, setTouched }) => (
        <div className='container'>
          <div className='d-flex mt-5 mb-5'>
            <h3 className='me-4'>Create new article</h3>
            <button className='btn btn-primary'>Publish Article</button>
          </div>
          <Form>
            <div className='mb-4'>
              <label className='mb-3'>Article Title</label>
              <Field
                type='text'
                className='form-control'
                id='title'
                name='title'
                placeholder='My First Article'
              />
            </div>

            <div className='mb-4'>
              <label className='mb-3'>Perex</label>
              <Field
                component='textarea'
                rows='3'
                className='form-control'
                id='perex'
                name='perex'
                placeholder='Perex'
              />
            </div>

            <div className='mb-4'>
              <label className='mb-3'>Featured image</label>
              <input
                ref={inputEl}
                type='file'
                name='image'
                accept='.png, .jpg, .jpeg'
                className='form-control'
              />
            </div>
            <div className='mb-4'>
              <label className='mb-3'>Content</label>
              <Field
                component='textarea'
                rows='8'
                className='form-control'
                id='content'
                name='content'
                placeholder='Supports markdown. Yay!'
              />
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default ArticleCreate;
