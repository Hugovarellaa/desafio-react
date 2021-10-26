import { Container } from "./styles";

export function TransactionTable() {
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
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$ 12.000,00</td>
            <td>Freelancer</td>
            <td>20/12/2020</td>
          </tr>

          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$ 1.000,00</td>
            <td>casa</td>
            <td>05/01/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
