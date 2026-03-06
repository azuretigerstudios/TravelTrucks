import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from '../Button/Button';

// Validasyon Şeması
const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  bookingDate: Yup.date().required('Booking date is required'),
  comment: Yup.string(),
});

const BookingForm = () => {
  const initialValues = {
    name: '',
    email: '',
    bookingDate: '',
    comment: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    // Burada aslında backend'e POST isteği atılır.
    console.log('Rezervasyon verileri:', values);
    
    // Kullanıcıya başarılı bildirimi göster
    alert('Rezervasyonunuz başarıyla alındı!'); 
    
    // Formu sıfırla
    resetForm();
  };

  return (
    <div style={{ padding: '24px', border: '1px solid #DADDE1', borderRadius: '10px' }}>
      <h3 style={{ marginBottom: '10px' }}>Book your campervan now</h3>
      <p style={{ color: '#475467', marginBottom: '24px' }}>Stay connected! We are always ready to help you.</p>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div>
              <Field 
                name="name" 
                placeholder="Name" 
                style={{ width: '100%', padding: '18px', borderRadius: '10px', border: 'none', background: '#F7F7F7' }} 
              />
              <ErrorMessage name="name" component="div" style={{ color: 'red', fontSize: '12px', marginTop: '5px' }} />
            </div>

            <div>
              <Field 
                name="email" 
                type="email" 
                placeholder="Email" 
                style={{ width: '100%', padding: '18px', borderRadius: '10px', border: 'none', background: '#F7F7F7' }} 
              />
              <ErrorMessage name="email" component="div" style={{ color: 'red', fontSize: '12px', marginTop: '5px' }} />
            </div>

            <div>
              <Field 
                name="bookingDate" 
                type="date" 
                style={{ width: '100%', padding: '18px', borderRadius: '10px', border: 'none', background: '#F7F7F7' }} 
              />
              <ErrorMessage name="bookingDate" component="div" style={{ color: 'red', fontSize: '12px', marginTop: '5px' }} />
            </div>

            <div>
              <Field 
                name="comment" 
                as="textarea" 
                placeholder="Comment" 
                rows="4" 
                style={{ width: '100%', padding: '18px', borderRadius: '10px', border: 'none', background: '#F7F7F7', resize: 'none' }} 
              />
            </div>

            <Button type="submit" customStyle={{ marginTop: '10px' }} disabled={isSubmitting}>
              Send
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookingForm;