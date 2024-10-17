import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { initialData } from '../consts/initialData'
import { EmployeeType, RolesType } from '../types/employee.types'
import { sortByNameHandler } from '../utils/sortByNameHandler'
import { sortByDateHandler } from '../utils/sortByDateHandler'

type SortType = 'up' | 'down'

type StateType = {
	employees: EmployeeType[]
	filteredData: EmployeeType[]
	archiveFilter: boolean
	roleFilter: RolesType | '-'
	sortByName: SortType | null
	sortByBirthday: SortType | null
}

const initialState: StateType = {
	employees: initialData,
	filteredData: initialData,
	archiveFilter: false,
	roleFilter: '-',
	sortByBirthday: null,
	sortByName: null
}

const mainSlice = createSlice({
	name: 'mainSlice',
	initialState,
	reducers: {
		filterByRole: (state, action: PayloadAction<RolesType | '-'>) => {
			state.roleFilter = action.payload
			state.sortByName = null
			state.sortByBirthday = null

			if (action.payload === '-') {
				state.filteredData = state.archiveFilter
					? state.employees.filter(employee => employee.isArchive === true)
					: state.employees
			} else {
				const filteredEmployees = state.employees.filter(
					employee => employee.role === action.payload
				)

				state.filteredData = state.archiveFilter
					? filteredEmployees.filter(employee => employee.isArchive === true)
					: filteredEmployees
			}
		},

		filterByArchive: (state, action: PayloadAction<boolean>) => {
			state.archiveFilter = action.payload
			state.sortByName = null
			state.sortByBirthday = null

			if (!action.payload) {
				state.filteredData =
					state.roleFilter === '-'
						? state.employees
						: state.employees.filter(
								employee => employee.role === state.roleFilter
							)
			} else {
				const filteredEmployees = state.employees.filter(
					employee => employee.isArchive === true
				)

				state.filteredData =
					state.roleFilter === '-'
						? filteredEmployees
						: filteredEmployees.filter(
								employee => employee.role === state.roleFilter
							)
			}
		},

		addEmployee: (state, action: PayloadAction<Omit<EmployeeType, 'id'>>) => {
			state.archiveFilter = false
			state.roleFilter = '-'
			state.sortByBirthday = null
			state.sortByName = null

			state.employees.push({
				...action.payload,
				id: state.employees.length + 1
			})

			state.filteredData = state.employees
		},

		editEmployee: (state, action: PayloadAction<EmployeeType>) => {
			state.archiveFilter = false
			state.roleFilter = '-'
			state.sortByBirthday = null
			state.sortByName = null

			state.employees = state.employees.map(e => {
				if (e.id === action.payload.id) return action.payload
				return e
			})

			state.filteredData = state.employees
		},

		setSortByName: (state, action: PayloadAction<SortType>) => {
			state.sortByName = action.payload
			state.sortByBirthday = null

			if (action.payload === 'up')
				state.filteredData = sortByNameHandler(state.filteredData, 'up')
			else state.filteredData = sortByNameHandler(state.filteredData, 'down')
		},

		setSortByBirthday: (state, action: PayloadAction<SortType>) => {
			state.sortByName = null
			state.sortByBirthday = action.payload

			if (action.payload === 'up')
				state.filteredData = sortByDateHandler(state.filteredData, 'up')
			else state.filteredData = sortByDateHandler(state.filteredData, 'down')
		}
	}
})

export const actions = mainSlice.actions

export default mainSlice.reducer
