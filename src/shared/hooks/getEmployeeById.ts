import { useTypedSelector } from './useTypedSelector'

export const useGetEmployeeById = (id: number) => {
	const employees = useTypedSelector(state => state.employees)

	return employees.find(e => e.id === id)
}
