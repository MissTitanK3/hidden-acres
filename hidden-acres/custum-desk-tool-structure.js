import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Hidden Acres')
    .items(
      S.documentTypeListItems().filter(listItem => console.log(listItem.getId()))
    )