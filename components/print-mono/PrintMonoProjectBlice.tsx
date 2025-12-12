import { ArchitectureDiagram } from "../diagrams/ArchitectureDiagram";

export function PrintMonoProjectBlice() {
  return (
    <>
      {/* 프로젝트 개요 */}
      <div className="page">
        <h2 className="print-mono-section-title">
          Project 01: 블라이스(Blice)
        </h2>

        <div className="print-section">
          <div className="flex gap-2 mb-2">
            <span className="print-mono-badge">Main Project</span>
            <span className="text-[8pt] text-slate-600">
              2021.01 - 2025.06 (4년 6개월)
            </span>
          </div>
          <h3 className="text-[12pt] font-bold mb-1">
            블라이스(Blice) 웹소설·웹툰 서비스
          </h3>
          <p className="text-[9pt] text-slate-700 mb-3">
            KT 고객사 웹소설/웹툰 콘텐츠 플랫폼의 운영 및 통합 기능 개발
          </p>

          <div className="print-grid-2">
            <div className="print-card">
              <div className="font-semibold text-[9pt] mb-1">Role</div>
              <p className="text-[8pt] text-slate-700">
                백엔드 리드 개발, 성능 개선, 결제/이벤트/쿠폰/웹툰 기능 개발,
                운영/유지보수 전반
              </p>
            </div>
            <div className="print-card">
              <div className="font-semibold text-[9pt] mb-1">핵심 성과</div>
              <ul className="text-[8pt] text-slate-700 space-y-0.5">
                <li>• 메인 페이지 2s → 300–400ms (5–6배 단축)</li>
                <li>• 정기결제/인앱 결제 신규 구축</li>
                <li>• 이벤트 캐시·쿠폰·웹툰 확장</li>
              </ul>
            </div>
          </div>

          <div className="mt-3">
            <div className="font-semibold text-[9pt] mb-1">Tech Highlights</div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[8pt]">
              <div className="flex items-center gap-1">
                <span className="print-mono-badge">Backend</span>
                <span>Java 8 · Spring Framework · MyBatis</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="print-mono-badge">Infra/DB</span>
                <span>MariaDB 10.1.32 · Redis · Kafka · NiFi · Batch</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="print-mono-badge">Frontend</span>
                <span>JSP, jQuery</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="print-mono-badge">CI/CD</span>
                <span>GitLab · Jenkins</span>
              </div>
            </div>
          </div>
        </div>

        {/* 시스템 아키텍처 */}
        <div className="print-section">
          <h3 className="print-subsection-title">시스템 아키텍처</h3>
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

          <div className="mt-4">
            <ArchitectureDiagram project="blice" className="w-full" />
          </div>
        </div>

        <div className="page-break"></div>
      </div>

      {/* 성능 개선 */}
      <div className="page">
        <h3 className="print-subsection-title">
          성능 개선: 메인 페이지 2초 → 300-400ms
        </h3>

        <div className="print-grid-2">
          <div className="print-card">
            <div className="font-semibold text-[9pt] text-red-600 mb-1">
              문제
            </div>
            <ul className="text-[8pt] space-y-1">
              <li>• 메인 페이지 응답 지연, 조회 성능 저하</li>
              <li>• NiFi 기반 10분 주기 배치 중 특정 쿼리 1분 이상 소요</li>
              <li>• 동시간대 트래픽 증가 시 메인 조회 지연 체감 확대</li>
            </ul>
          </div>
          <div className="print-card">
            <div className="font-semibold text-[9pt] text-blue-600 mb-1">
              분석
            </div>
            <ul className="text-[8pt] space-y-1">
              <li>
                • 조건 컬럼 인덱스만 사용되어 PK lookup과 정렬 비용이 누적
              </li>
              <li>
                • 보조 인덱스 탐색 → PK lookup → 삭제 반복으로 랜덤 I/O 비용
                증가
              </li>
              <li>• 실행 계획에서 Using temporary / Using filesort 발생</li>
            </ul>
          </div>
        </div>

        <div className="print-card mt-3">
          <div className="flex items-baseline justify-between gap-2 mb-1">
            <div className="font-semibold text-[9pt] text-green-600">해결</div>
            <div className="text-right">
              <span className="print-mono-badge">5-6배 성능 향상</span>
              <span className="text-[8pt] text-slate-600 ml-2">
                삭제 배치 처리 시간 안정화, 피크 시간대 지연 민감도 완화
              </span>
            </div>
          </div>
          <p className="text-[8pt] mb-2">
            <strong>복합 인덱스</strong>로 필터+정렬+PK lookup을 한 번에
            커버하도록 설계
          </p>
          <div className="bg-slate-100 p-2 rounded text-[8pt]">
            <p>• PK: test_seq · 기존 인덱스: sub_seq</p>
            <p className="text-green-600 font-semibold">
              • 추가 인덱스: (sub_seq, test_seq) · DELETE WHERE sub_seq=1 커버
            </p>
          </div>
        </div>

        <h3 className="print-subsection-title">정기결제 & 인앱 결제 연동</h3>

        <div className="print-card">
          <div className="font-semibold text-[9pt] text-red-600 mb-1">문제</div>
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

        <p className="mt-2 text-[8pt] text-slate-700">
          결제 승인·전환 알림을 Kafka 이벤트로 비동기 전파하고, 사용자 동의
          흐름과 연동
        </p>

        <div className="print-card mt-2 bg-green-50">
          <div className="font-semibold text-[9pt] text-green-600 mb-1">
            성과
          </div>
          <ul className="text-[8pt] space-y-0.5">
            <li>
              • 오전/오후 2회 결제 처리 + 실패 알림 후 재시도로 정기결제 성공률
              개선, 실패 케이스 운영 표준화
            </li>
            <li>
              • 영수증 검증 실패 이력 저장으로 오탐·중복 청구 차단 및 VOC 근거
              확보
            </li>
          </ul>
        </div>

        <h3 className="print-subsection-title">이벤트 캐시 & 웹툰 확장</h3>

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
              이벤트성 지급 자동화로 운영 비용/오류율 감소, 정산 시 구매 캐시만
              반영
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
              스키마 대규모 변경 없이 웹툰 도입/운영 안정화
            </div>
          </div>
        </div>

        <h3 className="print-subsection-title">운영 고도화 및 품질 관리</h3>

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

        <h3 className="print-subsection-title">협업 & 회고</h3>

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
