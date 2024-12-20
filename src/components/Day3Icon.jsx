import { useMemo } from "react";
import styles from "./Day3Icon.module.css";
import React, {useState, useCallback, useEffect} from "react";
import DiaryCheckPopup from "../components/DiaryCheckPopup_1";
import PortalPopup from "../components/PortalPopup";

const Day3Icon = ({ propTop, propLeft, diaryStatus, diaryContent, diaryConsolation, diarySummary,diaryDay }) => {
  const [isDiaryCheckPopupOpen, setDiaryCheckPopupOpen] = useState(false);
  const openDiaryCheckPopup = useCallback(() => {
    setDiaryCheckPopupOpen(true);
  }, []);
  const closeDiaryCheckPopup = useCallback(() => {
    setDiaryCheckPopupOpen(false);
  }, []);
  const day3IconStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const [imageSrc, setImageSrc]=useState('/day3.svg');
  //1: 슬픔, 2: 기쁨, 3: 화남
  useEffect(() => {
    switch(diaryStatus){
      case '슬픔':
        setImageSrc('/day32.svg');
        break;
      case '행복':
        setImageSrc('/day33.svg');
        break;
      case '화남':
        setImageSrc('/day34.svg');
        break;
      default:
        setImageSrc('/day3.svg');
    }
  }, [diaryStatus]);

  return (
    <>
      <img
        className={styles.day3Icon}
        alt=""
        src={imageSrc}
        style={day3IconStyle}
        onClick={openDiaryCheckPopup}
      />
      {isDiaryCheckPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDiaryCheckPopup}
        >
          <DiaryCheckPopup onClose={closeDiaryCheckPopup} diaryContent={diaryContent} diaryStatus={diaryStatus}diaryConsolation={diaryConsolation} diarySummary={diarySummary} diaryDay={diaryDay} />
        </PortalPopup>
      )}
    </>
  );
};

export default Day3Icon;
