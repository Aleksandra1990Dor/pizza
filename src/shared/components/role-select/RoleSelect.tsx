import { forwardRef, LegacyRef } from 'react'
import { GroupBase } from 'react-select'
import clsx from 'clsx'
import Select, { SelectInstance } from 'react-select'

import { options } from './options.data'
import { colorStyles } from './selectStyles'

import styles from './RoleSelect.module.scss'

type RefType = LegacyRef<
	SelectInstance<
		{ value: string; label: string },
		false,
		GroupBase<{ value: string; label: string }>
	>
>

type RoleSelectProps = {
	name?: string
	onChange?: (value?: string) => void
	value?: string
	isRow?: boolean
	error?: string
}

const RoleSelect = forwardRef((props: RoleSelectProps, ref: RefType) => {
	const { error, isRow, onChange, value } = props
	return (
		<div
			className={clsx(styles.label, {
				[styles.row]: isRow
			})}
		>
			<label htmlFor='select'>Должность: </label>
			<div>
				<Select
					options={options}
					defaultValue={options[0]}
					value={options.find(c => c.value === value)}
					ref={ref}
					onChange={val => {
						onChange && onChange(val?.value)
					}}
					inputId='select'
					styles={colorStyles}
				/>
				{error && <div className={styles.error}>{error}</div>}
			</div>
		</div>
	)
})
export default RoleSelect
