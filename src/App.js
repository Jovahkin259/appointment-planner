import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, contactsSetter] = useState([]);
  const [appointments, appointmentsSetter] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */
  const addContact = (name, phone, email) => {

    if (!name || !phone || !email) {
      throw new Error('Invalid Contact')
    }

    const newContact = {
      name: name,
      phone: phone,
      email: email
    }
    contactsSetter(prev => [...prev, newContact])
  }

  const addAppointment = (title, contact, date, time)  => {

    if (!title || !contact || !date || !time) {
      throw new Error('Invalid Appointment')
    }
    const newAppointment = {
      title: title,
      contact: contact,
      date: date,
      time: time
    }
    appointmentsSetter(prev => [...prev, newAppointment])
  }
 

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
