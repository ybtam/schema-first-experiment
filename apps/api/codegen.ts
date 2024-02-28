import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: './src/**/typedef/*.graphql',
  generates: {
    './src/': {
      preset: 'graphql-modules',
      presetConfig: {
        baseTypesPath: '../typedef/graphql.ts',
        filename: 'typedef/module-types.ts'
      },
      plugins: [
        {
          add: {
            content: '/* eslint-disable */'
          }
        },
        'typescript',
        'typescript-resolvers'
      ]
    }
  }
}
export default config
