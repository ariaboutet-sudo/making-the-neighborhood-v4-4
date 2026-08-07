# Making the Neighborhood — Version 4.3

## Color lens implementation

This version removes all Leaflet vector/pane logic for the theme color.

A literal HTML `<div>` is appended directly inside the Leaflet map container.
It covers the entire map with `position:absolute; inset:0`, uses z-index 999,
and remains click-through. Theme selection sets its background color and
46% opacity directly in JavaScript.

The Leaflet controls and image gallery remain above it.

## Deploy

Unzip and drag the entire `making-the-neighborhood-v4-3` folder into Netlify.


Version 4.4 removes all placeholder quotations so they can be added later.

