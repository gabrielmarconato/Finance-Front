export function Home() {
  return (
    <div class="container">
      <h2 class="mt-4">Tabela de Itens</h2>
      <div class="table-responsive">
        <table class="table table-striped mt-3">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Tipo</th>
              <th>Preço</th>
              <th>Ações</th>
            </tr>
          </thead>
            <tbody>
              <tr>
                <td>001</td>
                <td>Item A</td>
                <td>Tipo A</td>
                <td>$10.00</td>
                <td>
                  <button type="button" class="btn btn-primary btn-sm">Detalhes</button>
                </td>
              </tr>
              <tr>
                <td>002</td>
                <td>Item B</td>
                <td>Tipo B</td>
                <td>$15.00</td>
                <td>
                    <button type="button" class="btn btn-primary btn-sm">Detalhes</button>
                </td>
              </tr>
              <tr>
                <td>003</td>
                <td>Item C</td>
                <td>Tipo C</td>
                <td>$20.00</td>
                <td>
                  <button type="button" class="btn btn-primary btn-sm">Detalhes</button>
                </td>
              </tr>
            </tbody>
        </table>
      </div>
    </div>
  );
}

