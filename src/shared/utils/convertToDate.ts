import dayjs from 'dayjs'

export const convertToDate = (date?: string) => {
	const formattedDate = date?.split('.')?.reverse()?.join('-')
	return dayjs(formattedDate).toDate()
}

export const formatDate = (date?: string) => {
	return dayjs(date).format('DD.MM.YYYY')
}
