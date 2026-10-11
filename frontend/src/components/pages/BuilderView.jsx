import EndpointForm from '../builder/EndpointForm.jsx';
import EndpointList from '../endpoints/EndpointList.jsx';

export default function BuilderView({
  loading,
  onSubmit,
  endpoints,
  onDelete,
  onTest,
  testResults,
  testingId,
  onCopySuccess,
}) {
  return (
    <div className="grid grid-cols-5 gap-8">
      <div className="col-span-3">
        <EndpointForm loading={loading} onSubmit={onSubmit} />
      </div>

      <div className="col-span-2">
        <EndpointList
          endpoints={endpoints}
          onDelete={onDelete}
          onTest={onTest}
          testResults={testResults}
          testingId={testingId}
          onCopySuccess={onCopySuccess}
        />
      </div>
    </div>
  );
}
