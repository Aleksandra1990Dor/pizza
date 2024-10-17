import { EmployeeForm, Header } from 'widgets'

import styles from './NewEmployee.page.module.scss'

const NewEmployeePage = () => {
	return (
		<div className={styles.wrapper}>
			<Header crumbs={['Список сотрудников']} title='Добавление сотрудника' />
			<main>
				<EmployeeForm />
			</main>
		</div>
	)
}

export default NewEmployeePage
