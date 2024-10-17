import { EmployeeForm, Header } from 'widgets'

import styles from './Employee.page.module.scss'

const EmployeePage = () => {
	return (
		<div className={styles.wrapper}>
			<Header
				crumbs={['Список сотрудников']}
				title='Редактирование сотрудника'
			/>
			<main>
				<EmployeeForm />
			</main>
		</div>
	)
}

export default EmployeePage
