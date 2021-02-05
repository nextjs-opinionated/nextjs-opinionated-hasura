const path = require("path");

module.exports = {
  stories: ["../src/components/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-actions/register",
    "@storybook/addon-knobs/register",
    "@storybook/addon-notes/register",
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve("awesome-typescript-loader"),
          options: {
            configFileName: path.resolve(__dirname, "./tsconfig.json"),
          },
        },
        /* 
          ** OPTIONAL ** 
    						 
          Basically a webpack loader  used to 				 
          generate docgen information from TypeScript React components. 
The primary use case is to get the prop types 
table populated in the Storybook Info Addon.
    	*/
        {
          loader: require.resolve("react-docgen-typescript-loader"),
          options: {
            tsconfigPath: path.resolve(__dirname, "./tsconfig.json"),
          },
        },
      ],
    });

    config.resolve.extensions.push(".ts", ".tsx");

    return config;
  },
};
