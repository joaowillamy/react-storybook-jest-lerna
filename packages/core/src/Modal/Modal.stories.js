import React, { useState } from "react";
import { ThemeProvider } from "@joaowillamy-test-quero/theme";

import Button from "../Button";
import Modal from ".";

export default {
  component: Modal,
  title: "Core|Modal"
};

export const modal = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  return (
    <ThemeProvider>
      <Button onClick={toggleModal}>{`${showModal}`}</Button>
      oi <br />
      oi <br />
      oi <br />
      oi <br />
      oi <br />
      oi <br />
      oi <br />
      oi <br />
      oi <br />
      oi <br />
      oi <br />
      oi <br />
      oi <br />
      oi <br />
      oi <br />
      oi <br />
      oi <br />
      oi <br />
      oi <br />
      oi <br />
      oi <br />
      oi <br />
      oi <br />
      oi <br />
      oi <br />
      oi <br />
      oi <br />
      oi <br />
      oi <br />
      oi <br />
      oi <br />
      oi <br />
      oi <br />
      oi <br />
      oi <br />
      oi <br />
      oi <br />
      oi <br />
      oi <br />
      oi <br />
      oi <br />
      oi <br />
      oi <br />
      oi <br />
      oi <br />
      oi <br />
      oi <br />
      oi <br />
      oi <br />
      oi <br />
      oi <br />
      oi <br />
      oi <br />
      oi <br />
      oi <br />
      oi <br />
      oi <br />
      oi <br />
      oi <br />
      oi <br />
      <Modal isOpen={showModal} toggleModal={toggleModal}>
        oi <br />
        oi <br />
        oi <br />
        oi <br />
        oi <br />
        oi <br />
        oi <br />
        oi <br />
        oi <br />
        oi <br />
        oi <br />
        oi <br />
        oi <br />
        oi <br />
        oi <br />
        oi <br />
        oi <br />
        oi <br />
        oi <br />
        oi <br />
        oi <br />
        oi <br />
        oi <br />
        oi <br />
        oi <br />
        oi <br />
        oi <br />
        oi <br />
        oi <br />
        oi <br />
      </Modal>
    </ThemeProvider>
  );
};
