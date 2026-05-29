# 한빛인테리어 (Hanvit Interior)

> 공간에 따뜻한 빛을 담는 한빛인테리어 웹사이트

**Domain:** https://interiorhv.com  
**Repository:** https://github.com/humanpear/hanvit

---

## 📋 프로젝트 개요

한빛인테리어는 인테리어 시공 업체를 위한 **풀스택 웹 애플리케이션**입니다. 

고객을 위한 **포트폴리오 전시 페이지**와 관리자를 위한 **통합 관리 시스템**으로 구성되어 있으며, 실시간 데이터 관리 및 Kakao Maps API를 통한 위치 기반 서비스를 제공합니다.

### 🎯 핵심 기능

#### 👥 고객 페이지
- 🖼️ **인테리어 포트폴리오 전시** - 시공 사례와 이미지 갤러리
- 📍 **Kakao Maps 연동** - 매장 위치 표시 및 길찾기
- 📝 **상담 예약 신청** - 다음 우편번호 API를 활용한 주소 입력
- 🎨 **다크/라이트 모드** - 테마 전환 기능

#### ⚙️ 관리자 페이지 (Admin Dashboard)
- 🎯 **인테리어 프로젝트 관리**
  - 시공 사례 추가/수정/삭제
  - 다중 이미지 업로드 지원 (자동 압축)
  - 프로젝트 정렬 및 필터링
  
- 👤 **상담 신청 관리**
  - 고객 문의 리스트 조회
  - 상담 상태 업데이트 (신청/진행중/완료)
  - 고객 정보 및 요구사항 기록
  
- 📊 **데이터 테이블**
  - TanStack React Table을 활용한 고급 테이블 기능
  - 정렬, 필터링, 페이지네이션
  - 대량 작업 지원

---

## 🛠️ 기술 스택

### Frontend
| 기술 | 설명 |
|------|------|
| **Next.js 16** | React 풀스택 프레임워크 |
| **React 19** | UI 라이브러리 |
| **TypeScript** | 타입 안전성 |
| **Tailwind CSS** | 유틸리티 기반 스타일링 |
| **Radix UI** | 접근성 높은 UI 컴포넌트 |
| **shadcn/ui** | Radix UI 기반 컴포넌트 라이브러리 |

### State & Data Management
| 기술 | 설명 |
|------|------|
| **Supabase** | PostgreSQL 기반 백엔드 & 실시간 DB |
| **React Hook Form** | 폼 상태 관리 |
| **TanStack React Table** | 고급 테이블 UI |

### 추가 라이브러리
| 기술 | 설명 |
|------|------|
| **Kakao Maps SDK** | 지도 서비스 |
| **Daum Postcode** | 주소 검색 |
| **Swiper** | 이미지 캐러셀 |
| **browser-image-compression** | 클라이언트 이미지 압축 |
| **Sonner** | 토스트 알림 |
| **Lucide React** | 아이콘 라이브러리 |

---

## 📦 프로젝트 구조

```
hanvit/
├── app/
│   ├── (main)/              # 고객용 페이지
│   ├── admin/               # 관리자 대시보드
│   ├── api/                 # API 라우트
│   ├── layout.tsx           # 루트 레이아웃
│   └── globals.css          # 글로벌 스타일
├── components/              # 재사용 가능한 React 컴포넌트
├── features/                # 기능별 모듈
├── hooks/                   # 커스텀 React 훅
├── lib/                     # 유틸리티 함수
├── types/                   # TypeScript 타입 정의
├── public/                  # 정적 자산
└── package.json
```

---

## 🎨 주요 특징

### 1️⃣ **반응형 디자인**
- 모든 디바이스에서 최적화된 UI/UX
- Tailwind CSS를 활용한 모바일-퍼스트 설계

### 2️⃣ **다크 모드 지원**
- `next-themes`를 활용한 테마 전환
- 사용자 선호도 자동 저장

