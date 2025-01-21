const Request = ({ request }) => {

  const renderHeaders = (headers) => {
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
    <>
      <div className="headers">
        <table>
          {renderHeaders(request.headers)}
        </table>
      </div>
      <div className="path">
        {request.path}
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
    </>
  );
}

export default Request;