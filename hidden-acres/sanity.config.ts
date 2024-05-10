import {defineConfig, Preview} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {media} from 'sanity-plugin-media'

export default defineConfig({
  name: 'default',
  title: 'Hidden Acres Custom Desk Tool',

  projectId: 'vsc009qk',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), media()],
  parts: [
    {name: 'part:@sanity/base/schema', path: './schema'},
    {
      name: 'part:@sanity/desk-tool/structure',
      path: './custum-desk-tool-structure.js',
    },
  ],

  schema: {
    types: schemaTypes,
  },
})

// export default defineConfig((
//   // ...
//   plugins: [
//   structureTool({
//   name: 'cars',
//   title: 'Cars',
//   icon: FaCar,
//   structure: (S) => S.documentTypeList('car'),
//   defaultDocumentNode: (S) =>
//   S.document().views([
//   S.view.form(),
//   S.view.component(Preview).title('Preview')
//   ])
//   })
//   ]
//   })
