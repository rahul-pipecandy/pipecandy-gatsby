const path = require('path');
const axios = require('axios');
const loadsh = require('loadsh');

exports.createPages = async ({ graphql, actions }) => {
  const companyData = await axios({
    method: 'post',
    url: 'http://localhost:3010/company/dir',
    headers: {},
    data: {
      "apitype": "dir",
      "limit": 10000,
      "page": 1
    },
  });


  // const {data} = await axios({
  //   method:'post',
  //   url:'http://localhost:3010/company/count',
  //   headers: {},
  //   data: {}
  // })
  // const {count} = data[0] || {};


  // const {data} = await graphql(`
  // query MdQuery {
  //     allMarkdownRemark {
  //       nodes {
  //         frontmatter {
  //           title
  //         }
  //       }
  //     }
  //   }
  // `);

  companyData.data.forEach((node) => {
    actions.createPage({
      path: `/${node.cmp.slug}`,
      component: path.resolve('./src/templates/markdown-template.js'),
      context: { title: node.cmp.cmp_name, info: node.info }
    });
  })

  // const companies = [];
  // return Promise.all(companyData.data.map(async (node) => {

  //   const cmpData = await axios({
  //     method: 'post',
  //     url: 'http://localhost:3010/company/info',
  //     headers: {},
  //     data: {
  //       "slug": node.slug
  //     },
  //   });
  //   if (!loadsh.isEmpty(cmpData.data))
  //     companies.push(cmpData.data);

  // })).then(() => {
  //   companies.forEach((node) => {
  //     actions.createPage({
  //       path: `/${node.slug}`,
  //       component: path.resolve('./src/templates/markdown-template.js'),
  //       context: { company: node }
  //     });
  //   })
  // });
};