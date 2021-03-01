import React from "react"
import { Page } from "src/components/routing/page/page"
import { ABOUT_ROUTE } from "./about-routes"
import "./about-template.scss";
import Image from 'gatsby-image'
import { throwError } from 'src/logic/app-internals/utils/throw-error'
import { throwIfNotFluidImage } from 'src/logic/app-internals/images/gatsby-image/throw-if-not-fluid-image'
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

type Props = {
  data: GQLPageAboutQuery
}

export function AboutTemplate(props: Props) {

const experience = props.data.allExperienciaCsv;

  return (

    <Page noContainment noTopPadding title={ABOUT_ROUTE.label}>
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
            <section className="container text-center mb-6">
              <h4>About Me</h4>
              <p>
                {" "}
                My name is Daniela Moles Santos, I am a Frontend developer with Javascript framework (React js, Gatsby), html, Css, JavaScript and Outsystems Frontend, accessibility.
                I value the good development and good structure of the frontend and projects, so that the components have scalability in the project. In addition to the development area, I also have a designer side, thus improving communication between my development and the project designer{" "}
              </p>


            </section>
            <section className="container">
              <div className="row ">
                <div className="col-12">
                  <p> Skills</p>
                  <div className="group-skills">
                    <button className={`btn btn-outline-secondary`}>
                      HTML
                  </button>
                    <button className={`btn btn-outline-secondary`}>
                      {" "}
                   CSS/SASS
                  </button>
                    <button className={`btn btn-outline-secondary`}>
                      {" "}
                   REACT
                  </button>
                    <button className={`btn btn-outline-secondary`}>
                      {" "}
                   JAVA SCRIPT
                  </button>
                    <button className={`btn btn-outline-secondary`}>
                      {" "}
                   TYPESCRIPT
                  </button>
                    <button className={`btn btn-outline-secondary`}>
                      {" "}
                   GRAPHQL
                  </button>
                    <button className={`btn btn-outline-secondary`}>
                      {" "}
                   OUTSYSTEMS
                  </button>
                    <button className={`btn btn-outline-secondary`}>
                      {" "}
                  GIT
                  </button>
                    <button className={`btn btn-outline-secondary`}>
                      {" "}
                   POSTMAN
                  </button>
                    <button className={`btn btn-outline-secondary`}>
                      {" "}
                   BOOTSTRAP
                  </button>
                    <button className={`btn btn-outline-secondary`}>
                      {" "}
                   PHP MYADMIN
                  </button>
                  </div>

                </div>
              </div>
            </section>
            <section className="container">
              <h4 className="text-center">Experiência Profissional</h4>
              <div className="bd-example bd-example-tabs text-center">
                
                    <VerticalTimeline>
                    {experience.edges.map((item, i) => (
                        <VerticalTimelineElement key={i} contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }} className="vertical-timeline-element--work " date="{item.node.date}"  >
                            <h3 className="vertical-timeline-element-title">  {item.node.empresa} </h3>
                            <p className="vertical-timeline-element-subtitle"> {item.node.resumo}</p>
                            <p className="vertical-timeline-element-subtitle"> {item.node.date}</p>
                        </VerticalTimelineElement>
                          ))}
                    </VerticalTimeline>

                  
              
              </div>
            </section>
  
            
          </div>
        )
      }}
    </Page>
  )
}
