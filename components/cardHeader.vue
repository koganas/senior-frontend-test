<template>
	<div
		:class="{
			'transition-all duration-500 relative flex items-center justify-between z-10 w-full min-h-26 px-6 py-4 shadow-lg cursor-pointer select-none': true,
			'bg-white rounded-lg feedback-color': !open,
			'bg-grayLight rounded-t-lg': open
		}"
		:tabindex="0"
		@click="$emit('clicked')"
		@keydown.enter.prevent="$emit('clicked')"
	>
		<header>
			<h3
				class="text-2xl transition-color duration-500 font-bold select-text max-w-fit"
				:class="{
					'text-grayDark truncate': !open,
					'text-white break-words': open
				}"
			>
				{{ office.title }}
			</h3>
			<address
				class="font-light transition-color duration-500 select-text not-italic max-w-fit truncate"
				:class="{
					'text-grayLight': !open,
					'text-white': open
				}"
			>
				{{ office.address }}
			</address>
		</header>

		<Icon
			name="chevron"
			class="transition-all duration-500 transform ico"
			:class="{
				'text-greenTurq': !open,
				'text-white -rotate-180': open
			}"
		/>
	</div>
</template>

<script>
export default {
	name: 'CardHeader',
	props: {
		office: Object,
		open: Boolean
	}
}
</script>
