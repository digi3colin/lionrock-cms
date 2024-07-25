import {Central} from "@lionrockjs/central";

export default {
  databasePath: `${Central.APP_PATH}/../database`,
  defaultLanguage: 'en',
  blueprint: {
    default: ['@date', 'name', 'body', 'link__label', 'link__url', {items: ["name"]}],
  },

  blocks: {
    default: ['@date', 'name', 'body', 'link__label', 'link__url', {items: ["name"]}],
    logos : ['label', {pictures:["url"]}],
    paragraphs:["subject", "body", "picture", "caption", "description"],
  },

  pageTypeSlugs: {
    default: ['pages', 'articles', 'posts']
  }
};