import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  const navigate = useNavigate();

  const onVectorClick = useCallback(() => {
    navigate("/main");
  }, [navigate]);

  return (
    <div className={styles.login}>
      <img className={styles.gomgom2Icon} alt="" src="/gomgom2.png" />
      <img className={styles.gomgomIcon} alt="" src="/gomgom.gif" />
      <div className={styles.loginChild} />
      <div className={styles.loginItem} />
      <div className={styles.loginInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.div}>일기 친구,</div>
      <input 
        className={styles.IDblank}
        type="text"
      />
      <input 
        className={styles.PWblank}
        type="password"
      />
      <img
        className={styles.vectorIcon}
        alt=""
        src="/vector.svg"
        onClick={onVectorClick}
      />
      <div className={styles.id}>ID</div>
      <div className={styles.pw}>PW</div>
    </div>
  );
};

export default Login;