### 3️⃣ **SEO 최적화**
- Next.js 메타데이터 API를 통한 동적 메타 태그
- Open Graph 설정
- Naver 웹마스터 검증

### 4️⃣ **성능 최적화**
- 이미지 자동 압축 (browser-image-compression)
- Next.js 자동 코드 분할
- Vercel 배포로 CDN 가속

### 5️⃣ **접근성 (A11y)**
- Radix UI 기반 컴포넌트로 WCAG 준수
- 시맨틱 HTML 마크업

---

## 🚀 시작하기

### 사전 요구사항
- Node.js 18+ 
- npm 또는 yarn

### 개발 환경 설정

```bash
# 1. 저장소 클론
git clone https://github.com/humanpear/hanvit.git
cd hanvit

# 2. 의존성 설치
npm install

# 3. 환경 변수 설정
# .env.local 파일 생성 (Supabase 키 등)
cp .env.example .env.local

# 4. 개발 서버 실행
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

### 빌드 & 배포

```bash
# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

---

## 📸 스크린샷

### 홈페이지
<img width="2560" height="1440" alt="image" src="https://github.com/user-attachments/assets/19259474-6628-4868-beef-3d8cee1983f7" />

### 포트폴리오 슬라이드
<img width="400" height="225" alt="슬라이드" src="https://github.com/user-attachments/assets/c67fa4c8-6166-45d0-a879-4a59d0d443ee" />

### 포트폴리오 게시판
<img width="400" height="225" alt="포트폴리오" src="https://github.com/user-attachments/assets/633c022d-b090-40fd-98bf-7eec85f5a1a3" />

### 견적 문의
<img width="2560" height="1440" alt="image" src="https://github.com/user-attachments/assets/4d5ecdf0-091d-415d-844e-6c422806245e" />

### 관리자 로그인 페이지
<img width="2554" height="1261" alt="image" src="https://github.com/user-attachments/assets/e7126e07-a1b5-4e39-9077-36c943bc6e8e" />

### 관리자 - 견적 문의 관리
<img width="2550" height="1262" alt="image" src="https://github.com/user-attachments/assets/8a27816f-8cf7-46f7-93ff-fd95603075a3" />

### 관리자 - 슬라이드 이미지 관리
<img width="400" height="198" alt="슬라이드 이미지 관리" src="https://github.com/user-attachments/assets/ee8d05b5-8c69-4dda-9396-3831f6e2cf08" />

### 관리자 - 포트폴리오 관리
<img width="400" height="198" alt="포트폴리오 관리" src="https://github.com/user-attachments/assets/be425be5-69fb-4814-850b-06ad88ebc2c3" />

---

## 💡 개발 내용 (포트폴리오 포인트)

### 🔐 백엔드 통합
- **Supabase**를 활용한 PostgreSQL 데이터베이스 연동
- 서버 사이드 데이터 페칭과 실시간 업데이트

### 📊 복잡한 UI 구현
- **TanStack React Table** - 대규모 데이터 테이블 관리
- **React Hook Form** - 복잡한 폼 상태 관리

### 🗺️ 외부 API 통합
- **Kakao Maps API** - 지도 표시 및 상호작용
- **Daum Postcode API** - 주소 검색 자동화

### 📱 고급 기능
- 클라이언트 사이드 이미지 압축 및 최적화
- 무한 스크롤 및 캐러셀 UI (Swiper)

### 🎯 모던 스택
- **TypeScript** - 타입 안전성
- **App Router** - Next.js 13+ 최신 라우팅
- **Tailwind CSS** - 효율적인 스타일링

---

## 🌐 배포

**Live URL:** https://hanvit-red.vercel.app  
**배포 플랫폼:** Vercel  
**도메인:** https://interiorhv.com

---

## 📄 라이선스

MIT License

---

## 📧 문의
pibmaru@gmail.com
GitHub Issues를 통해 버그 리포트와 기능 요청을 받습니다.

**개발자:** [humanpear](https://github.com/humanpear)  
**웹사이트:** https://interiorhv.com
