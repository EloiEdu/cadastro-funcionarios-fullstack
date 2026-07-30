import { DashboardComponent } from './pages/dashboard/dashboard';
import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { EmployeesComponent } from './pages/employees/employees';
import { EmployeeFormComponent } from './pages/employees/employee-form/employee-form';
import { authGuard } from './core/guards/auth.guard';

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
        component: DashboardComponent,
        canActivate: [authGuard]
    },
    {
        path: 'employees',
        component:EmployeesComponent,
        canActivate: [authGuard]

    },
    {
        path: 'employees/new',
        component: EmployeeFormComponent,
        canActivate: [authGuard]

    },
    {
        path: 'employees/edit/:id',
        component: EmployeeFormComponent,
        canActivate: [authGuard]

    },
    {
    path: '**',
    redirectTo: 'login'
    }
];
