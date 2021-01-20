## Development:

### Assets (media and other non-textual files):

Place media assets (including *SVG*s) in the `src/assets` directory, since media and other non-textual files are more ambiguous and harder to locate in a directory tree, making them difficult to reuse.**Assets used by content should still be placed inside the content directory.**

### Global CSS Styles

These global styles are based on Bootstrap.

_Not all of Bootstrap's SASS files are imported, in order to reduce bundle size and allow function and mixin overriding. If you spot any style inconsistency when creating new components, check if the corresponding Bootstrap SASS files you are using are being imported._

These Global CSS Styles are meant to be used inside your JS components as compositional helpers, like TailwindCSS: you should create elements by creating JS components that are composed by the use of multiple CSS classes from the global styles.

You should only change the global CSS styles when the changes or feature you need to implement cannot be accomplished by only changing the JS components.

Avoid changing the style's Bootstrap behaviour, so new collaborators (and old one's too) can be up to speed by just reading Bootstrap's documentation and won't have to check the global styles code when some inconsistency or unexpected CSS behaviour happens.
Examples:

- If all of the app's buttons are rounded like pills, the rounding styles should not come built-in in the .btn class as overrides, but should be applied in a JS component that renders an element with multiple Bootstrap classes: `<button class="btn btn-primary rounded-pill" />`
- same thing with a button's colors. Do not include a button's colors in its element styles, as it can create other inconsistencies when applying other of the element's color variation classes. It's always preferable to create a Button component that renders the default color as an extra CSS class: `<button class="btn btn-primary" />`

This way, you do not need change Bootstrap's behaviour that might result in unexpected and silent inconsistencies, and also lower the number of variations possible by only using CSS classes and instead we centralize everything in its respective components.

You can always add additional utilities and elements to Bootstrap, like additional sizes for border-radiuses.
Example:

- `<div class="rounded-top rounded-lg"></div>`

## Other stuff:

### IMAGES
content.debug é dev 
content.relase prod
