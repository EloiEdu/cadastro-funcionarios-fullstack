import { DashboardComponent } from './pages/dashboard/dashboard';
import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { EmployeesComponent } from './pages/employees/employees';
import { EmployeeFormComponent } from './pages/employees/employee-form/employee-form';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'employees',
        component:EmployeesComponent
    },
    {
        path: 'employees/new',
        component: EmployeeFormComponent
    },
    {
        path: 'employees/edit/:id',
        component: EmployeeFormComponent
    },
    {
    path: '**',
    redirectTo: 'login'
    }
];
