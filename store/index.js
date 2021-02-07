import { officeList } from '@/assets/data/officeList.js'

export const state = () => ({
	officeList,
	alert: {
		status: '',
		show: false
	}
})

export const mutations = {
	SET_OFFICES(state, payload) {
		state.officeList = payload
	},

	SHOW_ALERT(state, payload) {
		state.alert = {
			status: payload.status,
			show: payload.show
		}
	},

	HIDE_ALERT(state) {
		state.alert = {
			status: '',
			show: false
		}
	}
}

export const actions = {
	updateStore({ state, commit }, data) {
		let list = []
		if (data.id) {
			const index = state.officeList.findIndex(
				(office) => office.id === data.id
			)
			list = JSON.parse(JSON.stringify(state.officeList))
			list[index] = data
		} else {
			data.id = Math.random().toString(36).substr(2, 9)
			list = [data, ...state.officeList]
		}
		commit('SET_OFFICES', list)
		commit(
			'SHOW_ALERT',
			{
				status: `The location has been ${
					data.id ? 'updated' : 'added'
				}.`,
				show: true
			},
			{ root: true }
		)
	},

	deleteStore({ state, commit }, officeId) {
		const updatedList = state.officeList.filter(
			(office) => office.id !== officeId
		)
		commit('SET_OFFICES', updatedList)

		commit(
			'SHOW_ALERT',
			{
				status: 'The location has been removed.',
				show: true
			},
			{ root: true }
		)
	}
}
