import { LayoutDashboard, Receipt, Wallet, Settings, LogOut } from 'lucide-react';

const Layout = ({ children, currentView, onNavigate }) => {
    const navItems = [
        { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
        { id: 'transactions', label: 'Transactions', icon: Receipt },
        { id: 'accounts', label: 'Accounts', icon: Wallet },
    ];

    return (
        <div style={{ display: 'flex', minHeight: '100vh' }}>
            {/* Sidebar */}
            <aside style={{
                width: '260px',
                backgroundColor: 'hsl(var(--bg-panel))',
                borderRight: '1px solid var(--glass-border)',
                padding: 'var(--space-md)',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <div style={{ marginBottom: 'var(--space-lg)', padding: '0 var(--space-xs)' }}>
                    <h1 className="text-gradient" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                        FinTrack
                    </h1>
                </div>

                <nav style={{ flex: 1 }}>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = currentView === item.id;
                            return (
                                <li key={item.id}>
                                    <button
                                        onClick={() => onNavigate(item.id)}
                                        style={{
                                            width: '100%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 'var(--space-sm)',
                                            padding: 'var(--space-sm)',
                                            borderRadius: '12px',
                                            backgroundColor: isActive ? 'hsl(var(--primary) / 0.1)' : 'transparent',
                                            color: isActive ? 'hsl(var(--primary))' : 'hsl(var(--text-muted))',
                                            transition: 'all 0.2s ease',
                                            fontSize: '0.95rem',
                                            fontWeight: isActive ? 600 : 500
                                        }}
                                    >
                                        <Icon size={20} />
                                        {item.label}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: 'var(--space-md)' }}>
                    <button style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--space-sm)',
                        color: 'hsl(var(--text-muted))',
                        padding: 'var(--space-xs)',
                        fontSize: '0.9rem'
                    }}>
                        <LogOut size={18} />
                        Sign Out
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main style={{ flex: 1, padding: 'var(--space-lg)', overflowY: 'auto' }}>
                <header style={{
                    marginBottom: 'var(--space-lg)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <h2 style={{ fontSize: '1.75rem', fontWeight: 600 }}>
                        {currentView.charAt(0).toUpperCase() + currentView.slice(1)}
                    </h2>
                    <div className="glass-panel" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>
                        John Doe
                    </div>
                </header>
                {children}
            </main>
        </div>
    );
};

export default Layout;
