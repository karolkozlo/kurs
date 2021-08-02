module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    '@vue/airbnb',
    'plugin:you-dont-need-momentjs/recommended',
    'plugin:you-dont-need-lodash-underscore/compatible'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  plugins: [
    'you-dont-need-lodash-underscore',
  ],
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    radix: ['error', 'as-needed'],
    'object-curly-newline': ['error', { consistent: true }],
    'no-use-before-define': ['error', 'nofunc'],
    'consistent-return': ['error', { treatUndefinedAsUnspecified: true }],
    'no-multiple-empty-lines': 'off',
    'linebreak-style': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'import/order': 'off',
    'import/first': 'off',
    'no-param-reassign': 'off',
    camelcase: 'off',
    'comma-dangle': 'off',
    'arrow-body-style': 'off',
    'padded-blocks': 'off',
    'no-underscore-dangle': 'off',
    'no-mixed-operators': 'off',
    'eol-last': 'off',
    'max-len': 'off',
    'default-case': 'off',
    'lines-between-class-members': 'off',
    'arrow-parens': 'off',
    'operator-linebreak': 'off',
    'max-classes-per-file': 'off',
    'class-methods-use-this': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/require-default-prop': 'off',
    // new additions with eslint-vue 7.0.0
    'vue/custom-event-name-casing': 'off',
    'vue/no-unused-vars': 'off',
    'vue/no-mutating-props': 'off',
    /// vue/strongly-recommended custom rules
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'never'
    }],
    'vue/html-closing-bracket-spacing': ['error', {
      startTag: 'never',
      endTag: 'never',
      selfClosingTag: 'never'
    }],
    'vue/html-end-tags': 'error',
    'vue/html-indent': ['error', 2, {
      attribute: 1,
      baseIndent: 1,
      closeBracket: 0,
      alignAttributesVertically: true,
      ignores: []
    }],
    'vue/html-quotes': ['error', 'double'],
    'vue/html-self-closing': ['error', {
      html: {
        void: 'always',
        normal: 'never',
        component: 'any'
      },
      svg: 'always',
      math: 'always'
    }],
    'vue/mustache-interpolation-spacing': ['error', 'always'],
    'vue/no-multi-spaces': ['error', {
      ignoreProperties: false
    }],
    'vue/no-spaces-around-equal-signs-in-attribute': ['error'],
    'vue/no-template-shadow': 'error',
    'vue/v-bind-style': ['error', 'shorthand'],
    'vue/v-on-style': ['error', 'shorthand'],
    'vue/attribute-hyphenation': ['error', 'never'],
    'vue/multiline-html-element-content-newline': ['error', {
      ignoreWhenEmpty: true,
      ignores: ['pre', 'textarea']
    }],
    'vue/name-property-casing': ['error', 'PascalCase'],
    'vue/prop-name-casing': ['error', 'camelCase'],
    'vue/require-prop-types': 'error',
    // you do not need lodash rules extending plugin:you-dont-need-lodash-underscore/compatible
    'you-dont-need-lodash-underscore/omit': 'off',
    'you-dont-need-lodash-underscore/is-nil': 'off',
    'you-dont-need-lodash-underscore/throttle': 'off',
    'you-dont-need-lodash-underscore/last': 'off',
    'you-dont-need-lodash-underscore/is-string': 'off',
    'you-dont-need-lodash-underscore/get': 'off',
  },
  overrides: [
    {
      files: ['*.spec.js'],
      excludedFiles: '',
      rules: {
        'no-undef': 'off',
        'no-unused-vars': 'off',
        'vue/one-component-per-file': 'off',
      }
    }
  ],
};