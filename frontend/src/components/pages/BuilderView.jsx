import EndpointForm from '../builder/EndpointForm.jsx';

export default function BuilderView({ loading, onSubmit }) {
  return (
    <div className="max-w-4xl mx-auto">
      <EndpointForm loading={loading} onSubmit={onSubmit} />
    </div>
  );
}
