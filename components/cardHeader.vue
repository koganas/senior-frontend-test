<template>
	<div
		:class="{
			'transition-all duration-500 relative flex items-center justify-between z-20 w-full h-26 px-6 py-4 shadow-lg cursor-pointer select-none' : true,
			'bg-white rounded-lg': !open,
			'bg-grayLight rounded-t-lg': open
		}"
		@click="$emit('clicked')"
	>
		<header>
			<h3
				class="text-2xl transition-color duration-500 font-semibold select-text max-w-fit truncate"
				:class="{
					'text-grayDark': !open,
					'text-white': open
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
			class="transition-all duration-500 transform"
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
