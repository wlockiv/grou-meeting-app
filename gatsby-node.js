/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin")

// Generate client paths
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  if (page.path.match(/^\/app/)) {
    page.matchPath = "/app/*"

    createPage(page)
  }
}

exports.onCreateWebpackConfig = ({ actions, getConfig, stage }) => {
  // Enables the hot reloader patch based on environment
  // Make sure you have @hot-loader/react-dom installed
  const config = getConfig()
  if (stage.startsWith("develop") && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "react-dom": "@hot-loader/react-dom",
    }
  }

  // Webpack configuration
  actions.setWebpackConfig({
    resolve: {
      plugins: [
        // This lets me use "~/" instead of "../", etc
        new TsconfigPathsPlugin(),
      ],
    },
  })
}
