import { useDispatch } from 'react-redux'
import { ChangeEventHandler } from 'react'
import { useNavigate } from 'react-router-dom'

import { ArchiveCheckbox, Button, RoleSelect } from 'shared/components'
import { useActions, useTypedSelector } from 'shared/hooks'
import { RolesType } from 'shared/types'

import styles from './Filters.module.scss'

const Filters = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const { archiveFilter, roleFilter } = useTypedSelector(state => state)
	const { filterByArchive, filterByRole } = useActions()

	const handleFilterByRole = (value?: string) => {
		dispatch(filterByRole(value as RolesType | '-'))
	}

	const handleFilterByArchive: ChangeEventHandler<HTMLInputElement> = e => {
		dispatch(filterByArchive(e.target.checked))
	}
	return (
		<div className={styles.filtersWrapper}>
			<div className={styles.filters}>
				<RoleSelect onChange={handleFilterByRole} value={roleFilter} />
				<ArchiveCheckbox
					onChange={handleFilterByArchive}
					checked={archiveFilter}
				/>
			</div>
			<Button
				variant='outlined'
				onClick={() => navigate('/pizza/new-employee')}
			>
				Добавить сотрудника
			</Button>
		</div>
	)
}

export default Filters
