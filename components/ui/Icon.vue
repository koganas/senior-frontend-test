<template>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="outline-none"
		:class="size === 'small' ? 'h-5 w-5' : 'h-6 w-6'"
		:fill="fill ? 'currentColor' : 'none'"
		:stroke="fill ? 'none' : 'currentColor'"
		:viewBox="size === 'small' ? '0 0 20 20' : '0 0 24 24'"
	>
		<path
			v-if="name === 'plus'"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M12 6v6m0 0v6m0-6h6m-6 0H6"
		/>

		<path
			v-if="name === 'close'"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M6 18L18 6M6 6l12 12"
		/>

		<path
			v-if="name === 'error'"
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
		/>

		<path
			v-if="name === 'check'"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M5 13l4 4L19 7"
		/>

		<path
			v-if="name === 'chevron'"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M19 9l-7 7-7-7"
		/>

		<path
			v-if="name === 'pencil'"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
		/>

		<path
			v-if="name === 'trash'"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
		/>
	</svg>
</template>

<script>
export default {
	name: 'Icon',
	props: {
		name: {
			type: String,
			required: true
		},
		fill: {
			type: Boolean,
			required: false,
			default: false
		},
		size: {
			type: String,
			required: false,
			default: 'medium'
		}
	}
}
</script>
