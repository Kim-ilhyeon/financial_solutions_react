// ISO 문자열 -> "14:20"
export const formatClock = (iso) => {
    return new Date(iso).toLocaleTimeString('ko-KR', {hour: "2-digit", minute: "2-digit", hour12: false});
}

// 예를 들어 900초 -> 15:00 으로
export const formatTime = (see) => {
    return `${String(Math.floor(see/60)).padStart(2, '0')} : ${String(see%60).padStart(2, '0')}`;
}

// 오늘 날짜 확인여부
export const isToday = (iso) => {
    return new Date(iso).toDateString() === new Date().toDateString();
}