const divMain = document.getElementsByClassName('main')[0];
const divSection = document.getElementsByClassName('wrap-section');
const navBall = document.querySelectorAll('.dot');
const headTag = document.querySelector('.header');

//헤더. 어디서나 복사해 쉽게 쓸 수 있는!
document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('click', function (event) {
            event.stopPropagation(); // 버블링 방지용. 버블링을 실제로 경험한건 처음이었습니다. 
            navItems.forEach(otherItem => { //다른 탭 닫기
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });

            this.classList.toggle('active');
        });
    });

    // 네비게이션 바깥 부분 클릭 시 세부 메뉴 숨길 수 있게
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.nav')) {
            navItems.forEach(item => {
                item.classList.remove('active');
            });
        }
    });
});
//여기까지가 헤더

let page = 0;
const endPage = divSection.length - 1;

function scrolly(i) { //스크롤시 Div가 하나씩 넘어가는 효과
    i.preventDefault();
    if (i.deltaY > 0) {
        page++;
    }
    else if (i.deltaY < 0) {
        page--;
    }
    if (page < 0) {
        page = 0;
    }
    else if (page > endPage) { //마지막 페이지 도달시
        page = endPage;
    }
    divMain.style.top = page * -100 + 'vh';
    navDotManage(page);
}

function navDotManage(pageIndex) {  // 네비게이션 점 제어부
    navBall.forEach(dot => dot.classList.remove('now-index'));
    navBall[pageIndex].classList.add('now-index');
}

navBall.forEach((dots, index) => {
    dots.addEventListener('click', () => {// 클릭된 점의 인덱스에 해당하는 페이지로 날아갑니다
        scrollToPage(index);
    });
});

// 특정 페이지로 이동하는 함수

function scrollToPage(index) {
    // 인덱스가 페이지 범위 내에 있는지?
    if (index >= 0 && index <= endPage) {// 해당 페이지로 이동.
        page = index;
        divMain.style.top = page * -100 + 'vh';// 네비게이션 점도 업데이트
        navDotManage(page);
    }
}

//로딩탭입니다. 이미지, 페이지 등 뭔가 로딩중이라면 띄웁니다.
window.addEventListener('load', function () {
    document.getElementById('loading-screen').style.display = 'none';
});


// 각 페이지가 현재 페이지일 때 실행할 함수 구조체. 함수식 관리가 더 편해졌네요!
function onPageChange(currentPage) {
    switch (currentPage) {
        case 0:// 첫 번째 페이지에 대한 동작 실행
            headTag.classList.add('white-text');
            headTag.classList.remove('black-text');
            break;
        case 1:// 두 번째 페이지
            headTag.classList.add('white-text');
            headTag.classList.remove('black-text');
            // 원하는 숫자 설정
            const targetNumber1 = 8;
            const targetNumber2 = 7;
            const targetNumber3 = 1;
            const popuNumber = 519060;
            const volNumber = 139.92;
            // 카운팅 시작하는 숫자
            let currentNumber1 = 0;
            let currentNumber2 = 0;
            let currentNumber3 = 0;
            let currentNumber4 = 0;
            let currentNumber5 = 0;
            const countUp1 = setInterval(function () { //카운트 숫자 올리기
                // 숫자를 1씩 증가
                currentNumber1++;
                // 숫자를 요소에 표시
                document.getElementById('counting1').textContent = currentNumber1;
                // 원하는 숫자가 되면 카운팅 중지
                if (currentNumber1 === targetNumber1) {
                    clearInterval(countUp1);
                }
            }, 70);
            const countUp2 = setInterval(function () { //카운트 숫자 올리기
                // 숫자를 1씩 증가
                currentNumber2++;
                // 숫자를 요소에 표시
                document.getElementById('counting2').textContent = currentNumber2;
                // 원하는 숫자가 되면 카운팅 중지
                if (currentNumber2 === targetNumber2) {
                    clearInterval(countUp2);
                }
            }, 70);
            const countUp3 = setInterval(function () { //카운트 숫자 올리기
                // 숫자를 1씩 증가
                currentNumber3++;
                // 숫자를 요소에 표시
                document.getElementById('counting3').textContent = currentNumber3;
                // 원하는 숫자가 되면 카운팅 중지
                if (currentNumber3 === targetNumber3) {
                    clearInterval(countUp3);
                }
            }, 70);
            const countUp4 = setInterval(function () { //카운트 숫자 올리기
                // 숫자를 1씩 증가
                currentNumber4 = currentNumber4 + 3165;  //더하는 숫자는 소인수분해해서 나온 숫자의 곱으로 합니다. 안그러면 카운팅 안멈춤
                // 숫자를 요소에 표시
                document.getElementById('countingpopu').textContent = currentNumber4;
                // 원하는 숫자가 되면 카운팅 중지
                if (currentNumber4 === popuNumber) {
                    clearInterval(countUp4);
                }
            }, 10);
            const countUp5 = setInterval(function () { //카운트 숫자 올리기
                // 숫자를 1씩 증가
                currentNumber5 = parseFloat((currentNumber5 + 5.83).toFixed(2)); // 더하는 숫자는 소인수분해해서 나온 숫자의 곱으로 합니다. 안그러면 카운팅 안멈춤
                // 숫자를 요소에 표시
                document.getElementById('countingvol').textContent = currentNumber5;
                // 원하는 숫자가 되면 카운팅 중지
                if (currentNumber5 === volNumber) {
                    clearInterval(countUp5);
                }
            }, 80);
            break;
        case 2:// 세 번째 페이지에 대한 동작 실행
            headTag.classList.remove('white-text');
            headTag.classList.add('black-text');
            break;
        case 3:// 네 번째 페이지에 대한 동작 실행
        // headTag.classList.remove('white-text');
        // headTag.classList.add('black-text');
        //     console.log("네 번째 페이지입니다."); // 여기는 만들지는 않았지만, 확장 가능함
        default:
            // 기본적으로 할 일이 없는 경우. 달리 말하면 버그입니다.
            console.log("뭔가 이상합니다.");
            break;
    }
}

