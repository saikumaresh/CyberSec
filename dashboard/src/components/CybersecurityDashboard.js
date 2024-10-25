import React, { useState } from 'react';

const CybersecurityDashboard = () => {
  const [systemStatus] = useState({
    networkMonitoring: 'Active',
    mlDetection: 'Operational',
    firebaseConnection: 'Degraded'
  });

  // Static recent alerts
  const [recentAlerts] = useState([
    { threat: 'SQL Injection', severity: 'Critical', time: '12:45 PM' },
    { threat: 'DDoS', severity: 'Warning', time: '1:15 PM' },
    { threat: 'XSS', severity: 'Warning', time: '2:00 PM' }
  ]);

  // Static key metrics
  const [keyMetrics] = useState({
    totalAlerts: 0,
    criticalThreats: 0,
    avgResponseTime: 0,
    networkUptime: 0
  });
 
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <header className="bg-gray-800 p-6">
        <h1 className="text-2xl font-bold">Healthcare Cybersecurity Dashboard</h1>
        <p className="text-sm text-gray-400">Real-time monitoring and threat detection</p>
      </header>

      <main className="flex-grow p-6 overflow-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4">System Status</h2>
            <ul className="space-y-2">
              {Object.entries(systemStatus).map(([key, value]) => (
                <li key={key} className="flex items-center">
                  <span className={`w-3 h-3 rounded-full mr-2 ${value === 'Active' || value === 'Operational' ? 'bg-green-500' : 'bg-red-500'}`}></span>
                  <span className="capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}: {value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Recent Alerts</h2>
            <ul className="space-y-2">
              {recentAlerts.map((alert, index) => (
                <li key={index} className={`flex justify-between items-center ${alert.severity === 'Critical' ? 'text-red-400' : 'text-yellow-400'}`}>
                  <span>{alert.threat} detected</span>
                  <span className="text-xs text-gray-400">{alert.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Key Metrics (Last 24 Hours)</h2>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(keyMetrics).map(([key, value]) => (
                <div key={key} className="text-center">
                  <h3 className="text-sm mb-1 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</h3>
                  <p className={`text-xl font-bold ${key === 'criticalThreats' ? 'text-red-400' : 'text-blue-400'}`}>
                    {typeof value === 'number' ? value.toFixed(1) : value}
                    {key === 'networkUptime' && '%'}
                    {key === 'avgResponseTime' && 's'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CybersecurityDashboard;
