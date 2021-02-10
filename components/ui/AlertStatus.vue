<template>
	<div
		v-if="alert"
		class="fixed w-full py-6 z-50 border-t-2 bg-white border-greenTurq shadow-sm transition-all duration-200"
		:class="
			alert.show
				? 'top-0 opacity-1'
				: '-top-100 opacity-0 pointer-events-none'
		"
	>
		<div class="flex justify-center w-80 m-auto px-4">
			<Icon
				name="check"
				class="mr-4 text-greenTurq opacity-1"
				:class="{ 'opacity-0': !alert.show }"
			/>
			<p class="uppercase text-xs leading-6 text-grayDark">
				{{ alert.status }}
			</p>

			<button
				@click.prevent="hideAlert()"
				class="fixed right-0 mr-6 text-grayLight feedback-color"
			>
				<Icon name="close" />
			</button>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	name: 'AlertStatus',
	computed: {
		...mapState({
			alert: (state) => state.alert
		})
	},
	methods: {
		hideAlert() {
			this.$store.commit('HIDE_ALERT')
		}
	}
}
</script>
