<template>
	<div class="w-full relative">
		<Fade>
			<button
				v-if="!isAdding"
				@click.prevent="isAdding = true"
				class="flex justify-between w-full bg-greenTurq px-6 py-4 text-white font-thin rounded-lg shadow-lg feedback"
			>
				Add New Location
				<Icon name="plus"/>
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
	}
}
</script>
