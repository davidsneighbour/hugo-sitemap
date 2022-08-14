const defaultStandardVersion = require("@davidsneighbour/config/standard-version");

const localStandardVersion = {
  bumpFiles: [
    ...defaultStandardVersion.bumpFiles,
    { filename: "data/dnb/sitemap/build.json", type: "json" },
  ],
};

module.exports = {
  ...defaultStandardVersion,
  ...localStandardVersion,
};
