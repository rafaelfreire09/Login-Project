import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { ProtectedLayout } from './components/ProtectedLayout';
import { AuthProvider } from './context/AuthProvider';
import { SignIn } from './pages/SignIn/SignIn';
import { Profile } from './pages/Profile/Profile';

function App() {
    return (
        <div>
            <AuthProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path='/signin' element={<SignIn />}/>
                        <Route path='/profile' element={
                            <ProtectedLayout>
                                <Profile />
                            </ProtectedLayout>}
                        />
                        <Route path='/profile2' element={<Profile />}/>
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </div>
    );
}

export default App;
