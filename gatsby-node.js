const { currentBuildVariant, ALL_BUILD_VARIANTS } = require('./bootstrap-build-environment')

const path = require('path')
const { promisify } = require('util')
const fs = require('fs')
const childProcess = require('child_process')

const { introspectionQuery, graphql } = require('gatsby/graphql')

const exists = promisify(fs.exists)
const writeFile = promisify(fs.writeFile)
const mkdir = promisify(fs.mkdir)
const exec = promisify(childProcess.exec)

//const { createCeraflamePages,} = require('./src/components/templates/companies/integrations/ceraflame/ceraflame-node-apis')
//const {  createRevmasterPages,} = require('./src/components/templates/companies/integrations/revmaster/revmaster-node-apis')
//const { createFlorestaVerdePages, } = require('./src/components/templates/companies/integrations/florestaverde/florestaverde-node-apis')
//const { createMaxtoyPages } = require('./src/components/templates/companies/integrations/maxtoy/maxtoy-node-apis')

/* ---------- */
/* ---------- */
/* ---------- */

const GRAPHQL_TYPESCRIPT_GENERATOR_COMMAND =
  path.resolve(__dirname, 'node_modules', '.bin', 'graphql-codegen') + ' --config codegen.yml'

exports.createPages = async function (...args) {
  //await createCeraflamePages(...args)
    //await createFlorestaVerdePages(...args)
}

/* ---------- */
/* ---------- */
/* ---------- */

async function saveGraphQLSchemaToFile(store) {
  const { schema } = store.getState()
  if (!schema) throw new Error()

  const graphQlSchema = await graphql(schema, introspectionQuery)

  const dir = path.join(__dirname, '_graphql-generated_')

  if (!(await exists(dir))) {
    await mkdir(dir)
  }
  await writeFile(path.join(dir, 'schema.json'), JSON.stringify(graphQlSchema))
}

exports.onCreateWebpackConfig = async ({ actions, stage, getConfig, store }) => {
  if (currentBuildVariant === ALL_BUILD_VARIANTS.DEBUG) {
    const graphqlTypingsExist = await exists(path.resolve(__dirname, '_graphql-generated_/typescript'))

    if (!graphqlTypingsExist) {
      console.info('Generating Typescript typings of GraphQL queries for the first time...')

      try {
        await saveGraphQLSchemaToFile(store)
        await exec(GRAPHQL_TYPESCRIPT_GENERATOR_COMMAND)
      } catch (err) {
        console.error(err)
        process.exit(1)
      }
    }
  }

  actions.setWebpackConfig({
    resolve: {
      alias: {
        src: path.resolve(__dirname, `src`),
        '@config': path.resolve(__dirname, `__config.${currentBuildVariant}`),
        ...(currentBuildVariant === ALL_BUILD_VARIANTS.DEBUG
          ? {
              'react-dom': '@hot-loader/react-dom',
            }
          : {}),
      },
    },
  })

  const { schema } = store.getState()
  if (!schema) throw new Error()

  /*
    TODO: move this to eslint config file, and import that new file here
    This will allow to use the --fix option in ESLint and also the code editors to use this ESLint config.
  */

  const gatsbyEslintConfig = require('gatsby/dist/utils/eslint-config').eslintConfig(schema)

  actions.setWebpackConfig({
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.(js|jsx|ts|tsx)$/,
          loader: 'eslint-loader',
          include: [path.resolve(__dirname, 'src')],
          options: {
            ...gatsbyEslintConfig,
            emitError: false,
            emitWarning: false,
            failOnError: currentBuildVariant === ALL_BUILD_VARIANTS.RELEASE,
            failOnWarning: currentBuildVariant === ALL_BUILD_VARIANTS.RELEASE,
            parserOptions: {
              ...gatsbyEslintConfig.parserOptions,
              project: path.resolve(
                __dirname,
                currentBuildVariant === ALL_BUILD_VARIANTS.DEBUG
                  ? './tsconfig.json'
                  : `./tsconfig.${currentBuildVariant}.json`
              ),
            },
            rules: {
              ...gatsbyEslintConfig.rules,
              'react-hooks/exhaustive-deps': 'off',
              'jsx-a11y/no-autofocus': 'off',
              '@typescript-eslint/restrict-template-expressions': ['error', { allowNumber: true }],
              'no-console': [
                currentBuildVariant === ALL_BUILD_VARIANTS.RELEASE ? 'error' : 'warn',
                { allow: ['info', 'warn', 'error'] },
              ],
            },
          },
        },
      ],
    },
  })
}

exports.onPreBuild = async ({ store }) => {
  try {
    await saveGraphQLSchemaToFile(store)

    await exec(GRAPHQL_TYPESCRIPT_GENERATOR_COMMAND)

    const TYPESCRIPT_TYPE_CHECK_COMMAND =
      path.resolve(__dirname, 'node_modules', '.bin', 'tsc') + ' --p tsconfig.release.json'

    await exec(TYPESCRIPT_TYPE_CHECK_COMMAND)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

exports.onCreateDevServer = async ({ store }) => {
  try {
    const { spawn } = childProcess

    await saveGraphQLSchemaToFile(store)

    const graphqlTypescriptGeneratorWatcherProcess = spawn(GRAPHQL_TYPESCRIPT_GENERATOR_COMMAND + ' --watch', {
      shell: true,
    })

    graphqlTypescriptGeneratorWatcherProcess.stdout.on('data', function (data) {
      console.info('stdout: ' + data.toString())
    })

    graphqlTypescriptGeneratorWatcherProcess.stderr.on('data', function (data) {
      console.error('stderr: ' + data.toString())
    })

    graphqlTypescriptGeneratorWatcherProcess.on('exit', function (code) {
      if (code !== 0) {
        console.error(GRAPHQL_TYPESCRIPT_GENERATOR_COMMAND + ' exited with code ' + code)
        process.exit(1)
      } else {
        console.info(GRAPHQL_TYPESCRIPT_GENERATOR_COMMAND + ' exited correctly.')
      }
    })
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}
