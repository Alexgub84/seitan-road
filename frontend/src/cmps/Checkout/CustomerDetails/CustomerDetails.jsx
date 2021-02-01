import React from "react";

import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { Supply } from "../Supply/Supply";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: 200,
    },
  },
}));

export function CustomerDetails({
  onNextClick,
  handleChange,
  customerDetails,
}) {
  const classes = useStyles();

  // const validate = () => {
  //   let temp = {};
  //   temp.firstName = values.firstName ? "" : "מלאו שם פרטי";
  //   temp.lastName = values.lastName ? "" : "מלאו שם משפחה";
  //   temp.phone = values.phone > 9 ? "" : "מלאו מספר טלפון תקני ";
  //   temp.email = /$|.+@.+..+/.test(values.email) ? "" : "מלאו אימייל תקני ";
  //   temp.town = values.town ? "" : "מלאו את העיר";
  //   temp.street = values.street ? "" : "מלאו הכתובת";
  // };

  // const [errors, setErrors] = useState({});

  return (
    <div className="main-container">
      <div className="details-container">
        <form className={classes.root}>
          <section>
            <TextField
              required
              error
              floatingLabelText="שם"
              type="text"
              id="name"
              name="firstName"
              label="שם פרטי"
              variant="outlined"
              color="secondary"
              value={customerDetails.firstName}
              onChange={handleChange}
            />
          </section>
          <section>
            <TextField
              required
              type="text"
              id="lastname"
              name="lastName"
              label="שם משפחה"
              variant="outlined"
              color="secondary"
              value={customerDetails.lastName}
              onChange={handleChange}
            />
          </section>
          <section>
            <TextField
              required
              type="tel"
              id="phone"
              name="phone"
              label="מס' טלפון "
              variant="outlined"
              color="secondary"
              value={customerDetails.phone}
              onChange={handleChange}
            />
          </section>
          <section>
            <TextField
              required
              type="email"
              id="email"
              name="email"
              label="אימייל "
              variant="outlined"
              color="secondary"
              value={customerDetails.email}
              onChange={handleChange}
            />
          </section>
          <section>
            <TextField
              required
              type="text"
              id="town"
              name="town"
              label="עיר"
              variant="outlined"
              color="secondary"
              value={customerDetails.town}
              onChange={handleChange}
            />
          </section>
          <section>
            <TextField
              required
              type="text"
              id="street"
              name="street"
              label="רחוב, בניין, דירה"
              variant="outlined"
              color="secondary"
              value={customerDetails.street}
              onChange={handleChange}
            />
          </section>
        </form>
        <Supply />
      </div>
      <button className="btn" onClick={onNextClick}>
        המשך לתשלום
      </button>
    </div>
  );
}
