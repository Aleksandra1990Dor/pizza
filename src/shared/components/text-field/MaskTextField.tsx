import { Control, Controller, FieldName } from 'react-hook-form'
import { InputMask } from '@react-input/mask'

import { EmployeeFormType } from '../../types/employee.types'

import styles from './TextField.module.scss'

type NameType = Pick<EmployeeFormType, 'birthday' | 'phone'>

type TextFieldProps = {
	control: Control<EmployeeFormType>
	name: FieldName<NameType>
	label: string
	error?: string
}

const MaskTextField = (props: TextFieldProps) => {
	const { name, control, label, error } = props
	const mask = name === 'birthday' ? '__.__.____' : '+7 (___) ___-____'

	return (
		<div className={styles.wrapper}>
			<label>
				{label}:
				<div>
					<Controller
						control={control}
						name={name}
						render={({ field }) => (
							<InputMask
								mask={mask}
								replacement={{ _: /\d/ }}
								{...field}
							/>
						)}
					/>
					{error && <div className={styles.error}>{error}</div>}
				</div>
			</label>
		</div>
	)
}

export default MaskTextField
