import { EmployeeType } from 'shared/types'

export const sortByNameHandler = (
	data: EmployeeType[],
	direction: 'up' | 'down'
) => {
	if (direction === 'up')
		return data.sort((a, b) => a.name.localeCompare(b.name))

	return data.sort((a, b) => b.name.localeCompare(a.name))
}
