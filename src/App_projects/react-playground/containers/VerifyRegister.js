import React from "react";
import {
  Grid,
  classOf,
  Button,
  Style,
  axios,
  headers,
  Const_function
} from "../assets/state";
import { toast } from "react-toastify";

const style = {
  form: {
    maxWidth: 500,
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: 40
  },
  formGroup: {
    flexWrap: "nowrap"
  },
  btn: {
    whiteSpace: "nowrap",
    marginLeft: 10
  }
};

const { classes } = Style(style);

const VerifyRegister = () => {
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [verifyCode, setVerifyCode] = React.useState("");
  const [showInput, setShowInput] = React.useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post(
        "/api/v3/customer/verify",
        {
          phone_number: phoneNumber,
          verify_code: verifyCode
        },
        { headers }
      )
      .then(res => {
        console.log(res);
        if (res.data.status === 101) {
          Const_function.setLocalStorage(
            "validToken",
            res.data.info.validToken
          );
          Const_function.setLocalStorage(
            "customerData",
            JSON.stringify(res.data.info.customerData)
          );
        } else if (res.data.status === 102) {
          toast.error(res.data.message, {
            position: toast.POSITION.TOP_RIGHT
          });
        }
      });
  };
  const verifyAgain = e => {
    e.preventDefault();

    axios
      .post(
        "/api/v3/customer/login",
        { phone_number: phoneNumber },
        { headers }
      )
      .then(res => {
        if (res.data.status === 101) {
          setShowInput(true);
          toast.success("کد فعالسازی برای شما ارسال شد", {
            position: toast.POSITION.TOP_RIGHT
          });
        } else {
          toast.error(res.data.message, {
            position: toast.POSITION.TOP_RIGHT
          });
        }
      });
  };
  return (
    <section>
      <Grid fluid>
        {!showInput && (
          <form className={classes.form} onSubmit={verifyAgain}>
            <div className={[classOf.inputGroup, classes.formGroup].join(" ")}>
              <input
                className={classOf.formControl}
                type="number"
                placeholder="شماره همراه"
                min="0"
                name="phone_numer"
                value={phoneNumber}
                onChange={e => setPhoneNumber(e.target.value)}
              />
              <div className={classOf.inputGroupBtn}>
                <Button primary type="submit" className={classes.btn}>
                  دریافت کد
                </Button>
              </div>
            </div>
          </form>
        )}
        {showInput && (
          <form className={classes.form} onSubmit={handleSubmit}>
            <div className={[classOf.inputGroup, classes.formGroup].join(" ")}>
              <input
                className={classOf.formControl}
                type="text"
                name="verify_code"
                value={verifyCode}
                onChange={e => setVerifyCode(e.target.value)}
              />
              <div className={classOf.inputGroupBtn}>
                <Button primary type="submit" className={classes.btn}>
                  ورود به سایت
                </Button>
              </div>
            </div>
          </form>
        )}
      </Grid>
    </section>
  );
};

export default VerifyRegister;
