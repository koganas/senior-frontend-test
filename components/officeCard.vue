<template>
	<div
		class="transition-all duration-500 relative w-full min-h-26 mt-6 shadow-m"
	>
		<div v-if="!isEditing" class="relative w-full">
			<CardHeader
				:office="office"
				:open="isExpanded"
				@clicked="isExpanded = !isExpanded"
			/>

			<CardDetails
				:office="office"
				:open="isExpanded"
				@editing="isEditing = true"
			/>
		</div>

		<OfficeForm
			v-if="isEditing"
			:office="office"
			:open="isEditing"
			@close="isEditing = false"
		/>
	</div>
</template>

<script>
export default {
	name: 'OfficeCard',
	props: {
		office: {
			type: Object,
			required: true,
			default: () => {}
		}
	},
	data: () => {
		return {
			isExpanded: false,
			isEditing: false
		}
	}
}
</script>
