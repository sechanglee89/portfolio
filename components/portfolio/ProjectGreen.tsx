import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  Shield,
  Lock,
  Server,
  Database,
  Network,
  Key,
  Eye,
  Zap,
  CheckCircle2,
  Bot,
  Monitor,
  Layers,
} from "lucide-react";

export function ProjectGreen() {
  return (
    <section id="green" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 개요 & 역할 요약 */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row-reverse gap-8 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-green-600">Project 02</Badge>
                <span className="text-sm text-muted-foreground">
                  진행중 (2025.08 ~ 현재)
                </span>
              </div>
              <h2 className="text-4xl font-bold mb-4">
                한국그린전력 홈페이지 리뉴얼
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                CMS/사용자 API 구축 - PHP 기반 레거시 시스템을 Kotlin/Spring
                Boot + Vue 3로 재구축하고, ERP 연동 및 보안 아키텍처 설계
              </p>

              <div className="space-y-4 mb-8">
                <div>
                  <h4 className="font-semibold mb-2">Role</h4>
                  <p className="text-sm text-muted-foreground">
                    백엔드 리드 개발, 인프라/보안 설계
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Tech Highlights</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="shrink-0">
                        Backend
                      </Badge>
                      <span className="text-muted-foreground text-slate-800">
                        Kotlin 2.2.x · Spring Boot 3.5.x · Spring Data JPA ·
                        Spring Security
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="shrink-0">
                        Infra/DB
                      </Badge>
                      <span className="text-muted-foreground text-slate-800">
                        MariaDB 11.x · Redis 7.x · Docker · AWS Lightsail ·
                        Nginx
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="shrink-0">
                        Frontend
                      </Badge>
                      <span className="text-muted-foreground text-slate-800">
                        Vue 3.5.x · TypeScript · Vite · Tailwind CSS · TailAdmin
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="shrink-0">
                        CI/CD
                      </Badge>
                      <span className="text-muted-foreground text-slate-800">
                        GitHub Actions (Docker 빌드·배포)
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="shrink-0">
                        Monitoring
                      </Badge>
                      <span className="text-muted-foreground text-slate-800">
                        Grafana · Loki
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 핵심 목표 요약 */}
              <Card className="bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800">
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-3 text-green-800 dark:text-green-200">
                    🎯 프로젝트 목표
                  </h4>
                  <ul className="space-y-1 text-sm text-green-700 dark:text-green-300">
                    <li>
                      1. 기존 PHP 기반 홈페이지를{" "}
                      <strong>Kotlin/Spring Boot + Vue 3</strong> 기반으로
                      재구축
                    </li>
                    <li>
                      2. ERP 시스템과 연동해{" "}
                      <strong>수주/시공 실적·시공사례</strong>를 자동 동기화
                    </li>
                    <li>
                      3. 관리자·사용자 API에 대해{" "}
                      <strong>보안·안정성·운영 편의성</strong>을 동시에 만족하는
                      아키텍처 구축
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="flex-1 w-full">
              <div className="rounded-xl overflow-hidden shadow-2xl border bg-white dark:bg-gray-900 relative group">
                <img
                  src="/images/projects/kogreen-main.jpg"
                  alt="Solar Energy Plant"
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Cases Tabs */}
        <Tabs defaultValue="architecture" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-[500px] mb-8">
            <TabsTrigger value="architecture">시스템 아키텍처</TabsTrigger>
            <TabsTrigger value="security">보안 설계</TabsTrigger>
            <TabsTrigger value="ai">AI 도구 활용</TabsTrigger>
          </TabsList>

          {/* 시스템 아키텍처 */}
          <TabsContent
            value="architecture"
            className="animate-in fade-in slide-in-from-bottom-4"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="text-green-600" />
                  시스템 아키텍처 설계
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* 상단: 기술 스택 설명 (그리드) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-8">
                  {/* 백엔드 */}
                  <div className="flex items-start gap-3 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg shrink-0">
                      <Server className="w-5 h-5 text-blue-600 dark:text-blue-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">백엔드</h3>
                      <ul className="list-hanging text-muted-foreground mt-1 text-xs space-y-0.5">
                        <li>• Kotlin 2.2.x</li>
                        <li>• Spring Boot 3.5.x</li>
                        <li>• Spring Data JPA 3.5.x</li>
                        <li>• Spring Security 6.5.x</li>
                        <li>• Gradle 9.0.x</li>
                      </ul>
                    </div>
                  </div>

                  {/* 프론트엔드 */}
                  <div className="flex items-start gap-3 p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200 dark:border-purple-800">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg shrink-0">
                      <Monitor className="w-5 h-5 text-purple-600 dark:text-purple-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">프론트엔드</h3>
                      <ul className="list-hanging text-muted-foreground mt-1 text-xs space-y-0.5">
                        <li>• Vue 3.5.x</li>
                        <li>• TypeScript 5.7.x</li>
                        <li>• Vite 7.x</li>
                        <li>• Tailwind CSS 4.x</li>
                        <li>• TailAdmin 2.x</li>
                      </ul>
                    </div>
                  </div>

                  {/* 배포·인프라 */}
                  <div className="flex items-start gap-3 p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg border border-orange-200 dark:border-orange-800">
                    <div className="p-2 bg-orange-100 dark:bg-orange-900 rounded-lg shrink-0">
                      <Layers className="w-5 h-5 text-orange-600 dark:text-orange-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">배포·인프라</h3>
                      <ul className="list-hanging text-muted-foreground mt-1 text-xs space-y-0.5">
                        <li>• Docker / Compose</li>
                        <li>• AWS Lightsail</li>
                        <li>• Nginx</li>
                        <li>• S3 + CloudFront</li>
                      </ul>
                    </div>
                  </div>

                  {/* 데이터베이스 */}
                  <div className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                    <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg shrink-0">
                      <Database className="w-5 h-5 text-green-600 dark:text-green-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">데이터베이스</h3>
                      <ul className="list-hanging text-muted-foreground mt-1 text-xs space-y-0.5">
                        <li>• MariaDB 11.8.3</li>
                        <li>• Redis 7.x</li>
                        <li>• ERP 스냅샷 동기화</li>
                      </ul>
                    </div>
                  </div>

                  {/* 로그/모니터링 */}
                  <div className="flex items-start gap-3 p-4 bg-teal-50 dark:bg-teal-950/30 rounded-lg border border-teal-200 dark:border-teal-800">
                    <div className="p-2 bg-teal-100 dark:bg-teal-900 rounded-lg shrink-0">
                      <Eye className="w-5 h-5 text-teal-600 dark:text-teal-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">모니터링</h3>
                      <ul className="list-hanging text-muted-foreground mt-1 text-xs space-y-0.5">
                        <li>• Grafana</li>
                        <li>• Loki / Promtail</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 하단: 아키텍처 다이어그램 (전체 너비) */}
                <div className="space-y-4">
                  <div className="bg-slate-900 rounded-xl p-6 text-white relative overflow-x-auto">
                    <div className="absolute top-2 right-3 opacity-50 text-xs">
                      System Architecture
                    </div>

                    <div className="flex gap-4 text-[11px] min-w-[900px] py-4">
                      {/* 클라이언트 */}
                      <div className="flex flex-col justify-center">
                        <div className="border border-gray-600 rounded-lg p-3 bg-gray-800/50">
                          <div className="text-[10px] text-gray-400 mb-2 font-semibold">
                            클라이언트
                          </div>
                          <div className="space-y-2">
                            <div className="bg-blue-600 px-3 py-2 rounded text-center text-[10px]">
                              관리자 브라우저
                            </div>
                            <div className="bg-blue-600 px-3 py-2 rounded text-center text-[10px]">
                              사용자 브라우저
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 화살표 */}
                      <div className="flex items-center text-gray-400 text-lg">
                        →
                      </div>

                      {/* 엣지 레이어 */}
                      <div className="flex flex-col justify-center gap-2">
                        <div className="border border-gray-600 rounded-lg p-3 bg-gray-800/50">
                          <div className="text-[10px] text-gray-400 mb-2 font-semibold">
                            엣지 레이어
                          </div>
                          <div className="space-y-2">
                            <div className="bg-red-600 px-3 py-2 rounded text-center text-[10px]">
                              AWS WAF
                            </div>
                            <div className="bg-orange-600 px-3 py-2 rounded text-center text-[10px]">
                              AWS CloudFront (CDN)
                            </div>
                          </div>
                        </div>
                        <div className="border border-gray-600 rounded-lg p-3 bg-gray-800/50">
                          <div className="text-[10px] text-gray-400 mb-2 font-semibold">
                            스토리지
                          </div>
                          <div className="bg-yellow-600 text-black px-3 py-2 rounded text-center text-[10px]">
                            S3 버킷 - 이미지/파일
                          </div>
                        </div>
                      </div>

                      {/* 화살표 */}
                      <div className="flex items-center text-gray-400 text-lg">
                        →
                      </div>

                      {/* AWS Lightsail */}
                      <div className="flex-1 border-2 border-dashed border-gray-500 rounded-xl p-4 bg-gray-800/30 min-w-[450px]">
                        <div className="text-xs text-gray-300 mb-3 font-semibold">
                          AWS Lightsail (컨테이너 서버)
                        </div>

                        <div className="flex gap-3">
                          {/* Nginx + 애플리케이션 */}
                          <div className="flex-1 space-y-2">
                            <div className="bg-gray-700 px-3 py-2 rounded text-center text-[10px]">
                              Nginx - 리버스 프록시 및 정적 서빙
                            </div>

                            <div className="border border-gray-600 rounded-lg p-2 bg-gray-800/50">
                              <div className="text-[9px] text-gray-400 mb-1.5 font-semibold">
                                애플리케이션 계층
                              </div>
                              <div className="grid grid-cols-2 gap-1.5">
                                <div className="bg-indigo-600 px-2 py-1.5 rounded text-center text-[9px]">
                                  관리자 정적 리소스
                                </div>
                                <div className="bg-indigo-600 px-2 py-1.5 rounded text-center text-[9px]">
                                  사용자 정적 리소스
                                </div>
                                <div className="bg-indigo-700 px-2 py-1.5 rounded text-center text-[9px]">
                                  관리자 API 서버
                                </div>
                                <div className="bg-indigo-700 px-2 py-1.5 rounded text-center text-[9px]">
                                  사용자 API 서버
                                </div>
                              </div>
                            </div>

                            <div className="border border-gray-600 rounded-lg p-2 bg-gray-800/50">
                              <div className="text-[9px] text-gray-400 mb-1.5 font-semibold">
                                배치 / ERP 연동
                              </div>
                              <div className="bg-amber-700 px-3 py-1.5 rounded text-center text-[9px]">
                                ERP 동기화 배치
                              </div>
                            </div>

                            <div className="border border-gray-600 rounded-lg p-2 bg-gray-800/50">
                              <div className="text-[9px] text-gray-400 mb-1.5 font-semibold">
                                로그 / 모니터링
                              </div>
                              <div className="flex gap-1.5">
                                <div className="bg-purple-700 px-2 py-1.5 rounded text-center flex-1 text-[9px]">
                                  Promtail
                                </div>
                                <div className="bg-purple-700 px-2 py-1.5 rounded text-center flex-1 text-[9px]">
                                  Loki
                                </div>
                                <div className="bg-purple-700 px-2 py-1.5 rounded text-center flex-1 text-[9px]">
                                  Grafana
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* 데이터/캐시 */}
                          <div className="w-28">
                            <div className="border border-gray-600 rounded-lg p-2 bg-gray-800/50 h-full">
                              <div className="text-[9px] text-gray-400 mb-1.5 font-semibold">
                                데이터 / 캐시
                              </div>
                              <div className="space-y-1.5">
                                <div className="bg-red-700 px-2 py-2 rounded text-center text-[9px]">
                                  Redis - 캐시/토큰
                                </div>
                                <div className="bg-green-700 px-2 py-2 rounded text-center text-[9px]">
                                  MariaDB - 서비스 DB
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 화살표 */}
                      <div className="flex items-center text-gray-400 text-lg">
                        →
                      </div>

                      {/* 외부 시스템 */}
                      <div className="flex flex-col justify-center">
                        <div className="border border-gray-600 rounded-lg p-3 bg-gray-800/50">
                          <div className="text-[10px] text-gray-400 mb-2 font-semibold">
                            외부 시스템
                          </div>
                          <div className="bg-slate-600 px-3 py-2 rounded text-center text-[10px]">
                            ERP DB
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 범례 */}
                    <div className="flex items-center gap-4 mt-4 pt-3 border-t border-gray-700 text-[9px] text-gray-400">
                      <span className="font-semibold">범례:</span>
                      <div className="flex items-center gap-1">
                        <div className="w-2.5 h-2.5 bg-blue-600 rounded"></div>
                        <span>클라이언트</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-2.5 h-2.5 bg-red-600 rounded"></div>
                        <span>보안/엣지</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-2.5 h-2.5 bg-indigo-600 rounded"></div>
                        <span>애플리케이션</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-2.5 h-2.5 bg-green-700 rounded"></div>
                        <span>데이터베이스</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-2.5 h-2.5 bg-purple-700 rounded"></div>
                        <span>모니터링</span>
                      </div>
                    </div>
                  </div>

                  {/* 설명 */}
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <p className="text-xs text-muted-foreground">
                      <strong>AWS Lightsail 컨테이너 서비스:</strong> 모든
                      애플리케이션(사용자 API, 관리자 API, ERP 배치, Redis,
                      MariaDB, 모니터링 스택)이 단일 컨테이너 서버에서 Docker로
                      운영됩니다. 외부 트래픽은 AWS WAF → CloudFront → Nginx를
                      거쳐 각 서비스로 라우팅됩니다.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 보안 설계 */}
          <TabsContent
            value="security"
            className="animate-in fade-in slide-in-from-bottom-4"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="text-red-500" />
                  보안 및 데이터 보호 설계
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Rate Limit & IP 차단 */}
                  <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-800">
                    <div className="flex items-center gap-2 mb-2 text-red-700 dark:text-red-400 font-semibold">
                      <Network className="w-4 h-4" />
                      Rate Limit & IP 차단
                    </div>
                    <ul className="list-hanging text-xs text-muted-foreground space-y-1">
                      <li>
                        • 엔드포인트별 <strong>위험 등급(저·중·고)</strong> 정의
                        후 한도 차등 적용
                      </li>
                      <li>
                        • Rate limit 반복 초과나 필수 헤더 누락 패턴이 임계치를
                        넘으면 <strong>해당 IP 자동 차단</strong>
                      </li>
                    </ul>
                  </div>

                  {/* Cloudflare Turnstile */}
                  <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg border border-orange-200 dark:border-orange-800">
                    <div className="flex items-center gap-2 mb-2 text-orange-700 dark:text-orange-400 font-semibold">
                      <Shield className="w-4 h-4" />
                      Cloudflare Turnstile
                    </div>
                    <ul className="list-hanging text-xs text-muted-foreground space-y-1">
                      <li>
                        • 크리티컬·이상 패턴이 감지된 POST/PUT/DELETE 요청에
                        한해 <strong>Turnstile 챌린지를 요구</strong> (일반
                        요청은 챌린지 없이 처리)
                      </li>
                      <li>
                        • Turnstile 검증 성공 시{" "}
                        <strong>
                          단일 사용·짧은 만료시간의 내부 챌린지 토큰
                        </strong>
                        을 발급하고, 보호 API 호출 시 헤더로 전달
                      </li>
                      <li>
                        • 챌린지 토큰 발급 시 서버에서{" "}
                        <strong>
                          Siteverify API로 Turnstile 응답 토큰을 검증
                        </strong>
                      </li>
                    </ul>
                  </div>

                  {/* 문의 상세 접근 토큰 */}
                  <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="flex items-center gap-2 mb-2 text-blue-700 dark:text-blue-400 font-semibold">
                      <Key className="w-4 h-4" />
                      문의 상세 접근 토큰
                    </div>
                    <ul className="list-hanging text-xs text-muted-foreground space-y-1">
                      <li>
                        • 문의 상세 진입 시, 비밀번호 일치 시에만{" "}
                        <strong>해당 문의에 한정된 접근 토큰</strong> 발급
                      </li>
                      <li>
                        • 토큰 유효기간 동안 비밀번호 재입력 없이
                        상세/조회/수정/삭제 가능
                      </li>
                      <li>
                        • UX 개선 + <strong>불필요한 비밀번호 전송 감소</strong>
                      </li>
                    </ul>
                  </div>

                  {/* 위변조 방지 */}
                  <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200 dark:border-purple-800">
                    <div className="flex items-center gap-2 mb-2 text-purple-700 dark:text-purple-400 font-semibold">
                      <Zap className="w-4 h-4" />
                      액션 토큰 + 위변조 방지
                    </div>
                    <ul className="list-hanging text-xs text-muted-foreground space-y-1">
                      <li>
                        • 모든 변경 요청에 대해:
                        <br />- <code>X-Action-Token</code> (서버 발급/검증)
                        <br />- <code>X-Request-Id</code> (UUID)
                        <br />- <code>X-Payload-Hash</code> (요청 바디
                        HMAC-SHA256)
                      </li>
                      <li>
                        • 서버는 Redis에 저장된 정보와 비교하여 페이로드 변조
                        여부, 동일 UUID 재사용 여부 검증
                      </li>
                      <li>
                        • <strong>재전송·중간자 공격 방어</strong> 레이어 확보
                      </li>
                    </ul>
                  </div>

                  {/* 관리자 인증 */}
                  <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                    <div className="flex items-center gap-2 mb-2 text-green-700 dark:text-green-400 font-semibold">
                      <Lock className="w-4 h-4" />
                      관리자 인증
                    </div>
                    <ul className="list-hanging text-xs text-muted-foreground space-y-1">
                      <li>
                        • <strong>JWT Access + Refresh Token Rotation</strong>{" "}
                        구조
                      </li>
                      <li>
                        • Refresh Token은{" "}
                        <strong>HttpOnly·Secure Cookie</strong>로만 저장 (XSS
                        방어)
                      </li>
                      <li>
                        • <strong>TOTP</strong>(Google Authenticator) 기반 2단계
                        인증
                      </li>
                      <li>
                        • 비밀번호 검증: <strong>Bcrypt</strong>
                      </li>
                    </ul>
                  </div>

                  {/* 데이터 암호화 */}
                  <div className="p-4 bg-teal-50 dark:bg-teal-950/30 rounded-lg border border-teal-200 dark:border-teal-800">
                    <div className="flex items-center gap-2 mb-2 text-teal-700 dark:text-teal-400 font-semibold">
                      <Database className="w-4 h-4" />
                      데이터 암호화 & 캐시
                    </div>
                    <ul className="list-hanging text-xs text-muted-foreground space-y-1">
                      <li>
                        • 개인정보(이메일, 전화번호 등)는{" "}
                        <strong>AES-GCM 암호화 + 검색용 해시 분리</strong> 저장
                      </li>
                      <li>
                        • 자주 조회되는 정적 텍스트(회사 정보, 코드 테이블 등)는
                        Redis에 캐싱, 만료 정책으로 동기화
                      </li>
                    </ul>
                  </div>
                </div>

                {/* 보안 플로우 다이어그램 */}
                <div className="mt-8 space-y-4">
                  {/* 관리자 로그인 인증 플로우 */}
                  <div className="bg-slate-900 rounded-xl p-6 text-white relative overflow-x-auto">
                    <div className="absolute top-2 right-3 opacity-50 text-xs">
                      Admin Authentication Flow
                    </div>
                    <h4 className="text-sm font-semibold mb-4 text-gray-300">
                      관리자 로그인 인증 플로우
                    </h4>
                    <div className="min-w-[900px]">
                      <div className="flex items-center gap-3 text-[11px]">
                        <div className="border border-gray-600 rounded-lg p-3 bg-gray-800/50 w-32">
                          <div className="text-[9px] text-gray-400 mb-1">
                            시작
                          </div>
                          <div className="bg-blue-600 px-3 py-2 rounded text-center">
                            ID·PW 입력
                          </div>
                        </div>
                        <div className="text-gray-400">→</div>
                        <div className="border border-gray-600 rounded-lg p-3 bg-gray-800/50 w-40">
                          <div className="text-[9px] text-gray-400 mb-1">
                            보안 검증
                          </div>
                          <div className="space-y-1.5">
                            <div className="bg-gray-700 px-3 py-1.5 rounded text-center text-[10px]">
                              IP 차단 / Rate Limit 확인
                            </div>
                            <div className="text-[9px] text-red-400 text-center">
                              차단 시 → 거부 + 보안 로그
                            </div>
                          </div>
                        </div>
                        <div className="text-gray-400">→</div>
                        <div className="border border-gray-600 rounded-lg p-3 bg-gray-800/50 w-36">
                          <div className="text-[9px] text-gray-400 mb-1">
                            1차 인증
                          </div>
                          <div className="space-y-1.5">
                            <div className="bg-gray-700 px-3 py-1.5 rounded text-center text-[10px]">
                              Bcrypt 비밀번호 검증
                            </div>
                            <div className="text-[9px] text-red-400 text-center">
                              불일치 → 실패 횟수↑, 계정 잠금
                            </div>
                          </div>
                        </div>
                        <div className="text-gray-400">→</div>
                        <div className="border border-gray-600 rounded-lg p-3 bg-gray-800/50 w-40">
                          <div className="text-[9px] text-gray-400 mb-1">
                            2차 인증
                          </div>
                          <div className="space-y-1.5">
                            <div className="bg-gray-700 px-3 py-1.5 rounded text-center text-[10px]">
                              TOTP 검증
                            </div>
                            <div className="text-[9px] text-red-400 text-center">
                              불일치 → 거부 + 실패 횟수↑
                            </div>
                          </div>
                        </div>
                        <div className="text-gray-400">→</div>
                        <div className="border border-gray-600 rounded-lg p-3 bg-gray-800/50 w-32">
                          <div className="text-[9px] text-gray-400 mb-1">
                            완료
                          </div>
                          <div className="space-y-1.5">
                            <div className="bg-green-700 px-3 py-1.5 rounded text-center text-[10px]">
                              JWT 토큰 발급
                            </div>
                            <div className="text-[9px] text-green-400 text-center">
                              HttpOnly·Secure Cookie
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 사용자 API Rate Limit 플로우 */}
                  <div className="bg-slate-900 rounded-xl p-6 text-white relative overflow-x-auto">
                    <div className="absolute top-2 right-3 opacity-50 text-xs">
                      Rate Limit Flow
                    </div>
                    <h4 className="text-sm font-semibold mb-4 text-gray-300">
                      사용자 API Rate Limit 플로우
                    </h4>
                    <div className="min-w-[900px]">
                      <div className="flex items-center gap-3 text-[11px]">
                        <div className="border border-gray-600 rounded-lg p-3 bg-gray-800/50 w-32">
                          <div className="text-[9px] text-gray-400 mb-1">
                            요청
                          </div>
                          <div className="bg-blue-600 px-3 py-2 rounded text-center">
                            API 요청
                          </div>
                        </div>
                        <div className="text-gray-400">→</div>
                        <div className="border border-gray-600 rounded-lg p-3 bg-gray-800/50 w-40">
                          <div className="text-[9px] text-gray-400 mb-1">
                            차단 확인
                          </div>
                          <div className="space-y-1.5">
                            <div className="bg-gray-700 px-3 py-1.5 rounded text-center text-[10px]">
                              IP 차단 여부 확인
                            </div>
                            <div className="text-[9px] text-red-400 text-center">
                              차단 시 → 403/429 + 로그
                            </div>
                          </div>
                        </div>
                        <div className="text-gray-400">→</div>
                        <div className="border border-gray-600 rounded-lg p-3 bg-gray-800/50 w-36">
                          <div className="text-[9px] text-gray-400 mb-1">
                            카운터
                          </div>
                          <div className="bg-gray-700 px-3 py-1.5 rounded text-center text-[10px]">
                            IP/사용자/엔드포인트
                            <br />
                            카운터 증가
                          </div>
                        </div>
                        <div className="text-gray-400">→</div>
                        <div className="border border-gray-600 rounded-lg p-3 bg-gray-800/50 w-40">
                          <div className="text-[9px] text-gray-400 mb-1">
                            한도 판정
                          </div>
                          <div className="space-y-1.5">
                            <div className="bg-gray-700 px-3 py-1.5 rounded text-center text-[10px]">
                              요청 수 한도 초과 여부
                            </div>
                            <div className="text-[9px] text-red-400 text-center">
                              초과 → 위반 누적, IP 차단
                            </div>
                          </div>
                        </div>
                        <div className="text-gray-400">→</div>
                        <div className="border border-gray-600 rounded-lg p-3 bg-gray-800/50 w-32">
                          <div className="text-[9px] text-gray-400 mb-1">
                            응답
                          </div>
                          <div className="bg-green-700 px-3 py-2 rounded text-center text-[10px]">
                            백엔드 처리
                            <br />→ 정상 응답
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 액션 토큰 + 위변조 방지 플로우 */}
                  <div className="bg-slate-900 rounded-xl p-6 text-white relative overflow-x-auto">
                    <div className="absolute top-2 right-3 opacity-50 text-xs">
                      Action Token Flow
                    </div>
                    <h4 className="text-sm font-semibold mb-4 text-gray-300">
                      액션 토큰 + 위변조 방지 플로우
                    </h4>
                    <div className="min-w-[900px]">
                      <div className="flex items-center gap-3 text-[11px]">
                        <div className="border border-gray-600 rounded-lg p-3 bg-gray-800/50 w-32">
                          <div className="text-[9px] text-gray-400 mb-1">
                            진입
                          </div>
                          <div className="bg-blue-600 px-3 py-2 rounded text-center text-[10px]">
                            변경 페이지 진입
                          </div>
                        </div>
                        <div className="text-gray-400">→</div>
                        <div className="border border-gray-600 rounded-lg p-3 bg-gray-800/50 w-40">
                          <div className="text-[9px] text-gray-400 mb-1">
                            토큰 발급
                          </div>
                          <div className="space-y-1">
                            <div className="bg-gray-700 px-2 py-1 rounded text-center text-[9px]">
                              X-Action-Token
                            </div>
                            <div className="bg-gray-700 px-2 py-1 rounded text-center text-[9px]">
                              X-Request-Id (UUID)
                            </div>
                            <div className="bg-gray-700 px-2 py-1 rounded text-center text-[9px]">
                              X-Payload-Hash
                            </div>
                          </div>
                          <div className="text-[9px] text-gray-400 text-center mt-1">
                            → Redis 저장
                          </div>
                        </div>
                        <div className="text-gray-400">→</div>
                        <div className="border border-gray-600 rounded-lg p-3 bg-gray-800/50 w-36">
                          <div className="text-[9px] text-gray-400 mb-1">
                            제출
                          </div>
                          <div className="bg-gray-700 px-3 py-2 rounded text-center text-[10px]">
                            3개 헤더 +<br />
                            변경 데이터 전송
                          </div>
                        </div>
                        <div className="text-gray-400">→</div>
                        <div className="border border-gray-600 rounded-lg p-3 bg-gray-800/50 w-40">
                          <div className="text-[9px] text-gray-400 mb-1">
                            검증
                          </div>
                          <div className="space-y-1.5">
                            <div className="bg-gray-700 px-3 py-1.5 rounded text-center text-[10px]">
                              Redis 저장값 비교
                            </div>
                            <div className="text-[9px] text-red-400 text-center">
                              불일치/중복 → 차단 + 로그
                            </div>
                          </div>
                        </div>
                        <div className="text-gray-400">→</div>
                        <div className="border border-gray-600 rounded-lg p-3 bg-gray-800/50 w-32">
                          <div className="text-[9px] text-gray-400 mb-1">
                            완료
                          </div>
                          <div className="space-y-1.5">
                            <div className="bg-green-700 px-3 py-1.5 rounded text-center text-[10px]">
                              DB 변경 수행
                            </div>
                            <div className="text-[9px] text-green-400 text-center">
                              토큰 사용 완료 처리
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 문의 상세 접근 토큰 플로우 */}
                  <div className="bg-slate-900 rounded-xl p-6 text-white relative overflow-x-auto">
                    <div className="absolute top-2 right-3 opacity-50 text-xs">
                      Inquiry Access Token Flow
                    </div>
                    <h4 className="text-sm font-semibold mb-4 text-gray-300">
                      문의 상세 접근 토큰 플로우
                    </h4>
                    <div className="min-w-[900px]">
                      <div className="flex items-center gap-3 text-[11px]">
                        <div className="border border-gray-600 rounded-lg p-3 bg-gray-800/50 w-32">
                          <div className="text-[9px] text-gray-400 mb-1">
                            등록
                          </div>
                          <div className="bg-blue-600 px-3 py-2 rounded text-center text-[10px]">
                            문의 폼 제출
                          </div>
                        </div>
                        <div className="text-gray-400">→</div>
                        <div className="border border-gray-600 rounded-lg p-3 bg-gray-800/50 w-40">
                          <div className="text-[9px] text-gray-400 mb-1">
                            토큰 생성
                          </div>
                          <div className="bg-gray-700 px-3 py-2 rounded text-center text-[10px]">
                            해당 문의 전용
                            <br />
                            일회용/단기 토큰
                          </div>
                        </div>
                        <div className="text-gray-400">→</div>
                        <div className="border border-gray-600 rounded-lg p-3 bg-gray-800/50 w-36">
                          <div className="text-[9px] text-gray-400 mb-1">
                            발송
                          </div>
                          <div className="bg-gray-700 px-3 py-2 rounded text-center text-[10px]">
                            "문의 상세 보기"
                            <br />
                            URL 이메일/문자 발송
                          </div>
                        </div>
                        <div className="text-gray-400">→</div>
                        <div className="border border-gray-600 rounded-lg p-3 bg-gray-800/50 w-40">
                          <div className="text-[9px] text-gray-400 mb-1">
                            검증
                          </div>
                          <div className="space-y-1.5">
                            <div className="bg-gray-700 px-3 py-1.5 rounded text-center text-[10px]">
                              유효성·만료·fingerprint
                            </div>
                            <div className="text-[9px] text-red-400 text-center">
                              만료/위조 → 재요청 안내
                            </div>
                          </div>
                        </div>
                        <div className="text-gray-400">→</div>
                        <div className="border border-gray-600 rounded-lg p-3 bg-gray-800/50 w-32">
                          <div className="text-[9px] text-gray-400 mb-1">
                            완료
                          </div>
                          <div className="bg-green-700 px-3 py-2 rounded text-center text-[10px]">
                            문의 상세 조회
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* AI 도구 활용 */}
          <TabsContent
            value="ai"
            className="animate-in fade-in slide-in-from-bottom-4"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bot className="text-purple-500" />
                  AI 도구 활용
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="p-6 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/30 dark:to-blue-950/30 rounded-xl border border-purple-200 dark:border-purple-800">
                    <blockquote className="text-lg italic text-muted-foreground mb-4">
                      "VS Code Copilot, Claude Code 4.5, Claude Opus 4.5를{" "}
                      <strong>'보조 개발자'처럼 활용</strong>해 반복적인 코드,
                      테스트 코드 초안, 리팩터링 아이디어를 빠르게
                      생성했습니다."
                    </blockquote>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                      <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg">
                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                          <span className="text-lg">🤖</span>
                        </div>
                        <div>
                          <p className="font-semibold text-sm">
                            VS Code Copilot
                          </p>
                          <p className="text-xs text-muted-foreground">
                            코드 자동완성
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg">
                        <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center">
                          <span className="text-lg">🧠</span>
                        </div>
                        <div>
                          <p className="font-semibold text-sm">
                            Claude Code 4.5
                          </p>
                          <p className="text-xs text-muted-foreground">
                            복잡한 로직 설계
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg">
                        <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                          <span className="text-lg">💡</span>
                        </div>
                        <div>
                          <p className="font-semibold text-sm">
                            Claude Opus 4.5
                          </p>
                          <p className="text-xs text-muted-foreground">
                            아키텍처 리뷰
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4" />
                        직접 설계·구현한 영역
                      </h4>
                      <ul className="text-sm space-y-1 text-green-700 dark:text-green-300">
                        <li>• 보안·인증 아키텍처 설계</li>
                        <li>• 핵심 도메인 데이터 모델 설계</li>
                        <li>• 인프라·배포 파이프라인 구성</li>
                        <li>• 핵심 비즈니스 로직 구현</li>
                      </ul>
                      <p className="text-xs text-green-600 dark:text-green-400 mt-3 italic">
                        → 서비스 안정성과 보안, 비즈니스 규칙에 직결되는 부분은
                        직접 설계·구현 후 검증
                      </p>
                    </div>

                    <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2 flex items-center gap-2">
                        <Bot className="w-4 h-4" />
                        AI 활용 영역
                      </h4>
                      <ul className="text-sm space-y-1 text-blue-700 dark:text-blue-300">
                        <li>• 반복적인 CRUD·DTO·Mapper 코드 생성</li>
                        <li>• 테스트 코드·Mock 초안 작성</li>
                        <li>• 리팩터링 아이디어·대안 코드 제안</li>
                        <li>• 기술 문서·API 설명 초안 작성</li>
                      </ul>
                      <p className="text-xs text-blue-600 dark:text-blue-400 mt-3 italic">
                        → AI가 생성한 코드는 테스트·리뷰를 거쳐 필요한 부분만
                        채택하고, 여러 차례 리팩터링을 반복하며 구조를 단순화한
                        뒤 반영
                      </p>
                    </div>
                  </div>

                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      결과적으로,{" "}
                      <strong>
                        반복 작업 시간을 줄여 전체 개발 공수를 약 40~60% 단축
                      </strong>
                      하면서도 설계와 품질에 대한 최종 책임은 직접 지는 개발
                      방식을 유지했습니다.
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      테스트와 코드 리뷰를 통해 품질과 일관성을 확보하며 AI를
                      효과적으로 활용했습니다.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
