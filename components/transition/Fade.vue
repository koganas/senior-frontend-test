<template>
	<transition name="fade" v-bind="$attrs" v-on="$listeners">
		<slot />
	</transition>
</template>

<script>
export default {
	name: 'Fade'
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.2s ease-in-out;
}
.fade-enter,
.fade-leave-to {
	opacity: 0;
	position: absolute;
	top: 0;
}
</style>
