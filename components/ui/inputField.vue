<template>
	<label class="input-group">
		{{ label }}
		<span v-if="required" class="label text-grayLight inline">*</span>

		<input
			:type="type"
			:placeholder="placeholder"
			:value="value"
			class="transition-all duration-200 text border-grayDark outline-none"
			:ref="label"
			:class="{
				'border-pinkPanther': hasError,
				'focus:border-greenTurq': hasError
			}"
			@input="$emit('input', $event.target.value)"
		/>
		<p v-if="hasError" class="mt-1 text-xs text-pinkPanther">
			{{ message }}
		</p>
		<Icon
			v-if="hasError"
			name="error"
			size="small"
			fill
			class="absolute right-0 top-35 mr-2 text-pinkPanther"
		/>
	</label>
</template>

<script>
export default {
	name: 'InputField',
	props: {
		type: {
			type: String,
			default: 'text'
		},
		value: String,
		label: String,
		placeholder: String,
		error: {
			type: Boolean,
			default: false
		},
		required: {
			type: Boolean,
			required: false,
			default: false
		}
	},
	data: function () {
		return {
			message: ''
		}
	},
	computed: {
		hasError() { },
	},
}
</script>
