import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { RenderWithProviders, resetFilters } from 'shared/test'

import MainPage from '../Main.page'

describe('Main page render', () => {
	beforeEach(() =>
		// eslint-disable-next-line testing-library/no-render-in-setup
		render(
			<RenderWithProviders>
				<MainPage />
			</RenderWithProviders>
		)
	)

	it('should render title and crumb text', () => {
		expect(screen.getAllByText('Список сотрудников')).toHaveLength(2)
	})

	it('should show table', () => {
		expect(screen.getByText('Имя')).toBeInTheDocument()
		expect(screen.getByText('Должность')).toBeInTheDocument()
		expect(screen.getByText('Номер телефона')).toBeInTheDocument()
		expect(screen.getByText('Богдан Давыдов')).toBeInTheDocument()
	})

	it('should filter by isArchive field', () => {
		// символ "-" используется в случае если не выбрана роль а так же в
		// таблице если работник не в архиве, по этому при проверке на длинну в
		// случае если на странице нет работников, которые не в архиве длинна = 1)
		expect(screen.getAllByText('-')).not.toHaveLength(1)

		const archiveField = screen.getByLabelText('В архиве:')
		userEvent.click(archiveField)

		expect(screen.getAllByText('-')).toHaveLength(1)
	})

	it('should filter by role field', () => {
		expect(screen.getAllByText('Водитель')).not.toHaveLength(0)

		const roleField = screen.getByLabelText('Должность:')

		userEvent.click(roleField)
		userEvent.click(screen.getAllByText('Повар')[0])

		expect(screen.queryAllByText('Водитель')).toHaveLength(0)
		expect(screen.getAllByText('Повар')).not.toHaveLength(0)

		resetFilters()
	})

	it('should sort by name', () => {
		const tableCells = screen.getAllByRole('cell')
		// 6-ая ячейка таблицы - имя верхнего пользователя
		expect(tableCells[5]).not.toHaveTextContent('Агафон Громов')

		const upFilerButtons = screen.getAllByTestId('FaArrowUpLong')
		userEvent.click(upFilerButtons[0])

		const updatedTableCells = screen.getAllByRole('cell')
		expect(updatedTableCells[5]).toHaveTextContent('Агафон Громов')
	})

	it('should sort by birthday', () => {
		const tableCells = screen.getAllByRole('cell')
		// 7-ая ячейка таблицы - дата рождения верхнего пользователя
		expect(tableCells[6]).not.toHaveTextContent('03.12.1994')

		const upFilerButtons = screen.getAllByTestId('FaArrowUpLong')
		userEvent.click(upFilerButtons[1])

		const updatedTableCells = screen.getAllByRole('cell')
		expect(updatedTableCells[6]).toHaveTextContent('03.12.1994')
	})
})
