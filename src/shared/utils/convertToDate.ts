import dayjs from 'dayjs'

export const convertToDate = (date?: string) => {
	const formattedDate = date?.split('.')?.reverse()?.join('-')
	return dayjs(formattedDate).toDate()
}

