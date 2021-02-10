<template>
	<div class="w-full relative">
		<Fade>
			<button
				v-if="!isAdding"
				@click.prevent="onClick"
				class="flex justify-between w-full bg-greenTurq px-6 py-4 text-gray-200 rounded-lg shadow-lg feedback"
			>
				Add New Location
				<Icon name="plus" class="text-white" />
			</button>
			<OfficeForm v-else :open="isAdding" @close="isAdding = false" />
		</Fade>
	</div>
</template>

<script>
export default {
	name: 'OfficeNew',
	props: {},
	data: () => {
		return {
			isAdding: false
		}
	},
	methods: {
		onClick() {
			this.isAdding = true
			this.$store.commit('HIDE_ALERT')
		}
	}
}
</script>
