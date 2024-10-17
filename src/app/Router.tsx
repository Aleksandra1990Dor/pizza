import { Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { EmployeePage, MainPage, NewEmployeePage } from 'pages'
import { Loader } from 'shared/components'

export const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<Suspense fallback={<Loader />}>
				<MainPage />
			</Suspense>
		)
	},
	{
		path: '/employee/:employeeId',
		element: (
			<Suspense fallback={<Loader />}>
				<EmployeePage />
			</Suspense>
		)
	},
	{
		path: '/new-employee',
		element: (
			<Suspense fallback={<Loader />}>
				<NewEmployeePage />
			</Suspense>
		)
	}
])
