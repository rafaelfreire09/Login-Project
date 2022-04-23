import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AuthProvider } from './context/AuthProvider';

import { SignIn } from './pages/SignIn';
import { Profile } from './pages/Profile';

import { ProtectedLayout } from './components/ProtectedLayout';

function App() {
    return (
        <div>
            <AuthProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<SignIn />}/>
                        <Route path='/profile' element={
                            <ProtectedLayout>
                                <Profile />
                            </ProtectedLayout>}
                        />
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </div>
    );
}

export default App;
