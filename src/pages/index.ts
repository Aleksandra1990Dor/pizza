import { lazy } from 'react'

export const MainPage = lazy(() => import('./main/Main.page'))
export const EmployeePage = lazy(() => import('./employee/Employee.page'))
export const NewEmployeePage = lazy(
	() => import('./new-employee/NewEmployee.page')
)
