import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useTransition, animated } from 'react-spring';
import {
    Link
  } from 'react-router-dom';

function Navigation(){
    const [showMenu, setShowMenu] = React.useState(false);
    //*conditional rendering
    // let menu;
    // let menuMask;
    // if (showMenu) {menu = 
    //         <div className = "nav-menu">
    //             This a menu
    //         </div>;
    //         menuMask =
    //         <div className="menu-mask"
    //         onClick={() => setShowMenu(false)}>

    //         </div>;
            
    //     }
    const maskTransitions =  useTransition(showMenu, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
      })
      const menuTransitions =  useTransition(showMenu, {
        from: { opacity: 0, transform: 'translateX(100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0, transform: 'translateX(100%)' },
      })


    return (
        <nav className="nav">
            <span>
                <FontAwesomeIcon 
                    icon={faBars}
                    onClick={()=>setShowMenu(!showMenu)}
                ></FontAwesomeIcon>
            </span>
            {
                maskTransitions(
                    (styles, item) => item && 
                    <animated.div style={styles}className="menu-mask" onClick={() => setShowMenu(false)}>
                            
                    </animated.div>
                  )
            }

            {
                menuTransitions(
                    (styles, item) => item && 
                    <animated.div style={styles} className="nav-menu">
                        <ul className="head">
                            Menu
                        </ul>
                        <ul className="nohead">
                            
                            <li>
                                <Link to="/" className="lnk" onClick={()=>setShowMenu(false)}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/products" className="lnk" onClick={()=>setShowMenu(false)}>
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="lnk" onClick={()=>setShowMenu(false)}>
                                    About
                                </Link>
                            </li>
                            
                        </ul>
                        
                    </animated.div>
                  )
            }
        </nav>

        
    )
}

export default Navigation;