import styles from "./DiaryCheckPopup_1.module.css";
import axios from 'axios';
import React, {useState, useEffect} from 'react';

const DiaryCheckPopup = () => {

  //일기 내용
  const [content, setContent]=useState('');
  //일기 요약
  const [summary, setSummary]=useState('');
  //위로의 말
  const [consolation, setConsolation]=useState('');

  //const ex = '안녕안녕 화이팅!';

  const userToken = localStorage.getItem("userToken");
  console.log('토큰', userToken);


  useEffect(() => {
    axios.get('http://localhost:3000/diarys', {
      headers: {
        'x-access-token': userToken
      }
    })
        .then(response => {
           setContent(response.data[0].content); 
           setSummary(response.data[0].summary);
           setConsolation(response.data[0].console);
        });
  }, []);


  return (
    <div className={styles.diaryCheckPopup}>
      <div className={styles.div}>5월 19일 일기</div>
      <div className={styles.diaryCheckPopupChild}></div>
      <div className={styles.content}>{content}</div>
      <div className={styles.diaryCheckPopupItem} />
      <div className={styles.diaryCheckPopupInner}></div>
      <div className={styles.div1}>{summary}</div>
      <img className={styles.polygonIcon} alt="" src="/polygon-7.svg" />
      <div className={styles.div2}>{'곰곰이: '} {consolation}</div>
      <img className={styles.icon} alt="" src="/-1@2x.png" />
    </div>
  );
};

export default DiaryCheckPopup;
