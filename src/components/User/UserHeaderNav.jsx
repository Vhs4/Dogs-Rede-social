import React from 'react';
import styles from './UserHeaderNav.module.css';
import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import  MinhasFotos  from '../../assets/feed.svg?react';
import Estatisticas from '../../assets/estatisticas.svg?react';
import AdicionarFoto from '../../assets/adicionar.svg?react';
import Sair from '../../assets/sair.svg?react';
import useMedia from '../../Hooks/useMedia';

const UserHeaderNav = () => {
    const { userLogout } = React.useContext(UserContext);
    const mobile = useMedia('(max-width: 768px)');
    const [mobileMenu, setMobileMenu ] = React.useState(false);

   const {pathname} = useLocation();
   React.useEffect(() => {
    setMobileMenu(false);
   }, [pathname])

  return (
    <>
    {mobile && (
    <button
    aria-label="Menu"
    className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}
    onClick={() => setMobileMenu(!mobileMenu)}></button>
    )}
    <nav className={`${mobile ? styles.navMobile : styles.nav} ${
        mobileMenu && styles.navMobileActive }`}>
        <NavLink to="/my-account" end>
            <MinhasFotos />
            {mobile && "Minhas fotos"}
        </NavLink>
        <NavLink to="/my-account/statistics">
            <Estatisticas />
            {mobile && "Estatísticas"}

        </NavLink>
        <NavLink to="/my-account/post">
            <AdicionarFoto />
            {mobile && "Adicionar foto"}
            </NavLink>
        <button onClick={userLogout}>
            <Sair />
            {mobile && "Sair"}
            </button>
    </nav>
    </>
  )
}

export default UserHeaderNav