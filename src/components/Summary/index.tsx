import { Container } from "./styles";
import incomeImg from "../../images/income.svg";
import outcomeImg from "../../images/outcome.svg";
import totalImg from "../../images/total.svg";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>R$ 1500,00</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>-R$ 900,00</strong>
      </div>

      <div>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Entradas" />
        </header>
        <strong>R$ 600,00</strong>
      </div>
    </Container>
  );
}
