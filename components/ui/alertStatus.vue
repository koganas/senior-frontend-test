<template>
	<Fade>
		<div
			v-if="alert && alert.show"
			class="fixed w-full top-0 py-6 z-50 border-t-2 bg-white border-greenTurq shadow-sm"
		>
			<div class="flex w-80 m-auto px-4">
				<Icon name="check" class="mr-4 text-greenTurq" />
				<p class="uppercase text-xs leading-6 text-grayDark">
					{{ alert.status }}
				</p>

				<button @click.prevent="hideAlert()" class="fixed right-0 mr-6 text-grayLight feedback-color">
					<Icon name="close" class="text-grayLight" />
				</button>
			</div>
		</div>
	</Fade>
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
