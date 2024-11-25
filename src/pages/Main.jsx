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
import styles from "./Main.module.css";
import React, {useState} from "react";
import { BarChart, Bar, XAxis, Tooltip, Legend } from 'recharts';
import axios from 'axios'
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const Main = () => {

  const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';
  const URL = `${PROXY}/diarys`;
  const navigate = useNavigate(); 

  const apiKey = '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';
  //const ex_diary = '나 오늘 발목 치료 받고 올리브영에서 선물도 사고 노래방에서 노래도 불렀어. 발목이 많이 나아져서 좋고 올리브영에서 싸게 좋은 선물 사서 좋고 노래도 오랜만에 많이 불러서 좋았어. 용돈도 받았다? 설거지랑 청소기도 돌려서 뿌듯해. 과제도 2개나 클리어했어. 기분좋은 하루야.'

  const [EPercent, setEpercent] = useState([]);
  const [statuses, setstatuses] = useState([]);
  const [contents, setcontents] = useState([]);
  const [date, setDate] = useState([]);
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [happy, setHappy] = useState([]);
  const [sad, setSad] = useState([]);
  const [angry, setAngry] = useState([]);
  const [normal, setNormal] = useState([]);
  //const [diary, setDiary] = useState(ex_diary);
 

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
          setEpercent(response.data.data.map(entry => entry.emotionScore));
          setstatuses(response.data.data.map(entry => entry.emotionStatus));   
          setcontents(response.data.data.map(entry => entry.content));
          setDate(response.data.data.map(entry => entry.writeAt));
          setHappy(response.data.data.map(entry => entry.행복));
          setSad(response.data.data.map(entry => entry.슬픔));
          setAngry(response.data.data.map(entry => entry.화남));
          setNormal(response.data.data.map(entry => entry.보통));
        });
  }, [userToken]);

 // const ccontents = ['난 정말 슬퍼..', '난 정말 오늘도 슬퍼..'] 

  useEffect(() => {
    const fetchData = async () => {
      if(contents.length === 0) {
        setResponse('여기서 일기를 분석하고 있어! 언제든지 더 말하러 와😉');
        return;
      }

      console.log('일기내용', contents)
      const SUM = contents.join(" / ");
      console.log('일기전체', SUM)
      const prompt = `일기 내용: ${SUM}\n너는 일기를 녹음하는 일기 인형 곰곰이야. 다정한 친구처럼 반말로 지금 보낸 일기에 대한 코멘트를 심리학적으로 도움이 되게 생성해줘. 코멘트의 내용은 각 감정의 발생 비율(%)과 그에 대한 간단한 설명을 포함하고, 특정 감정이 자주 나타나는 날이나 활동에 대한 패턴도 찾아줘. 향후 감정 관리를 위한 팁이나 권장 사항을 이모지를 조금 섞어서 300자 정도로 제공해줘. (그냥 분석부터 하면 돼 '물론이지~'이런 대답 넣지마)`;

      setLoading(true);

      try {
          const result = await axios.post(
              'https://api.openai.com/v1/chat/completions',
              {
                  model: 'gpt-4o', // 사용하려는 모델
                  messages: [{ role: 'user', content: prompt }],
                  max_tokens: null, // 생성할 텍스트의 길이
              },
              {
                  headers: {
                      'Content-Type': 'application/json',
                      Authorization: `Bearer ${apiKey}`, // API 키를 헤더에 포함
                  },
              }
          );

          setResponse(result.data.choices[0].message.content.trim());
      } catch (error) {
              console.error('Error calling OpenAI API:', error.response ? error.response.data : error.message);
              setResponse('Error occurred while generating text.');
      } finally {
          setLoading(false);
      }
    };


    fetchData();

}, [contents]);

  const countStatuses = statuses.reduce((acc, status) => {
   acc[status] = (acc[status] || 0) + 1;
   return acc;
  }, {});




  const data = [
    {
      day: "11/25",
      보통: (normal[0] / (normal[0] + happy[0] + sad[0] + angry[0])) * 100 || 0,
      행복: (happy[0] / (normal[0] + happy[0] + sad[0] + angry[0])) * 100 || 0,
      슬픔: (sad[0] / (normal[0] + happy[0] + sad[0] + angry[0])) * 100 || 0,
      화남: (angry[0] / (normal[0] + happy[0] + sad[0] + angry[0])) * 100 || 0
    },
    {
      day: "11/26",
      보통: (normal[1] / (normal[1] + happy[1] + sad[1] + angry[1])) * 100 || 0,
      행복: (happy[1] / (normal[1] + happy[1] + sad[1] + angry[1])) * 100 || 0,
      슬픔: (sad[1] / (normal[1] + happy[1] + sad[1] + angry[1])) * 100 || 0,
      화남: (angry[1] / (normal[1] + happy[1] + sad[1] + angry[1])) * 100 || 0
    },
    {
      day: "11/27",
      보통: (normal[2] / (normal[2] + happy[2] + sad[2] + angry[2])) * 100 || 0,
      행복: (happy[2] / (normal[2] + happy[2] + sad[2] + angry[2])) * 100 || 0,
      슬픔: (sad[2] / (normal[2] + happy[2] + sad[2] + angry[2])) * 100 || 0,
      화남: (angry[2] / (normal[2] + happy[2] + sad[2] + angry[2])) * 100 || 0
    },
    {
      day: "11/28",
      보통: (normal[3] / (normal[3] + happy[3] + sad[3] + angry[3])) * 100 || 0,
      행복: (happy[3] / (normal[3] + happy[3] + sad[3] + angry[3])) * 100 || 0,
      슬픔: (sad[3] / (normal[3] + happy[3] + sad[3] + angry[3])) * 100 || 0,
      화남: (angry[3] / (normal[3] + happy[3] + sad[3] + angry[3])) * 100 || 0
    },
    {
      day: "11/29",
      보통: 0,
      행복: 0,
      슬픔: 0,
      화남: 0
    },
    {
      day: "11/30",
      보통: 0,
      행복: 0,
      슬픔: 0,
      화남: 0
    },
    {
      day: "12/01",
      보통: 0,
      행복: 0,
      슬픔: 0,
      화남: 0
    }
  ];

  
  const formatTooltip = (value) => {
    return `${value.toLocaleString()}%`;
  };


  return (
    <>
      <div className={styles.main}> 
        <img className={styles.graph1Icon} alt="" src="/graph.png" />
        <div className={styles.mainChild} />
        <div className={styles.div} >마이페이지</div>
        <div className={styles.div1}>마음 상담</div>
        <div className={styles.div2} onClick={() => navigate('/') }>로그아웃</div>
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
        <div className={styles.mainChild40}>
          {loading ? (
            <p>Loading...</p>

           ):(
            <div>
              {'곰곰이: '}{response || '실패'}
            </div>
           )}
        </div>
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
        <div className={styles.div16}>{`화남: `}{countStatuses.화남}{'일'}</div>
        <div className={styles.div17}>{`슬픔: `}{countStatuses.슬픔}{'일'}</div>
        <div className={styles.div18}>{`행복: `}{countStatuses.행복}{'일'}</div>
        <div className={styles.div20}>
          <div className={styles.div21}>감정 달력</div>
          <img className={styles.child} alt="" src="/polygon-3.svg" />
          <img className={styles.item} alt="" src="/polygon-4.svg" />
          <div className={styles.div22}>2024.11</div>          
          <Day1Icon propTop="169px" propLeft="360px"diaryDay='11월 1일 일기' />          
          <Day2Icon propTop="169px" propLeft="441px" diaryDay='11월 2일 일기' />
          <Day3Icon propTop="169px" propLeft="522px" diaryDay='11월 3일 일기'/>
          <Day4Icon propTop="266px" propLeft="36px" diaryDay='11월 4일 일기'/>
          <Day5Icon propTop="266px" propLeft="117px" diaryDay='11월 5일 일기'/>
          <Day6Icon propTop="266px" propLeft="198px" diaryDay='11월 6일 일기'/>
          <Day7Icon propTop="266px" propLeft="279px" diaryDay='11월 7일 일기'/>
          <Day8Icon propTop="266px" propLeft="360px" diaryDay='11월 8일 일기'/>
          <Day9Icon propTop="266px" propLeft="441px" diaryDay='11월 9일 일기'/>
          <Day10Icon propTop="266px" propLeft="522px" diaryDay='11월 10일 일기'/>
          <Day11Icon propTop="364px" propLeft="36px" diaryDay='11월 11일 일기'/>
          <Day12Icon propTop="364px" propLeft="117px" diaryDay='11월 12일 일기'/>
          <Day13Icon propTop="364px" propLeft="198px" diaryDay='11월 13일 일기'/>
          <Day14Icon propTop="364px" propLeft="279px" diaryDay='11월 14일 일기'/>
          <Day15Icon propTop="364px" propLeft="360px" diaryDay='11월 15일 일기'/>
          <Day16Icon propTop="364px" propLeft="441px" diaryDay='11월 16일 일기'/>
          <Day17Icon propTop="364px" propLeft="522px" diaryDay='11월 17일 일기'/>
          <Day18Icon propTop="460px" propLeft="36px" diaryDay='11월 18일 일기'/>
          <Day19Icon propTop="460px" propLeft="117px" diaryDay='11월 19일 일기'/>
          <Day20Icon propTop="460px" propLeft="198px" diaryDay='11월 20일 일기'/>
          <Day21Icon propTop="460px" propLeft="279px" diaryDay='11월 21일 일기'/>
          <Day22Icon propTop="460px" propLeft="360px" diaryDay='11월 22일 일기'/>
          <Day23Icon propTop="460px" propLeft="441px" diaryDay='11월 23일 일기'/>
          <Day24Icon propTop="460px" propLeft="522px" diaryDay='11월 24일 일기'/>
          <Day25Icon propTop="557px" propLeft="36px"diaryDay='11월 25일 일기'  diaryContent={contents[0]} diaryStatus={statuses[0]}/>
          <Day26Icon propTop="557px" propLeft="117px" diaryDay='11월 26일 일기' diaryContent={contents[1]} diaryStatus={statuses[1]}/>
          <Day27Icon propTop="557px" propLeft="198px" diaryDay='11월 27일 일기' diaryContent={contents[2]} diaryStatus={statuses[2]}/>
          <Day28Icon propTop="557px" propLeft="279px" diaryDay='11월 28일 일기' diaryContent={contents[contents.length-1]} diaryStatus={contents.length-1}/>
          <Day29Icon propTop="557px" propLeft="360px" diaryDay='11월 29일 일기'/>
          <Day30Icon propTop="557px" propLeft="441px" diaryDay='11월 30일 일기'/>
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
          <BarChart
          className={styles.Chart}
            width={800}
            height={410}
            data={data}
            margin={{
              top:40,
              right:0,
              left:-35,
              bottom:5,
            }}
            >
              <XAxis dataKey="day" tickLine={false} stroke='' tick={{ fill: '#807160' }} />
              <Tooltip formatter={formatTooltip}/>
              <Legend />
              <Bar dataKey={"화남"} stackId="a" fill="#EBA6A6" barSize={50}/>
              <Bar dataKey={"슬픔"} stackId="a" fill="#98BCC3" barSize={50}/>
              <Bar dataKey={"행복"} stackId="a" fill="#98C3A4" barSize={50}/>
              <Bar dataKey={"보통"} stackId="a" fill="#D7CFC9" barSize={50}/>
            </BarChart>
        </div>
      </div>
    </>
  );
};
export default Main;
