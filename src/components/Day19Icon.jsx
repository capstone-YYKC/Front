import { useMemo } from "react";
import styles from "./Day19Icon.module.css";
import React, {useState, useCallback, useEffect} from "react";
import DiaryCheckPopup from "../components/DiaryCheckPopup_1";
import PortalPopup from "../components/PortalPopup";
import axios from 'axios';

const Day19Icon = ({ propTop, propLeft }) => {
  const [isDiaryCheckPopupOpen, setDiaryCheckPopupOpen] = useState(false);
  const openDiaryCheckPopup = useCallback(() => {
    setDiaryCheckPopupOpen(true);
  }, []);
  const closeDiaryCheckPopup = useCallback(() => {
    setDiaryCheckPopupOpen(false);
  }, []);

  const userToken = localStorage.getItem("userToken");
  const [imageSrc, setImageSrc]=useState('/day19.svg');


  useEffect(() => {
    async function fetchData() {
      axios.get('http://localhost:3000/diarys', {
        headers: {
          'x-access-token': userToken
        }
      })
          .then(response => {
            //기분 상태 정보
            const mood = response.data[0].emotionStatus;

            //1: 슬픔, 2: 기쁨, 3: 화남
            switch(mood){
              case '슬픔':
                setImageSrc('/day191.svg');
                break;
              case '행복':
                setImageSrc('/day192.svg');
                break;
              case '화남':
                setImageSrc('/day193.svg');
                break;
              default:
                setImageSrc('/day19.svg');
            }
          }
        );

    }

    fetchData();
  }, []);

  
  const day19IconStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);



  return (
    <>
      <img
        className={styles.day19Icon}
        alt=""
        src={imageSrc}
        style={day19IconStyle}
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

export default Day19Icon;
