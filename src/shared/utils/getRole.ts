import { RolesType } from '../types/employee.types'

export const getRole = (role: RolesType) => {
	switch (role) {
		case 'cook':
			return 'Повар'
		case 'driver':
			return 'Водитель'
		case 'waiter':
			return 'Официант'
	}
}
