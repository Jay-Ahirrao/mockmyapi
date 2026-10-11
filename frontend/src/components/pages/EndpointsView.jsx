import EndpointCard from '../endpoints/EndpointCard.jsx';
import EndpointList from '../endpoints/EndpointList.jsx';

export default function EndpointsView({
  endpoints,
  onDelete,
  onTest,
  testResults,
  testingId,
  onCopySuccess,
}) {
  if (endpoints.length === 0) {
    return (
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight text-white mb-2">All Endpoints</h1>
          <p className="text-gray-400">Manage and test your mock API endpoints</p>
        </div>
        <EndpointList
          endpoints={[]}
          onDelete={onDelete}
          onTest={onTest}
          testResults={testResults}
          testingId={testingId}
          onCopySuccess={onCopySuccess}
        />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight text-white mb-2">All Endpoints</h1>
        <p className="text-gray-400">Manage and test your mock API endpoints</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {endpoints.map((endpoint) => (
          <EndpointCard
            key={endpoint._id}
            endpoint={endpoint}
            onDelete={onDelete}
            onTest={onTest}
            testResult={testResults[endpoint._id]}
            isTesting={testingId === endpoint._id}
            onCopySuccess={onCopySuccess}
          />
        ))}
      </div>
    </div>
  );
}
