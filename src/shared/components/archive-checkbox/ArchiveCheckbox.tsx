import { forwardRef, RefObject, type InputHTMLAttributes } from 'react'
import clsx from 'clsx'

import styles from './ArchiveCheckbox.module.scss'

type RefType = RefObject<HTMLInputElement>

type ArchiveCheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
	isRow?: boolean
}

const ArchiveCheckbox = forwardRef((props: ArchiveCheckboxProps, ref) => {
	const { isRow, ...otherProps } = props

	return (
		<div
			className={clsx(styles.label, {
				[styles.row]: isRow
			})}
		>
			<label htmlFor='checkbox'>В архиве:</label>
			<div>
				<input
					type='checkbox'
					id='checkbox'
					{...otherProps}
					ref={ref as RefType}
				/>
				<span></span>
			</div>
		</div>
	)
})

export default ArchiveCheckbox
