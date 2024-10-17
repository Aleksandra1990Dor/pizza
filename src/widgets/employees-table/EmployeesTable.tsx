import { EmployeeTableHead, EmployeeTableRow } from 'entities/employee'
import { useTypedSelector } from 'shared/hooks'

import styles from './EmployeesTable.module.scss'

const EmployeesTable = () => {
	const employees = useTypedSelector(state => state.filteredData)

	return (
		<div className={styles.tableWrapper}>
			<table>
				<EmployeeTableHead />
				<tbody>
					{employees.map(employee => (
						<EmployeeTableRow key={employee.id} employee={employee} />
					))}
				</tbody>
			</table>
		</div>
	)
}

export default EmployeesTable
