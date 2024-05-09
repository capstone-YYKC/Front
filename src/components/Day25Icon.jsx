import { useMemo } from "react";
import styles from "./Day25Icon.module.css";
import React, {useState, useCallback, useEffect} from "react";
import DiaryCheckPopup from "../components/DiaryCheckPopup";
import PortalPopup from "../components/PortalPopup";
import axios from 'axios';

const Day25Icon = ({ propTop, propLeft }) => {
  const [isDiaryCheckPopupOpen, setDiaryCheckPopupOpen] = useState(false);
  const openDiaryCheckPopup = useCallback(() => {
    setDiaryCheckPopupOpen(true);
  }, []);
  const closeDiaryCheckPopup = useCallback(() => {
    setDiaryCheckPopupOpen(false);
  }, []);

  const userToken = localStorage.getItem("userToken");
  //기분에 따른 색상 변화
  const [imageSrc, setImageSrc]=useState('/day25.svg');


  useEffect(() => {
    async function fetchData() {
      axios.get('http://localhost:3000/diarys', {
        headers: {
          'x-access-token': userToken
        }
      })
          .then(response => {
            const mood = response.data[6].emotionStatus;
            //1: 슬픔, 2: 기쁨, 3: 화남
            switch(mood){
              case '슬픔':
                setImageSrc('/day251.svg');
                break;
              case '행복':
                setImageSrc('/day252.svg');
                break;
              case '화남':
                setImageSrc('/day253.svg');
                break;
              default:
                setImageSrc('/day25.svg');
            }
          }
        );

    }

    fetchData();
  }, []);

  const day25IconStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <>
      <img
        className={styles.day25Icon}
        alt=""
        src={imageSrc}
        style={day25IconStyle}
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

export default Day25Icon;
