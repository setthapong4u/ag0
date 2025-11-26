import { useState } from 'react'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Transactions from './pages/Transactions'
import Accounts from './pages/Accounts'

function App() {
    const [currentView, setCurrentView] = useState('dashboard')

    const renderView = () => {
        switch (currentView) {
            case 'dashboard':
                return <Dashboard />
            case 'transactions':
                return <Transactions />
            case 'accounts':
                return <Accounts />
            default:
                return <Dashboard />
        }
    }

    return (
        <Layout currentView={currentView} onNavigate={setCurrentView}>
            {renderView()}
        </Layout>
    )
}

export default App
