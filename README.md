# 이세창 포트폴리오

> Java Backend Developer · 경력 7년차 · 이세창의 개인 포트폴리오 웹사이트

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?logo=typescript)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38BDF8?logo=tailwindcss)](https://tailwindcss.com)

---

## 소개

Java/Spring 기반 백엔드 개발자 이세창의 포트폴리오 사이트입니다.  
웹 포트폴리오, PDF 인쇄 모드, 흑백 인쇄 모드를 지원하며 GitHub Pages에 배포됩니다.

---

## 주요 기능

| 기능                           | 설명                                                  |
| ------------------------------ | ----------------------------------------------------- |
| 웹 포트폴리오                  | 반응형 디자인, 다크 모드 지원, 섹션 스크롤 네비게이션 |
| PDF 다운로드                   | 미리 준비된 PDF 파일 직접 다운로드                    |
| 인쇄 모드 (`#print`)           | PDF 출력용 전용 레이아웃                              |
| 흑백 인쇄 모드 (`/print-mono`) | 흑백 출력용 전용 레이아웃                             |
| 아키텍처 다이어그램            | Mermaid.js 기반 시스템 구성도 시각화                  |
| 성능 차트                      | Recharts 기반 성능 개선 수치 시각화                   |

---

## 수록 프로젝트

### Project 01 · 블라이스(Blice) 웹소설·웹툰 서비스

- **기간**: 2021.01 – 2025.06 (4년 6개월)
- **역할**: 운영 및 통합 기능 개발 (KT 고객사)
- **주요 성과**: SQL 튜닝·인덱스 설계로 쿼리·배치 처리 속도 최대 5~6배 개선, 정기결제·인앱 결제 연동, Kafka 기반 알림 시스템 설계·구현
- **기술**: Java, Spring Boot, Spring Batch, MyBatis, MariaDB, Redis, Kafka, Docker, AWS, Jenkins

### Project 02 · 한국그린전력 홈페이지 리뉴얼

- **기간**: 2025.08 – 2026.01 (6개월)
- **역할**: 백엔드 리드 개발, 인프라/보안 설계 (1인 풀스택)
- **주요 성과**: PHP 레거시 시스템을 Kotlin/Spring Boot + Vue 3로 재구축, ERP 연동, 보안 아키텍처 설계 (Rate Limit, Turnstile, JWT/TOTP, AES-GCM)
- **기술**: Kotlin, Spring Boot 3, Spring Security, Vue 3, MariaDB, Redis, AWS Lightsail, Nginx, Docker

### 기타 프로젝트

- Blice Choice 운영 및 유지보수 (2020.11 – 2022.08)
- 행복택시 인증/회원 관리 (2023.11 – 2023.12)
- 한국컴패션 비전트립 (2022.08 – 2022.11)
- Smart Fish Farm IoT (2020.04 – 2020.05)
- 개방형 검증지원 시스템 1·2차 (2019.08 – 2020.07)

---

## 기술 스택

### 포트폴리오 사이트 자체

| 분류       | 기술                                |
| ---------- | ----------------------------------- |
| 프레임워크 | React 18, TypeScript 5.6            |
| 번들러     | Vite 5                              |
| 스타일링   | Tailwind CSS 3, shadcn/ui, Radix UI |
| 차트       | Recharts                            |
| 다이어그램 | Mermaid.js                          |
| PDF 생성   | jsPDF, html2canvas                  |
| 테마       | next-themes (다크 모드)             |
| 배포       | GitHub Pages (gh-pages)             |

---

## 로컬 실행

### 사전 요구 사항

- Node.js 18 이상
- npm 또는 yarn

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (http://localhost:5173)
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 결과물 미리보기
npm run preview
```

### 특수 뷰 접근

| URL                                          | 설명                 |
| -------------------------------------------- | -------------------- |
| `http://localhost:5173/portfolio/`           | 웹 포트폴리오 (기본) |
| `http://localhost:5173/portfolio/#print`     | PDF 인쇄 모드        |
| `http://localhost:5173/portfolio/print-mono` | 흑백 인쇄 모드       |

---

## 배포

GitHub Pages에 자동 배포됩니다.

```bash
npm run deploy
```

`vite.config.ts`의 `base` 경로가 GitHub 리포지토리 이름과 일치해야 합니다.

---

## 프로젝트 구조

```
portfolio/
├── components/
│   ├── portfolio/       # 웹 포트폴리오 섹션 컴포넌트
│   ├── print/           # 컬러 인쇄 모드 컴포넌트
│   ├── print-mono/      # 흑백 인쇄 모드 컴포넌트
│   ├── diagrams/        # Mermaid 아키텍처 다이어그램
│   ├── figma/           # 이미지 처리 유틸리티
│   └── ui/              # shadcn/ui 기반 공통 컴포넌트
├── public/
│   ├── diagrams/        # .mmd 다이어그램 파일
│   └── images/          # 프로필·프로젝트 이미지, PDF
├── styles/              # 전역 스타일, 인쇄용 CSS
├── utils/               # PDF 생성 유틸리티
├── App.tsx              # 루트 컴포넌트 (뷰 모드 분기)
└── main.tsx             # 앱 진입점
```

---

## 서드파티 라이선스

- **shadcn/ui** — [MIT License](https://github.com/shadcn-ui/ui/blob/main/LICENSE.md)
- **Unsplash 이미지** — [Unsplash License](https://unsplash.com/license)
- 기타 의존성의 라이선스는 각 패키지의 `LICENSE` 파일을 참조하세요.

---

## 라이선스

이 저장소는 개인 포트폴리오 목적으로 작성되었으며, **All Rights Reserved** 조건 하에 배포됩니다.  
무단 복제, 수정, 재배포를 금지합니다. 자세한 내용은 [LICENSE](./LICENSE) 파일을 참조하세요.

---

© 2026 이세창. All Rights Reserved.
