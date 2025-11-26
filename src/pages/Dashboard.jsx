import { ArrowUpRight, ArrowDownRight, DollarSign } from 'lucide-react';

const StatCard = ({ title, amount, trend, isPositive }) => (
    <div className="glass-panel" style={{ padding: 'var(--space-md)', flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--space-sm)' }}>
            <span style={{ color: 'hsl(var(--text-muted))', fontSize: '0.9rem' }}>{title}</span>
            <div style={{
                padding: '8px',
                borderRadius: '50%',
                backgroundColor: 'hsl(var(--bg-app))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <DollarSign size={16} color="hsl(var(--primary))" />
            </div>
        </div>
        <div style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: 'var(--space-xs)' }}>
            {amount}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.85rem' }}>
            {isPositive ? <ArrowUpRight size={16} color="hsl(var(--accent-success))" /> : <ArrowDownRight size={16} color="hsl(var(--accent-danger))" />}
            <span style={{ color: isPositive ? 'hsl(var(--accent-success))' : 'hsl(var(--accent-danger))' }}>
                {trend}
            </span>
            <span style={{ color: 'hsl(var(--text-muted))' }}>vs last month</span>
        </div>
    </div>
);

const Dashboard = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
            {/* Stats Row */}
            <div style={{ display: 'flex', gap: 'var(--space-md)' }}>
                <StatCard title="Total Balance" amount="$12,450.00" trend="+2.5%" isPositive={true} />
                <StatCard title="Income" amount="$4,200.00" trend="+12%" isPositive={true} />
                <StatCard title="Expenses" amount="$1,850.00" trend="-5%" isPositive={false} />
            </div>

            {/* Recent Activity */}
            <div className="glass-panel" style={{ padding: 'var(--space-md)' }}>
                <h3 style={{ marginBottom: 'var(--space-md)', fontSize: '1.25rem' }}>Recent Activity</h3>
                {/* Placeholder for chart or list */}
                <div style={{
                    height: '200px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px dashed var(--glass-border)',
                    borderRadius: '8px',
                    color: 'hsl(var(--text-muted))'
                }}>
                    Activity Chart Placeholder
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
