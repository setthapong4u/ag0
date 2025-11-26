import { Search, Filter, MoreHorizontal } from 'lucide-react';

const Transactions = () => {
    const transactions = [
        { id: 1, date: '2023-11-25', description: 'Grocery Store', category: 'Food', amount: -120.50, status: 'Completed' },
        { id: 2, date: '2023-11-24', description: 'Freelance Payment', category: 'Income', amount: 1500.00, status: 'Completed' },
        { id: 3, date: '2023-11-23', description: 'Netflix Subscription', category: 'Entertainment', amount: -15.99, status: 'Pending' },
        { id: 4, date: '2023-11-22', description: 'Gas Station', category: 'Transport', amount: -45.00, status: 'Completed' },
    ];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
            {/* Toolbar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 'var(--space-md)' }}>
                <div className="glass-panel" style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '8px 16px',
                    flex: 1,
                    maxWidth: '400px',
                    gap: '8px'
                }}>
                    <Search size={18} color="hsl(var(--text-muted))" />
                    <input
                        type="text"
                        placeholder="Search transactions..."
                        style={{
                            background: 'transparent',
                            border: 'none',
                            color: 'inherit',
                            width: '100%',
                            outline: 'none'
                        }}
                    />
                </div>
                <button className="glass-panel" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 16px',
                    color: 'hsl(var(--text-main))'
                }}>
                    <Filter size={18} />
                    Filter
                </button>
            </div>

            {/* Table */}
            <div className="glass-panel" style={{ overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead style={{ backgroundColor: 'rgba(255,255,255,0.02)', borderBottom: '1px solid var(--glass-border)' }}>
                        <tr>
                            <th style={{ padding: '16px', fontWeight: 500, color: 'hsl(var(--text-muted))' }}>Date</th>
                            <th style={{ padding: '16px', fontWeight: 500, color: 'hsl(var(--text-muted))' }}>Description</th>
                            <th style={{ padding: '16px', fontWeight: 500, color: 'hsl(var(--text-muted))' }}>Category</th>
                            <th style={{ padding: '16px', fontWeight: 500, color: 'hsl(var(--text-muted))' }}>Status</th>
                            <th style={{ padding: '16px', fontWeight: 500, color: 'hsl(var(--text-muted))', textAlign: 'right' }}>Amount</th>
                            <th style={{ padding: '16px' }}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((tx) => (
                            <tr key={tx.id} style={{ borderBottom: '1px solid var(--glass-border)' }}>
                                <td style={{ padding: '16px' }}>{tx.date}</td>
                                <td style={{ padding: '16px', fontWeight: 500 }}>{tx.description}</td>
                                <td style={{ padding: '16px' }}>
                                    <span style={{
                                        padding: '4px 12px',
                                        borderRadius: '20px',
                                        backgroundColor: 'hsl(var(--bg-app))',
                                        fontSize: '0.85rem'
                                    }}>
                                        {tx.category}
                                    </span>
                                </td>
                                <td style={{ padding: '16px' }}>
                                    <span style={{ color: tx.status === 'Completed' ? 'hsl(var(--accent-success))' : 'hsl(var(--text-muted))' }}>
                                        {tx.status}
                                    </span>
                                </td>
                                <td style={{ padding: '16px', textAlign: 'right', fontWeight: 600, color: tx.amount > 0 ? 'hsl(var(--accent-success))' : 'inherit' }}>
                                    {tx.amount > 0 ? '+' : ''}{tx.amount.toFixed(2)}
                                </td>
                                <td style={{ padding: '16px', textAlign: 'center' }}>
                                    <button style={{ background: 'transparent', color: 'hsl(var(--text-muted))' }}>
                                        <MoreHorizontal size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Transactions;
