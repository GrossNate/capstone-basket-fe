const Request = ({ request }) => {

  const renderHeaders = (headers) => { // will make prettier soon
    headers = JSON.parse(headers);
    const kvp = Object.entries(headers);

    return kvp.map(([key, value]) => 
      (
        <tr key={key}>
          <td>{key}</td>
          <td>{value}</td>
        </tr>
      )
    );
  }

  return (
    <details className="collapse bg-base-200">
      <summary className="collapse-title text-xl font-medium">
        Method/Path/Params: {request.method} {request.path} {request.query_params}
        <br />
        Timestamp: {request.timestamp}
      </summary>
      <div className="collapse-content">
        <div className="headers overflow-x-auto">
          <table className="table table-zebra table-xs">
            <tbody>
              {renderHeaders(request.headers)}
            </tbody>
          </table>
        </div>
        <div className="timestamp">
          {request.timestamp}       
        </div>
        <div className="method">
        {request.method} 
        </div>
        <div className="query-params">
          {request.query_params}
        </div>
        <div className="body">
          {request.body}
        </div>
      </div>
    </details>
  );
}

export default Request;