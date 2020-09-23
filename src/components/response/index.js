import React from "react";
import ResponseNames from "../responseNames";

const Response = ({ avatar, dataRepos }) => (
  <section className="respuesta">
    <figure className="imagencita">
      <img src={avatar} />
    </figure>

    <ResponseNames dataRepos={dataRepos} />
    {/* {this.state.error.length > 0 && (
            <p Style="color: red">
              <span>Error al traer el dato</span>
            </p>
          )} */}
  </section>
);

export default Response;
