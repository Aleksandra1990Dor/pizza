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
					<FaArrowUpLong onClick={() => onClick('up')} />
					<FaArrowDownLong onClick={() => onClick('down')} />
				</>
			) : direction === 'up' ? (
				<FaArrowUpLong onClick={toggleOnClick} />
			) : (
				<FaArrowDownLong onClick={toggleOnClick} />
			)}
		</div>
	)
}

export default SortLabel
