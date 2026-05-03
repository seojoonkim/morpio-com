export type Lang = "en" | "kr";

export const projects = [
  { slug: "jupiter", title: "Jupiter", year: "2025", category: "Music Video" },
  { slug: "mercedes-amg", title: "Mercedes-AMG", year: "2025", category: "Brand Film" },
  { slug: "thought", title: "Thought", year: "2025", category: "Short Film" },
  { slug: "babylon-is-burning", title: "Babylon", year: "2024", category: "Music Video" },
  { slug: "the-purity-revealed", title: "Purity", year: "2024", category: "Editorial" },
  { slug: "chromatik", title: "Chromatik", year: "2024", category: "Visualizer" },
];

export const content = {
  en: {
    nav: {
      mission: "MISSION",
      roster: "PROJECTS",
      benefits: "WHY MORPIO",
      manifesto: "MANIFESTO",
      recruit: "WORK WITH US",
    },
    cta: {
      showreel: "SHOWREEL",
      work: "WORK WITH US",
      recruit: "RECRUIT",
    },
    hero: {
      kicker: "FRAME → FAME",
      headlineA: "FROM FRAME",
      headlineB: "TO FAME.",
      sub: "AI image-to-video. Virtual celebrities. Made in Seoul, sent to the world.",
      meta: "STUDIO / SEOUL / EST. 2025",
    },
    mission: {
      label: "Nº 01 / MISSION",
      headlineA: "IMAGE IS",
      headlineB: "THE NEW STAR.",
      sub:
        "From a single frame: video, character, presence. Human or virtual — a new way to manufacture fame. morpio bundles image-to-video, virtual celebrity work, and motion design into one pipeline.",
      cards: [
        { k: "∞", v: "FRAMES", t: "per project" },
        { k: "24/7", v: "RENDER FARM", t: "always-on" },
        { k: "1:1", v: "HUMAN : VIRTUAL", t: "hybrid roster" },
      ],
    },
    roster: {
      label: "Nº 02 / PROJECTS",
      headlineA: "OUR",
      headlineB: "PROJECTS.",
      sub: "Six active works. Music videos, brand films, editorials, visualizers.",
      indicator: "ACTIVE",
    },
    benefits: {
      label: "Nº 03 / WHY MORPIO",
      headlineA: "WHY",
      headlineB: "MORPIO.",
      sub: "An AI-native studio built for the speed of attention.",
      items: [
        { t: "AI-NATIVE PIPELINE", d: "Image-to-video baked into every step. No retrofitting." },
        { t: "FRAME-LEVEL DETAIL", d: "Every frame composed, color-graded, sound-designed." },
        { t: "HUMAN + VIRTUAL", d: "Real talent + AI personas, on the same call sheet." },
        { t: "GLOBAL DISTRIBUTION", d: "Made in Seoul. Shipped to LA, Tokyo, Berlin." },
        { t: "OWNERSHIP GUARANTEED", d: "You keep the masters. Always." },
        { t: "STUDIO SPEED", d: "Days, not months. Render farm runs while you sleep." },
      ],
    },
    manifesto: {
      label: "Nº 04 / MANIFESTO",
      headlineA: "OUR",
      headlineB: "MANIFESTO.",
      lines: [
        "An image travels farther than a human.",
        "A frame is the first second of fame.",
        "We don't film reality. We render it.",
        "Virtual is not fake. It's faster.",
        "Quiet brands die. Loud ones get rendered.",
      ],
    },
    recruit: {
      label: "Nº 05 / RECRUIT",
      headlineA: "WORK",
      headlineB: "WITH US.",
      sub:
        "Brand. Artist. Label. Bring us a frame, we'll bring you fame. Open for select 2025–2026 slots.",
      cta: "hello@morpio.com",
      note: "Seoul · Remote · Worldwide",
    },
    footer: {
      copy: "© 2025 MORPIO. All rights reserved.",
      tag: "FRAME → FAME",
    },
  },
  kr: {
    nav: {
      mission: "미션",
      roster: "프로젝트",
      benefits: "왜 모르피오",
      manifesto: "선언",
      recruit: "함께하기",
    },
    cta: {
      showreel: "쇼릴",
      work: "함께하기",
      recruit: "지원",
    },
    hero: {
      kicker: "프레임 → 명성",
      headlineA: "프레임에서",
      headlineB: "명성으로.",
      sub: "AI 이미지-투-비디오. 가상 셀러브리티. 서울에서 만들어 세계로 보낸다.",
      meta: "스튜디오 / 서울 / EST. 2025",
    },
    mission: {
      label: "Nº 01 / 미션",
      headlineA: "이미지가",
      headlineB: "사람이 된다.",
      sub:
        "한 장의 이미지에서 시작해 영상으로, 캐릭터로, 존재로. 인간이든 가상이든 — 명성을 만드는 새로운 방식. 모르피오는 image-to-video, virtual celebrity, motion design을 하나의 파이프라인으로 묶는다.",
      cards: [
        { k: "∞", v: "프레임", t: "프로젝트당" },
        { k: "24/7", v: "렌더팜", t: "상시 가동" },
        { k: "1:1", v: "휴먼 : 버추얼", t: "하이브리드 로스터" },
      ],
    },
    roster: {
      label: "Nº 02 / 프로젝트",
      headlineA: "우리의",
      headlineB: "작업들.",
      sub: "여섯 개의 진행 중인 작업. 뮤직비디오, 브랜드 필름, 에디토리얼, 비주얼라이저.",
      indicator: "ACTIVE",
    },
    benefits: {
      label: "Nº 03 / 왜 모르피오",
      headlineA: "왜",
      headlineB: "모르피오.",
      sub: "주목의 속도에 맞춰 만들어진 AI-네이티브 스튜디오.",
      items: [
        { t: "AI-네이티브 파이프라인", d: "Image-to-video가 모든 단계에 내장됨. 끼워맞추기 ❌" },
        { t: "프레임당 디테일", d: "모든 프레임 컴포지팅, 컬러그레이딩, 사운드디자인." },
        { t: "휴먼 + 버추얼", d: "실제 탤런트와 AI 페르소나가 같은 콜시트 위에." },
        { t: "글로벌 배포", d: "서울에서 만들어 LA, 도쿄, 베를린으로." },
        { t: "오너십 보장", d: "마스터는 당신이 갖는다. 언제나." },
        { t: "스튜디오 스피드", d: "수일 내 납품. 렌더팜은 당신이 자는 동안에도 돈다." },
      ],
    },
    manifesto: {
      label: "Nº 04 / 선언",
      headlineA: "우리의",
      headlineB: "선언.",
      lines: [
        "한 장의 이미지가 한 사람보다 멀리 간다.",
        "프레임은 명성의 첫 1초다.",
        "우리는 현실을 찍지 않는다. 렌더링한다.",
        "가상은 가짜가 아니다. 더 빠를 뿐이다.",
        "조용한 브랜드는 죽는다. 시끄러운 것만 렌더링된다.",
      ],
    },
    recruit: {
      label: "Nº 05 / 함께하기",
      headlineA: "함께",
      headlineB: "하기.",
      sub:
        "브랜드, 아티스트, 레이블 — 프레임을 가져오면 명성을 만들어 드립니다. 2025–2026 일부 슬롯 오픈.",
      cta: "hello@morpio.com",
      note: "서울 · 리모트 · 전 세계",
    },
    footer: {
      copy: "© 2025 MORPIO. All rights reserved.",
      tag: "프레임 → 명성",
    },
  },
} as const;
