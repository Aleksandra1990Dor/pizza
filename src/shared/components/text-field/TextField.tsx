import { FieldName, UseFormRegister } from 'react-hook-form'

import { EmployeeFormType } from '../../types/employee.types'

import styles from './TextField.module.scss'

type TextFieldProps = {
	register: UseFormRegister<EmployeeFormType>
	name: FieldName<EmployeeFormType>
	label: string
	error?: string
}

const TextField = (props: TextFieldProps) => {
	const { name, register, label, error } = props

	return (
		<div className={styles.wrapper}>
			<label>
				{label}:
				<div>
					<input type='text' {...register(name)} />
					{error && <div className={styles.error}>{error}</div>}
				</div>
			</label>
		</div>
	)
}

export default TextField
