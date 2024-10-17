import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { enqueueSnackbar } from 'notistack'

import { EmployeeFormType, RolesType } from 'shared/types'
import { useActions, useGetEmployeeById } from 'shared/hooks'

import { resolver } from '../resolvers/employee-form.resolver'
import { getDefaultValues } from '../consts/get-default-values'

export const useEmployeeForm = () => {
	const { employeeId } = useParams()

	const dispatch = useDispatch()
	const navigate = useNavigate()

	const { addEmployee, editEmployee } = useActions()
	const employee = useGetEmployeeById(Number(employeeId) ?? 0)

	const {
		handleSubmit,
		register,
		control,
		formState: { errors }
	} = useForm<EmployeeFormType>({
		defaultValues: getDefaultValues(employee),
		resolver
	})

	const handleEditEmployee = (data: EmployeeFormType, name: string) => {
		const editedEmployee = {
			...data,
			id: employee?.id ?? 0,
			name,
			role: data.role as RolesType
		}

		dispatch(editEmployee(editedEmployee))

		enqueueSnackbar('Данные успешно обновлены', {
			variant: 'success'
		})
	}

	const handleAddEmployee = (data: EmployeeFormType, name: string) => {
		dispatch(addEmployee({ ...data, name, role: data.role as RolesType }))

		enqueueSnackbar('Вы успешно добавили работника', {
			variant: 'success'
		})
	}

	const onSubmit = (data: EmployeeFormType) => {
		const name = `${data.name} ${data.lastName}`

		if (employee) handleEditEmployee(data, name)
		else handleAddEmployee(data, name)

		navigate('/pizza/')
	}

	return { onSubmit, handleSubmit, register, control, errors }
}
