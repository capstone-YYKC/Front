import styles from "./DiaryCheckPopup_1.module.css";
import axios from 'axios';
import React, {useState, useEffect, useCallback} from 'react';
import SummaryModal from "./SummaryModal";
import PortalPopup from "../components/PortalPopup";
const DiaryCheckPopup = ({diaryContent, diaryConsolation, diarySummary, diaryDay}) => {


  const [isSummaryModalOpen, setSummaryModalOpen] = useState(false);
  const openSummaryModal = useCallback(() => {
    setSummaryModalOpen(true);
  }, []);
  const closeSummaryModal = useCallback(() => {
    setSummaryModalOpen(false);
  }, []);


  return (
    <div className={styles.diaryCheckPopup}>
      <div className={styles.div}>{diaryDay}</div>
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
