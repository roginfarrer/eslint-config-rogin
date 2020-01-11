module.exports = {
  extends: [require.resolve('eslint-config-kentcdodds')],
  rules: {
    'react/no-did-mount-set-state': 'off',
    'react/default-props-match-prop-types': [
      'error',
      {allowRequiredDefaults: true},
    ],
  },
};
