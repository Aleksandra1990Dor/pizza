import type { FC, PropsWithChildren } from 'react'
import { SnackbarProvider } from 'notistack'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'

import { store } from 'shared/store'

const RenderWithProviders: FC<PropsWithChildren> = ({ children }) => {
	const routes = [
		'/pizza/',
		'/pizza/employee/:employeeId',
		'/pizza/add-employee'
	]

	return (
		<Provider store={store}>
			<MemoryRouter initialEntries={routes}>
				<SnackbarProvider
					anchorOrigin={{
						vertical: 'top',
						horizontal: 'right'
					}}
				/>
				{children}
			</MemoryRouter>
		</Provider>
	)
}

export default RenderWithProviders
