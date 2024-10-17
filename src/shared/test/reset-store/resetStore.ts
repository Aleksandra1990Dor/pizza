import { screen } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'

export const resetFilters = () => {
	const archiveField = screen.getByLabelText('В архиве:')
	const roleField = screen.getByLabelText('Должность:')

	userEvent.click(archiveField)
	userEvent.click(roleField)
	userEvent.click(screen.getAllByText('-')[0])
}
