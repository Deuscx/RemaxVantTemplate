const devtool = (options) => {
  return {
    onAppConfig({ config }) {
      console.log(config);
      return config;
    },
  };
};
module.exports = devtool;
