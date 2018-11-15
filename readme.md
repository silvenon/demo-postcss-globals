# Demo for PostCSS Globals

This demo features using `importFrom` and `exportTo` features of
postcss-preset-env in a webpack setup.

## Goals

  1. to author styles (including custom properties) in CSS
  2. to make them available to JS files as well
  3. to keep the exported JS file out of version control

## Scripts

Install dependencies:

```
yarn
```

### `yarn start:err`

  - deletes the exported `styles/globals.js`
  - starts webpack server
  - the first compilation fails because `styles/globals.js` gets generated
    **after** it's being resolved

### `yarn start:fix`

  - deletes the exported `styles/globals.js`
  - runs postcss on an empty string, which generates `styles/globals.js` out of
    `styles/globals.css` (because the latter is listed as `importFrom`)
  - no errors

## Notes

  - I'm deleting `styles/globals.js` because it's a git-ignored auto-generated
    file, so by deleting it I'm mimicing a newly cloned repo.
