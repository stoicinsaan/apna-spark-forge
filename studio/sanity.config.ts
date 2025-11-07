import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Apna Growth Media',
  projectId: '7ztroj6e',
  dataset: 'production',
  plugins: [deskTool(), visionTool()],
  schema: { types: schemaTypes },
})
