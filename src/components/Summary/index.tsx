import { Container } from "./styles";
import incomeImg from "../../images/income.svg";
import outcomeImg from "../../images/outcome.svg";
import totalImg from "../../images/total.svg";
import { useContext } from "react";
import { TransactionContext } from "../../hooks/useTransactionContext";

export function Summary() {
  const { transactions } = useContext(TransactionContext);

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += transaction.amount;
        acc.totals += transaction.amount;
      } else {
        acc.withdraws += transaction.amount;
        acc.totals -= transaction.amount;
      }
      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      totals: 0,
    }
  );

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.deposits)}
        </strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>
          -
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.withdraws)}
        </strong>
      </div>

      <div>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.totals)}
        </strong>
      </div>
    </Container>
  );
}
