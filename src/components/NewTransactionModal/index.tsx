import Modal from "react-modal";
import { Container, Content, RadioBoxButton } from "./styles";
import closeImg from "../../images/close.svg";
import incomeImg from "../../images/income.svg";
import outcome from "../../images/outcome.svg";
import { useState, FormEvent, useContext } from "react";
import { api } from "../../services/api";
import { TransactionContext } from "../../hooks/useTransactionContext";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const { createTransactions } = useContext(TransactionContext);

  const [type, setType] = useState("deposit");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
    await createTransactions({
      title,
      amount,
      category,
      type,
    });

    onRequestClose()
    setType('')
    setTitle('')
    setAmount(0)
    setCategory('')

  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close-icon"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />
        <Content>
          <RadioBoxButton
            type="button"
            onClick={() => setType("deposit")}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entradas" />
            <span>Entrada</span>
          </RadioBoxButton>
          <RadioBoxButton
            type="button"
            onClick={() => setType("withdraw")}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={outcome} alt="Saída" />
            <span>Saída</span>
          </RadioBoxButton>
        </Content>
        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
        <button type="submit"> Cadastrar </button>
      </Container>
    </Modal>
  );
}
