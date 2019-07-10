
module.exports = api => {
  api.cache(true)
  return {
    "plugins": [
      "@babel/plugin-proposal-class-properties"
    ],
    "presets": [
      [ "@babel/preset-env", { "loose": false, "modules": false, "targets": "> 0.25%, not dead"} ],
      "@babel/preset-react",
      "@babel/preset-flow"
    ],
  }
}