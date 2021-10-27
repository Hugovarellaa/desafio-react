import { useContext } from "react";
import { Container } from "./styles";
import {TransactionContext} from "../../hooks/useTransactionContext"

export function TransactionTable() {
  const {transactions} = useContext(TransactionContext);
  
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>
                  {Intl.DateTimeFormat("pt-BR").format(
                    new Date(transaction.createAt)
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
}
function useTransactionContext(useTransactionContext: any): {} {
  throw new Error("Function not implemented.");
}
