import { Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { EmployeePage, MainPage, NewEmployeePage } from 'pages'
import { Loader } from 'shared/components'

export const router = createBrowserRouter([
	{
		path: 'pizza/',
		element: (
			<Suspense fallback={<Loader />}>
				<MainPage />
			</Suspense>
		)
	},
	{
		path: 'pizza/employee/:employeeId',
		element: (
			<Suspense fallback={<Loader />}>
				<EmployeePage />
			</Suspense>
		)
	},
	{
		path: 'pizza/new-employee',
		element: (
			<Suspense fallback={<Loader />}>
				<NewEmployeePage />
			</Suspense>
		)
	}
])
