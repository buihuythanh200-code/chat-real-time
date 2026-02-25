import styles from "./ConversationPanel.module.css";
import avatarUser from "../../assets/images/user.png";

function ConversationPanel({ className = "" }) {
  return (
    /* Kết hợp class từ props và class từ module */
    <div className={`${styles["conversation-panel"]} ${className}`}>
      <div className={styles["panel-header"]}>
        <div className={styles["menu"]}>
          <h3 className={styles["menu-title"]}>
            Messages <i className="fa-solid fa-angle-down"></i>
          </h3>
          <span className={styles["quantity-message"]}>12</span>
        </div>

        <div className={styles["btn-add"]}>
          <i className="fa-solid fa-plus"></i>
        </div>
      </div>

      <div className={styles["lines"]}></div>

      {/* start box-message */}
      <div className={styles["panel-main"]}>
        {/* start search */}
        <div className={styles["menu-search"]}>
          <div className={styles["input-search"]}>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        {/* end search */}

        {/* start list message */}
        <div className={styles["list-message"]}>
          <div className={styles["item-message"]}>
            <div className={styles["item-user"]}>
              <img src={`${avatarUser}`} alt="user" />
            </div>

            <div className={styles["item-status"]}>
              <h3 className={styles["item-name"]}>
                Elmer Laverty <span className={styles["time"]}>12m</span>
              </h3>

              <p className={styles["item-desc"]}>Haha oh man</p>

              <div className={styles["box-status"]}>
                <button className={styles["btn-question"]}>Question</button>
                <button className={styles["btn-help"]}>Help wanted</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConversationPanel;
