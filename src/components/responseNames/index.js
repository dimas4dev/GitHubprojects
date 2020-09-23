import React from "react";

const ResponseNames = ({ dataRepos }) => (
  <ul>
    {dataRepos.map((Repositore) => {
      return <li className="elementLista">{Repositore.name}</li>;
    })}
  </ul>
);

export default ResponseNames;
