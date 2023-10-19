// // 날짜와 시간을 다루은 date 객체
// const date = new Date();
// console.log(date);

// // 이렇게 사용하면 헷갈림
// const date1 = new Date(2022, 11, 27);
// console.log(date1);

// const date3 = new Date("2022-12-25");
// console.log(date3);

// const date4 = new Date("2023/12/25/18:00:00");
// console.log(date4);

// const myDate = new Date();
// console.log(myDate.getFullYear()); // 현재 연도 출력
// console.log(myDate.getMonth() + 1); // 현재 월 출력
// console.log(myDate.getDate()); // 현재 날짜 출력
// console.log(myDate.getDay()); // 현재 요일 출력
// console.log(myDate.getHours()); // 현재 시간 출력
// console.log(myDate.getMinutes()); // 현재 분 출력
// console.log(myDate.getSeconds()); // 현재 초 출력
// console.log(myDate.getTime()); // 1970년 1월 1일 자정부터 경과한 시간 출력


let dDay = new Date("2024-02-21");
let nDay = new Date();

let rdDay = dDay.getTime();
let ndDay = nDay.getTime();
// 24(시간) X 60(분) X 60(초) X 1000(밀리초)
remainTime = rdDay - ndDay;

calcDay = Math.round(remainTime/(1000*60*60*24));
document.write(`${calcDay}일 남았습니다. 힘내세요`);
