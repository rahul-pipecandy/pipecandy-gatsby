
import React from 'react'
// import React, { useCallback, useEffect, useState } from 'react'

// import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
// import axios from 'axios';
// import { QueryClient, QueryClientProvider } from "react-query";
// import { useQuery } from "react-query";

// const client = new QueryClient();

// const endpoint = "http://localhost:3010/company/info";

// const COMPANY_QUERY = `
//   {
//     CompanyData {
//       cmp_name,
//       domain_description
//     }
//   }
// `;
// export default function MarkdownTemplate({ data }) {
export default function MarkdownTemplate(props) {
  // const node = data.page;
  
  const {title, info = {}} = props.pageContext || {};

  // const { company: {cmp_name: title, domain_description} } = props.pageContext || {};

  // const { data, isLoading, error } = useQuery("company", () => {
  //   return axios({
  //     method: 'post',
  //     url: endpoint,
  //     headers: {},
  //     data: {
  //       "slug": slug,
  //       query: COMPANY_QUERY
  //     },
  //   }).then(resp => resp.data.data);
  // })


  // const getData = useCallback(async () => {
  //   const companyData = await axios({
  //     method: 'post',
  //     url: 'http://localhost:3010/company/info',
  //     headers: {},
  //     data: {
  //       "slug": slug
  //     },
  //   });
  //   setData(companyData);
  //   console.log(`companyData->${JSON.stringify(companyData)}`)
  // }, [slug]);
  // useEffect(() => {
  //   getData();
  // }, [getData]);

  return (
    <>
      {/* <QueryClientProvider client={client}> */}
        <Helmet>
          <title>{title}</title>
        </Helmet>
        {/* <div dangerouslySetInnerHTML={{ __html: node.html }} />
      <div> 
      </div> */}
        <h1> {title}'s company page</h1>
        <p>Domain Description  {info.domain_description}</p>
      {/* </QueryClientProvider> */}
    </>
  );
}

// export const query = graphql`
// query MyQuery($title: String) {
//   page: markdownRemark(frontmatter: {title: {eq: $title}}) {
//     frontmatter {
//       title
//     }
//     html
//   }
// } 
// `;