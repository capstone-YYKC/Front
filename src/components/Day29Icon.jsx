import { useMemo } from "react";
import styles from "./Day29Icon.module.css";
import React, {useState, useCallback, useEffect} from "react";
import DiaryCheckPopup from "../components/DiaryCheckPopup";
import PortalPopup from "../components/PortalPopup";

const Day29Icon = ({ propTop, propLeft, diaryStatus, diaryContent, diaryConsolation, diarySummary }) => {
  const [isDiaryCheckPopupOpen, setDiaryCheckPopupOpen] = useState(false);
  const openDiaryCheckPopup = useCallback(() => {
    setDiaryCheckPopupOpen(true);
  }, []);
  const closeDiaryCheckPopup = useCallback(() => {
    setDiaryCheckPopupOpen(false);
  }, []);
  const day29IconStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const [imageSrc, setImageSrc]=useState('/day29.svg');
  //1: 슬픔, 2: 기쁨, 3: 화남
  useEffect(() => {
    switch(diaryStatus){
      case '슬픔':
        setImageSrc('/day291.svg');
        break;
      case '행복':
        setImageSrc('/day292.svg');
        break;
      case '화남':
        setImageSrc('/day293.svg');
        break;
      default:
        setImageSrc('/day29.svg');
    }
  }, [diaryStatus]);

  return (
    <>
      <img
        className={styles.day29Icon}
        alt=""
        src={imageSrc}
        style={day29IconStyle}
        onClick={openDiaryCheckPopup}
      />
      {isDiaryCheckPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDiaryCheckPopup}
        >
          <DiaryCheckPopup onClose={closeDiaryCheckPopup} diaryContent={diaryContent} diaryConsolation={diaryConsolation} diarySummary={diarySummary}/>
        </PortalPopup>
      )}
    </>
  );
};

export default Day29Icon;
