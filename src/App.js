import {Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import CredentialsListPage from './pages/CredentialListPage'
import AddCredentialPage from './pages/AddCredentialPage'
import EditCredentialPage from './pages/EditCredentialPage'

function App() {
  return (
    <>
    <Header/>
      <Routes>
          <Route path='/' element={<h1><HomePage/></h1>} />
          <Route path='/credentials' element={<h1><CredentialsListPage/></h1>} />
          <Route path='/credentials/add' element={<h1><AddCredentialPage/></h1>} /> 
          <Route path='/credentials/:id/edit' element={<h1><EditCredentialPage/></h1>} />
          <Route path='/*' element={<h1>Page Not Found</h1>} />
      </Routes>


    </>
  );
}

export default App;
