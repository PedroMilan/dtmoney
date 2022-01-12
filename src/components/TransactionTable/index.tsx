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
            <td>R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/01/2022</td>
          </tr>
          <tr>
            <td>Alugel Apartamento</td>
            <td>R$5.000</td>
            <td>Aluguel</td>
            <td>03/02/2022</td>
          </tr>
          <tr>
            <td>Aluguel Casa de Praia</td>
            <td>R$2.000</td>
            <td>Aluguel</td>
            <td>03/01/2022</td>
          </tr>
          <tr>
            <td>Despesa de Casa</td>
            <td>R$4.000</td>
            <td>Despesas</td>
            <td>01/02/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
