# modular-ui-kit-react

[![GitHub Clones](https://img.shields.io/badge/dynamic/json?color=success&label=Clone&query=count&url=https://gist.githubusercontent.com/eugenia-vitinschii/e3f532a4d6ca634ade757fa0cea0aea9/raw/clone.json&logo=github)](https://github.com/MShawon/github-clone-count-badge)

*Modular UI Kit React* A lightweight, modular React component library powered by SASS and unified design tokens. Built for seamless developer experience and modern web UI consistency.
_________

### ⭐️ MukText ⭐️
A flexible typography component designed to render consistent text elements (p, h1–h6, span, a, etc.) with standardized styling and semantic control via the as polymorphic prop.

#### Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `as` | `ElementType` | `'p'` | Polymorphic prop. The underlying HTML element or React component to render (`'p'`, `'h1'`–`'h6'`, `'span'`, `'a'`, etc.). |
| `type` | `UITextType` | `'muk-body-text'` | Applies typography preset styles (`muk-heading`, `muk-subheading`, `muk-body-text`, `muk-caption`). |
| `variant` | `UITextVariant` | `'secondary'` | Sets the text color theme (`primary`, `secondary`, `danger`, `warning`, `muted`). |
| `align` | `UITextAlign` | `'left'` | Text alignment (`left`, `center`, `right`). |
| `children` | `ReactNode` | — | Text or elements to be rendered inside the component. |

#### Usage Example

```ts
import { MukText } from 'modular-ui-kit-react';

// Heading
<MukText as="h1" type="muk-heading" variant="primary">
  Main Header
</MukText>

// Interactive Link
<MukText as="a" href="https://example.com" variant="primary">
  Read More
</MukText>

```

_________

### ⭐️ MukButton ⭐️
A customizable button component that supports various visual variants, sizes, and states (including dynamic loading indicators and disability). It extends standard HTML button attributes and seamlessly handles async states.

#### MukButton Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `variant` | `UIButtonVariant` | `'primary'` | Visual style preset (`primary`, `secondary`, `danger`, `warning`, etc.). |
| `size` | `UISize` | `'lg'` | Button size dimensions (`sm`, `md`, `lg`). |
| `type` | `UIButtonType` | `'button'` | Native HTML button type (`button`, `submit`, `reset`). |
| `loading` | `boolean` | `false` | Displays a loading spinner and disables user interaction. |
| `disabled` | `boolean` | `false` | Disables the button and prevents click events. |
| `children` | `ReactNode` | — | Button label, icon, or nested content. |


_______

### ⭐️ MukIconButton ⭐️
An extension of the standard button component optimized for icon-first or icon-with-text layouts. It supports standard button variants, states, and sizes, with a dedicated slot for icons (children) and an optional text slot (text), automatically applying the has-text state class when label content is present.


#### MukIconButton Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `children` | `ReactNode` | — | Primary slot for the SVG icon or visual content. |
| `text` | `ReactNode` | — | Optional slot for text label next to the icon. Triggers `has-text` class when provided. |
| `variant` | `UIButtonVariant` | `'primary'` | Visual style preset (`primary`, `secondary`, `danger`, `warning`, etc.). |
| `size` | `UISize` | `'lg'` | Button size dimensions (`sm`, `md`, `lg`). |
| `type` | `UIButtonType` | `'button'` | Native HTML button type (`button`, `submit`, `reset`). |
| `loading` | `boolean` | `false` | Displays a loading spinner and disables user interaction. |
| `disabled` | `boolean` | `false` | Disables the button and prevents click events. |
| `ariaLabel` | `string \| number` | — | Accessible label for screen readers (recommended when using icon-only mode). |

_________

### ⭐️ MukInput ⭐️
A flexible and accessible text input component that supports floating labels, error/hint messages, and an optional built-in password visibility toggle. It extends native input attributes and seamlessly handles custom change events and validation states.

#### MukInput Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `value` | `string \| number` | `''` | The current value of the input (controlled component state). |
| `onChange` | `(value: string) => void` | — | Callback function triggered when the input value changes. |
| `label` | `string` | — | Top floating label displayed above the input field. |
| `placeholder` | `string` | — | Placeholder text shown when the input is empty. |
| `hint` | `string` | — | Helper text displayed below the input (hidden if an error is present). |
| `error` | `string` | — | Error message string. Applies `is-error` style and takes precedence over hint. |
| `type` | `UIInputType` | `'text'` | Native HTML input type (`text`, `password`, `email`, etc.). |
| `showPasswordToggle` | `boolean` | `true` | Automatically adds a show/hide eye icon button when `type="password"`. |
| `id` | `string` | `useId()` | Unique identifier for the input, automatically generated if not provided. |
| `disabled` | `boolean` | `false` | Disables user interaction and applies disabled styles. |
| `autoComplete` | `string` | — | Native autocomplete attribute for browser autofill. |

_________

### ⭐️ MukCheckbox ⭐️

An accessible and customizable checkbox component with a custom visual box, flexible label positioning, and support for error and hint validation states. It handles boolean states (checked/unchecked) seamlessly while maintaining native HTML input accessibility (aria-invalid, aria-describedby).


### MukCheckbox Props 

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `value` | `boolean` | `false` | Controls the checked state of the checkbox (`true` for checked, `false` for unchecked). |
| `onChange` | `(value: boolean) => void` | — | Callback function triggered when the state toggles, returning the new boolean value. |
| `label` | `string` | — | Side label text displayed next to the checkbox. |
| `hint` | `string` | — | Helper text displayed below the checkbox (hidden if an error is present). |
| `error` | `string` | — | Error message string. Applies `is-error` style and takes precedence over hint. |
| `id` | `string` | `useId()` | Unique identifier for the input, automatically generated if not provided. |
| `disabled` | `boolean` | `false` | Disables user interaction and applies disabled visual styles. |
_________

### ⭐️ MukRadio ⭐️

An accessible and customizable radio button component designed to work seamlessly within group selections. It supports custom selection states, side labels, and built-in error/hint validation messages, while fully respecting native HTML radio accessibility standards (aria-invalid, aria-describedby).


### MukRadio Props 

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `value` | `string \| number \| boolean` | *Required* | The unique value associated with this specific radio button. |
| `selectedValue` | `string \| number \| boolean \| null` | — | The currently selected value of the entire radio group (used to determine `checked` state). |
| `onChange` | `(value: string \| number \| boolean) => void` | — | Callback function triggered when selected, returning this button's value. |
| `label` | `string` | — | Side label text displayed next to the radio circle. |
| `name` | `string` | — | Native HTML `name` attribute to group radio buttons together. |
| `hint` | `string` | — | Helper text displayed below the radio (hidden if an error is present). |
| `error` | `string` | — | Error message string. Applies `is-error` style and takes precedence over hint. |
| `id` | `string` | `useId()` | Unique identifier for the input, automatically generated if not provided. |
| `disabled` | `boolean` | `false` | Disables user interaction and applies disabled visual styles. |