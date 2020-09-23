import React, { Component } from "react";
import "./estilos.scss";
import "./App.css";
import Header from "./components/header";
import Form from "./components/form";
import Response from "./components/response";

const ruta = "https://api.github.com/users/";
// const user = "dimasmendoza";
// import lupa from "images/loupe.png";
class App extends Component {
  state = {
    dataRepos: [],
    dataImg: [],
    avatar: "",
    value: "",
    error: "",
  };
  peticion = () => {
    fetch(`${ruta + this.state.value}/repos`)
      .then((respuestaRepos) => respuestaRepos.json())
      .then((Repositorios) => {
        if (Repositorios.message === "Not Found") {
          this.setState({
            dataRepos: [],
            error: "User not Found",
            avatar:
              "https://www.kipupress.com/wp-content/uploads/2019/03/error-2.jpg",
          });
        } else {
          this.setState({ dataRepos: Repositorios, error: "" });
        }
      })
      .catch((error) => this.setState({ data: [], message: error }));
  };
  peticionImagen = () => {
    fetch(`${ruta + this.state.value}`)
      .then((respuestaImagen) => respuestaImagen.json())
      .then((Imagen) => {
        if (Imagen.message === "Not Found") {
          throw Imagen;
        }
        this.setState({ dataImg: Imagen, error: "" });
        this.setState({ avatar: this.state.dataImg.avatar_url });
      })
      .catch(({ message }) => this.setState({ dataImg: [], message: message }));
  };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.peticion();
    this.peticionImagen();
  }

  componentDidMount() {
    // this.peticion();
  }
  render() {
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    return (
      <section className>
        <Header />
        <Form
          value={this.state.value}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Response avatar={this.state.avatar} dataRepos={this.state.dataRepos} />
      </section>
    );
  }
}

export default App;
