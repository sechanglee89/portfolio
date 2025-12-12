export function PrintMonoProfile() {
  const skills = {
    Backend: [
      "Java",
      "Kotlin",
      "Spring Boot",
      "Spring Security",
      "Spring Batch",
      "Spring Data JPA",
      "MyBatis",
    ],
    Database: ["MariaDB", "Oracle", "Redis", "SQL 튜닝", "인덱스 설계"],
    "Infra/DevOps": [
      "Docker",
      "Nginx",
      "AWS Lightsail",
      "AWS S3/CDN",
      "Jenkins CI/CD",
      "Git",
      "Kafka",
      "Apache NiFi",
    ],
    Security: [
      "JWT (Token Rotation)",
      "TOTP",
      "Bcrypt",
      "Cloudflare Turnstile",
      "Rate Limit",
      "HMAC-SHA256",
    ],
    Frontend: [
      "JSP",
      "JavaScript",
      "jQuery",
      "Vue 3",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
    ],
    "Monitoring/연계": [
      "Grafana",
      "Loki/Promtail",
      "LUPIN",
      "Google In-App Billing",
      "PASS",
    ],
  };

  return (
    <div className="page">
      <h2 className="print-mono-section-title">프로필 & 요약</h2>

      <div className="print-section">
        <div className="text-[9pt] leading-relaxed space-y-2">
          <p>
            Java/Spring 기반 <strong>백엔드 경력 7년차</strong> 개발자로서, 웹
            서비스의 성능·결제·보안을 중심으로 안정적인 서비스 운영과 아키텍처
            고도화를 담당해 왔습니다.
          </p>
          <p>
            2021년 1월부터 2025년 6월까지는{" "}
            <strong>블라이스 웹서비스의 운영 및 통합 기능 개발</strong>을
            주도하며, SQL 튜닝과 인덱스 설계를 통해 주요 쿼리·배치 처리 속도를{" "}
            <strong>최대 5~6배까지 개선</strong>하고, 정기결제·인앱 결제 연동 및
            Kafka 기반 알림 시스템을 설계·구현해 서비스 안정성과 확장성을
            높였습니다.
          </p>
          <p>
            최근에는{" "}
            <strong>한국그린전력 홈페이지 리뉴얼 프로젝트에서 1인으로</strong>{" "}
            사용자 백엔드, 관리자 화면·백엔드, 배치, AWS 인프라 구성, 보안
            설계(Rate Limit, Turnstile, JWT/TOTP, AES-GCM)를 엔드투엔드로
            설계·구현하며 전체 흐름을 책임지고 있습니다.
          </p>
        </div>
      </div>

      <div className="print-section">
        <h3 className="print-subsection-title">Core Competencies</h3>
        <div className="print-grid-2">
          <div className="print-card">
            <ul className="print-list">
              <li>SQL 튜닝·인덱스 설계 (5~6배 성능 개선)</li>
              <li>결제/인앱 결제 설계 및 정기결제·영수증 검증</li>
              <li>Kafka 기반 비동기 이벤트·알림 아키텍처 설계</li>
              <li>Spring Batch 배치 설계·운영 최적화</li>
            </ul>
          </div>
          <div className="print-card">
            <ul className="print-list">
              <li>RESTful API 및 관리자 시스템 설계·개발</li>
              <li>보안 설계 (요청 제한·2단계 인증·데이터 암호화)</li>
              <li>AWS 기반 백엔드 배포 및 인프라 구성</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="print-section">
        <h3 className="print-subsection-title">Technical Skills</h3>
        <div className="print-grid-3">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="print-card">
              <div className="font-semibold text-[9pt] mb-1">{category}</div>
              <div className="flex flex-wrap gap-1">
                {items.map((skill) => (
                  <span key={skill} className="print-mono-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="print-section">
        <h3 className="print-subsection-title">Career Brief</h3>
        <div className="print-grid-2">
          <div className="print-card">
            <div className="flex items-center gap-2 mb-1">
              <span className="print-mono-badge font-semibold">진행중</span>
              <span className="text-[8pt] text-slate-500">2025.08 - 현재</span>
            </div>
            <div className="font-semibold text-[9pt]">
              한국그린전력 홈페이지 리뉴얼
            </div>
            <p className="text-[8pt] text-slate-600">
              백엔드·관리자 시스템 단독 설계·개발
            </p>
          </div>
          <div className="print-card">
            <div className="flex items-center gap-2 mb-1">
              <span className="print-mono-badge font-semibold">
                메인 프로젝트
              </span>
              <span className="text-[8pt] text-slate-500">
                2021.01 - 2025.06
              </span>
            </div>
            <div className="font-semibold text-[9pt]">
              Blice 웹소설·웹툰 서비스
            </div>
            <p className="text-[8pt] text-slate-600">
              서비스 백엔드 주도 개발·운영
            </p>
          </div>
          <div className="print-card">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[8pt] text-slate-500">
                2020.11 - 2022.08
              </span>
            </div>
            <div className="font-semibold text-[9pt]">
              Blice Choice 운영·개발
            </div>
            <p className="text-[8pt] text-slate-600">
              웹소설·웹툰 초기 플랫폼 운영·개발
            </p>
          </div>
          <div className="print-card">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[8pt] text-slate-500">
                2019.08 - 2020.07
              </span>
            </div>
            <div className="font-semibold text-[9pt]">
              개방형 검증지원 시스템
            </div>
            <p className="text-[8pt] text-slate-600">
              TTA | 개방형 검증지원 포털 1·2차 구축 참여
            </p>
          </div>
        </div>
      </div>

      <div className="page-break"></div>
    </div>
  );
}
