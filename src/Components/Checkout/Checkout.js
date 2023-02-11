import React from "react";
import { Formik, Form, Field } from "formik";

import styles from "./Checkout.module.css";

import CloseButton from "../UI/CloseButton/CloseButton";
import OrderButton from "../UI/OrderButton/OrderButton";

export default function Checkout(props) {
  function submitHandler(event) {
    // event.preventDefault();
    console.log("Hello");
  }

  return (
    <div>
      <Formik
        initialValues={{ userName: "Hi", street: "", postalCode: "", city: "" }}
        onSubmit={submitHandler}
      >
        {(props) => (
          <Form className={styles["form"]}>
            <div className={styles["form-control"]}>
              <div className={styles["form-control__input"]}>
                <label htmlFor="userName">Your name</label>
                <Field type="text" name="userName" id="userName"></Field>
              </div>
              <div className={styles["form-control__input"]}>
                <label htmlFor="street">Street</label>
                <Field type="text" name="street" id="street"></Field>
              </div>
              <div className={styles["form-control__input"]}>
                <label htmlFor="postalCode">Postal code</label>
                <Field type="text" name="postalCode" id="postalCode"></Field>
              </div>
              <div className={styles["form-control__input"]}>
                <label htmlFor="city">City</label>
                <Field type="text" name="city" id="city"></Field>
              </div>
            </div>
            <div className={styles["form-actions"]}>
              <CloseButton />
              <OrderButton >Confirm</OrderButton>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
