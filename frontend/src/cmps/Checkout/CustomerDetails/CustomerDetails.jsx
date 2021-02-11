import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { Supply } from "../Supply/Supply";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
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

export function CustomerDetails({ onSaveDetails, customerDetails }) {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log("errors:", errors);
    console.log(data);
    onSaveDetails(data);
  };

  return (
    <div className="main-container">
      <div className="details-container">
        <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
          <section>
            <TextField
              floatingLabelText="שם"
              type="text"
              id="name"
              name="firstName"
              label="שם פרטי"
              variant="outlined"
              // color="secondary"
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
        <Supply />
      </div>
      <button className="btn" onClick={handleSubmit(onSubmit)}>
        המשך לתשלום
      </button>
    </div>
  );
}
