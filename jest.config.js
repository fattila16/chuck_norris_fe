module.exports = {
    roots: ['<rootDir>'],
    moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
    setupFiles: ['<rootDir>/setupTest.ts'],
    testPathIgnorePatterns: ['<rootDir>[/\\\\](build|docs|node_modules|.next|cypress)[/\\\\]'],
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
    testEnvironment: 'jsdom',
    testURL: 'http://localhost',
    transform: {
        '^.+\\.(ts|tsx)$': 'babel-jest',
    },
    testRegex: '/__tests__/.*\\.(test|spec)\\.tsx?$',
    snapshotSerializers: ['enzyme-to-json/serializer'],
};
