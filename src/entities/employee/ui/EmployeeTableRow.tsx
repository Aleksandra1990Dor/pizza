import { useNavigate } from 'react-router-dom'

import { EmployeeType } from 'shared/types'
import { getRole } from 'shared/utils'

type EmployeeRowProps = {
	employee: EmployeeType
}
const EmployeeTableRow = (props: EmployeeRowProps) => {
	const { employee } = props
	const navigate = useNavigate()

	const onClick = () => navigate(`/pizza/employee/${employee.id}`)

	return (
		<tr onClick={onClick}>
			<td>{employee.name}</td>
			<td>{employee.birthday}</td>
			<td>{getRole(employee.role)}</td>
			<td>{employee.phone}</td>
			<td>{employee.isArchive ? '+' : '-'}</td>
		</tr>
	)
}

export default EmployeeTableRow
