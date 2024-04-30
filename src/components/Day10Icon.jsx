import { useMemo } from "react";
import styles from "./Day10Icon.module.css";
import React, {useState, useCallback} from "react";
import DiaryCheckPopup from "../components/DiaryCheckPopup";
import PortalPopup from "../components/PortalPopup";

const Day10Icon = ({ propTop, propLeft }) => {
  const [isDiaryCheckPopupOpen, setDiaryCheckPopupOpen] = useState(false);
  const openDiaryCheckPopup = useCallback(() => {
    setDiaryCheckPopupOpen(true);
  }, []);
  const closeDiaryCheckPopup = useCallback(() => {
    setDiaryCheckPopupOpen(false);
  }, []);  
  const day10IconStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <>
    <img
      className={styles.day10Icon}
      alt=""
      src="/day10.svg"
      style={day10IconStyle}
      onClick={openDiaryCheckPopup}
    />
      {isDiaryCheckPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDiaryCheckPopup}
        >
          <DiaryCheckPopup onClose={closeDiaryCheckPopup} />
        </PortalPopup>
      )}    
    </>
  );
};

export default Day10Icon;
