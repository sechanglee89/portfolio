import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";

export function OtherProjects() {
  const projects = [
    {
      title: "Blice Choice 운영 및 유지보수",
      period: "2020.11 ~ 2022.08",
      description:
        "관리자 통계 설계·구현. UI·기능 개선. 웹소설·웹툰 초기 플랫폼 운영·개발.",
      tech: ["Java", "Spring", "MyBatis", "MariaDB"],
      link: "#",
    },
    {
      title: "행복택시 인증/회원 관리",
      period: "2023.11 ~ 2023.12",
      description:
        "PASS 인증 연동, 회원 가입 및 로그인 기능 개발. 본인인증 프로세스 구현.",
      tech: ["Java", "Spring Boot", "PASS API"],
      link: "#",
    },
    {
      title: "한국컴패션 비전트립",
      period: "2022.08 ~ 2022.11",
      description:
        "Salesforce 연동, 기능 마무리 작업 및 외부 API 개선. CRM 시스템 통합 연동 작업 수행.",
      tech: ["Java", "Salesforce API", "REST API"],
      link: "#",
    },
    {
      title: "Smart Fish Farm (IoT)",
      period: "2020.04 ~ 2020.05",
      description:
        "TTN 기반 IoT 센서 데이터 수집/저장/모니터링. 양식장 환경 데이터 실시간 관제 시스템 개발.",
      tech: ["Java", "TTN", "IoT", "REST API"],
      link: "#",
    },
    {
      title: "개방형 검증지원 시스템 1·2차",
      period: "2019.08 ~ 2020.07",
      description:
        "검증지원 포털 일반·관리 기능 개발 및 UI 개선(전자정부프레임워크)",
      tech: ["전자정부프레임워크", "Java", "Oracle"],
      link: "#",
    },
  ];

  return (
    <section id="others" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            주요 경력 요약
          </h2>
          <p className="text-muted-foreground">
            블라이스 프로젝트 외 참여했던 프로젝트들입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="hover:border-primary/50 transition-colors group cursor-pointer bg-white dark:bg-gray-800"
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <span className="text-sm text-muted-foreground">
                      {project.period}
                    </span>
                  </div>
                </div>
                <CardDescription className="pt-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((t) => (
                    <Badge key={t} variant="secondary" className="text-xs">
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
