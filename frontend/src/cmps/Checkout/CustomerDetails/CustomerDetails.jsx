import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { Supply } from "../Supply/Supply";
import { Payment } from "./Payment";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
  },
}));

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  phone: yup.string().required().min(9),
  email: yup.string().required(),
  town: yup.string().required(),
  street: yup.string().required(),
});

export function CustomerDetails({
  onSaveDetails,
  customerDetails,
  onSavePayment,
  settings,
  total,
  supply,
  onNextClick,
}) {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log("errors:", errors);
    onSaveDetails(data);
  };

  return (
    <div className="details-container">
      <section className="details">
        <h3>פרטים אישיים</h3>
        <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
          <section>
            <TextField
              floatingLabelText="שם"
              type="text"
              id="name"
              name="firstName"
              label="שם פרטי"
              variant="outlined"
              style={{ direction: "rtl" }}
              defaultValue={customerDetails.firstName}
              inputRef={register}
            />
          </section>
          <section>
            <TextField
              type="text"
              id="lastname"
              name="lastName"
              label="שם משפחה"
              variant="outlined"
              color="secondary"
              defaultValue={customerDetails.lastName}
              inputRef={register}
            />
          </section>
          <section>
            <TextField
              type="tel"
              id="phone"
              name="phone"
              label="מס' טלפון "
              variant="outlined"
              color="secondary"
              defaultValue={customerDetails.phone}
              inputRef={register}
            />
          </section>
          <section>
            <TextField
              type="email"
              id="email"
              name="email"
              label="אימייל "
              variant="outlined"
              color="secondary"
              defaultValue={customerDetails.email}
              inputRef={register}
            />
          </section>
          <section>
            <TextField
              type="text"
              id="town"
              name="town"
              label="עיר"
              variant="outlined"
              color="secondary"
              defaultValue={customerDetails.town}
              inputRef={register}
            />
          </section>
          <section>
            <TextField
              type="text"
              id="street"
              name="street"
              label="רחוב, בניין, דירה"
              variant="outlined"
              color="secondary"
              defaultValue={customerDetails.street}
              inputRef={register}
            />
          </section>
        </form>
      </section>
      <section className="supply">
        <h3>סוג המשלוח</h3>
        <Supply />
      </section>
      <section className="total-payment">
        <h3>סיכום ההזמנה</h3>
        <section className="total">
          <h4>סך הכל בסל הקניות</h4>
          <div className="total-numbers">
            <section className="numbers">
              <div>
                <span>מוצרים</span>
                <span> {total}₪</span>
              </div>
              {supply.type && (
                <div>
                  <span>דמי משלוח</span>
                  <span>{supply.price}₪</span>
                </div>
              )}
            </section>

            <section className="numbers-summary">
              <span>סך הכל לתשלום</span>
              <span>{supply.price + total}₪ </span>
            </section>
          </div>
        </section>
        <section className="payment">
          <h3>אפשרויות תשלום</h3>
          <Payment onSavePayment={onSavePayment} settings={settings} />
          <button className="purchase-button" onClick={onNextClick}>
            אישור הזמנה
          </button>
        </section>
      </section>
    </div>
  );
}
