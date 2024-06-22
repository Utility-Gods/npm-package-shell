#!/usr/bin/env node

const { init } = require("./dist/index.js");

const defaultOptions = {};

function run(args = process.argv.slice(2)) {
  const options = {
    ...defaultOptions,
    ...Object.fromEntries(
      args.map((arg) => arg.split("=")).map(([key, value]) => [key]),
    ),
  };

  console.log("Generating sitemap with options:", options);

  return init(options)
    .then(() => {
      console.log("success");
    })
    .catch((err) => {
      console.error("failed:", err);
      process.exit(1);
    });
}

// Only run the function if this script is executed directly
if (require.main === module) {
  run();
}

// Export the run function for testing or external use
module.exports = { run };
