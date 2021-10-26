import { Container, Content } from "./styles";
import logoImg from "../../images/logo.svg";

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="logo ig.news" />
        <button type="button">Nova Transação</button>
      </Content>
    </Container>
  );
}