// 스크롤 또는 클릭에 의해 페이지가 변경될 때 호출되는 함수
function onPageChanged(currentPage) {
    // 현재 페이지가 변경되면 onPageChange 함수 호출
    onPageChange(currentPage);
}

// 현재 페이지를 확인하고 onPageChange 함수를 호출하는 함수
function checkCurrentPage() {
    // 현재 선택된 페이지 확인
    onPageChanged(page);
}

//쓰로틀링, 연속 이벤트의 첫번째만 받으면 일정 시간동안 입력을 처리 하지 않습니다.
//여기서는 Timer가 없는지 검사하고, 존재한다면 이벤트를 취소하빈다. 존재하지 않는다면 새로운 timer를 생성하고, 이벤트는 실행됩니다.
let timer;

window.addEventListener('wheel', (i) => {
    if (!timer) {
        scrolly(i);
        timer = setTimeout(() => {
            timer = null;
            checkCurrentPage(); // 페이지 변경 후 현재 페이지 확인
        }, 1500); //1.5초 쓰로틀링
    }
}, { passive: false });

// 페이지가 변경될 때마다 checkCurrentPage 함수 호출
window.addEventListener('wheel', (i) => {
    if (!timer) {
        scrolly(i);
        timer = setTimeout(() => {
            timer = null;
            checkCurrentPage(); // 페이지 변경 후 현재 페이지 확인
        }, 1500); //1.5초 쓰로틀링
    }
}, { passive: false });

// 네비게이션 점이 클릭될 때마다 checkCurrentPage 함수 호출
navBall.forEach((dots, index) => {
    dots.addEventListener('click', () => {
        scrollToPage(index);
        checkCurrentPage(); // 페이지 변경 후 현재 페이지 확인
    });
});

// 모바일 환경 대응
let lastTouchY;

// 터치 이벤트 핸들러를 등록합니다.
let timerTouch; // 터치 스크롤 쓰로틀링을 위한 타이머 변수 선언
let initialTouchY;

// 터치 이벤트 핸들러 내에서 쓰로틀링을 적용합니다.

window.addEventListener('touchstart', function (event) {
    if (event.touches && event.touches.length > 0) {
        initialTouchY = event.touches[0].clientY;
    }
}, { passive: false });

window.addEventListener('touchmove', function (event) {
    if (!timerTouch) { // 타이머가 없으면 이벤트를 처리하고, 타이머를 설정합니다.
        onTouchMove(event);
        timerTouch = setTimeout(() => {
            timerTouch = null;
        }, 1500); // 1.5초 쓰로틀링
    }
}, { passive: false });


// 초기화
lastTouchY = null;

function onTouchMove(event) {
    // 터치 이벤트가 발생한 경우에만 처리합니다.
    if (event.touches && event.touches.length > 0) {
        // 터치 이벤트가 발생한 위치의 Y 좌표를 가져옵니다.
        const touchY = event.touches[0].clientY;

        // 초기 터치 이벤트의 Y 좌표가 설정되어 있지 않으면 설정합니다.
        if (lastTouchY === null) {
            lastTouchY = touchY;
            return;
        }

        // 이전 터치 이벤트의 Y 좌표와 비교하여 스크롤 방향을 결정합니다.
        if (touchY > lastTouchY) {
            // 아래로 스크롤되었을 때
            page--;
        } else if (touchY < lastTouchY) {
            // 위로 스크롤되었을 때
            page++;
        }

        // 페이지가 범위를 벗어나지 않도록 확인합니다.
        if (page < 0) {
            page = 0;
        } else if (page > endPage) {
            page = endPage;
        }

        // 스크롤 처리
        divMain.style.top = page * -100 + 'vh';
        navDotManage(page);

        // 이전 터치 이벤트의 Y 좌표를 갱신합니다.
        lastTouchY = touchY;

        // 기본 스크롤 동작을 막습니다.
        event.preventDefault();
    }
}

// 초기화 이전에 호출하여 초기값을 설정합니다.
onTouchMove({ touches: [{ clientY: 0 }] });
