<template>
	<div
		class="flex justify-center w-full min-h-screen py-32 font-sans bg-gray-200"
	>
		<AlertStatus />

		<div class="flex flex-col w-80 items-center">
			<h1 class="mb-6 text-6xl font-light text-greenTurq">Offices</h1>
			<OfficeNew />

			<OfficeCard
				v-for="office in offices"
				:key="office.id"
				:office="office"
			/>

			<footer class="mt-6 text-center">
				<p class="text-gray-500 font-light">
					This project is for test purpose only.
				</p>
				<p>
					<a
						class="uppercase text-greenTurq text-xs opacity-75"
						href="https://www.dogandponystudios.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						www.dogandponystudio.com
					</a>
				</p>
			</footer>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	name: 'Home',
	layout: 'default',
	data: () => {
		return {}
	},
	computed: {
		...mapState({
			offices: (state) => state.officeList
		})
	},
	head() {
		return {
			title: 'Offices - Dog and Pony Test'
		}
	}
}
</script>
