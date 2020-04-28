let common = [
  'features/**/*.feature',                // Specify our feature files
  '--require-module ts-node/register',    // Load TypeScript module
  '--require features/step-definitions/**/*.ts',   // Load step definitions
  '--require features/support/**/*.ts',   // Load support
].join(' ');

module.exports = {
  default: common
};