import { AiOutlineLoading3Quarters } from 'react-icons/ai'

import styles from './Loader.module.scss'

const Loader = () => {
	return (
		<div className={styles.loader}>
			<AiOutlineLoading3Quarters />
		</div>
	)
}

export default Loader
