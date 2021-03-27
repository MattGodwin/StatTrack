import styles from '../styles/user.module.css'


const User = () => (
    <form action="/" method="get">
        <input
            type="text"
            id="header-search"
            placeholder="Username"
            name="s" 
            className={styles.search}
            />
        <button type="submit" className={styles.button}>Find Stats!</button>
    </form>
);

export default User;