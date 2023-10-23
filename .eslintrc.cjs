module.exports = {
  root: true,
  extends: ['airbnb'],
  plugins: ['react', 'jsx-a11y', 'import', 'react-hooks'],
  parser: '@babel/eslint-parser',
  globals: {
    it: true,
    expect: true,
    describe: true,
    window: true,
    __DEV__: true,
  },
  env: {
    jest: true,
    browser: true,
  },
  rules: {
    'react/jsx-filename-extension': ['off'],
    'class-methods-use-this': 'off',
    'func-names': 'off',
    'import/prefer-default-export': 'off',
    'react/forbid-prop-types': ['error', { forbid: ['any'] }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'global-require': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'max-len': 'off',
    'no-console': 'off',
    camelcase: 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'template-curly-spacing': 'off',
    indent: [
      'warn',
      2,
      {
        ignoredNodes: ['TemplateLiteral'],
        SwitchCase: 1,
      },
    ],
    'no-param-reassign': [2, { props: true, ignorePropertyModificationsFor: ['draft'] }],

    // 불필요한 변수
    'no-unused-vars': [
      2,
      { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
    ],
    // 인라인 함수
    'react/jsx-no-bind': 1,
    'linebreak-style': 0,
  },
  overrides: [
    {
      files: ['src/renderer/**/*.js'],
      rules: {
        'import/order': [
          'error',
          {
            groups: ['external', 'internal', 'sibling'],
            pathGroups: [
              {
                pattern: 'react',
                group: 'external',
                position: 'before',
              },
              {
                pattern: '~/store/**',
                group: 'internal',
                position: 'after',
              },
              {
                pattern: '~/lib/**',
                group: 'internal',
                position: 'after',
              },
              {
                pattern: '~/hooks/**',
                group: 'internal',
                position: 'after',
              },
              {
                pattern: '~/pages/**',
                group: 'internal',
                position: 'after',
              },
              {
                pattern: '~/containers/**',
                group: 'internal',
                position: 'after',
              },
              {
                pattern: '~/components/**',
                group: 'internal',
                position: 'after',
              },
              {
                pattern: '~/themes',
                group: 'internal',
                position: 'after',
              },
              {
                pattern: '#/assets/**',
                group: 'internal',
                position: 'after',
              },
              {
                pattern: '../**',
                group: 'sibling',
                position: 'after',
              },
              {
                pattern: './**',
                group: 'sibling',
                position: 'after',
              },
            ],
            pathGroupsExcludedImportTypes: ['react'],
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
            'newlines-between': 'always',
          },
        ],
      },
    },
  ],
};
