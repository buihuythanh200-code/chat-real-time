import styles from "./SidebarNav.module.css";
function SidebarNav({ className = "" }) {
  return (
    <aside className={`${styles.sidebar} ${className}`}>
      <div className={styles.sidebar__main}>
        <div className={styles.sidebar__logo}>
          <span>Q</span>
        </div>
        <div className={styles.sidebar__nav}>
          <ul className={styles["nav-list"]}>
            <li className={styles["nav-item"]}>
              <a href="/" className={styles["nav-item-link"]}>
                <i className="fa-regular fa-message"></i>
              </a>
            </li>

            <li className={styles["nav-item"]}>
              <a href="/" className={styles["nav-item-link"]}>
                <i className="fa-solid fa-chart-pie"></i>
              </a>
            </li>

            <li className={styles["nav-item"]}>
              <a href="/" className={styles["nav-item-link"]}>
                <i className="fa-solid fa-magnifying-glass"></i>
              </a>
            </li>

            <li className={styles["nav-item"]}>
              <a href="/" className={styles["nav-item-link"]}>
                <i className="fa-regular fa-calendar"></i>
              </a>
            </li>

            <li className={styles["nav-item"]}>
              <a href="/" className={styles["nav-item-link"]}>
                <i className="fa-solid fa-house"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.sidebar__settings}>
        <a href="">
          <i className="fa-solid fa-gear"></i>
        </a>
      </div>
    </aside>
  );
}
export default SidebarNav;
