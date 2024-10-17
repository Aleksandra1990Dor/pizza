import { Controller } from 'react-hook-form'
import {
	ArchiveCheckbox,
	Button,
	MaskTextField,
	RoleSelect,
	TextField
} from 'shared/components'

import { useEmployeeForm } from '../hooks/useEmployeeForm'

import styles from './EmployeeForm.module.scss'

const EmployeeForm = () => {
	const { control, handleSubmit, onSubmit, register, errors } =
		useEmployeeForm()

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<h2>Данные сотрудника:</h2>
			<div className={styles.fieldsWrapper}>
				<div className={styles.fields}>
					<TextField
						label='Имя'
						name='name'
						register={register}
						error={errors?.name?.message}
					/>
					<TextField
						label='Фамилия'
						name='lastName'
						register={register}
						error={errors?.lastName?.message}
					/>
					<MaskTextField
						label='Номер телефона'
						name='phone'
						control={control}
						error={errors?.phone?.message}
					/>
					<MaskTextField
						label='Дата рождения'
						name='birthday'
						control={control}
						error={errors?.birthday?.message}
					/>
				</div>
				<div className={styles.fields}>
					<Controller
						control={control}
						name='role'
						render={({ field: { name, onChange, ref, value } }) => (
							<RoleSelect
								name={name}
								onChange={onChange}
								ref={ref}
								value={value}
								isRow={true}
								error={errors?.role?.message}
							/>
						)}
					/>
					<ArchiveCheckbox {...register('isArchive')} isRow={true} />
				</div>
			</div>
			<div className={styles.btnWrapper}>
				<Button variant='classic'>Сохранить</Button>
			</div>
		</form>
	)
}

export default EmployeeForm
