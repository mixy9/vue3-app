module.exports = {
    root: true,
    env: {
        node: true,
        'vue/setup-compiler-macros': true,
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'plugin:prettier/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    rules: {
        'vue/multi-word-component-names': 0,
        // Add custom rules here
    },
};
