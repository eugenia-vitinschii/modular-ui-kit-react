# modular-ui-kit-react

[![GitHub Clones](https://img.shields.io/badge/dynamic/json?color=success&label=Clone&query=count&url=https://gist.githubusercontent.com/eugenia-vitinschii/e3f532a4d6ca634ade757fa0cea0aea9/raw/clone.json&logo=github)](https://github.com/MShawon/github-clone-count-badge)

*Modular UI Kit React* A lightweight, modular React component library powered by SASS and unified design tokens. Built for seamless developer experience and modern web UI consistency.


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