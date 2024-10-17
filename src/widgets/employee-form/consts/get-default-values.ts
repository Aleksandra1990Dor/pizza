import { EmployeeFormType, EmployeeType } from 'shared/types'

export const getDefaultValues = (employee?: EmployeeType): EmployeeFormType => {
	const names = employee?.name?.split(' ') ?? []

	return {
		isArchive: employee?.isArchive ?? false,
		role: employee?.role ?? '-',
		phone: employee?.phone ?? '',
		name: names[0] ?? '',
		lastName: names[1] ?? '',
		birthday: employee?.birthday ?? ''
	}
}
