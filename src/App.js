import './App.css';
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import ContactList from './components/contacts/ContactList/ContactList';
import Navbar from './components/navbar/navbar';
import AddContact from './components/contacts/AddContact/AddContact';
import ViewContact from './components/contacts/ViewContact/ViewContact';
import EditContact from './components/contacts/EditContact/EditContact';

let App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path={'/'} element={<Navigate to={'/contacts/list'} />} />
        <Route path={'/contacts/list'} element={<ContactList/>} />
        <Route path={'/contacts/add'} element={<AddContact/>} />
        <Route path={'/contacts/view/:contactId'} element={<ViewContact/>} />
        <Route path={'/contacts/edit/:contactId'} element={<EditContact/>} />
      </Routes>
    </React.Fragment>
  )
}

export default App;