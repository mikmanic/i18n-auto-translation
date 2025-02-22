"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.argv = void 0;
const yargs_1 = __importDefault(require("yargs"));
exports.argv = (0, yargs_1.default)(process.argv.slice(2))
    .options({
    apiProvider: {
        type: 'string',
        alias: 'a',
        description: 'API Provider.',
        choices: [
            'google-official',
            'azure-official',
            'azure-rapid',
            'deep-rapid',
            'lecto-rapid',
            'lingvanex-rapid',
            'nlp-rapid',
            'deepl-free',
            'deepl-pro',
        ],
        default: 'google-official',
    },
    key: {
        type: 'string',
        alias: 'k',
        demandOption: true,
        description: 'Subscription key for the API provider.',
    },
    region: {
        type: 'string',
        alias: 'r',
        description: 'Key region. Used only by the Official Azure API.',
        default: 'global',
    },
    filePath: {
        type: 'string',
        alias: 'p',
        description: 'Path to a single JSON file.',
    },
    dirPath: {
        type: 'string',
        alias: 'd',
        description: 'Path to a directory in which you will recursively find all JSON files named [from].json (e.g. en.json)',
    },
    from: {
        type: 'string',
        alias: 'f',
        description: 'From which language you want to translate.',
        default: 'en',
    },
    to: {
        type: 'string',
        alias: 't',
        demandOption: true,
        description: 'To which language you want to translate.',
    },
    override: {
        type: 'boolean',
        alias: 'o',
        description: 'Override all created i18n JSON files.',
        default: false,
    },
    certificatePath: {
        type: 'string',
        alias: 'c',
        description: 'Path to a custom certificate.',
    },
    spaces: {
        type: 'number',
        alias: 's',
        description: 'Number of spaces to use for indentation.',
        default: 2,
    },
})
    .parseSync();
//# sourceMappingURL=cli.js.map