import styles from "./ChatArea.module.css";
import imageUser from "../../assets/images/user.png";

function ChatArea({ className = "" }) {
  return (
    <div className={`${styles["chat-area"]} ${className}`}>
      <div className={styles["chat-header"]}>
        <div className={styles["chat-inf"]}>
          <div className={styles["chat-user"]}>
            {/* Truyền trực tiếp biến imageUser vào src */}
            <img src={imageUser} alt="User Avatar" />
          </div>

          <div className="box-inf">
            <div className={styles["chat-name"]}>Florencio Dorrance</div>

            <div className={styles["status"]}>
              <span className={styles["status-icon"]}>
                <i className="fa-solid fa-circle"></i>
              </span>
              <span className={styles["status-text"]}>Online</span>
            </div>
          </div>
        </div>

        <div className={styles["btn-call"]}>
          <div className={styles["btn-call-icon"]}>
            <i className="fa-solid fa-phone"></i>
          </div>
          <div className={styles["btn-call-text"]}>Call</div>
        </div>
      </div>
    </div>
  );
}

export default ChatArea;
