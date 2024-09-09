import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.jsx';


function App() {

  //const [loading, setLoading] = useState(false)
  //const dispatch = useDispatch()

  //useEffect(() => {setLoading(true)}, [])
  /*
  return !loading?(
    <>
      <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
    </>
  ):null
}
*/

return (
  <>


      <Header />
      <main>
        <Outlet />
      </main>


  </>
)
}
export default App
