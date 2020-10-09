import React from 'react';
import { Routes } from 'react-router-dom';
import { Error404 } from '@/errors';
import { RouteAuth, Route } from '@/app/router';
import { DashboardPage } from '@/app/dashboard/DashboardPage';

export const DashboardRoutes = () => {
  return (
    <Routes>
      <RouteAuth path="/" element={<DashboardPage />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};