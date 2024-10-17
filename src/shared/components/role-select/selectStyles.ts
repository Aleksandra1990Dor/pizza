import { GroupBase, StylesConfig } from 'react-select'
import { OptionType } from './options.data'

type StylesConfigType = StylesConfig<OptionType, false, GroupBase<OptionType>>

export const colorStyles: StylesConfigType = {
	menuList: styles => ({
		...styles,
		background: '#fcfcfc'
	}),

	option: (styles, { isFocused, isSelected }) => ({
		...styles,
		color: isSelected ? '#fff' : '#212020',
		fontSize: '16px',
		background: isSelected
			? '#f73b3bff'
			: isFocused && !isSelected
				? '#fff3f3ff'
				: undefined,
		zIndex: 1,
		cursor: isSelected ? 'text' : 'pointer',
		'&:active': {
			backgroundColor: isSelected ? '#f73b3bff' : '#fff3f3ff'
		},
		'@media (max-width: 600px)': {
			fontSize: '12px'
		}
	}),

	menu: base => ({
		...base,
		zIndex: 100
	}),

	control: styles => ({
		...styles,
		cursor: 'pointer',
		border: `1px solid #e3e3e3`,
		outline: 'none',
		boxShadow: 'none',
		color: '#212020',
		fontSize: '16px',
		'&:hover': {
			borderColor: '#bdbdbd'
		},
		'@media (max-width: 600px)': {
			fontSize: '12px'
		},

		'&:focus-within': {
			borderColor: '#f7c6b9',
			boxShadow: '0 0 0.2rem rgba(233, 105, 71, 0.25)'
		}
	})
}
