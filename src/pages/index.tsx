import { IndexTemplate } from "src/components/templates/index/index-template"
import { graphql } from 'gatsby'

export default IndexTemplate

export const query = graphql`
  query PageIndex {
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
        fluid(maxHeight: 700, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    
    
  }
`
