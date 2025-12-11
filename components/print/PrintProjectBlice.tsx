import { ArchitectureDiagram } from "../diagrams/ArchitectureDiagram";

export function PrintProjectBlice() {
  return (
    <>
      {/* 프로젝트 개요 */}
      <div className="page">
        <h2 className="print-section-title">📘 Project 01: 블라이스(Blice)</h2>

        {/* 개요 */}
        <div className="print-section">
          <div className="flex gap-2 mb-2">
            <span className="print-badge print-badge-primary">
              Main Project
            </span>
            <span className="text-[8pt] text-slate-500">
              2021.01 - 2025.06 (4년 6개월)
            </span>
          </div>
          <h3 className="text-[12pt] font-bold mb-1">
            블라이스(Blice) 웹소설·웹툰 서비스
          </h3>
          <p className="text-[9pt] text-slate-600 mb-3">
            KT 고객사 웹소설/웹툰 콘텐츠 플랫폼의 운영 및 통합 기능 개발
          </p>

          <div className="print-grid-2">
            <div className="print-card">
              <div className="font-semibold text-[9pt] mb-1">Role</div>
              <p className="text-[8pt] text-slate-600">
                백엔드 리드 개발, 성능 개선, 결제/이벤트/쿠폰/웹툰 기능 개발,
                운영/유지보수 전반
              </p>
            </div>
            <div className="print-card">
              <div className="font-semibold text-[9pt] mb-1">핵심 성과</div>
              <ul className="text-[8pt] text-slate-600 space-y-0.5">
                <li>• 메인 페이지 2s → 300–400ms (5–6배 단축)</li>
                <li>• 정기결제/인앱 결제 신규 구축</li>
                <li>• 이벤트 캐시·쿠폰·웹툰 확장</li>
              </ul>
            </div>
          </div>

          {/* Tech Highlights */}
          <div className="mt-3">
            <div className="font-semibold text-[9pt] mb-1">Tech Highlights</div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[8pt]">
              <div className="flex items-center gap-1">
                <span className="print-badge">Backend</span>
                <span>Java 8 · Spring Framework · MyBatis</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="print-badge">Infra/DB</span>
                <span>MariaDB 10.1.32 · Redis · Kafka · NiFi · Batch</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="print-badge">Frontend</span>
                <span>JSP, jQuery</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="print-badge">CI/CD</span>
                <span>GitLab · Jenkins</span>
              </div>
            </div>
          </div>
        </div>

        {/* 시스템 아키텍처 */}
        <div className="print-section">
          <h3 className="print-subsection-title">🏗️ 시스템 아키텍처</h3>
          <div className="print-grid-3 text-[8pt]">
            <div className="print-card">
              <div className="font-semibold mb-1">백엔드</div>
              <ul className="space-y-0.5">
                <li>• Java 8</li>
                <li>• Spring Framework</li>
                <li>• MyBatis</li>
              </ul>
            </div>
            <div className="print-card">
              <div className="font-semibold mb-1">메시징/배치</div>
              <ul className="space-y-0.5">
                <li>• Apache Kafka (3대)</li>
                <li>• Apache NiFi</li>
                <li>• Spring Batch</li>
              </ul>
            </div>
            <div className="print-card">
              <div className="font-semibold mb-1">데이터베이스</div>
              <ul className="space-y-0.5">
                <li>• MariaDB 10.1.32</li>
                <li>• 메인/통계 DB 분리</li>
                <li>• Redis (3대)</li>
              </ul>
            </div>
            <div className="print-card">
              <div className="font-semibold mb-1">프론트엔드</div>
              <ul className="space-y-0.5">
                <li>• JSP</li>
                <li>• jQuery</li>
              </ul>
            </div>
            <div className="print-card">
              <div className="font-semibold mb-1">인프라/보안</div>
              <ul className="space-y-0.5">
                <li>• KT Cloud WAF Pro</li>
                <li>• 로드밸런서</li>
                <li>• WEB/WAS 이중화</li>
              </ul>
            </div>
            <div className="print-card">
              <div className="font-semibold mb-1">CI/CD</div>
              <ul className="space-y-0.5">
                <li>• GitLab</li>
                <li>• Jenkins</li>
              </ul>
            </div>
          </div>

          {/* 아키텍처 다이어그램 */}
          <div className="mt-4">
            <ArchitectureDiagram project="blice" className="w-full" />
          </div>
        </div>

        <div className="page-break"></div>
      </div>

      {/* 성능 개선 */}
      <div className="page">
        <h3 className="print-subsection-title">
          ⚡ 성능 개선: 메인 페이지 2초 → 300-400ms
        </h3>

        <div className="print-grid-2">
          <div className="print-card">
            <div className="font-semibold text-[9pt] text-red-600 mb-1">
              ☠️ 문제 상황
            </div>
            <ul className="text-[8pt] space-y-1">
              <li>
                • 메인 페이지 체감 속도가 지연되어왔고, 특정 시점 이후 확연히
                심화됨
              </li>
              <li>
                • NiFi가 관리하는 10분 주기의 배치 중 삭제 쿼리가 1분 이상 소요
              </li>
              <li>• 동시간대 트래픽과 맞물려 메인 조회도 지연</li>
            </ul>
          </div>
          <div className="print-card">
            <div className="font-semibold text-[9pt] text-blue-600 mb-1">
              📚 분석
            </div>
            <ul className="text-[8pt] space-y-1">
              <li>
                • 삭제 조건이 PK가 아닌 보조 인덱스 컬럼이었고, 실행계획상
                풀스캔 수행
              </li>
              <li>
                • "보조 인덱스 탐색 → PK lookup → 삭제" 절차에서 대상 건수 증가
                시 비용 급증
              </li>
              <li>• 메인 쿼리도 Using temporary; Using filesort 발생</li>
            </ul>
          </div>
        </div>

        <div className="print-card mt-3">
          <div className="font-semibold text-[9pt] text-green-600 mb-1">
            💡 해결
          </div>
          <p className="text-[8pt] mb-2">
            <strong>복합 인덱스</strong>로 필터+정렬+PK lookup을 한 번에
            커버하도록 설계
          </p>
          <div className="bg-slate-100 p-2 rounded text-[8pt]">
            <p>• PK: test_seq</p>
            <p>• 보조 인덱스: sub_seq</p>
            <p>• 문제 쿼리: DELETE FROM remove_test_table WHERE sub_seq = 1</p>
            <p className="text-green-600 font-semibold">
              • 추가 인덱스: (sub_seq, test_seq) → 보조 인덱스 단계에서 PK까지
              커버링
            </p>
          </div>
          <div className="mt-2 text-center">
            <span className="print-badge print-badge-green">
              ✅ 5-6배 성능 향상
            </span>
            <span className="text-[8pt] text-slate-500 ml-2">
              삭제 배치 처리 시간 안정화, 피크 시간대 지연 민감도 완화
            </span>
          </div>
        </div>

        {/* 정기결제 & 인앱 결제 */}
        <h3 className="print-subsection-title">💳 정기결제 & 인앱 결제 연동</h3>

        <div className="print-card">
          <div className="font-semibold text-[9pt] text-red-600 mb-1">
            ☠️ 문제
          </div>
          <ul className="text-[8pt] space-y-0.5">
            <li>• 신규 정책(셀렉트 이용권/캐시) 도입으로 정기결제 필요</li>
            <li>• 모바일 인앱 결제 연동 요구</li>
            <li>
              • 느린결제/실패 재시도, 증액·전환 시 사용자 동의 절차 등 복잡한
              시나리오 대응 필요
            </li>
          </ul>
        </div>

        <div className="print-grid-2 mt-2">
          <div className="print-card">
            <div className="font-semibold text-[9pt] mb-1">
              LUPIN + BillKey 정기결제
            </div>
            <ul className="text-[8pt] space-y-0.5">
              <li>• 오전 1회/오후 1회 2회 결제 처리</li>
              <li>• 오전 실패 고객에게 알림 발송 후 오후 재시도</li>
              <li>• 오후 재시도까지 실패 시 정기결제 해지 처리</li>
            </ul>
          </div>
          <div className="print-card">
            <div className="font-semibold text-[9pt] mb-1">
              Google In-App Billing
            </div>
            <ul className="text-[8pt] space-y-0.5">
              <li>• playToken + packageName + productId 기반 영수증 검증</li>
              <li>• 검증 실패 시 결제 프로세스 중단 & 실패 이력 저장</li>
              <li>• VOC 대응 근거 확보</li>
            </ul>
          </div>
        </div>

        <div className="print-card mt-2">
          <div className="font-semibold text-[9pt] mb-1">
            Kafka 기반 비동기 알림
          </div>
          <p className="text-[8pt]">
            결제 증액·전환 알림을 Kafka 이벤트로 비동기 전파. 사용자 동의
            프로세스(다크패턴 방지) 연결.
          </p>
        </div>

        <div className="print-card mt-2 bg-green-50">
          <div className="font-semibold text-[9pt] text-green-600 mb-1">
            ✅ 성과
          </div>
          <ul className="text-[8pt] space-y-0.5">
            <li>
              • 이중 런(오전/오후) 전략으로 정기결제 성공률 소폭 상승, 실패
              케이스 관리 표준화
            </li>
            <li>• 영수증 검증 실패 건 오탐/중복 청구 방지</li>
            <li>• CS 대응 속도 향상</li>
          </ul>
        </div>

        <h3 className="print-subsection-title">🎁 이벤트 캐시 & 웹툰 확장</h3>

        <div className="print-grid-2">
          <div className="print-card">
            <div className="font-semibold text-[9pt] mb-1">
              이벤트 캐시 자동 지급 & 정산 제외
            </div>
            <ul className="text-[8pt] space-y-0.5">
              <li>• 구분값 추가로 이벤트 캐시와 구매 캐시 명확히 분리</li>
              <li>• 즉시 발송: 관리자 서버가 즉시 처리</li>
              <li>• 예약 발송: 배치가 예약 시각 도달 시 처리</li>
              <li>• 정산 단계에서 이벤트 캐시 제외 규칙 고정 적용</li>
            </ul>
            <div className="mt-1 text-[8pt] text-green-600">
              ✅ 이벤트성 지급 자동화로 운영 비용/오류율 감소, 정산 시 구매
              캐시만 반영
            </div>
          </div>
          <div className="print-card">
            <div className="font-semibold text-[9pt] mb-1">
              웹툰 시스템 신규 구축
            </div>
            <ul className="text-[8pt] space-y-0.5">
              <li>• 기존 이용권 타입이 최대 2글자로 설계됨</li>
              <li>• 단일 DB 환경 + 온라인 DDL 불가 + 무중단 운영 요구</li>
              <li>
                • 2글자 타입 유지 결정, 통계·정산은 이용권 타입 기준으로
                웹소설/웹툰 구분
              </li>
            </ul>
            <div className="mt-1 text-[8pt] text-green-600">
              ✅ 스키마 대규모 변경 없이 웹툰 도입/운영 안정화
            </div>
          </div>
        </div>

        <h3 className="print-subsection-title">⚙️ 운영 고도화 및 품질 관리</h3>

        <div className="print-grid-3 text-[8pt]">
          <div className="print-card">
            <div className="font-semibold mb-1">게시판 통합 & 마이그레이션</div>
            <ul className="space-y-0.5">
              <li>• 신규 테이블 먼저 생성</li>
              <li>• 1차 마이그레이션 후 배포</li>
              <li>• 증분 데이터 추가 마이그레이션</li>
            </ul>
          </div>
          <div className="print-card">
            <div className="font-semibold mb-1">웹툰 표지 이미지 리사이징</div>
            <ul className="space-y-0.5">
              <li>• 단일 이미지 확대 표시 퀄리티 저하</li>
              <li>• 리사이징 방식 개선으로 체감 화질 개선</li>
            </ul>
          </div>
          <div className="print-card">
            <div className="font-semibold mb-1">기다무 & 쿠폰/모바일 UI</div>
            <ul className="space-y-0.5">
              <li>• 기다리면무료 실행 딜레이 보완</li>
              <li>• 분산된 쿠폰 등록 화면 통합</li>
            </ul>
          </div>
          <div className="print-card">
            <div className="font-semibold mb-1">작품 예약 공개 배치 안정화</div>
            <ul className="space-y-0.5">
              <li>• 후속 삭제 단계에서 데드락 발생 → 롤백</li>
              <li>• 예약 공개는 chunk 기반, 후속 삭제는 분리</li>
            </ul>
          </div>
          <div className="print-card">
            <div className="font-semibold mb-1">
              엑셀 다운로드/업로드 최적화
            </div>
            <ul className="space-y-0.5">
              <li>• 다운로드: SXSSFWorkbook(스트리밍)</li>
              <li>• 업로드: SAX 방식으로 메모리 최소화</li>
            </ul>
          </div>
          <div className="print-card">
            <div className="font-semibold mb-1">릴리즈 & 품질 관리</div>
            <ul className="space-y-0.5">
              <li>• GitLab → Jenkins CI/CD</li>
              <li>• 롤백 시 직전 브랜치 재빌드</li>
            </ul>
          </div>
        </div>

        <h3 className="print-subsection-title">💬 협업 & 회고</h3>

        <div className="print-grid-2 text-[8pt]">
          <div className="print-card">
            <div className="font-semibold mb-1">협업 방식</div>
            <ul className="space-y-0.5">
              <li>
                • 고객사 용어가 내부 정의와 다른 경우가 잦아, 반복 확인을 통해
                의미를 확정
              </li>
              <li>• Redmine 일감/댓글에 히스토리를 상세 기록</li>
              <li>• 온/오프라인 회의를 통해 일감 단위로 신속 합의</li>
            </ul>
          </div>
          <div className="print-card">
            <div className="font-semibold mb-1">회고</div>
            <ul className="space-y-0.5">
              <li>• 분석/설계의 우선순위: 예외/장애 시나리오를 먼저 설계</li>
              <li>
                • 수익 직결 기능(결제 등)은 꼼꼼한 설계와 지속 모니터링 필수
              </li>
              <li>• 성능 개선은 전/후 지표로 증명</li>
              <li>• 작은 의문도 즉시 확인하고 용어/정책을 명확히</li>
            </ul>
          </div>
        </div>

        <div className="page-break"></div>
      </div>
    </>
  );
}
