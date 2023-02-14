import React from "react";
import { Formik, Form, Field } from "formik";

import styles from "./Checkout.module.css";

import CloseButton from "../UI/CloseButton/CloseButton";
import OrderButton from "../UI/OrderButton/OrderButton";

function validateUserName(userName) {
  let error;

  if (!userName) {
    error = "The user name field can't be empty";
  }

  return error;
}

function validateStreet(street) {
  let error;

  if (!street) {
    error = "The street field can't be empty";
  } else if (street.length < 4) {
    error = "The street field is too short";
  }

  return error;
}

function validatePostalCode(postalCode) {
  let error;

  if (!postalCode) {
    error = "The postal code field can't be empty";
  } else if (isNaN(postalCode)) {
    error = "The postal code field can't contain any letters";
  } else if (Math.round(postalCode) !== +postalCode) {
    error = "The postal code field can't float numbers";
  }

  return error;
}

function validateCity(city) {
  let error;

  if (!city) {
    error = "The error field can't be empty";
  }

  return error;
}

export default function Checkout({ goBack, ...props }) {
  return (
    <Formik
      initialValues={{ userName: "", street: "", postalCode: "", city: "" }}
      onSubmit={(event) => {
        event.preventDefault();
        console.log(event);
      }}
      initialErrors={{
        userName: "The field is empty",
        street: "The field is empty",
        postalCode: "The field is empty",
        city: "The field is empty",
      }}
    >
      {({ errors, isValid, touched, ...props }) => {
        const userNameClassName = `${styles["form-control__input"]} ${
          errors.userName && touched.userName && styles["_invalid"]
        }`;
        const streetClassName = `${styles["form-control__input"]} ${
          errors.street && touched.street && styles["_invalid"]
        }`;
        const postalCodeClassName = `${styles["form-control__input"]} ${
          errors.postalCode && touched.postalCode && styles["_invalid"]
        }`;
        const cityClassName = `${styles["form-control__input"]} ${
          errors.city && touched.city && styles["_invalid"]
        }`;

        return (
          <Form onSubmit={props.handleSubmit} className={styles["form"]}>
            <div className={styles["form-control"]}>
              <div className={userNameClassName}>
                <label htmlFor="userName">Your name</label>
                <Field
                  type="text"
                  name="userName"
                  id="userName"
                  validate={validateUserName}
                ></Field>
                {errors.userName && touched.userName && (
                  <p>{errors.userName}</p>
                )}
              </div>
              <div className={streetClassName}>
                <label htmlFor="street">Street</label>
                <Field
                  type="text"
                  name="street"
                  id="street"
                  validate={validateStreet}
                ></Field>
                {errors.street && touched.street && <p>{errors.street}</p>}
              </div>
              <div className={postalCodeClassName}>
                <label htmlFor="postalCode">Postal code</label>
                <Field
                  type="text"
                  name="postalCode"
                  id="postalCode"
                  validate={validatePostalCode}
                ></Field>
                {errors.postalCode && touched.postalCode && (
                  <p>{errors.postalCode}</p>
                )}
              </div>
              <div className={cityClassName}>
                <label htmlFor="city">City</label>
                <Field
                  type="text"
                  name="city"
                  id="city"
                  validate={validateCity}
                ></Field>
                {errors.city && touched.city && <p>{errors.city}</p>}
              </div>
            </div>
            <div className={styles["form-actions"]}>
              <CloseButton type="button" onClick={goBack}>
                Back
              </CloseButton>
              {isValid ? (
                <OrderButton type="submit">Confirm</OrderButton>
              ) : (
                <OrderButton disabled type="submit">
                  Confirm
                </OrderButton>
              )}
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
