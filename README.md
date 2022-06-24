# test-app

This will serve a dummy Vue application that uses SUI design system.

## Running locally

### Prerequisites
- First four points in [Cloud Computing Environment Checklist](https://siteminder.atlassian.net/wiki/spaces/eng/pages/602051554/Cloud+Computing+Environment+Checklist#CloudComputingEnvironmentChecklist-nvmandNodeJS)


### Setup
```
// fork this repo or clone
// git clone git@github.com:paula-abella/test-app.git

cd test-app

npm install

npm run serve
```

Then go to http://localhost:8080/

You should see the following:

<img width="720px" alt="test-app-demo" src="https://user-images.githubusercontent.com/84423488/174955650-633f1a29-56c1-489d-85c2-90c4e130f8ca.png">


### Updating packages
If you need to bump the SUI libraries to test the latest version(s)

```
npm i @siteminder/sui-core@latest @siteminder/sui-icons@latest @siteminder/sui-themes@latest
```

### Using the components
Routes and a couple of empty pages are provided in the dummy application.
You can add content/components to it to test things locally.

For example, open `src/views/direct-booking/direct-booking-rates.vue` then add HTML directly into the `template` tag.
Note that in Vue, there should be one root element, for example an outer `div` with all the contents inside.

```html
<template>
  <div>
    <!-- One root div element above or any other element then add the rest of the elements here -->
  </div>
</template>
```

The CSS styles can go in the `style` tag. We use SCSS pre-processing.

```html
<style lang="scss" scoped>
/* CSS goes here */
</style>
```

