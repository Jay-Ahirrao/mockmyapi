import { useState, useEffect } from 'react';
import Header from './components/layout/Header.jsx';
import Sidebar from './components/layout/Sidebar.jsx';
import Footer from './components/layout/Footer.jsx';
import BuilderView from './components/pages/BuilderView.jsx';
import EndpointsView from './components/pages/EndpointsView.jsx';
import UsageGuide from './components/pages/UsageGuide.jsx';
import InfoPage from './components/pages/InfoPage.jsx';
import Toast from './components/common/Toast.jsx';

const BACKEND_URL = 'http://localhost:5000';
const OWNER_ID = '60d5ec49f1b2c8b1f8e4e1a1';
const USERNAME = 'testuser';

export default function App() {
  const [currentView, setCurrentView] = useState('builder');
  const [endpoints, setEndpoints] = useState([]);
  const [loading, setLoading] = useState(false);
  const [testingId, setTestingId] = useState(null);
  const [testResults, setTestResults] = useState({});
  const [toast, setToast] = useState(null);

  const fetchEndpoints = async () => {
    try {
      const res = await fetch(`${BACKEND_URL}/api/v1/endpoints/${USERNAME}`);
      if (res.ok) {
        const data = await res.json();
        setEndpoints(data.data || []);
      }
    } catch (err) {
      console.error('Error fetching endpoints:', err);
    }
  };

  useEffect(() => {
    fetchEndpoints();
  }, []);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  const handleCreateEndpoint = async (formData) => {
    setLoading(true);
    try {
      const res = await fetch(`${BACKEND_URL}/api/v1/endpoints`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          owner: OWNER_ID,
          username: USERNAME,
          path: formData.path,
          method: formData.method,
          statusCode: formData.statusCode,
          responseBody: formData.responseBody,
          delayMs: formData.delayMs,
          failureRate: formData.failureRate,
          isActive: formData.isActive,
        }),
      });

      if (res.ok) {
        await fetchEndpoints();
        showToast('Mock endpoint created successfully!', 'success');
      }
    } catch (err) {
      console.error('Error creating endpoint:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleTestEndpoint = async (endpoint) => {
    setTestingId(endpoint._id);
    const mockUrl = `${BACKEND_URL}/mock/${USERNAME}${endpoint.path}`;

    try {
      const res = await fetch(mockUrl, { method: endpoint.method });
      const body = await res.json();
      setTestResults((prev) => ({
        ...prev,
        [endpoint._id]: {
          status: res.status,
          body: JSON.stringify(body, null, 2),
          timestamp: new Date().toLocaleTimeString(),
        },
      }));
    } catch (err) {
      setTestResults((prev) => ({
        ...prev,
        [endpoint._id]: {
          status: 'ERROR',
          body: err.message,
          timestamp: new Date().toLocaleTimeString(),
        },
      }));
    } finally {
      setTestingId(null);
    }
  };

  const handleDeleteEndpoint = async (id) => {
    try {
      const res = await fetch(`${BACKEND_URL}/api/v1/endpoints/${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        await fetchEndpoints();
        setTestResults((prev) => {
          const updated = { ...prev };
          delete updated[id];
          return updated;
        });
      }
    } catch (err) {
      console.error('Error deleting endpoint:', err);
    }
  };

  const handleCopySuccess = () => {
    showToast('URL copied to clipboard!', 'copy');
  };

  const renderView = () => {
    try {
      switch (currentView) {
        case 'builder':
          return (
            <BuilderView
              loading={loading}
              onSubmit={handleCreateEndpoint}
              endpoints={endpoints}
              onDelete={handleDeleteEndpoint}
              onTest={handleTestEndpoint}
              testResults={testResults}
              testingId={testingId}
              onCopySuccess={handleCopySuccess}
            />
          );
        case 'endpoints':
          return (
            <EndpointsView
              endpoints={endpoints}
              onDelete={handleDeleteEndpoint}
              onTest={handleTestEndpoint}
              testResults={testResults}
              testingId={testingId}
              onCopySuccess={handleCopySuccess}
            />
          );
        case 'usage':
          return <UsageGuide />;
        case 'info':
          return <InfoPage />;
        default:
          return <div className="text-white">View not found</div>;
      }
    } catch (error) {
      console.error('Error rendering view:', error);
      return <div className="text-red-500">Error: {error.message}</div>;
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-gray-200 font-sans">
      <Header endpointCount={endpoints.length} />
      <Sidebar currentView={currentView} onViewChange={setCurrentView} />
      
      <main className="ml-64 mt-[73px] mb-[65px] p-8 min-h-screen">
        {renderView()}
      </main>

      <Footer />

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}
