import js from '@eslint/js';

const lint_config = [
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: 'latest',
        },
        rules: {

        }
    }
];

export { lint_config };