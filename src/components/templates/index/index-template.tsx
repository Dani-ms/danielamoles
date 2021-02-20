import React from "react"
import { Page } from "src/components/routing/page/page"
import { INDEX_ROUTE } from "./index-routes"
import "./index-template.scss";
import Image from 'gatsby-image'
import { throwError } from 'src/logic/app-internals/utils/throw-error'
import { throwIfNotFluidImage } from 'src/logic/app-internals/images/gatsby-image/throw-if-not-fluid-image'
import { ABOUT_ROUTE } from 'src/components/templates/about/about-routes';
import { Link } from 'gatsby';



type Props = {
  data: GQLPageIndexQuery
}

export function IndexTemplate(props: Props) {


  return (

    <Page noContainment noTopPadding title={INDEX_ROUTE.label}>
      {() => {

        return (
          <div className={"home-page"}>
            <section
              className={"home-page__hero-section cover bg-white d-flex  justify-content-center align-items-center mb-6"}
            >
              <div className={`container`}>
                <div className={`row align-items-center`}>
                  <div className={`col-lg-5 col-md-5`}>
                    <h4 className={`sub-title`}>Hello, I’m</h4>
                    <h2 className={``}>Daniela Moles Santos</h2>
                    <p>Sou Frontend Developer, em Portugal. Principalmente interessada em Desenvolvimento Mobile e Web, com formação em Designer. Sempre tive gosto por tecnologia e por artes. </p>
                    <Link className={`btn btn-outline-secondary`} to={ABOUT_ROUTE.getHref()}>
                      About Me
                  </Link>
                  </div>
                  <div className={`col-lg-7 col-md-7 `}>
                    <div className={`index-profile  d-lg-block`}>
                      <Image className="d-block w-100"
                        fluid={throwIfNotFluidImage(props.data.profile?.childImageSharp?.fluid ?? throwError())}
                        alt=""
                      />

                    </div>
                  </div>


                </div>
              </div>


            </section>
            <section>

            </section>
        
            
          </div>
        )
      }}
    </Page>
  )
}
