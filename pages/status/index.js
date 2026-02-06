import useSWR from "swr";

async function fetchAPI(key) {
  const response = await fetch(key);
  const resposnseBody = response.json();
  return resposnseBody;
}

export default function StatusPage() {
  return (
    <>
      <h1>Status</h1>;
      <UpadatedAt />
      <DatabaseStatus />
    </>
  );
}

function UpadatedAt() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });

  let updatedAtText = "Carregando...";

  if (!isLoading && data) {
    updatedAtText = new Date(data.updated_at).toLocaleString("pt-BR");
  }

  return <div>Última atualização: {updatedAtText}</div>;
}

function DatabaseStatus() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });

  let databaseStatusInformation = "Carregando...";

  if (!isLoading && data) {
    databaseStatusInformation = (
      <>
        <div>Versão: {data.dependencies.version}</div>
        <div>
          Conexões abertas: {data.dependencies.database.opened_connections}
        </div>
        <div>
          Conexões máximas abertas: {data.dependencies.database.max_connections}
        </div>
      </>
    );
  }
  return (
    <>
      <h2>Databases</h2>
      {databaseStatusInformation}
    </>
  );
}
