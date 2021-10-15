import { Container, Content, RadioBox } from "./styles";
import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcome from "../../assets/outcome.svg";
import { FormEvent, useState } from "react";
import { useTransactions } from "../../hooks/useTransactions";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const { createTransaction } = useTransactions();

  const [type, setType] = useState("deposit");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");

  async function handleCreateTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type,
    });

    onRequestClose();
    setType("deposit");
    setTitle("");
    setAmount(0);
    setCategory("");
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-contet"
    >
      <button type="button" className="closeIcon" onClick={onRequestClose}>
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <Container onSubmit={handleCreateTransaction}>
        <h2>Nova transação</h2>
        <input
          placeholder="Títuto"
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
          <RadioBox
            type="button"
            onClick={() => setType("deposit")}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entradas" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => setType("withdraw")}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={outcome} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </Content>
        <input
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
