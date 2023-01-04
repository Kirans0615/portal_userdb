import { Button, Card, Paper } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../slices/accountSlice';
import Profile from './Profile';
import Password from './Password';
import { clearMessage } from "../../slices/messageSlice";
import Servers from './Servers';

export default function AccountPage() {
  const dispatch = useDispatch()
  const [successful, setSuccessful] = useState(false);
  const { message } = useSelector((state) => state.message);
  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);
  console.log(message)
  return (
    <Paper>
      {message && (
        <div className="form-group">
          <div
            className={successful ? "alert alert-success" : "alert alert-danger"}
            role="alert"
          >
            {message}
          </div>
        </div>
      )}
      <Card
      >
        <Profile />
        <Servers />
        <Password />
      </Card>
      <Button
        type='submit'
        variant="contained"
        color="secondary"
        onClick={() => {dispatch(logout())}}
      >Log Out</Button>
    </Paper>
  )
}