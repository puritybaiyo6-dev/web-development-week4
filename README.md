# SpendWise Dashboard Shell

## Project Overview

SpendWise is a modern personal finance dashboard designed to help users visualize their monthly spending and budget categories.

This Week 4 project focuses on creating the visual dashboard structure using CSS Grid and Flexbox. No JavaScript functionality has been added.

## Features

* Responsive dashboard layout
* Sidebar navigation menu
* Dashboard header
* Monthly financial summary
* Six spending category cards
* Food category
* Transport category
* Rent category
* Entertainment category
* Savings category
* Utilities category
* CSS Grid for the overall dashboard and category cards
* Flexbox for navigation, header, summary cards, and dashboard cards
* CSS custom properties for the application theme
* Responsive layout for screens below 768px
* Hover and keyboard focus micro-interactions
* Dark theme using `prefers-color-scheme`

## Files

### `index.html`

Contains the structure of the SpendWise dashboard, including:

* Sidebar navigation
* Header
* Financial summary
* Spending category cards

### `style.css`

Contains all visual styling for the project, including:

* CSS Grid
* Flexbox
* CSS custom properties
* Responsive media queries
* Card animations
* Dark theme
* Colors, spacing, typography, borders, and progress bars

## CSS Grid

CSS Grid is used for the main dashboard structure:

```css
.dashboard {
    display: grid;
    grid-template-columns: 250px 1fr;
}
```

It is also used to arrange the six category cards into three columns on larger screens.

## Flexbox

Flexbox is used for:

* Sidebar navigation
* Header layout
* User profile
* Summary cards
* Category card content
* Responsive navigation

## Responsive Design

Below 768px, the dashboard changes to a single-column layout. The sidebar and cards adapt to smaller screen sizes.

The responsive layout can be tested using the browser's DevTools Device Toolbar.

## Micro-interactions

Dashboard cards have hover and keyboard focus effects using:

* `transform`
* `box-shadow`
* `transition`

The transition lasts 0.2 seconds, which is within the required 250ms limit.

## Dark Theme

The project includes a dark theme using:

```css
@media (prefers-color-scheme: dark)
```

Only the CSS custom properties are overridden to create the dark color scheme.

## Technologies Used

* HTML5
* CSS3
* CSS Grid
* Flexbox
* CSS Custom Properties
* Responsive Design
* Media Queries

## Author

SpendWise Dashboard Project

```
```
