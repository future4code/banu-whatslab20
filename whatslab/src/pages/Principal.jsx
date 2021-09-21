import React from "react";

import { HeaderComponent, MainComponent, FooterComponent, PageContainerComponent } from "../js/Exporter";

import { useState } from "react";

export default function Principal() {
  const [name, updateName] = useState("");
  const [message, updateMessage] = useState("");
  const [key, updateKey] = useState(0);

  const incrementKey = () => {
    updateKey(key + 1);
  };

  return (
    <PageContainerComponent>
        <HeaderComponent/>
        <MainComponent message={message} name={name} />
        <FooterComponent
          updateName={updateName}
          updateMessage={updateMessage}
          incrementKey={incrementKey}
          message={message}
          name={name}
          keyProp={key}
        />
    </PageContainerComponent>
  );
}
