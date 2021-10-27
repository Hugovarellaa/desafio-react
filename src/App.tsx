import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from "react-modal";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionContextProvider } from "./hooks/useTransactionContext";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOen, setIsNewTransactionModal] = useState(false);

  function handleOpenTransactionModal() {
    setIsNewTransactionModal(true);
  }
  function handleCloseTransactionModal() {
    setIsNewTransactionModal(false);
  }

  return (
    <TransactionContextProvider>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOen}
        onRequestClose={handleCloseTransactionModal}
      />
    </TransactionContextProvider>
  );
}
