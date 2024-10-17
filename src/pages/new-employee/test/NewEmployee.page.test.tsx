import { render, screen, act, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { RenderWithProviders } from 'shared/test'

import NewEmployeePage from '../NewEmployee.page'

describe('Main page render', () => {
	beforeEach(() => {
		// eslint-disable-next-line testing-library/no-render-in-setup
		render(
			<RenderWithProviders>
				<NewEmployeePage />
			</RenderWithProviders>
		)
	})

	it('should render title and crumb text', () => {
		expect(screen.getAllByText('Добавление сотрудника')).toHaveLength(2)
		expect(screen.getByText('Список сотрудников')).toBeInTheDocument()
	})

	it('should fill fields and show error', async () => {
		// eslint-disable-next-line testing-library/no-unnecessary-act
		act(() => {
			userEvent.type(screen.getByLabelText('Имя:'), 'Имя')
			userEvent.type(screen.getByLabelText('Фамилия:'), 'Фамилия')
			userEvent.type(screen.getByLabelText('Номер телефона:'), '1112223344')
			userEvent.type(screen.getByLabelText('Дата рождения:'), '09102000')

			userEvent.click(screen.getByText('Сохранить'))
		})

		// eslint-disable-next-line testing-library/prefer-find-by
		await waitFor(() =>
			expect(screen.getByText('Выберите должность')).toBeInTheDocument()
		)
	})
})
