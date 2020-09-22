# Group Meeting App

## TODO:

### Nav-Drawer

- [x] New `group/:groupId` route: [Docs](https://reach.tech/router/example/url-params)
- [x] Isolate the `groups` and `group` routes from `nav-drawer` so the nav drawer can control the route without having re-render/
  - [x] Nesting?: [Link](https://reach.tech/router/example/nested-routes)
  - ~~Embedding?: [Link](https://reach.tech/router/example/embedded-routers)~~
- [x] Fix Nav to support going thru the above routes
  - [x] Make it so the layout and nav components don't remount between route changes. Elevating to wrap `Router` component?
  - [x] Convert nav items to `@reach/router` `Link`s
  - [x] Links should go to `group/:groupId` routes.
