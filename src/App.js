import React, { createContext, useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AdminAddService from './Component/Admin/AdminAddService/AdminAddService';
import AdminServiceList from './Component/Admin/AdminServiceList/AdminServiceList';
import MakeAdmin from './Component/Admin/MakeAdmin/MakeAdmin';
import SignUp from './Component/Authentication/Login';
import Order from './Component/Client/Order/Order';
import Review from './Component/Client/Review/Review';
import ServiceList from './Component/Client/Service/ServiceList';
import Home from './Component/HomePage/Home/Home';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
export const UserContext = createContext();
function App() {

  const [loggedinUser, setLoggedinUser] = useState({});

    const [isadmin, setisadmin] = useState(false);
    useEffect(() => {
      fetch('http://localhost:5000/isAdmin?email=' + loggedinUser.email)
        .then(response => response.json())
        .then(data => setisadmin(data));
    }, [loggedinUser.email])
    
  console.log(isadmin);
  return (
    <UserContext.Provider value = {[loggedinUser, setLoggedinUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>

        <PrivateRoute path="/order/:id">
          <Order></Order>
        </PrivateRoute>

        <PrivateRoute path="/order">
          <Order></Order>
        </PrivateRoute>

        <Route path="/login">
          <SignUp></SignUp>
        </Route>

        <PrivateRoute path="/serviceList">
         <ServiceList></ServiceList>
        </PrivateRoute>

        <PrivateRoute path="/review">
          <Review></Review>
        </PrivateRoute>
        
        <PrivateRoute path="/adminServiceList">
          <AdminServiceList></AdminServiceList>
        </PrivateRoute>

        <PrivateRoute path="/adminaAddService">
          <AdminAddService></AdminAddService>
        </PrivateRoute>

        <PrivateRoute path="/makeAdmin">
          <MakeAdmin></MakeAdmin>
        </PrivateRoute>

      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
