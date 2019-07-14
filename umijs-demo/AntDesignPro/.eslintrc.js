const { strictEslint } = require('@umijs/fabric');

module.exports = {
  ...strictEslint,

  // override @umijs/fabric
  rules: {
    ...strictEslint.rules,
    'import/no-extraneous-dependencies': [
      2,
      {
        optionalDependencies: true,
        devDependencies: [
          '**/tests/**.{ts,js,jsx,tsx}',
          '**/_test_/**.{ts,js,jsx,tsx}',
          '/mock/**/**.{ts,js,jsx,tsx}',
          '**/**.test.{ts,js,jsx,tsx}',
          '**/_mock.{ts,js,jsx,tsx}',
        ],
      },
    ],
  },
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
  },
};
