<template>
	<form
		@submit.prevent="onSubmit"
		@keydown.enter.prevent.self="onSubmit"
		novalidate
		class="w-full bg-white rounded-lg shadow-md text-grayDark px-6 pt-4 pb-6"
	>
		<header class="flex justify-between mb-10">
			<span class="font-bold"
				>{{ isEditing ? 'Edit' : 'New' }} Location</span
			>
			<button
				@click.prevent="$emit('close')"
				class="text-grayLight feedback-color"
			>
				<Icon name="close" />
			</button>
		</header>

		<InputField
			label="Title"
			v-model="form.title"
			ref="title"
			:required="true"
			:error="isSubmitted"
		/>

		<InputField
			label="Enter the address"
			v-model="form.address"
			ref="address"
			:required="true"
			:error="isSubmitted"
		/>

		<h3
			class="pb-2 my-2 border-b border-gray-200 uppercase text-xs text-greenTurq"
		>
			Contact information
		</h3>

		<InputField
			label="Full name"
			v-model="form.contact.name"
			ref="name"
			:required="true"
			:error="isSubmitted"
		/>

		<InputField
			label="Job position"
			v-model="form.contact.position"
			ref="position"
			:required="true"
			:error="isSubmitted"
		/>

		<InputField
			type="email"
			label="Email address"
			v-model="form.contact.email"
			ref="email"
			placeholder="name@example.com"
			:required="true"
			:error="isSubmitted"
		/>

		<InputField
			type="phone"
			label="Phone"
			v-model="form.contact.phone"
			ref="phone"
			placeholder="(xxx) xxx-xxxx"
			input-mask="(###) ###-####"
			:required="true"
			:error="isSubmitted"
		/>

		<button
			type="submit"
			class="btn font-light feedback"
			:class="isValid() ? 'bg-greenTurq' : 'bg-gray-400'"
		>
			Save
		</button>
	</form>
</template>

<script>
import { validateForm } from '@/helpers/validation'

export default {
	name: 'OfficeForm',
	props: {
		office: {
			type: Object,
			required: false,
			default: () => {}
		},
		open: {
			type: Boolean,
			required: false,
			default: false
		}
	},
	data: () => {
		return {
			form: {
				id: null,
				title: '',
				address: '',
				contact: {
					name: '',
					position: '',
					email: '',
					phone: ''
				}
			},
			isSubmitted: false
		}
	},
	computed: {
		isEditing() {
			return this.office && this.office.id
		}
	},
	created() {
		if (this.isEditing) {
			this.form = {
				...this.office,
				contact: {
					...this.office.contact
				}
			}
		}
	},
	methods: {
		onSubmit() {
			this.isSubmitted = true
			if (!this.isValid()) return false

			this.$store.dispatch('updateStore', {
				...this.form
			})

			this.$emit('close')
		},
		isValid() {
			return validateForm(this.$refs)
		}
	}
}
</script>
