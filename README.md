# Group Meeting App

## TODO:

### Nav-Drawer

- New `group/:groupId` route: [Docs](https://reach.tech/router/example/url-params)
- Isolate the `groups` and `group` routes from `nav-drawer` so the nav drawer can control the route without having re-render/
  - Nesting?: [Link](https://reach.tech/router/example/nested-routes)
  - Embedding?: [Link](https://reach.tech/router/example/embedded-routers)
- Fix Nav to support going thru the above routes
  - Make it so the layout and nav components don't remount between route changes. Elevating to wrap `Router` component?
  - Convert nav items to `@reach/router` `Link`s
  - Links should go to `group/:groupId` routes.
