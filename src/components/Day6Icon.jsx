import { useMemo } from "react";
import styles from "./Day6Icon.module.css";
import React, {useState, useCallback} from "react";
import DiaryCheckPopup from "../components/DiaryCheckPopup";
import PortalPopup from "../components/PortalPopup";

const Day6Icon = ({ propTop, propLeft }) => {
  const [isDiaryCheckPopupOpen, setDiaryCheckPopupOpen] = useState(false);
  const openDiaryCheckPopup = useCallback(() => {
    setDiaryCheckPopupOpen(true);
  }, []);
  const closeDiaryCheckPopup = useCallback(() => {
    setDiaryCheckPopupOpen(false);
  }, []);
  const day6IconStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <>
      <img
        className={styles.day6Icon}
        alt=""
        src="/day6.svg"
        style={day6IconStyle}
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

export default Day6Icon;
