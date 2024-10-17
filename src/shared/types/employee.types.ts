export type EmployeeType = {
	id: number
	name: string
	isArchive: boolean
	role: 'driver' | 'cook' | 'waiter'
	phone: string
	birthday: string
}

export type RolesType = 'driver' | 'cook' | 'waiter'

export type EmployeeFormType = Omit<EmployeeType, 'id' | 'role'> & {
	lastName: string
	role: RolesType | '-'
}
