import React from "react"
import { Page } from "src/components/routing/page/page"
//import "./projects-template.scss";
import { PROJECTS_ROUTE } from "./projects-routes";



type Props = {
  
}

export function ProjectsTemplate(props: Props) {


  return (

    <Page noContainment noTopPadding title={PROJECTS_ROUTE.label}>
      {() => {

        return (
          <div className={"home-page"}>
            <section
              className={"home-page__hero-section cover bg-white d-flex  justify-content-center align-items-center mb-6"}
            >
              <div className={`container`}>
                <div className={`row align-items-center`}>
                  <div className={`col-lg-5 col-md-5`}>
                    <h4 className={`sub-title`}>Projetos</h4>
                    

                  </div>
                  <div className={`col-lg-7 col-md-7 `}>
                   
                  </div>


                </div>
              </div>


            </section>
            
        
            
          </div>
        )
      }}
    </Page>
  )
}
