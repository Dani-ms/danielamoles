import {AboutTemplate } from "src/components/templates/about/about-template"
import { graphql } from 'gatsby'

export default AboutTemplate

export const query = graphql`
  query PageAbout {
    hero: file(
      sourceInstanceName: { eq: "content" }
      relativePath: { eq: "index/hero.png" }
    ) {
      childImageSharp {
        fluid(maxHeight: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    
   
    profile: file(
      sourceInstanceName: { eq: "content" }
      relativePath: { eq: "index/photo.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allExperienciaCsv(sort: {fields: order, order: DESC}) {
      edges {
        node {
          id
          empresa
          date
          order
          resumo
        }
      }
    }
    
  }
`
