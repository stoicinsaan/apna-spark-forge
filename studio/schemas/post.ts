import {defineField, defineType} from 'sanity'
export default defineType({
  name: 'post',
  title: 'Posts',
  type: 'document',
  fields: [
    defineField({name:'title',type:'string',validation:r=>r.required()}),
    defineField({name:'slug',type:'slug',options:{source:'title',maxLength:96},validation:r=>r.required()}),
    defineField({name:'excerpt',type:'text'}),
    defineField({name:'mainImage',type:'image',options:{hotspot:true}}),
    defineField({name:'body',type:'array',of:[{type:'block'}]}),
    defineField({name:'publishedAt',type:'datetime'}),
    defineField({name:'author',type:'string'}),
  ],
})
