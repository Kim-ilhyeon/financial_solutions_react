import React, { useRef } from 'react'

/*

*/

const UseRefScroll = () => {
    // 객체 형태로 useRef를 관리
    const scrollRef = useRef({
        main: null,
        about: null,
        history: null,
    })

    const handleScrollView = (sectionKey) => {
        scrollRef.current[sectionKey]?.scrollIntoView({behavior: "smooth"})
    }

  return (
    <>
        {/* 네비 영역 */}
        <nav style={{position: "fixed", top: 0, background: "#fff", width: "100%", zIndex: 1000}}>
            <ul style={{display: "flex", gap: "12px", listStyle: "none", padding: "12px"}}>
                <li><button onClick={() => handleScrollView("main")}>메인 페이지</button></li>
                <li><button onClick={() => handleScrollView("about")}>회사 소개</button></li>
                <li><button onClick={() => handleScrollView("history")}>회사 이력</button></li>
            </ul>
        </nav>
        {/* 본문 */}
        <div style={{paddingTop: "80px"}}>
            <section
            ref={(el => {scrollRef.current.main = el})}
                style={{minHeight: "100vh", paddin: "24px", background: "#ece0e0"}}
            >
                <h1 style={{paddingTop: "30px"}}>메인 페이지</h1>
                <p>. . .</p>
            </section>
            <section
            ref={(el => {scrollRef.current.about = el})}
                style={{minHeight: "100vh", paddin: "24px", background: "#8a5757"}}
            >
                <h1 style={{paddingTop: "30px"}}>회사 소개 - KH정보 교육원</h1>
                <p>. . . ~ 회사 소개 내용</p>
            </section>
            <section
            ref={(el => {scrollRef.current.history = el})}
                style={{minHeight: "100vh", paddin: "24px", background: "#4cc54e"}}
            >
                <h1 style={{paddingTop: "30px"}}>회사 이력 - KH정보 교육원</h1>
                <p>. . . ~ 회사이력 내용</p>
            </section>
        </div>
    </>
  )
}

export default UseRefScroll