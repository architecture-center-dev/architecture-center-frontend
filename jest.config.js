/** @type {import('jest').Config} */
module.exports = {
    testEnvironment: "jsdom",
    preset: "ts-jest",
    roots: ["<rootDir>/src"],
    transform: {
        "^.+\\.(ts|tsx)$": ["ts-jest", { tsconfig: "<rootDir>/tsconfig.jest.json" }],
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
    collectCoverage: false,
    collectCoverageFrom: ["src/**/*.ts", "src/**/*.tsx"],
    moduleNameMapper: {
        "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/jest-css-modules",
    },
};
