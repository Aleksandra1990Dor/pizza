import { FieldErrors, Resolver } from 'react-hook-form'

import { EmployeeFormType } from 'shared/types'

export const resolver: Resolver<EmployeeFormType> = async values => {
	const errors: FieldErrors<EmployeeFormType> = {}

	if (!values.name) {
		errors.name = {
			type: 'required',
			message: 'Введите имя'
		}
	}

	if (!values.lastName) {
		errors.lastName = {
			type: 'required',
			message: 'Введите фамилию'
		}
	}

	if (!values.birthday || values.birthday.length !== 10) {
		errors.birthday = {
			type: 'required',
			message: 'Введите дату рождения'
		}
	}

	if (!values.phone || values.phone.length !== 17) {
		errors.phone = {
			type: 'required',
			message: 'Введите номер телефона'
		}
	}

	if (!values.role || values.role === '-') {
		errors.role = {
			type: 'required',
			message: 'Выберите должность'
		}
	}
	return { values, errors }
}
