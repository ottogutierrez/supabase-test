
function Navbar() {
  return (
    <div className="flex bg-gray-600 py-3 justify-between px-6">
      <div className='text-white text-3xl '>Logo</div>
      <div className='text-gray-300 my-auto text-xl'>
        <MyNavLink to={'/'}>Home</MyNavLink>
        <MyNavLink to={'/About'}>About</MyNavLink>
      </div>
      <div className='my-auto'>
        <button className='text-gray-200 border-gray-200 border p-2 rounded-lg hover:bg-gray-500'>Logout</button>
      </div>
    </div>
  )
}
export default Navbar


// ------ NavLink Styling
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'


const MyNavLink= ({to, children}) =>{
  const activeLink = "text-gray-100 font-bold  px-2";
  return (
    <NavLink to={to}
        className={({isActive})=>(isActive ? activeLink:"px-2")}>{children}</NavLink>
        
  )
}

MyNavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}




