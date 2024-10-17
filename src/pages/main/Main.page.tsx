import { EmployeesTable, Header } from 'widgets'
import { Filters } from 'feature'

import styles from './MainPage.module.scss'

const MainPage = () => {
	return (
		<div className={styles.wrapper}>
			<Header crumbs={[]} title='Список сотрудников' />
			<main className={styles.main}>
				<Filters />
				<EmployeesTable />
			</main>
		</div>
	)
}

export default MainPage
