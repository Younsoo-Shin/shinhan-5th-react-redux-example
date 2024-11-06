import React from 'react';
import { MyNavbar, MyFooter } from '~/components';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div>
      <MyNavbar brandTitle="My-React-Board" />
      <Container className="min-vh-100">
        <Outlet />
      </Container>
      <MyFooter brandTitle="My-React-Board" />
    </div>
  );
}
