import React from "react"


type Props = {
    name: any
}

type State = {
  name: string
}

export class Login extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
        
    this.state = {
        name: ''
      };
  }

  handleChange = (e: { target: { value: string; }; }) =>{
      this.setState({ name: e.target.value})
  };

  handleSubmit = (e: { preventDefault: () => void; }) =>{
      e.preventDefault();
      this.props.name(this.state.name, false);
  };

 

 

  render() {
    return (
      <>
        <div className="container">
          <div className="login">
              <form>
                  <div className="form-group">
                      <label>Nome</label>
                      <input type="name" className="form-control" onChange={this.handleChange}></input>
                  </div>
                  <button onSubmit={this.handleSubmit} className="btn btn-primary" aria-haspopup="true">Entrar</button>
              </form>
          </div>
        </div>
      
      </>
    )
  }
}
