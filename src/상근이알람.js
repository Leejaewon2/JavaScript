// 시간 정보(시간과 분)를 입력 받아 45분 일찍 설정하는 문제
// 시간 출력 구문을 템플릿 문자열을 사용해서 출력  하기 `${}`
// parseInt()함수 필요 : 결과값을 정수로 반환

/* 문제
상근이는 매일 아침 알람을 듣고 일어난다. 알람을 듣고 바로 일어나면 다행이겠지만, 항상 조금만 더 자려는 마음 때문에 매일 학교를 지각하고 있다.

상근이는 모든 방법을 동원해보았지만, 조금만 더 자려는 마음은 그 어떤 것도 없앨 수가 없었다.

이런 상근이를 불쌍하게 보던, 창영이는 자신이 사용하는 방법을 추천해 주었다.

바로 "45분 일찍 알람 설정하기"이다.
*/

// 1. propmt를 사용해서 시간, 분 입력 받기
// 2. 입력 받은 시간을 분으로 환산으로 45분을 빼기
// 3. 만약 45분 뺀 시간이 이전 날짜로 되는 경우는 24시간만큼 더해주기
// 4. 계산된 분은 다시 시간과 분으로 환산해서 document.write()로 출력하는데
//    템플릿 문자열을 사용해서 출력하기.


let hour = Number(prompt("시간 : ", ""));
let min = Number(prompt("분을 : ", ""));
let calc = (hour * 60) + min;

if(calc < 45) {
    (calc * 24) + min
}
calc -= 45;
document.write(`시간 : ${parseInt(calc / 60)}<br> 분 : ${calc % 60} `);
