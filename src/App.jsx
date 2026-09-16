import { Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import Login from './pages/Login'
import Generate from './pages/Generate'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
          <Navbar />
          <Outlet />
        </>
    )
}

const App = () => {
    return (
        <Routes>
            {/* Pages with Navbar */}
            <Route element={<Layout />}>
              <Route path="/" element={<Main />} />
              <Route path="/generate" element={<Generate />} />
            </Route>
            {/* Page without Navbar */}
            <Route path="/login" element={<Login />} />
            {/* 404 */}
            <Route
                path="*"
                element={<div>404 Not Found</div>}
            />
        </Routes>
    )
}

export default App