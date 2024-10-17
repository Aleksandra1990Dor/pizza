import { NavLink } from 'react-router-dom'
import { Fragment } from 'react'
import { MdNavigateNext } from 'react-icons/md'

import styles from './Header.module.scss'

type HeaderProps = {
	crumbs: string[]
	title: string
}

const Header = (props: HeaderProps) => {
	const { crumbs, title } = props

	return (
		<header className={styles.header}>
			<div className={styles.crumbs}>
				{crumbs.map(crumb => (
					<Fragment key={crumb}>
						<NavLink to={'/'}>{crumb}</NavLink>
						<MdNavigateNext className={styles.nextIcon} />
					</Fragment>
				))}
				<span>{title}</span>
			</div>
			<div className={styles.title}>
				<h1>{title}</h1>
			</div>
		</header>
	)
}

export default Header
