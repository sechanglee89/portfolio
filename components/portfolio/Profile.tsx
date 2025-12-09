import { Badge } from "../ui/badge";
import { Card, CardNoGap, CardContent } from "../ui/card";
import {
  User,
  Code2,
  Database,
  Layout,
  Smartphone,
  Shield,
} from "lucide-react";

export function Profile() {
  const skills = {
    Backend: [
      "Java 8",
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
    <section id="profile" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Summary */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6 flex items-center gap-3">
                <User className="w-8 h-8 text-blue-600" />
                프로필 & 요약
              </h2>
              <div className="prose prose-lg text-muted-foreground">
                <p className="mb-4">
                  안녕하세요, <strong>Java Backend Developer 이세창</strong>
                  입니다. 2021년 1월부터 2025년 6월까지 약 4년 6개월간
                  <strong>블라이스 웹서비스 운영 및 통합 기능 개발</strong>을
                  주도했습니다.
                </p>
                <p className="mb-4">
                  주로 <strong>Java/Spring</strong> 환경에서 개발하며, 성능
                  개선, 결제·인앱 연동, Kafka 기반 알림 설계 등 주요 기능
                  고도화를 통해 서비스의 안정성과 확장성을 향상시켰습니다.
                </p>
                <p className="mb-4">
                  최근에는 <strong>한국그린전력 홈페이지 리뉴얼</strong>{" "}
                  프로젝트를 1인 개발로 진행하며, Vue 3 기반 프론트엔드부터 AWS
                  배포,
                  <strong>보안 설계</strong>(Rate Limit, Turnstile, JWT/TOTP,
                  AES-GCM)까지 풀스택 경험을 쌓았습니다.
                </p>
                <p>
                  분석과 설계를 우선시하며, 숫자로 증명하는 성능 개선과 명확한
                  커뮤니케이션을 통한 협업을 중요하게 생각합니다.
                </p>
              </div>
            </div>

            <Card className="bg-muted/50 border-none">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">
                  Core Competencies
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Database className="w-5 h-5 text-blue-500" />
                    <span>SQL 튜닝 및 인덱스 설계 (5~6배 성능 개선)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Code2 className="w-5 h-5 text-green-500" />
                    <span>결제/인앱 결제 시스템 설계 및 연동</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Layout className="w-5 h-5 text-purple-500" />
                    <span>Kafka 기반 비동기 이벤트 아키텍처</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Smartphone className="w-5 h-5 text-orange-500" />
                    <span>Spring Batch 배치 처리 및 운영 최적화</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-red-500" />
                    <span>보안 설계 (Rate Limit, CAPTCHA, 암호화)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Skills */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, items]) => (
                <CardNoGap
                  key={category}
                  className="overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="border-b bg-muted/40 p-4">
                    <h3 className="font-semibold text-lg">{category}</h3>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="px-3 py-1 text-sm font-normal"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </CardNoGap>
              ))}
            </div>
          </div>
        </div>

        {/* Career Brief - 가로형 타임라인 (전체 너비) */}
        <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl border border-blue-100 dark:border-blue-900/50">
          <h3 className="text-xl font-bold mb-6 text-blue-800 dark:text-blue-200">
            Career Brief
          </h3>

          {/* 가로형 타임라인 */}
          <div className="relative">
            {/* 타임라인 항목들 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* 한국그린전력 */}
              <div className="relative">
                <div className="p-4 bg-white dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-xs text-green-600 dark:text-green-400 font-semibold">
                      진행중
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-1">
                    2025.08 - 현재
                  </p>
                  <h4 className="font-bold text-sm mb-1">
                    한국그린전력 홈페이지 리뉴얼
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    한국그린전력 | 1인 풀스택 개발
                  </p>
                  <p className="text-xs text-blue-600 dark:text-blue-400 mt-2">
                    백엔드 개발 ~ 배포 대부분 과정 단독 수행, AWS·보안 구조 설계
                  </p>
                </div>
              </div>

              {/* 블라이스 */}
              <div className="relative">
                <div className="p-4 bg-white dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span className="text-xs text-blue-600 dark:text-blue-400 font-semibold">
                      메인 프로젝트
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-1">
                    2021.01 - 2025.06
                  </p>
                  <h4 className="font-bold text-sm mb-1">
                    Blice 웹소설·웹툰 서비스
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    KT | 웹소설·웹툰 서비스 백엔드 주도 운영·개발
                  </p>
                  <p className="text-xs text-blue-600 dark:text-blue-400 mt-2">
                    메인 페이지 응답속도 5~6배 개선, 정기·인앱 결제·이벤트
                    설계·구현
                  </p>
                </div>
              </div>

              {/* Blice Choice */}
              <div className="relative">
                <div className="p-4 bg-white dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                  </div>
                  <p className="text-xs text-muted-foreground mb-1">
                    2020.11 - 2022.08
                  </p>
                  <h4 className="font-bold text-sm mb-1">
                    Blice Choice 운영·개발
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    KT | 웹소설·웹툰 초기 플랫폼 운영·개발
                  </p>
                  <p className="text-xs text-blue-600 dark:text-blue-400 mt-2">
                    관리자 통계 설계·구현, UI·기능 개선
                  </p>
                </div>
              </div>

              {/* 개방형 검증지원 시스템 */}
              <div className="relative">
                <div className="p-4 bg-white dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                  </div>
                  <p className="text-xs text-muted-foreground mb-1">
                    2019.08 - 2020.07
                  </p>
                  <h4 className="font-bold text-sm mb-1">
                    개방형 검증지원 시스템
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    TTA | 개방형 검증지원 포털 1·2차 구축 참여
                  </p>
                  <p className="text-xs text-blue-600 dark:text-blue-400 mt-2">
                    공공 검증지원 포털 1차 구축 참여, 2차 사용자 피드백 기반
                    UI·기능 보완
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
