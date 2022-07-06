const path = require('path');

exports.createPages = async({graphql, actions}) => {
    const {data} = await graphql(`
    query MdQuery {
        allMarkdownRemark {
          nodes {
            frontmatter {
              title
            }
          }
        }
      }
    `);
    
    data.allMarkdownRemark.nodes.forEach((node) => {
        actions.createPage({
            path: `/${node.frontmatter.title}`,
            component: path.resolve('./src/templates/markdown-template.js'),
            context: {title: node.frontmatter.title}
        });
    });
};