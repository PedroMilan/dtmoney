import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionTable() {
  useEffect(() => {
    api.get("transactions").then((data) => console.log(data));
  }, []);

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
            <td className="entrada">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/01/2022</td>
          </tr>
          <tr>
            <td>Alugel Apartamento</td>
            <td className="saida">R$-2.000</td>
            <td>Aluguel</td>
            <td>03/02/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}