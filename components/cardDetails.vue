<template>
	<div
		:class="{
			'transition-maxHeight duration-500 ease-in-out relative h-auto w-full overflow-y-hidden -mt-4 bg-white px-8 rounded-lg shadow-md': true,
			'max-h-0': !open,
			'max-h-fit': open
		}"
	>
		<div
			:class="{
				'transition-opacity duration-700 leading-8 text-grayDark': true,
				'opacity-0': !open,
				'opacity-100': open
			}"
		>
			<h3 class="text-xl pt-10 font-bold">
				{{ contact.name }}
			</h3>

			<p>{{ contact.position }}</p>
			<p class="text-greenTurq max-w-fit truncate">{{ contact.email }}</p>
			<p>{{ contact.phone }}</p>

			<div
				class="flex justify-between border-t border-gray-200 mt-2 pt-1 pb-2"
			>
				<button
					@click.prevent="$emit('editing')"
					class="btn-icon text-grayLight hover:text-gray-700"
				>
					<Icon name="pencil" class="mr-2" />
					Edit
				</button>

				<button
					@click.prevent="deleteOffice()"
					class="btn-icon text-pinkPanther hover:text-red-500"
				>
					<Icon name="trash" class="mr-2" />
					Delete
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'CardDetails',
	props: {
		office: Object,
		open: Boolean
	},
	computed: {
		contact() {
			return this.office.contact
		}
	},
	methods: {
		deleteOffice() {
			this.$store.dispatch('deleteStore', this.office.id)
		}
	}
}
</script>
