import { ArchitectureDiagram } from "../diagrams/ArchitectureDiagram";

export function PrintProjectGreen() {
  return (
    <>
      {/* 프로젝트 개요 */}
      <div className="page">
        <h2 className="print-section-title">
          📗 Project 02: 한국그린전력 홈페이지 리뉴얼
        </h2>

        {/* 개요 */}
        <div className="print-section">
          <div className="flex gap-2 mb-2">
            <span className="print-badge print-badge-green">Project 02</span>
            <span className="text-[8pt] text-slate-500">
              진행중 (2025.08 ~ 현재)
            </span>
          </div>
          <h3 className="text-[12pt] font-bold mb-1">
            한국그린전력 홈페이지 리뉴얼
          </h3>
          <p className="text-[9pt] text-slate-600 mb-3">
            CMS/사용자 API 구축 - PHP 기반 레거시 시스템을 Kotlin/Spring Boot +
            Vue 3로 재구축하고, ERP 연동 및 보안 아키텍처 설계
          </p>

          <div className="print-grid-2">
            <div className="print-card">
              <div className="font-semibold text-[9pt] mb-1">Role</div>
              <p className="text-[8pt] text-slate-600">
                백엔드 리드 개발, 인프라/보안 설계
              </p>
            </div>
            <div className="print-card">
              <div className="font-semibold text-[9pt] mb-1">프로젝트 목표</div>
              <ul className="text-[8pt] text-slate-600 space-y-0.5">
                <li>
                  • PHP 기반 홈페이지를 Kotlin/Spring Boot + Vue 3 기반으로
                  재구축
                </li>
                <li>
                  • ERP 시스템과 연동해 수주/시공 실적·시공사례를 자동 동기화
                </li>
                <li>
                  • 보안·안정성·운영 편의성을 동시에 만족하는 아키텍처 구축
                </li>
              </ul>
            </div>
          </div>

          {/* Tech Highlights */}
          <div className="mt-3">
            <div className="font-semibold text-[9pt] mb-1">Tech Highlights</div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[8pt]">
              <div className="flex items-center gap-1">
                <span className="print-badge">Backend</span>
                <span>Kotlin 2.2.x · Spring Boot 3.5.x · JPA · Security</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="print-badge">Infra/DB</span>
                <span>MariaDB 11.x · Redis 7.x · Docker · Lightsail</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="print-badge">Frontend</span>
                <span>Vue 3.5.x · TypeScript · Vite · Tailwind</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="print-badge">CI/CD</span>
                <span>GitHub Actions (Docker 빌드·배포)</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="print-badge">Monitoring</span>
                <span>Grafana · Loki</span>
              </div>
            </div>
          </div>
        </div>

        {/* 시스템 아키텍처 */}
        <div className="print-section">
          <h3 className="print-subsection-title">🏗️ 시스템 아키텍처 설계</h3>
          <div className="print-grid-3 text-[8pt]">
            <div className="print-card">
              <div className="font-semibold mb-1">백엔드</div>
              <ul className="space-y-0.5">
                <li>• Kotlin 2.2.x</li>
                <li>• Spring Boot 3.5.x</li>
                <li>• Spring Data JPA 3.5.x</li>
                <li>• Spring Security 6.5.x</li>
                <li>• Gradle 9.0.x</li>
              </ul>
            </div>
            <div className="print-card">
              <div className="font-semibold mb-1">프론트엔드</div>
              <ul className="space-y-0.5">
                <li>• Vue 3.5.x</li>
                <li>• TypeScript 5.7.x</li>
                <li>• Vite 7.x</li>
                <li>• Tailwind CSS 4.x</li>
                <li>• TailAdmin 2.x</li>
              </ul>
            </div>
            <div className="print-card">
              <div className="font-semibold mb-1">배포·인프라</div>
              <ul className="space-y-0.5">
                <li>• Docker / Compose</li>
                <li>• AWS Lightsail</li>
                <li>• Nginx</li>
                <li>• S3 + CloudFront</li>
              </ul>
            </div>
            <div className="print-card">
              <div className="font-semibold mb-1">데이터베이스</div>
              <ul className="space-y-0.5">
                <li>• MariaDB 11.8.3</li>
                <li>• Redis 7.x</li>
                <li>• ERP 스냅샷 동기화</li>
              </ul>
            </div>
            <div className="print-card">
              <div className="font-semibold mb-1">모니터링</div>
              <ul className="space-y-0.5">
                <li>• Grafana</li>
                <li>• Loki / Promtail</li>
              </ul>
            </div>
            <div className="print-card">
              <div className="font-semibold mb-1">CI/CD</div>
              <ul className="space-y-0.5">
                <li>• GitHub Actions</li>
                <li>• Docker 빌드·배포</li>
              </ul>
            </div>
          </div>

          {/* 아키텍처 설명 */}
          <div className="print-card mt-3 bg-slate-50">
            <div className="text-[8pt]">
              <strong>AWS Lightsail 컨테이너 서비스:</strong> 모든
              애플리케이션(사용자 API, 관리자 API, ERP 배치, Redis, MariaDB,
              모니터링 스택)이 단일 컨테이너 서버에서 Docker로 운영됩니다.
              <br />
              외부 트래픽은 AWS WAF → CloudFront → Nginx를 거쳐 각 서비스로
              라우팅됩니다.
            </div>
          </div>

          {/* 아키텍처 다이어그램 */}
          <div className="mt-4">
            <ArchitectureDiagram project="kogreen" className="w-full" />
          </div>
        </div>

        <div className="page-break"></div>
      </div>

      {/* 보안 설계 */}
      <div className="page">
        <h3 className="print-subsection-title">🔐 보안 및 데이터 보호 설계</h3>

        <div className="print-grid-3 text-[8pt]">
          <div className="print-card">
            <div className="font-semibold text-red-600 mb-1">
              Rate Limit & IP 차단
            </div>
            <ul className="space-y-0.5">
              <li>• 엔드포인트별 위험 등급(저·중·고) 정의 후 한도 차등 적용</li>
              <li>
                • Rate limit 반복 초과나 필수 헤더 누락 패턴이 임계치를 넘으면
                해당 IP 자동 차단
              </li>
            </ul>
          </div>
          <div className="print-card">
            <div className="font-semibold text-orange-600 mb-1">
              Cloudflare Turnstile
            </div>
            <ul className="space-y-0.5">
              <li>
                • 크리티컬·이상 패턴이 감지된 POST/PUT/DELETE 요청에 Turnstile
                챌린지 요구
              </li>
              <li>
                • 검증 성공 시 단일 사용·짧은 만료시간의 내부 챌린지 토큰 발급
              </li>
              <li>• Siteverify API로 Turnstile 응답 토큰을 검증</li>
            </ul>
          </div>
          <div className="print-card">
            <div className="font-semibold text-blue-600 mb-1">
              문의 상세 접근 토큰
            </div>
            <ul className="space-y-0.5">
              <li>
                • 문의 상세 진입 시, 비밀번호 일치 시에만 해당 문의에 한정된
                접근 토큰 발급
              </li>
              <li>
                • 토큰 유효기간 동안 비밀번호 재입력 없이 상세/조회/수정/삭제
                가능
              </li>
              <li>• UX 개선 + 불필요한 비밀번호 전송 감소</li>
            </ul>
          </div>
          <div className="print-card">
            <div className="font-semibold text-purple-600 mb-1">
              액션 토큰 + 위변조 방지
            </div>
            <ul className="space-y-0.5">
              <li>
                • 모든 변경 요청에 X-Action-Token, X-Request-Id (UUID),
                X-Payload-Hash 필수
              </li>
              <li>
                • 서버는 Redis에 저장된 정보와 비교하여 페이로드 변조 여부, 동일
                UUID 재사용 여부 검증
              </li>
              <li>• 재전송·중간자 공격 방어 레이어 확보</li>
            </ul>
          </div>
          <div className="print-card">
            <div className="font-semibold text-green-600 mb-1">관리자 인증</div>
            <ul className="space-y-0.5">
              <li>• JWT Access + Refresh Token Rotation 구조</li>
              <li>
                • Refresh Token은 HttpOnly·Secure Cookie로만 저장 (XSS 방어)
              </li>
              <li>• TOTP(Google Authenticator) 기반 2단계 인증</li>
              <li>• 비밀번호 검증: Bcrypt</li>
            </ul>
          </div>
          <div className="print-card">
            <div className="font-semibold text-teal-600 mb-1">
              데이터 암호화 & 캐시
            </div>
            <ul className="space-y-0.5">
              <li>
                • 개인정보(이메일, 전화번호 등)는 AES-GCM 암호화 + 검색용 해시
                분리 저장
              </li>
              <li>
                • 자주 조회되는 정적 텍스트(회사 정보, 코드 테이블 등)는 Redis에
                캐싱
              </li>
            </ul>
          </div>
        </div>

        {/* 보안 플로우 다이어그램 */}
        <h4 className="text-[10pt] font-semibold mt-4 mb-2">
          보안 플로우 다이어그램
        </h4>

        {/* 관리자 로그인 인증 플로우 */}
        <div className="print-card mb-2">
          <div className="font-semibold text-[9pt] mb-1">
            관리자 로그인 인증 플로우
          </div>
          <div className="flex items-center gap-2 text-[7pt] overflow-x-auto">
            <div className="bg-blue-100 px-2 py-1 rounded text-center min-w-[60px]">
              <div className="text-[6pt] text-slate-500">시작</div>
              ID·PW 입력
            </div>
            <span>→</span>
            <div className="bg-slate-100 px-2 py-1 rounded text-center min-w-[80px]">
              <div className="text-[6pt] text-slate-500">보안 검증</div>
              IP 차단/Rate Limit
            </div>
            <span>→</span>
            <div className="bg-slate-100 px-2 py-1 rounded text-center min-w-[70px]">
              <div className="text-[6pt] text-slate-500">1차 인증</div>
              Bcrypt 검증
            </div>
            <span>→</span>
            <div className="bg-slate-100 px-2 py-1 rounded text-center min-w-[60px]">
              <div className="text-[6pt] text-slate-500">2차 인증</div>
              TOTP 검증
            </div>
            <span>→</span>
            <div className="bg-green-100 px-2 py-1 rounded text-center min-w-[70px]">
              <div className="text-[6pt] text-slate-500">완료</div>
              JWT 토큰 발급
            </div>
          </div>
        </div>

        {/* 사용자 API Rate Limit 플로우 */}
        <div className="print-card mb-2">
          <div className="font-semibold text-[9pt] mb-1">
            사용자 API Rate Limit 플로우
          </div>
          <div className="flex items-center gap-2 text-[7pt] overflow-x-auto">
            <div className="bg-blue-100 px-2 py-1 rounded text-center min-w-[60px]">
              <div className="text-[6pt] text-slate-500">요청</div>
              API 요청
            </div>
            <span>→</span>
            <div className="bg-slate-100 px-2 py-1 rounded text-center min-w-[80px]">
              <div className="text-[6pt] text-slate-500">차단 확인</div>
              IP 차단 여부
            </div>
            <span>→</span>
            <div className="bg-slate-100 px-2 py-1 rounded text-center min-w-[80px]">
              <div className="text-[6pt] text-slate-500">카운터</div>
              IP/엔드포인트 증가
            </div>
            <span>→</span>
            <div className="bg-slate-100 px-2 py-1 rounded text-center min-w-[70px]">
              <div className="text-[6pt] text-slate-500">한도 판정</div>
              초과 여부 확인
            </div>
            <span>→</span>
            <div className="bg-green-100 px-2 py-1 rounded text-center min-w-[60px]">
              <div className="text-[6pt] text-slate-500">응답</div>
              백엔드 처리
            </div>
          </div>
        </div>

        {/* 액션 토큰 + 위변조 방지 플로우 */}
        <div className="print-card mb-2">
          <div className="font-semibold text-[9pt] mb-1">
            액션 토큰 + 위변조 방지 플로우
          </div>
          <div className="flex items-center gap-2 text-[7pt] overflow-x-auto">
            <div className="bg-blue-100 px-2 py-1 rounded text-center min-w-[70px]">
              <div className="text-[6pt] text-slate-500">진입</div>
              변경 페이지
            </div>
            <span>→</span>
            <div className="bg-slate-100 px-2 py-1 rounded text-center min-w-[90px]">
              <div className="text-[6pt] text-slate-500">토큰 발급</div>
              Action/Request/Hash
            </div>
            <span>→</span>
            <div className="bg-slate-100 px-2 py-1 rounded text-center min-w-[70px]">
              <div className="text-[6pt] text-slate-500">제출</div>
              3개 헤더 + 데이터
            </div>
            <span>→</span>
            <div className="bg-slate-100 px-2 py-1 rounded text-center min-w-[80px]">
              <div className="text-[6pt] text-slate-500">검증</div>
              Redis 저장값 비교
            </div>
            <span>→</span>
            <div className="bg-green-100 px-2 py-1 rounded text-center min-w-[60px]">
              <div className="text-[6pt] text-slate-500">완료</div>
              DB 변경 수행
            </div>
          </div>
        </div>

        {/* 문의 상세 접근 토큰 플로우 */}
        <div className="print-card">
          <div className="font-semibold text-[9pt] mb-1">
            문의 상세 접근 토큰 플로우
          </div>
          <div className="flex items-center gap-2 text-[7pt] overflow-x-auto">
            <div className="bg-blue-100 px-2 py-1 rounded text-center min-w-[60px]">
              <div className="text-[6pt] text-slate-500">등록</div>
              문의 폼 제출
            </div>
            <span>→</span>
            <div className="bg-slate-100 px-2 py-1 rounded text-center min-w-[80px]">
              <div className="text-[6pt] text-slate-500">토큰 생성</div>
              문의 전용 토큰
            </div>
            <span>→</span>
            <div className="bg-slate-100 px-2 py-1 rounded text-center min-w-[80px]">
              <div className="text-[6pt] text-slate-500">발송</div>
              URL 이메일/문자
            </div>
            <span>→</span>
            <div className="bg-slate-100 px-2 py-1 rounded text-center min-w-[90px]">
              <div className="text-[6pt] text-slate-500">검증</div>
              유효성·만료·fingerprint
            </div>
            <span>→</span>
            <div className="bg-green-100 px-2 py-1 rounded text-center min-w-[70px]">
              <div className="text-[6pt] text-slate-500">완료</div>
              문의 상세 조회
            </div>
          </div>
        </div>

        <h3 className="print-subsection-title">🤖 AI 도구 활용</h3>

        <div className="print-card bg-purple-50 mb-3">
          <p className="text-[9pt] italic text-slate-600 mb-2">
            "VS Code Copilot, Claude Code 4.5, Claude Opus 4.5를 '보조
            개발자'처럼 활용해 반복적인 코드, 테스트 코드 초안, 리팩터링
            아이디어를 빠르게 생성했습니다."
          </p>
          <div className="flex gap-4 text-[8pt]">
            <div className="flex items-center gap-1">
              <span>🤖</span>
              <span>
                <strong>VS Code Copilot</strong> - 코드 자동완성
              </span>
            </div>
            <div className="flex items-center gap-1">
              <span>🧠</span>
              <span>
                <strong>Claude Code 4.5</strong> - 복잡한 로직 설계
              </span>
            </div>
            <div className="flex items-center gap-1">
              <span>💡</span>
              <span>
                <strong>Claude Opus 4.5</strong> - 아키텍처 리뷰
              </span>
            </div>
          </div>
        </div>

        <div className="print-grid-2">
          <div className="print-card">
            <div className="font-semibold text-[9pt] text-green-600 mb-1">
              ✅ 직접 설계·구현한 영역
            </div>
            <ul className="text-[8pt] space-y-0.5">
              <li>• 보안·인증 아키텍처 설계</li>
              <li>• 핵심 도메인 데이터 모델 설계</li>
              <li>• 인프라·배포 파이프라인 구성</li>
              <li>• 핵심 비즈니스 로직 구현</li>
            </ul>
            <p className="text-[7pt] text-green-600 mt-2 italic">
              → 서비스 안정성과 보안, 비즈니스 규칙에 직결되는 부분은 직접
              설계·구현 후 검증
            </p>
          </div>
          <div className="print-card">
            <div className="font-semibold text-[9pt] text-blue-600 mb-1">
              🤖 AI 활용 영역
            </div>
            <ul className="text-[8pt] space-y-0.5">
              <li>• 반복적인 CRUD·DTO·Mapper 코드 생성</li>
              <li>• 테스트 코드·Mock 초안 작성</li>
              <li>• 리팩터링 아이디어·대안 코드 제안</li>
              <li>• 기술 문서·API 설명 초안 작성</li>
            </ul>
            <p className="text-[7pt] text-blue-600 mt-2 italic">
              → AI가 생성한 코드는 테스트·리뷰를 거쳐 필요한 부분만 채택하고,
              여러 차례 리팩터링을 반복하며 구조를 단순화한 뒤 반영
            </p>
          </div>
        </div>

        <div className="print-card mt-3 bg-slate-50 text-center">
          <p className="text-[9pt]">
            결과적으로,{" "}
            <strong>
              반복 작업 시간을 줄여 전체 개발 공수를 약 40~60% 단축
            </strong>
            하면서도 설계와 품질에 대한 최종 책임은 직접 지는 개발 방식을
            유지했습니다.
          </p>
          <p className="text-[8pt] text-slate-500 mt-1">
            테스트와 코드 리뷰를 통해 품질과 일관성을 확보하며 AI를 효과적으로
            활용했습니다.
          </p>
        </div>

        <div className="page-break"></div>
      </div>
    </>
  );
}
