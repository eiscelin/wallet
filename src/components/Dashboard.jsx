export default function Dashboard({ user, onLogout }) {
  const stats = [
    { label: "Profile Views", value: "128", icon: "👁" },
    { label: "Projects", value: "3", icon: "📁" },
    { label: "Skills", value: "3", icon: "⚡" },
    { label: "Services", value: "3", icon: "🛠" },
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <h1 className="dashboard-title">Dashboard</h1>
          <p className="dashboard-welcome">Welcome back, <span className="gradient-text">{user.username}</span>!</p>
        </div>
        <button className="btn btn-outline" onClick={onLogout}>Log Out</button>
      </div>

      <div className="dashboard-stats">
        {stats.map((s) => (
          <div className="card stat-card" key={s.label}>
            <div className="stat-icon">{s.icon}</div>
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="dashboard-section">
        <h2 className="dashboard-section-title">Quick Actions</h2>
        <div className="dashboard-actions">
          <div className="card action-card">
            <div className="action-icon">✏️</div>
            <h3>Edit Profile</h3>
            <p>Update your personal information and bio.</p>
          </div>
          <div className="card action-card">
            <div className="action-icon">➕</div>
            <h3>Add Project</h3>
            <p>Upload a new project to your portfolio.</p>
          </div>
          <div className="card action-card">
            <div className="action-icon">📊</div>
            <h3>View Analytics</h3>
            <p>See how visitors interact with your portfolio.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
