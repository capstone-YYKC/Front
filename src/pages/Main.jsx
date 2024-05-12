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


const Main = () => {

  const [date0, setdate0] = useState([]);
  const [date1, setdate1] = useState([]);
  const [date2, setdate2] = useState([]);
  const [date3, setdate3] = useState([]);
  const [date4, setdate4] = useState([]);
  const [date5, setdate5] = useState([]);
  const [date6, setdate6] = useState([]);
  

  const userToken = localStorage.getItem("userToken");
  console.log('토큰', userToken);


  useEffect(() => {
    axios.get('http://localhost:3000/diarys', {
      headers: {
        'x-access-token': userToken
      }
    })
        .then(response => {
          console.log('일기 정보', response.data)
          setdate0(response.data[0].emotionScore);
          setdate1(response.data[1].emotionScore);
          setdate2(response.data[2].emotionScore);
          setdate3(response.data[3].emotionScore);
          setdate4(response.data[4].emotionScore);
          setdate5(response.data[5].emotionScore);
          setdate6(response.data[6].emotionScore);
        });
  }, []);


  const data = [
    {
      day: "5/19",
      감정점수: date0
    },
    {
      day: "5/20",
      감정점수: date1
    },
    {
      day: "5/21",
      감정점수: date2
    },
    {
      day: "5/22",
      감정점수: date3
    },
    {
      day: "5/23",
      감정점수: date4
    },
    {
      day: "5/24",
      감정점수: date5
    },
    {
      day: "5/25",
      감정점수: date6
    }
  ];

  const formatTooltip = (value) => {
    return `${value.toLocaleString()}점`;
  };


  return (
    <>
      <div className={styles.main}> 
        <img className={styles.graph1Icon} alt="" src="/graph2.png" />
        <div className={styles.mainChild} />
        <div className={styles.div} >마이페이지</div>
        <div className={styles.div1}>마음 상담</div>
        <div className={styles.div2}>로그아웃</div>
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
        <div className={styles.mainChild14} />
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
        <div className={styles.div16}>{`화남: `}</div>
        <div className={styles.div17}>{`슬픔: `}</div>
        <div className={styles.div18}>{`행복: `}</div>
        <div className={styles.div19}>{`감정 점수: `}</div>
        <div className={styles.div20}>
          <div className={styles.div21}>감정 달력</div>
          <img className={styles.child} alt="" src="/polygon-3.svg" />
          <img className={styles.item} alt="" src="/polygon-4.svg" />
          <div className={styles.div22}>2024.05</div>          
          <Day1Icon propTop="169px" propLeft="279px"/>          
          <Day2Icon propTop="169px" propLeft="360px" />
          <Day3Icon propTop="169px" propLeft="441px" />
          <Day4Icon propTop="169px" propLeft="522px" />
          <Day5Icon propTop="266px" propLeft="36px" />
          <Day6Icon propTop="266px" propLeft="117px" />
          <Day7Icon propTop="266px" propLeft="198px" />
          <Day8Icon propTop="266px" propLeft="279px" />
          <Day9Icon propTop="266px" propLeft="360px" />
          <Day10Icon propTop="266px" propLeft="441px" />
          <Day11Icon propTop="266px" propLeft="522px" />
          <Day12Icon propTop="364px" propLeft="36px" />
          <Day13Icon propTop="364px" propLeft="117px" />
          <Day14Icon propTop="364px" propLeft="198px" />
          <Day15Icon propTop="364px" propLeft="279px" />
          <Day16Icon propTop="364px" propLeft="360px" />
          <Day17Icon propTop="364px" propLeft="441px" />
          <Day18Icon propTop="364px" propLeft="522px" />
          <Day19Icon propTop="460px" propLeft="36px" />
          <Day20Icon propTop="460px" propLeft="117px" />
          <Day21Icon propTop="460px" propLeft="198px" />
          <Day22Icon propTop="460px" propLeft="279px" />
          <Day23Icon propTop="460px" propLeft="360px" />
          <Day24Icon propTop="460px" propLeft="441px" />
          <Day25Icon propTop="460px" propLeft="522px"/>
          <Day26Icon propTop="557px" propLeft="36px" />
          <Day27Icon propTop="557px" propLeft="117px" />
          <Day28Icon propTop="557px" propLeft="198px" />
          <Day29Icon propTop="557px" propLeft="279px" />
          <Day30Icon propTop="557px" propLeft="360px" />
          <Day31Icon propTop="557px" propLeft="441px" />
          <Day1Icon2 propTop="557px" propLeft="522px" />          
          <Day2Icon2 propTop="653px" propLeft="36px" />
          <Day3Icon2 propTop="653px" propLeft="117px" />
          <Day4Icon2 propTop="653px" propLeft="198px" />
          <Day5Icon2 propTop="653px" propLeft="279px" />
          <Day6Icon2 propTop="653px" propLeft="360px" />
          <Day7Icon2 propTop="653px" propLeft="441px" />
          <Day8Icon2 propTop="653px" propLeft="522px" />
          <div className={styles.div23}>일</div>
          <div className={styles.div24}>토</div>
          <div className={styles.div25}>금</div>
          <div className={styles.div26}>목</div>
          <div className={styles.div27}>수</div>
          <div className={styles.div28}>화</div>
          <div className={styles.div29}>월</div>
          <div className={styles.angryColor} />
          <div className={styles.nothingColor} />
          <div className={styles.sadColor} />
          <div className={styles.happyColor} />
          <div className={styles.div30}>화남</div>
          <div className={styles.div31}>슬픔</div>
          <div className={styles.div32}>행복</div>
          <div className={styles.div33}>기록 없음</div>
          <div className={styles.div34}>날짜를 눌러 일기를 확인할 수 있어!</div>
        </div>
        <div>
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
        </div>
      </div>
    </>
  );
};
export default Main;
