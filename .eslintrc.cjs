module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:react/jsx-runtime',
        'plugin:import/recommended',
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        'prettier'
    ],
    ignorePatterns: ['postcss.config.cjs', 'vite.config.ts', '*.config.js', '*.config.ts', 'dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.eslint.json',
        tsconfigRootDir: __dirname,
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'react-hooks',
        'jsx-a11y',
        'import',
        'prettier',
    ],
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
                project: './tsconfig.eslint.json'
            },
            node: {
                paths: ['src'],
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
    rules: {
        "arrow-body-style": ["error", "as-needed"],
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-unused-vars': ['error', {argsIgnorePattern: '^_'}],
        'no-console': ['warn', {allow: ['warn', 'error']}],
        'prettier/prettier': 'error',
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true
                }
            }
        ],
    },
};