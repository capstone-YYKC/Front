import { useMemo } from "react";
import styles from "./Day24Icon.module.css";
import React, {useState, useCallback} from "react";
import DiaryCheckPopup from "../components/DiaryCheckPopup";
import PortalPopup from "../components/PortalPopup";

const Day24Icon = ({ propTop, propLeft }) => {
  const [isDiaryCheckPopupOpen, setDiaryCheckPopupOpen] = useState(false);
  const openDiaryCheckPopup = useCallback(() => {
    setDiaryCheckPopupOpen(true);
  }, []);
  const closeDiaryCheckPopup = useCallback(() => {
    setDiaryCheckPopupOpen(false);
  }, []);
  const day24IconStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <>
      <img
        className={styles.day24Icon}
        alt=""
        src="/day24.svg"
        style={day24IconStyle}
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

export default Day24Icon;
