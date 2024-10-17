import { FaArrowUpLong, FaArrowDownLong } from 'react-icons/fa6'

import styles from './SortLabel.module.scss'

type SortLabelProps = {
	direction: 'up' | 'down' | null
	onClick: (direction: 'up' | 'down') => void
}

const SortLabel = (props: SortLabelProps) => {
	const { direction, onClick } = props

	const toggleOnClick = () => {
		onClick(direction === 'up' ? 'down' : 'up')
	}

	return (
		<div className={styles.sortLabel}>
			{!direction ? (
				<>
					<FaArrowUpLong
						onClick={() => onClick('up')}
						data-testid='FaArrowUpLong'
					/>
					<FaArrowDownLong
						onClick={() => onClick('down')}
						data-testid='FaArrowDownLong'
					/>
				</>
			) : direction === 'up' ? (
				<FaArrowUpLong onClick={toggleOnClick} data-testid='FaArrowUpLong' />
			) : (
				<FaArrowDownLong
					onClick={toggleOnClick}
					data-testid='FaArrowDownLong'
				/>
			)}
		</div>
	)
}

export default SortLabel
