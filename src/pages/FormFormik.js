import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import '../styles/Reserve.css';
import Header from '../components/Layout/Header';

/*To save us even more time and to make our code much better and easier, Formik comes with few built in components.
 They are <Formik />, <Form />, <Field />, and <ErrorMessage /*/ 


export default function FormFormik() {
return(<>
    <Header/>
    <Formik 
        initialValues= {{name: '',date: '', time:'',count: '',EmailId:'',occasion:''}} 
        validationSchema={
            yup.object({ 
                name: yup.string().max(20,'Name should not exceed 20 Characters').required('Please enter name'),
                date: yup.date().min(new Date()).required(),
                time: yup.string().required('Please choose time'),
                count: yup.string().required('Please choose count'),
                EmailId:  yup.string().email('Invalid email address').required('Please enter email Id')})} 
        onSubmit= {(values, { resetForm }) => 
        {alert("Table Reserved!"); 
        resetForm();
        }}>
  
    {props=>(

        <div> 
        <Form onSubmit={props.handleSubmit}>
            <h1>RESERVATION FORM</h1>
           
    
            <p>
                <label htmlFor="Name">Name </label>
                <Field name="name" type="text" aria-required="true"></Field> 
                <ErrorMessage name="name"  render={msg => <div className="error">{msg}</div>}/>
            </p>
    
            <p>
                <label htmlFor="date">Choose date</label>   
                <Field name="date" type="date"  aria-required="true"></Field>
                <ErrorMessage name="date"  render={msg => <div className="error">{msg}</div>}/>
            </p>
            <p>
                <label htmlFor="time">Choose time</label>
                <Field name="time" type="time"  aria-required="true"></Field>
                <ErrorMessage name="time" render={msg => <div className="error">{msg}</div>}/>
            </p>
    
            <p> <label htmlFor="count">Number of guests</label>
                <Field name="count" type="number"  aria-required="true"></Field>
                <ErrorMessage name="count" render={msg => <div className="error">{msg}</div>}/>

            </p>
    
            <p>  
                <label>Occasion</label>
                <Field name="occasion" as="select" placeholder="select occasion"  aria-required="true">   
                    <option value="">Select occasion</option>     
                    <option value="Birthday">Birthday</option>    
                    <option value="Anniversary">Anniversary</option>   
                </Field>            
            </p>

            <p>
                <label htmlFor="EmailId">Email</label>
                <Field name="EmailId" type="text" aria-required="true"></Field>
                <ErrorMessage name="EmailId"render={msg => <div className="error">{msg}</div>}/>
    
            </p>


            <button type="submit" className="submitButton" disabled={props.isValid===false}>Reserve</button>
    
        </Form>
        </div>

    )}
  
      </Formik>
      </>
    );
  

}



