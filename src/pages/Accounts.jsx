import { Wallet, CreditCard, Plus } from 'lucide-react';

const AccountCard = ({ name, type, balance, color }) => (
    <div className="glass-panel" style={{ padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{
                padding: '10px',
                borderRadius: '12px',
                backgroundColor: `hsl(${color} / 0.1)`,
                color: `hsl(${color})`
            }}>
                {type === 'Bank' ? <Wallet size={24} /> : <CreditCard size={24} />}
            </div>
            <button style={{ color: 'hsl(var(--text-muted))' }}>...</button>
        </div>
        <div>
            <div style={{ color: 'hsl(var(--text-muted))', fontSize: '0.9rem', marginBottom: '4px' }}>{name}</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{balance}</div>
        </div>
        <div style={{ fontSize: '0.85rem', color: 'hsl(var(--text-muted))', marginTop: 'auto' }}>
            **** **** **** 1234
        </div>
    </div >
);

const Accounts = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1.25rem' }}>My Accounts</h3>
                <button style={{
                    backgroundColor: 'hsl(var(--primary))',
                    color: 'white',
                    border: 'none',
                    padding: '10px 20px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontWeight: 500
                }}>
                    <Plus size={18} />
                    Add Account
                </button>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: 'var(--space-md)'
            }}>
                <AccountCard name="Main Checking" type="Bank" balance="$8,450.00" color="250 70% 60%" />
                <AccountCard name="Savings" type="Bank" balance="$12,000.00" color="150 60% 45%" />
                <AccountCard name="Business Credit" type="Credit" balance="-$1,250.00" color="350 70% 55%" />
            </div>
        </div>
    );
};

export default Accounts;
