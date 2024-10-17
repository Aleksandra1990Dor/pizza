import { actions } from '../store/main.slice'

export const useActions = () => {
	return { ...actions }
}
