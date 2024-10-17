import { EmployeeType } from 'shared/types'
import { convertToDate } from './convertToDate'

export const sortByDateHandler = (
	data: EmployeeType[],
	direction: 'up' | 'down'
) => {
	if (direction === 'up')
		return data.sort(
			(a, b) =>
				convertToDate(b.birthday).getTime() -
				convertToDate(a.birthday).getTime()
		)

	return data.sort(
		(a, b) =>
			convertToDate(a.birthday).getTime() - convertToDate(b.birthday).getTime()
	)
}
