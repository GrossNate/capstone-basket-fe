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

  const body = (body) => {
    if (!body) return null;
    
    return (
      <>
        <br />
        <details className="collapse bg-base-100 collapse-arrow">
          <summary className="collapse-title text-xl font-medium">Body</summary>
          <div className="collapse-content">
            {request.body}
          </div>
        </details>      
      </>
    );
  }

  return (
    <details className="collapse bg-base-200 collapse-arrow py-4">
      <summary className="collapse-title text-xl font-medium">
        Method/Path/Params: {request.method} {request.path} {request.query_params}
        <br />
        Timestamp: {request.timestamp}
      </summary>
      <div className="collapse-content">
      <div className="headers overflow-x-auto">
          <details className="collapse bg-base-100 collapse-arrow">
            <summary className="collapse-title text-xl font-medium">Headers</summary>
            <div className="collapse-content">
              <table className="table table-zebra table-xs">
                <tbody>
                  {renderHeaders(request.headers)}
                </tbody>
              </table>
            </div>
          </details>
          {body(request.body)}
      </div>
     </div>
    </details>
  );
}

export default Request;