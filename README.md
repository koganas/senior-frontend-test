![Dog and Pony Studios](https://www.dogandponystudios.com/app/themes/dps/assets/public/images/logo-fbe89868bd.svg)

# Senior Frontend Developer Test

## Objective
The purpose of this test is to recreate the design and functionality of a generic [office-listings page](https://www.figma.com/proto/VU2BJHrMmoSEdQmMa1EbYP/Front-end-Test?node-id=2253%3A2129&viewport=-4357%2C528%2C0.5&scaling=min-zoom).

#### Structure
Basically this project consists in this set of features:
- A simple Vuex store containing the `officeList` and `alert` initial states, mutations and actions. 
- Main components: *OfficeNew*, *OfficeCard* and *OfficeForm*
- Card child components: *CardHeader* and *CardDetails*
- UI components: *InputField*, *Icon* and *AlertStatus*
- *Fade* transition component

#### Acessibility
To maintain acessibility using the keyboard, i've reviewed some css and pseudo elements behavior. Google Chrome sets some outlines that I believe it takes the expected "smoothness" out of the interface. I've also used `tabindex` on a particular case where the html tag was not intended to user interactivity.

#### Animations
For most animations, I used class binding and tailwind styling. I've also done a simple fade transition component to achieve the cards/forms switching behavior.

#### Validation
As the most complex rules would come only from email and phone inputs, i've used a helper that contains:
- The Mask directive import and binding
- `validateForm` checks each form entry using the computed property `hasError`
- `validateEmail` tests a string with a regular expression for emails
To verify length, I compared the `inputMask` prop with the field values. If there were more complex fields to validate, I would consider using [VeeValidate](https://vee-validate.logaretm.com/v3).

#### Tools
- [Nuxt.js](https://github.com/nuxt/nuxt.js)
- [Tailwind](https://github.com/tailwindlabs/tailwindcss)
- [Heroicons](https://heroicons.com/) (svg)
- [The Mask](https://github.com/vuejs-tips/vue-the-mask)

## Build
Run `npm install` and `npm run dev`

*You can also use [yarn](https://yarnpkg.com/getting-started/install) instead of npm for this tasks.

## Tasks list
1. Fork [test repository](https://github.com/dogandpony/senior-frontend-test).
1. Recreate [the design](https://www.figma.com/file/VU2BJHrMmoSEdQmMa1EbYP/Front-end-Test?node-id=2253%3A2129) using [Vue.js](https://vuejs.org/) and [TailwindCSS](https://tailwindcss.com/)
1. Populate the office listings from a datasource (JSON or hard-coded array)
1. Recreate the following interactivity
    1. Toggle open/close office cards
    1. “Add new location” (add new office to list)
    1. “Edit office” (edit and save office data)
    1. While adding or editing an office, the “Save” button should be disabled until all fields have been validated
    1. “Delete office” (remove office from list)