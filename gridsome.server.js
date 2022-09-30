// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const data = require("./data/settings.json");
module.exports = function (api) {
  api.loadSource(store => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api

    const createNodes = (collection, data, locale) => {
        for(const item of data.sidebar){
          collection.addNode({
              section: item.section,
              topics: item.topics,
              locale
          })
      }
    }

    createNodes(
        store.addCollection({typeName: 'Menu'}),
        require('./data/settings.json'),
        'es'
    )

    createNodes(
        store.addCollection({typeName: 'Menu'}),
        require('./data/settings_en.json'),
        'en'
    )
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api
  })
}
