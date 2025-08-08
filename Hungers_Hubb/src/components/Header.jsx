const title = (
  <a href='/'>
    <img
      className='logo'
      alt='Hungers_Hubb_LOGO' 
      src='./public/Hungers_Hubb_LOGO.png'
    />
  </a>
)




const Header = () => {

  return(
    <div className='header'>
      {title}

      <div className='nav-items  '>
           <ul>
               <li>Home</li>
               <li>Contact US</li>
               <li>About</li>
               <li>Cart</li>
           </ul>
      </div>

    </div>
  )
}

export default Header;