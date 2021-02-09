<template>
	<div
		class="transition-all duration-500 border border-white relative flex items-center justify-between z-10 w-full min-h-26 px-6 py-4 shadow-lg cursor-pointer select-none outline-none"
		:class="
			open
				? 'bg-grayLight border-grayLight rounded-t-lg focus:shadow-sm'
				: 'bg-white rounded-lg'
		"
		:tabindex="0"
		@click.prevent="onClick"
		@keydown.enter.prevent="onClick"
	>
		<!-- focus:border-greenTurqLight : !open -->
		<header>
			<h3
				class="text-2xl transition-color duration-500 font-bold select-text max-w-fit"
				:class="
					open ? 'text-white break-words' : 'text-grayDark truncate'
				"
			>
				{{ office.title }}
			</h3>
			<address
				class="font-light transition-color duration-500 select-text not-italic max-w-fit truncate"
				:class="open ? 'text-white' : 'text-grayLight'"
			>
				{{ office.address }}
			</address>
		</header>

		<Icon
			name="chevron"
			class="transition-all duration-500 transform ico"
			:class="open ? 'text-white -rotate-180' : 'text-greenTurq'"
		/>
	</div>
</template>

<script>
export default {
	name: 'CardHeader',
	props: {
		office: Object,
		open: Boolean
	},
	methods: {
		onClick() {
			this.$emit('clicked')
		}
	}
}
</script>
