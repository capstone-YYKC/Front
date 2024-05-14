import { useMemo } from "react";
import styles from "./Day24Icon.module.css";
import React, {useState, useCallback, useEffect} from "react";
import DiaryCheckPopup from "../components/DiaryCheckPopup_6";
import PortalPopup from "../components/PortalPopup";
import axios from 'axios';

const Day24Icon = ({ propTop, propLeft }) => {
  const [isDiaryCheckPopupOpen, setDiaryCheckPopupOpen] = useState(false);
  const openDiaryCheckPopup = useCallback(() => {
    setDiaryCheckPopupOpen(true);
  }, []);
  const closeDiaryCheckPopup = useCallback(() => {
    setDiaryCheckPopupOpen(false);
  }, []);

  const userToken = localStorage.getItem("userToken");
  //기분에 따른 색상 변화
  const [imageSrc, setImageSrc]=useState('/day24.svg');


  useEffect(() => {
    async function fetchData() {
      axios.get('http://18.211.120.39:3000/diarys', {
        headers: {
          'x-access-token': userToken
        }
      })
          .then(response => {
            const mood = response.data[5].emotionStatus;
            //1: 슬픔, 2: 기쁨, 3: 화남
            switch(mood){
              case '슬픔':
                setImageSrc('/day241.svg');
                break;
              case '행복':
                setImageSrc('/day242.svg');
                break;
              case '화남':
                setImageSrc('/day243.svg');
                break;
              default:
                setImageSrc('/day24.svg');
            }
          }
        );

    }

    fetchData();
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
        src={imageSrc}
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
