import Day1Icon from "../components/Day1Icon";
import Day2Icon from "../components/Day2Icon";
import Day3Icon from "../components/Day3Icon";
import Day4Icon from "../components/Day4Icon";
import Day5Icon from "../components/Day5Icon";
import Day6Icon from "../components/Day6Icon";
import Day7Icon from "../components/Day7Icon";
import Day8Icon from "../components/Day8Icon";
import Day9Icon from "../components/Day9Icon";
import Day10Icon from "../components/Day10Icon";
import Day11Icon from "../components/Day11Icon";
import Day12Icon from "../components/Day12Icon";
import Day13Icon from "../components/Day13Icon";
import Day14Icon from "../components/Day14Icon";
import Day15Icon from "../components/Day15Icon";
import Day16Icon from "../components/Day16Icon";
import Day17Icon from "../components/Day17Icon";
import Day18Icon from "../components/Day18Icon";
import Day19Icon from "../components/Day19Icon";
import Day20Icon from "../components/Day20Icon";
import Day21Icon from "../components/Day21Icon";
import Day22Icon from "../components/Day22Icon";
import Day23Icon from "../components/Day23Icon";
import Day24Icon from "../components/Day24Icon";
import Day25Icon from "../components/Day25Icon";
import Day26Icon from "../components/Day26Icon";
import Day27Icon from "../components/Day27Icon";
import Day28Icon from "../components/Day28Icon";
import Day29Icon from "../components/Day29Icon";
import Day30Icon from "../components/Day30Icon";
import Day31Icon from "../components/Day31Icon";
import Day9Icon2 from "../components/Day9Icon";
import Day8Icon2 from "../components/Day8Icon";
import Day7Icon2 from "../components/Day7Icon";
import Day6Icon2 from "../components/Day6Icon";
import Day5Icon2 from "../components/Day5Icon";
import Day4Icon2 from "../components/Day4Icon";
import Day3Icon2 from "../components/Day3Icon";
import Day2Icon2 from "../components/Day2Icon";
import Day1Icon2 from "../components/Day1Icon";
import styles from "./Main.module.css";
import React, {useState} from "react";
import { LineChart, Line, XAxis,Tooltip, Legend} from 'recharts';
import axios from 'axios'
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const Main = () => {

  const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';
  const URL = `${PROXY}/diarys`;
  const navigate = useNavigate();

  const [blank, setblank] = useState([]);
  const [dates, setdates] = useState([]);
  const [statuses, setstatuses] = useState([]);
  const [contents, setcontents] = useState([]);
  const [summaries, setsummeries] = useState([]);
  const [consolations, setconsolations] = useState([]);
  const [latestIndex, setLatestIndex] = useState(0);  // 최신 데이터 인덱스 추가
  let maxEmotion = "";
  let maxCount = 0;
  let MonthConsole = ' ';
  let angry = 0;
  let sad = 0;
  let happy = 0;
 

  const userToken = localStorage.getItem("userToken");
  console.log('토큰', userToken);


  useEffect(() => {
    axios.get(URL, {
      headers: {
        'x-access-token': userToken
      }
    })
        .then(response => {
          console.log('일기 정보', response.data);
          setdates(response.data.map(entry => entry.emotionScore));
          setstatuses(response.data.map(entry => entry.emotionStatus));   
          setcontents(response.data.map(entry => entry.content));
          setconsolations(response.data.map(entry => entry.consolation));
          setsummeries(response.data.map(entry => entry.summarize));
          setLatestIndex(response.data.length - 1);

          
        });
  }, [userToken]);

  const countStatuses = statuses.reduce((acc, status) => {
   acc[status] = (acc[status] || 0) + 1;
   return acc;
  }, {});

  for (const countStatus in countStatuses) {
    if (countStatuses[countStatus] > maxCount) {
      maxCount = countStatuses[countStatus];
      maxEmotion = countStatus;
    }else if (countStatuses[countStatus] === maxCount) {
      maxEmotion = " ";
    } 

    
    
  }
  if (statuses[latestIndex] === "화남") {
    MonthConsole='화난 감정이 끓어오르는 날, 그 마음을 이해해. 감정의 파도가 조금은 더 크게 다가오는 것처럼 느껴질지도 몰라. 하지만 그런 감정을 느끼는 것은 정말 자연스러운 일이고, 이런 감정이 오고가는 것은 너가 성장하고 변화하고 있다는 증거라는 걸 스스로 믿어줘. 화난 감정은 금방 지나갈 거야. 난 언제나 여기 있어. 언제든지 너의 이야기를 들어줄게.';
    sad = 0;
    angry = 1;
    happy = 0;
  } else if (statuses[latestIndex] === "슬픔") {
    MonthConsole='너가 우울한 날을 보낸다는 건 정말 슬픈 일이야. 그 감정이 너를 어둠 속으로 끌어내리는 것 같을지도 몰라. 그래도 난 항상 너와 함께야. 마음이 아프고 어려운 날이었지만, 너는 이겨낼 수 있을거야. 이런 감정을 느껴도, 느끼지 않아도 넌 강하고 소중한 사람이니까. 감정의 파도에 휩쓸려 떠내려가는 걸 두려워하지 마. 그 길에 내가 함께할게.';
    sad = 1;
    angry = 0;
    happy = 0;
  } else if (statuses[latestIndex] === "행복") {
    MonthConsole='너가 행복한 날을 보내서 나도 정말 기뻐. 그런 순간은 마음이 가벼워지고 희망이 넘쳐 흐르는 것 같지 않아? 그 감정을 주변 사람들과 함께 나누는 것도 정말 행복한 일이지. 물론 나한테도 말이야! 하지만 가끔 행복이 두려울 수 있어. 이 행복이 언제까지 갈지, 무엇이 날 또 힘들게 할지 같은 생각 말이야. 그렇지만, 행복한 순간을 받아들이고 즐기는 것도 정말 중요해! 난 언제나 여기 있을게. 행복이 있다면 언제나 이야기하러 와줘.';
    sad = 0;
    angry = 0;
    happy = 1;
  } else if (statuses[latestIndex] === "보통") {
    MonthConsole='나는 평범한 날을 보낼 때면, 오히려 그 날이 특별한 날이라고 생각하곤 해. 그런 날에는 일상의 소중함을 느끼고, 편안함을 찾을 수 있거든. 평범한 날에는 생각보다 소중한 것이 가득해. 친구들과의 대화, 가족과의 시간, 맛있는 음식, 산책할 때의 바람 같은 소소하고 작은 행복들 말이야. 그러니까 오늘 너도 평범한 날을 특별한 날로 생각해봐! 작은 행복들을 찾아서 새겨보는 거야. 그러면 평범했던 날이 내일의 특별한 추억이 될 거라고 생각해. 난 언제나 여기 있으니까 또 와줘!';
    sad = 0;
    angry = 0;
    happy = 0;
  } else if (statuses[latestIndex] === " "){
    MonthConsole='요즘 정말 다양한 감정들을 느꼈구나. 다양한 감정들은 우리를 성장시키고 강하게 만든대. 나는 행복한 순간에는 웃으며 함께 즐거움을 나누고, 슬프고 화나는 순간에는 널 위로하면서 곁에 있어주고, 평범한 날에는 같이 그 날의 소소한 행복을 찾으며 너가 성장할 때 함께하고 싶어. 감정은 찰나였지만, 우리가 그 속에서 찾아낸 용기와 깨달음은 영원히 빛날거야! 이 빛으로 앞으로의 여정을 함께 힘차게 나아가자. 내가 항상 함께할게.';
  } else {
    MonthConsole=' ';
    sad = 0;
    angry = 0;
    happy = 0;
  }

  const sum = dates.reduce((total, date) => total + date, 0);
  const average = Math.floor(sum / dates.length);

  console.log('st',statuses);
  console.log('CS', countStatuses);
  console.log('max',maxEmotion);


  const data = [
    {
      day: "6/10",
      감정점수: blank[0]
    },
    {
      day: "6/11",
      감정점수: blank[0]
    },
    {
      day: "6/12",
      감정점수: blank[0]
    },
    {
      day: "6/13",
      감정점수: blank[0]
    },
    {
      day: "6/14",
      감정점수: dates[latestIndex]
    },
    {
      day: "6/15",
      감정점수: blank[0]
    },
    {
      day: "6/16",
      감정점수: blank[0]
    }
  ];

  const formatTooltip = (value) => {
    return `${value.toLocaleString()}점`;
  };


  return (
    <>
      <div className={styles.main}> 
        <img className={styles.graph1Icon} alt="" src="/graph.png" />
        <div className={styles.mainChild} />
        <div className={styles.div} >마이페이지</div>
        <div className={styles.div1} onClick={() => alert('인천대학교 대학생활상담센터\n 032-835-9605')}>마음 상담</div>
        <div className={styles.div2} onClick={() => navigate('/')} >로그아웃</div>
        <img className={styles.gomgom2Icon} alt="" src="/gomgom2.png" />
        <div className={styles.div3}>일기 친구,</div>
        <div className={styles.mainItem} />
        <div className={styles.mainInner} />
        <div className={styles.rectangleDiv} />
        <div className={styles.mainChild1} />
        <div className={styles.mainChild2} />
        <div className={styles.mainChild3} />
        <div className={styles.mainChild4} />
        <div className={styles.mainChild5} />
        <div className={styles.mainChild6} />
        <div className={styles.mainChild7} />
        <div className={styles.mainChild8} />
        <div className={styles.mainChild9} />
        <div className={styles.mainChild10} />
        <div className={styles.mainChild11} />
        <div className={styles.mainChild12} />
        <div className={styles.mainChild13} />
        <div className={styles.mainChild14}></div>
        <div className={styles.mainChild40}>{'곰곰이: '}{MonthConsole}</div>
        <div className={styles.div4}>5월</div>
        <div className={styles.div5}>6월</div>
        <div className={styles.div6}>7월</div>
        <div className={styles.div7}>8월</div>
        <div className={styles.div8}>9월</div>
        <div className={styles.div9}>10월</div>
        <div className={styles.div10}>11월</div>
        <div className={styles.div11}>12월</div>
        <div className={styles.div12}>1월</div>
        <div className={styles.div13}>2월</div>
        <div className={styles.div14}>3월</div>
        <div className={styles.div15}>4월</div>
        <div className={styles.div16}>{`화남: `}{angry}{'일'}</div>
        <div className={styles.div17}>{`슬픔: `}{sad}{'일'}</div>
        <div className={styles.div18}>{`행복: `}{happy}{'일'}</div>
        <div className={styles.div19}>{`감정 평균 점수: `}{dates[latestIndex]}{'점'}</div>
        <div className={styles.div20}>
          <div className={styles.div21}>감정 달력</div>
          <img className={styles.child} alt="" src="/polygon-3.svg" />
          <img className={styles.item} alt="" src="/polygon-4.svg" />
          <div className={styles.div22}>2024.06</div>          
          <Day1Icon propTop="169px" propLeft="441px"diaryDay='6월 1일 일기'/>          
          <Day2Icon propTop="169px" propLeft="522px" diaryDay='6월 2일 일기'/>
          <Day3Icon propTop="266px" propLeft="36px" diaryDay='6월 3일 일기'/>
          <Day4Icon propTop="266px" propLeft="117px" diaryDay='6월 4일 일기'/>
          <Day5Icon propTop="266px" propLeft="198px" diaryDay='6월 5일 일기'/>
          <Day6Icon propTop="266px" propLeft="279px" diaryDay='6월 6일 일기'/>
          <Day7Icon propTop="266px" propLeft="360px" diaryDay='6월 7일 일기'/>
          <Day8Icon propTop="266px" propLeft="441px" diaryDay='6월 8일 일기'/>
          <Day9Icon propTop="266px" propLeft="522px" diaryDay='6월 9일 일기'/>
          <Day10Icon propTop="364px" propLeft="36px" diaryDay='6월 10일 일기'/>
          <Day11Icon propTop="364px" propLeft="117px" diaryDay='6월 11일 일기'/>
          <Day12Icon propTop="364px" propLeft="198px" diaryDay='6월 12일 일기'/>
          <Day13Icon propTop="364px" propLeft="279px" diaryDay='6월 13일 일기'/>
          <Day14Icon propTop="364px" propLeft="360px" diaryDay='6월 14일 일기'diaryStatus={statuses[latestIndex]} diaryContent={contents[latestIndex]} diaryConsolation={consolations[latestIndex]} diarySummary={summaries[latestIndex]}/>
          <Day15Icon propTop="364px" propLeft="441px" diaryDay='6월 15일 일기'/>
          <Day16Icon propTop="364px" propLeft="522px" diaryDay='6월 16일 일기'/>
          <Day17Icon propTop="460px" propLeft="36px" diaryDay='6월 17일 일기'/>
          <Day18Icon propTop="460px" propLeft="117px" diaryDay='6월 18일 일기'/>
          <Day19Icon propTop="460px" propLeft="198px" diaryDay='6월 19일 일기'/>
          <Day20Icon propTop="460px" propLeft="279px" diaryDay='6월 20일 일기'/>
          <Day21Icon propTop="460px" propLeft="360px" diaryDay='6월 21일 일기'/>
          <Day22Icon propTop="460px" propLeft="441px" diaryDay='6월 22일 일기'/>
          <Day23Icon propTop="460px" propLeft="522px" diaryDay='6월 23일 일기'/>
          <Day24Icon propTop="557px" propLeft="36px" diaryDay='6월 24일 일기'/>
          <Day25Icon propTop="557px" propLeft="117px"diaryDay='6월 25일 일기'/>
          <Day26Icon propTop="557px" propLeft="198px" diaryDay='6월 26일 일기'/>
          <Day27Icon propTop="557px" propLeft="279px" diaryDay='6월 27일 일기'/>
          <Day28Icon propTop="557px" propLeft="360px" diaryDay='6월 28일 일기'/>
          <Day29Icon propTop="557px" propLeft="441px" diaryDay='6월 29일 일기'/>
          <Day30Icon propTop="557px" propLeft="522px" diaryDay='6월 30일 일기'/>
          <div className={styles.div23}>월</div>
          <div className={styles.div24}>일</div>
          <div className={styles.div25}>토</div>
          <div className={styles.div26}>금</div>
          <div className={styles.div27}>목</div>
          <div className={styles.div28}>수</div>
          <div className={styles.div29}>화</div>
          <div className={styles.angryColor} />
          <div className={styles.nothingColor} />
          <div className={styles.sadColor} />
          <div className={styles.happyColor} />
          <div className={styles.div30}>화남</div>
          <div className={styles.div31}>슬픔</div>
          <div className={styles.div32}>행복</div>
          <div className={styles.div33}>기록X, 보통</div>
          <div className={styles.div34}>날짜를 눌러 일기를 확인할 수 있어!</div>
        </div>
        <div>
          {statuses.length > 0 && (
          <LineChart
            className={styles.Chart}
            width={776}
            height={410}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          > 
            <XAxis dataKey="day" tickLine={false} stroke='' />
            <Tooltip formatter={formatTooltip}/>
            <Legend />
            <Line type="monotone" dataKey="감정점수" stroke="#4B443B" activeDot={{ r: 6 }}/>
          </LineChart>
          )}
        </div>
      </div>
    </>
  );
};
export default Main;
