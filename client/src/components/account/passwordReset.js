import { Button, Card, Dialog, DialogActions, DialogContent, DialogTitle } from "@material-ui/core";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import React from "react";
import { MyTextField } from "../builder/specialFeilds";

export default function PasswordReset ({open, setOpen}) {

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <Dialog open={open}>
      <Card>
        <DialogTitle>Password Reset</DialogTitle>
        <Formik
          initialValues={{
            old_password:"",
            new_password:"",
            confirm_password:""
          }}
          validationSchema={Yup.object().shape({
            old_password: Yup.string()
              .test(
                "len",
                "The password must be between 6 and 40 characters.",
                (val) =>
                  val &&
                val.toString().length >= 6 &&
                val.toString().length <= 40
              )
              .required("This field is required!"),
            new_password: Yup.string()
              .test(
                "len",
                "The password must be between 6 and 40 characters.",
                (val) =>
                  val &&
                val.toString().length >= 6 &&
                val.toString().length <= 40
              )
              .required("This field is required!"),
            confirm_password: Yup.string()
              .oneOf([Yup.ref("new_password")], "Passwords must match")
              .required("This field is required!"),
          })}
          onSubmit = {(values, {setSubmitting, resetForm}) => {
            setSubmitting(true)
            console.log(values)
            setOpen(false)
            resetForm()
            setSubmitting(false)
          }}
        >
          {({isSubmitting})=> (
            <Form>
              <DialogContent>
                <MyTextField name='old_password' type='password' lable='Old Password' placeholder='Old Password'/><br/>
                <MyTextField name='new_password' type='password' lable='New Password' placeholder='New Password'/><br/>
                <MyTextField name='confirm_password' type='password'lable='Confirm Password' placeholder='Confirm Password'/><br/>
              </DialogContent>
              <DialogActions>
                <Button
                  id="submit-resetPassword"
                  disabled={isSubmitting}
                  variant="outlined"
                  type="submit"
                  // disabled={isSubmitting}
                  color="primary"
                >submit</Button>
                <Button
                  id="cancle-resetPassword"
                  onClick={handleClose}
                  variant="outlined"
                  color="secondary"
                >CANCLE</Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </Card>
    </Dialog>
  )
}