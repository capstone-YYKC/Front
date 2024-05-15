import styles from "./DiaryCheckPopup_1.module.css";
import axios from 'axios';
import React, {useState, useEffect, useCallback} from 'react';
import SummaryModal from "./SummaryModal";
import PortalPopup from "../components/PortalPopup";
const DiaryCheckPopup = ({diaryContent, diaryConsolation, diarySummary}) => {

  // //일기 내용
  // const [content, setContent]=useState('');
  // //일기 요약
  // //const [summary, setSummary]=useState('');
  // const summary = '오늘은 비가 와서 우울했다.';
  // //위로의 말
  // const [consolation, setConsolation]=useState('');

  //const ex = '안녕안녕 화이팅!';

  // const userToken = localStorage.getItem("userToken");
  // console.log('토큰', userToken);

  const [isSummaryModalOpen, setSummaryModalOpen] = useState(false);
  const openSummaryModal = useCallback(() => {
    setSummaryModalOpen(true);
  }, []);
  const closeSummaryModal = useCallback(() => {
    setSummaryModalOpen(false);
  }, []);


  // useEffect(() => {
  //   axios.get('http://18.211.120.39:3000/diarys', {
  //     headers: {
  //       'x-access-token': userToken
  //     }
  //   })
  //       .then(response => {
  //          setContent(response.data[0].content); 
  //          //setSummary(response.data[0].summary);
  //          setConsolation(response.data[0].consolation);
  //       });
  // }, []);


  return (
    <div className={styles.diaryCheckPopup}>
      <div className={styles.div}>5월 19일 일기</div>
      <div className={styles.diaryCheckPopupChild}></div>
      <div className={styles.content}>{diaryContent}</div>
      <div className={styles.diaryCheckPopupItem} />
      <div className={styles.diaryCheckPopupInner} onClick={openSummaryModal} ></div>
      <div className={styles.div1}onClick={openSummaryModal}>요약 보기</div>
      <div className={styles.div2}>{'곰곰이: '} {diaryConsolation}</div>
      <img className={styles.icon} alt="" src="/-1@2x.png" />
      {isSummaryModalOpen && (
        <PortalPopup
          
          placement="Centered"
          onOutsideClick={closeSummaryModal}
        >
          <SummaryModal onClose={closeSummaryModal} diarySummary={diarySummary}/>
        </PortalPopup>
      )}
    </div>
  );
};

export default DiaryCheckPopup;
