/**
 * This is intended to be a basic starting point for linting in your app.
 * It relies on recommended configs out of the box for simplicity, but you can
 * and should modify this configuration to best suit your team's needs.
 */

/** @type {import('eslint').Linter.Config} */
module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        browser: true,
        commonjs: true,
        es6: true,
    },
    ignorePatterns: ["!**/.server", "!**/.client"],
    rules: {
        // Indent with 4 spaces
        "indent": ["error", 4],

        // Indent JSX with 4 spaces
        "react/jsx-indent": ["error", 4],

        // Indent props with 4 spaces
        "react/jsx-indent-props": ["error", 4],

        // force semicolon usage
        "@stylistic/js/semi": 2,

        // force double quotes
        "@stylistic/js/quotes": 2,
    },

    // Base config
    extends: ["eslint:recommended"],

    overrides: [
        // React
        {
            files: ["**/*.{js,jsx,ts,tsx}"],
            plugins: [
                "react",
                "jsx-a11y",
                "@stylistic/js"
            ],
            extends: [
                "plugin:react/recommended",
                "plugin:react/jsx-runtime",
                "plugin:react-hooks/recommended",
                "plugin:jsx-a11y/recommended",
            ],
            settings: {
                react: {
                    version: "detect",
                },
                formComponents: ["Form"],
                linkComponents: [
                    { name: "Link", linkAttribute: "to" },
                    { name: "NavLink", linkAttribute: "to" },
                ],
                "import/resolver": {
                    typescript: {},
                },
            },
        },

        // Typescript
        {
            files: ["**/*.{ts,tsx}"],
            plugins: ["@typescript-eslint", "import"],
            parser: "@typescript-eslint/parser",
            settings: {
                "import/internal-regex": "^~/",
                "import/resolver": {
                    node: {
                        extensions: [".ts", ".tsx"],
                    },
                    typescript: {
                        alwaysTryTypes: true,
                    },
                },
            },
            extends: [
                "plugin:@typescript-eslint/recommended",
                "plugin:import/recommended",
                "plugin:import/typescript",
            ],
        },

        // Node
        {
            files: [".eslintrc.cjs"],
            env: {
                node: true,
            },
        },
    ],
};
