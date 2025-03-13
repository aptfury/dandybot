import js from '@eslint/js';

const lint_config = [
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: 'latest',
        },
        rules: {
            'arrow-spacing': ['warn', {
                before: true,
                after: true
            }],
            curly: ['warn', 'multi-line', 'consistent'],
            'eqeqeq': ['error', 'always'],
            indent: ['error', 'tab'],
            'max-nested-callbacks': ['warn', { max: 4 }],
            'no-console': 'off',
            'no-empty-function': 'warn',
            'no-multi-spaces': 'error',
            'no-multiple-empty-lines': ['warn', {
                max: 2,
                maxEOF: 1,
                maxBOF: 0
            }],
            'no-trailing-spaces': ['warn'],
            'no-var': 'error',
            'object-curly-spacing': ['warn', 'always'],
            'prefer-const': 'warn',
            quotes: ['warn', 'single'],
            semi: ['error', 'always'],
            'space-before-blocks': 'warn',
            'space-before-function-paren': ['warn', {
                anonymous: 'always',
                named: 'always',
                asyncArrow: 'always'
            }],
            yoda: 'error',
        },
    },
];

export { lint_config };