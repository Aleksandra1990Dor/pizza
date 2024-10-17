import { useDispatch } from 'react-redux'

import { useActions, useTypedSelector } from 'shared/hooks'
import { SortLabel } from 'shared/components'

const EmployeeTableHead = () => {
	const dispatch = useDispatch()

	const { sortByName, sortByBirthday } = useTypedSelector(state => state)
	const { setSortByName, setSortByBirthday } = useActions()

	const onSortByName = (direction: 'up' | 'down') => {
		dispatch(setSortByName(direction))
	}

	const onSortByBirthday = (direction: 'up' | 'down') => {
		dispatch(setSortByBirthday(direction))
	}

	return (
		<thead>
			<tr>
				<td>
					Имя
					<SortLabel direction={sortByName} onClick={onSortByName} />
				</td>
				<td>
					Дата рождения
					<SortLabel direction={sortByBirthday} onClick={onSortByBirthday} />
				</td>
				<td>Должность</td>
				<td>Номер телефона</td>
				<td>В архиве</td>
			</tr>
		</thead>
	)
}

export default EmployeeTableHead
