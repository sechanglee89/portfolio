export function PrintMonoOtherProjects() {
  const projects = [
    {
      title: "Blice Choice 운영 및 유지보수",
      period: "2020.11 ~ 2022.08",
      description:
        "관리자 통계 설계·구현. UI·기능 개선. 웹소설·웹툰 초기 플랫폼 운영·개발.",
      tech: ["Java", "Spring", "MyBatis", "MariaDB"],
    },
    {
      title: "행복택시 인증/회원 관리",
      period: "2023.11 ~ 2023.12",
      description:
        "PASS 인증 연동, 회원 가입 및 로그인 기능 개발. 본인인증 프로세스 구현.",
      tech: ["Java", "Spring Boot", "PASS API"],
    },
    {
      title: "한국컴패션 비전트립",
      period: "2022.08 ~ 2022.11",
      description:
        "Salesforce 연동, 기능 마무리 작업 및 외부 API 개선. CRM 시스템 통합 연동 작업 수행.",
      tech: ["Java", "Salesforce API", "REST API"],
    },
    {
      title: "Smart Fish Farm (IoT)",
      period: "2020.04 ~ 2020.05",
      description:
        "TTN 기반 IoT 센서 데이터 수집/저장/모니터링. 양식장 환경 데이터 실시간 관제 시스템 개발.",
      tech: ["Java", "TTN", "IoT", "REST API"],
    },
    {
      title: "개방형 검증지원 시스템 1·2차",
      period: "2019.08 ~ 2020.07",
      description:
        "검증지원 포털 일반·관리 기능 개발 및 UI 개선(전자정부프레임워크)",
      tech: ["전자정부프레임워크", "Java", "Oracle"],
    },
  ];

  return (
    <div className="page">
      <h2 className="print-mono-section-title">기타 프로젝트</h2>
      <p className="text-[9pt] text-slate-600 mb-4">
        주요 경력 외 참여했던 프로젝트들입니다.
      </p>

      <div className="print-grid-2">
        {projects.map((project, index) => (
          <div key={index} className="print-card">
            <div className="flex justify-between items-start mb-1">
              <div className="font-semibold text-[10pt]">{project.title}</div>
              <div className="text-[8pt] text-slate-600">{project.period}</div>
            </div>
            <p className="text-[8pt] text-slate-700 mb-2">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1">
              {project.tech.map((t) => (
                <span key={t} className="print-mono-badge">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
