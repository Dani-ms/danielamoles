import React from "react"
import { Page } from "src/components/routing/page/page"
import { INDEX_ROUTE } from "./index-routes"
import "./index-template.scss";
import Image from 'gatsby-image'
import { throwError } from 'src/logic/app-internals/utils/throw-error'
import { throwIfNotFluidImage } from 'src/logic/app-internals/images/gatsby-image/throw-if-not-fluid-image'


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
                    <p>Sou um Frontend Developer, em Portugal. Principalmente interessada em Desenvolvimento Mobile e Web, com formação em Designer. </p>

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
              <h4>Sobre mim</h4>
              <p>
                {" "}
                My name is Daniela Moles Santos, I am a Frontend developer with Javascript framework (React js, Gatsby), html, Css, JavaScript and Outsystems Frontend, accessibility.
                I value the good development and good structure of the frontend and projects, so that the components have scalability in the project. In addition to the development area, I also have a designer side, thus improving communication between my development and the project designer{" "}
              </p>


            </section>
            <section className="container">
              <div className="row ">
                <div className="col-6 ">
                  <p>Meu nome é Daniela Moles Santos, sou desenvolvedora de Frontend com framework Javascript (React js, Gatsby), html, Css, JavaScript e Outsystems Frontend, acessibilidade.
                 Valorizo o bom desenvolvimento e boa estrutura de frontend e projetos, para que os componentes tenham escalabilidade no projeto. Além da área de desenvolvimento, também tenho um lado designer, melhorando assim a comunicação entre o meu desenvolvimento e o designer do projeto.</p>
                </div>
                <div className="col-6">
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
              <div className="bd-example bd-example-tabs">
                <div className="row">
                  <div className="col-3">
                    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                      <a className="nav-link active show" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
                      <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</a>
                      <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</a>
                      <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</a>
                    </div>
                  </div>
                  <div className="col-9">
                    <div className="tab-content" id="v-pills-tabContent">
                      <div className="tab-pane fade active show" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                        <p>Cillum ad ut irure tempor velit nostrud occaecat ullamco aliqua anim Lorem sint. Veniam sint duis incididunt do esse magna mollit excepteur laborum qui. Id id reprehenderit sit est eu aliqua occaecat quis et velit excepteur laborum mollit dolore eiusmod. Ipsum dolor in occaecat commodo et voluptate minim reprehenderit mollit pariatur. Deserunt non laborum enim et cillum eu deserunt excepteur ea incididunt minim occaecat.</p>
                      </div>
                      <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                        <p>Culpa dolor voluptate do laboris laboris irure reprehenderit id incididunt duis pariatur mollit aute magna pariatur consectetur. Eu veniam duis non ut dolor deserunt commodo et minim in quis laboris ipsum velit id veniam. Quis ut consectetur adipisicing officia excepteur non sit. Ut et elit aliquip labore Lorem enim eu. Ullamco mollit occaecat dolore ipsum id officia mollit qui esse anim eiusmod do sint minim consectetur qui.</p>
                      </div>
                      <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                        <p>Fugiat id quis dolor culpa eiusmod anim velit excepteur proident dolor aute qui magna. Ad proident laboris ullamco esse anim Lorem Lorem veniam quis Lorem irure occaecat velit nostrud magna nulla. Velit et et proident Lorem do ea tempor officia dolor. Reprehenderit Lorem aliquip labore est magna commodo est ea veniam consectetur.</p>
                      </div>
                      <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                        <p>Eu dolore ea ullamco dolore Lorem id cupidatat excepteur reprehenderit consectetur elit id dolor proident in cupidatat officia. Voluptate excepteur commodo labore nisi cillum duis aliqua do. Aliqua amet qui mollit consectetur nulla mollit velit aliqua veniam nisi id do Lorem deserunt amet. Culpa ullamco sit adipisicing labore officia magna elit nisi in aute tempor commodo eiusmod.</p>
                      </div>
                    </div>
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
