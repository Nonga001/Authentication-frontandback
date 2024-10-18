import styles from './styles.module.css';

const Main = () => {

    const handleLogOut = () => {
        localStorage.removeItem("token");
        window.location.reload();
    }
    return (
        <div className={styles.main_container}>
            <nav className={styles.navbar}>
                <h1>fakebook</h1>
                <button className={styles.white_btn} onClick={handleLogOut}>Log Out</button>

            </nav>
        </div>
    )
};

export default Main;