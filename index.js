// let lastScroll = 0;
// let ticking = false;
// const header = document.getElementById('header');

// window.addEventListener('scroll', () => {
//     if (!ticking) {
//         window.requestAnimationFrame(() => {
//             const currentScroll = window.pageYOffset;
            
//             if (currentScroll > lastScroll && currentScroll > 100) {
//                 header.classList.add('hide');
//             } else if (currentScroll < lastScroll) {
//                 header.classList.add('fixed');
//                 header.classList.remove('hide');
//             }
            
//             if (currentScroll <= 0) {
//                 header.classList.remove('fixed');
//             }
            
//             lastScroll = currentScroll;
//             ticking = false;
//         });
//         ticking = true;
//     }
// });
let lastScroll = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (currentScroll / scrollHeight) * 100;
    
    // 최상단 (0%)
    if (currentScroll <= 0) {
        header.classList.remove('fixed', 'hide');
    }
    // 0~5% 구간: fixed 상태
    else if (scrollPercent <= 5) {
        header.classList.add('fixed');
        header.classList.remove('hide');
    }
    // 5% 이상 & 스크롤 다운: 사라짐
    else if (currentScroll > lastScroll) {
        header.classList.add('fixed', 'hide');
    }
    // 스크롤 업: fixed로 나타남
    else if (currentScroll < lastScroll) {
        header.classList.add('fixed');
        header.classList.remove('hide');
    }
    
    lastScroll = currentScroll;
});

// 텍스트 삭제
// document.querySelectorAll('.go-list p').forEach(function(element){
//     element.textContent ='';
// });


// 반응형 텍스트 삭제
function handleResize(){
    const goListTexts = document.querySelectorAll('.go-list p');
    const goListsIcons = document.querySelectorAll('.go-list i');
    if (window.matchMedia('(max-width: 768px)').matches){
        goListTexts.forEach(el => el.textContent ='');
        goListsIcons.forEach(el => el.style.display = 'inline');

    }else{
        goListTexts.forEach(el => el.textContent = 'Go-List');
        goListsIcons.forEach(el => el.style.display = 'none')
        
        
    }
}

handleResize();

window.addEventListener('resize', handleResize);

// 서브메뉴 클릭 시 검은화면 이벤트
// const SubMenuButton = document.querySelector('.sub-menu');
// const Container = document.getElementById('container');

// SubMenuButton.addEventListener('click', ()=>{
//     Container.classList.toggle('show-overlay');
// });

// document.querySelector('.sub-menu').addEventListener('click', () => {
//     document.getElementById('container').classList.toggle('show-overlay');
// });

// 오버레이 이벤트
const SubMenuButton = document.querySelector('.sub-menu');
const Overlay = document.querySelector('.overlay');
const CloseBtn = document.querySelector('.close-btn');

// 메뉴 클릭 → 오버레이 열기
SubMenuButton.addEventListener('click', () => {
    Overlay.classList.add('active');
    document.body.style.overflow = 'hidden';  // 스크롤 방지 (선택사항)
});

// X 버튼 클릭 → 오버레이 닫기
CloseBtn.addEventListener('click', () => {
    Overlay.classList.remove('active');
    document.body.style.overflow = '';  // 스크롤 복원
});

// // 오버레이 배경 클릭 → 닫기 (선택사항)
// Overlay.addEventListener('click', (e) => {
//     if (e.target === Overlay) {  // 배경만 클릭했을 때
//         Overlay.classList.remove('active');
//         document.body.style.overflow = '';
//     }
// });

// ESC 키로 닫기 (선택사항)
// document.addEventListener('keydown', (e) => {
//     if (e.key === 'Escape' && Overlay.classList.contains('active')) {
//         Overlay.classList.remove('active');
//         document.body.style.overflow = '';
//     }
// });
