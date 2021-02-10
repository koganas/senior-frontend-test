export { default as CardDetails } from '../../components/CardDetails.vue'
export { default as CardHeader } from '../../components/CardHeader.vue'
export { default as OfficeCard } from '../../components/OfficeCard.vue'
export { default as OfficeForm } from '../../components/OfficeForm.vue'
export { default as OfficeNew } from '../../components/OfficeNew.vue'
export { default as Fade } from '../../components/transition/Fade.vue'
export { default as AlertStatus } from '../../components/ui/AlertStatus.vue'
export { default as Icon } from '../../components/ui/Icon.vue'
export { default as InputField } from '../../components/ui/InputField.vue'

export const LazyCardDetails = import('../../components/CardDetails.vue' /* webpackChunkName: "components/card-details" */).then(c => c.default || c)
export const LazyCardHeader = import('../../components/CardHeader.vue' /* webpackChunkName: "components/card-header" */).then(c => c.default || c)
export const LazyOfficeCard = import('../../components/OfficeCard.vue' /* webpackChunkName: "components/office-card" */).then(c => c.default || c)
export const LazyOfficeForm = import('../../components/OfficeForm.vue' /* webpackChunkName: "components/office-form" */).then(c => c.default || c)
export const LazyOfficeNew = import('../../components/OfficeNew.vue' /* webpackChunkName: "components/office-new" */).then(c => c.default || c)
export const LazyFade = import('../../components/transition/Fade.vue' /* webpackChunkName: "components/fade" */).then(c => c.default || c)
export const LazyAlertStatus = import('../../components/ui/AlertStatus.vue' /* webpackChunkName: "components/alert-status" */).then(c => c.default || c)
export const LazyIcon = import('../../components/ui/Icon.vue' /* webpackChunkName: "components/icon" */).then(c => c.default || c)
export const LazyInputField = import('../../components/ui/InputField.vue' /* webpackChunkName: "components/input-field" */).then(c => c.default || c)
