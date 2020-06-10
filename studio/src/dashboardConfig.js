export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ee16e428e760c87922121de',
                  title: 'Sanity Studio',
                  name: 'testing-1-studio',
                  apiId: '284e45f4-54a4-48db-b60c-0d3593301671'
                },
                {
                  buildHookId: '5ee16e4212e3fa923066f844',
                  title: 'Blog Website',
                  name: 'testing-1',
                  apiId: '20b1f03c-255a-47b0-9d83-b487c6e846d2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/LeoSonnekusFlight/testing-1',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://testing-1.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
