import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  CheckCircle2,
  Zap,
  Server,
  CreditCard,
  Bell,
  Database,
  FileText,
  Clock,
  Settings,
  Users,
  Lightbulb,
  MessageSquare,
  GitBranch,
  Image,
  Gift,
  Smartphone,
  Monitor,
  Layers,
  Shield,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export function ProjectBlice() {
  const performanceData = [
    { name: "Before", value: 1500, max: 2400, x: 60, y: 45 },
    { name: "After", value: 300, max: 400, x: 30, y: 45 },
  ];

  return (
    <section id="blice" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4-1. 개요 & 역할 요약 */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-blue-600">Main Project</Badge>
                <span className="text-sm text-muted-foreground">
                  2021.01 - 2025.06 (4년 6개월)
                </span>
              </div>
              <h2 className="text-4xl font-bold mb-4">
                블라이스(Blice) 웹소설·웹툰 서비스
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                KT 고객사 웹소설/웹툰 콘텐츠 플랫폼의 운영 및 통합 기능 개발
              </p>

              <div className="space-y-4 mb-8">
                <div>
                  <h4 className="font-semibold mb-2">Role</h4>
                  <p className="text-sm text-muted-foreground">
                    백엔드 리드 개발, 성능 개선, 결제/이벤트/쿠폰/웹툰 기능
                    개발, 운영/유지보수 전반
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
                        Java 8 · Spring Framework · MyBatis
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="shrink-0">
                        Infra/DB
                      </Badge>
                      <span className="text-muted-foreground text-slate-800">
                        MariaDB 10.1.32 · Redis · Apache Kafka · Apache NiFi ·
                        Spring Batch
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="shrink-0">
                        Frontend
                      </Badge>
                      <span className="text-muted-foreground text-slate-800">
                        JSP, jQuery
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="shrink-0">
                        CI/CD
                      </Badge>
                      <span className="text-muted-foreground text-slate-800">
                        Jenkins, GitLab
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 핵심 성과 요약 */}
              <Card className="bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800">
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-3 text-blue-800 dark:text-blue-200">
                    🗒️ 핵심 성과 요약
                  </h4>
                  <ul className="space-y-1 text-sm text-blue-700 dark:text-blue-300">
                    <li>1. 메인 페이지 2s → 300–400ms (5–6배 단축)</li>
                    <li>2. 정기결제/인앱 결제 신규 구축</li>
                    <li>3. 이벤트 캐시·쿠폰·웹툰 확장</li>
                    <li>
                      4. 게시판 통합·데이터 마이그레이션 등 운영 안정성과 확장성
                      동시 달성
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="flex-1 w-full">
              <div className="rounded-xl overflow-hidden shadow-2xl border bg-white dark:bg-gray-900 relative group">
                <img
                  src="/public/images/projects/blice-main.jpg"
                  alt="Blice Service Main Screen"
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Badge className="bg-blue-600 text-white">
                    KT Blice Service
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Cases Tabs */}
        <Tabs defaultValue="architecture" className="w-full">
          <TabsList className="flex flex-wrap w-full max-w-[900px] mb-8 h-auto gap-1">
            <TabsTrigger value="architecture" className="text-xs sm:text-sm">
              시스템 아키텍처
            </TabsTrigger>
            <TabsTrigger value="case1" className="text-xs sm:text-sm">
              성능 개선
            </TabsTrigger>
            <TabsTrigger value="case2" className="text-xs sm:text-sm">
              결제 시스템
            </TabsTrigger>
            <TabsTrigger value="case3" className="text-xs sm:text-sm">
              이벤트/웹툰
            </TabsTrigger>
            <TabsTrigger value="case4" className="text-xs sm:text-sm">
              운영 최적화
            </TabsTrigger>
            <TabsTrigger value="collaboration" className="text-xs sm:text-sm">
              협업/회고
            </TabsTrigger>
          </TabsList>

          {/* 시스템 아키텍처 */}
          <TabsContent
            value="architecture"
            className="animate-in fade-in slide-in-from-bottom-4"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="text-blue-600" />
                  시스템 아키텍처
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
                        <li>• Java 8</li>
                        <li>• Spring Framework</li>
                        <li>• MyBatis</li>
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
                        <li>• JSP</li>
                        <li>• jQuery</li>
                      </ul>
                    </div>
                  </div>

                  {/* 메시징/배치 */}
                  <div className="flex items-start gap-3 p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg border border-orange-200 dark:border-orange-800">
                    <div className="p-2 bg-orange-100 dark:bg-orange-900 rounded-lg shrink-0">
                      <Layers className="w-5 h-5 text-orange-600 dark:text-orange-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">메시징/배치</h3>
                      <ul className="list-hanging text-muted-foreground mt-1 text-xs space-y-0.5">
                        <li>• Apache Kafka (3대)</li>
                        <li>• Apache NiFi</li>
                        <li>• Spring Batch</li>
                        <li>• 푸시/이메일 데몬</li>
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
                        <li>• MariaDB 10.1.32 (메인/통계 DB 분리)</li>
                        <li>• Redis (3대)</li>
                      </ul>
                    </div>
                  </div>

                  {/* 인프라/보안 */}
                  <div className="flex items-start gap-3 p-4 bg-teal-50 dark:bg-teal-950/30 rounded-lg border border-teal-200 dark:border-teal-800">
                    <div className="p-2 bg-teal-100 dark:bg-teal-900 rounded-lg shrink-0">
                      <Shield className="w-5 h-5 text-teal-600 dark:text-teal-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">인프라/보안</h3>
                      <ul className="list-hanging text-muted-foreground mt-1 text-xs space-y-0.5">
                        <li>• KT Cloud WAF Pro</li>
                        <li>• 로드밸런서</li>
                        <li>• Apache HTTPD (WEB)</li>
                        <li>• Tomcat (WAS)</li>
                        <li>• NAS</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 하단: 상세 아키텍처 다이어그램 (전체 너비) */}
                <div className="space-y-4">
                  <div className="bg-slate-900 rounded-xl p-6 text-white relative overflow-x-auto">
                    <div className="absolute top-2 right-3 opacity-50 text-xs">
                      System Architecture
                    </div>

                    <div className="min-w-[600px] py-4">
                      {/* 클라이언트 레이어 */}
                      <div className="flex justify-center mb-4">
                        <div className="border border-gray-600 rounded-lg p-3 bg-gray-800/50">
                          <div className="text-[10px] text-gray-400 mb-2 font-semibold text-center">
                            클라이언트
                          </div>
                          <div className="flex gap-3">
                            <div className="bg-blue-600 px-3 py-2 rounded text-center text-[10px]">
                              사용자 웹 브라우저
                            </div>
                            <div className="bg-blue-600 px-3 py-2 rounded text-center text-[10px]">
                              관리자 웹 브라우저
                            </div>
                            <div className="bg-blue-700 px-3 py-2 rounded text-center text-[10px]">
                              모바일 앱
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 화살표 */}
                      <div className="flex justify-center mb-4">
                        <div className="text-gray-400 text-lg">↓</div>
                      </div>

                      {/* 엣지 레이어 */}
                      <div className="flex justify-center mb-4">
                        <div className="border border-gray-600 rounded-lg p-3 bg-gray-800/50">
                          <div className="text-[10px] text-gray-400 mb-2 font-semibold text-center">
                            엣지 레이어
                          </div>
                          <div className="flex flex-col gap-2 items-center">
                            <div className="bg-red-600 px-4 py-2 rounded text-center text-[10px]">
                              KT Cloud WAF Pro
                            </div>
                            <div className="text-gray-400 text-sm">↓</div>
                            <div className="bg-orange-600 px-4 py-2 rounded text-center text-[10px]">
                              로드밸런서
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 화살표 */}
                      <div className="flex justify-center mb-4">
                        <div className="text-gray-400 text-lg">↓</div>
                      </div>

                      {/* 웹/WAS 레이어 */}
                      <div className="flex justify-center gap-8 mb-4">
                        {/* 관리자 웹 서버 */}
                        <div className="border border-gray-600 rounded-lg p-3 bg-gray-800/50">
                          <div className="text-[10px] text-gray-400 mb-2 font-semibold text-center">
                            관리자 웹 서버
                          </div>
                          <div className="flex gap-2">
                            <div className="bg-indigo-600 px-3 py-2 rounded text-center text-[10px]">
                              관리자 WEB01
                            </div>
                            <div className="bg-indigo-600 px-3 py-2 rounded text-center text-[10px]">
                              관리자 WEB02
                            </div>
                          </div>
                        </div>

                        {/* 사용자 웹 서버 */}
                        <div className="border border-gray-600 rounded-lg p-3 bg-gray-800/50">
                          <div className="text-[10px] text-gray-400 mb-2 font-semibold text-center">
                            사용자 웹 서버
                          </div>
                          <div className="flex gap-2">
                            <div className="bg-indigo-600 px-3 py-2 rounded text-center text-[10px]">
                              사용자 WEB01
                            </div>
                            <div className="bg-indigo-600 px-3 py-2 rounded text-center text-[10px]">
                              사용자 WEB02
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 화살표 */}
                      <div className="flex justify-center mb-4">
                        <div className="text-gray-400 text-lg">↓</div>
                      </div>

                      {/* WAS 레이어 + 배치 */}
                      <div className="flex justify-center gap-6 mb-4">
                        {/* 배치/통계 처리 */}
                        <div className="border border-gray-600 rounded-lg p-3 bg-gray-800/50">
                          <div className="text-[10px] text-gray-400 mb-2 font-semibold text-center">
                            배치/통계 처리
                          </div>
                          <div className="flex flex-col gap-2 items-center">
                            <div className="bg-teal-600 px-3 py-2 rounded text-center text-[10px]">
                              Apache NiFi
                            </div>
                            <div className="text-gray-400 text-sm">↓</div>
                            <div className="bg-teal-700 px-3 py-2 rounded text-center text-[10px]">
                              배치 서버
                            </div>
                          </div>
                        </div>

                        {/* 관리자 WAS 서버 */}
                        <div className="border border-gray-600 rounded-lg p-3 bg-gray-800/50">
                          <div className="text-[10px] text-gray-400 mb-2 font-semibold text-center">
                            관리자 WAS 서버
                          </div>
                          <div className="flex gap-2">
                            <div className="bg-purple-600 px-3 py-2 rounded text-center text-[10px]">
                              관리자 WAS01
                            </div>
                            <div className="bg-purple-600 px-3 py-2 rounded text-center text-[10px]">
                              관리자 WAS02
                            </div>
                          </div>
                        </div>

                        {/* 사용자 WAS 서버 */}
                        <div className="border border-gray-600 rounded-lg p-3 bg-gray-800/50">
                          <div className="text-[10px] text-gray-400 mb-2 font-semibold text-center">
                            사용자 WAS 서버
                          </div>
                          <div className="flex gap-2">
                            <div className="bg-purple-600 px-3 py-2 rounded text-center text-[10px]">
                              사용자 WAS01
                            </div>
                            <div className="bg-purple-600 px-3 py-2 rounded text-center text-[10px]">
                              사용자 WAS02
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 화살표 */}
                      <div className="flex justify-center mb-4">
                        <div className="text-gray-400 text-lg">↓</div>
                      </div>

                      {/* 하단 인프라 레이어 */}
                      <div className="flex justify-center gap-4">
                        {/* 이미지 처리 및 스토리지 */}
                        <div className="border border-gray-600 rounded-lg p-3 bg-gray-800/50">
                          <div className="text-[10px] text-gray-400 mb-2 font-semibold text-center">
                            이미지 처리 및 스토리지
                          </div>
                          <div className="flex flex-col gap-2 items-center">
                            <div className="flex gap-1">
                              <div className="bg-red-700 px-2 py-1.5 rounded text-center text-[9px]">
                                Redis 01
                              </div>
                              <div className="bg-red-700 px-2 py-1.5 rounded text-center text-[9px]">
                                Redis 02
                              </div>
                              <div className="bg-red-700 px-2 py-1.5 rounded text-center text-[9px]">
                                Redis 03
                              </div>
                            </div>
                            <div className="text-gray-400 text-sm">↓</div>
                            <div className="flex gap-1">
                              <div className="bg-amber-600 px-2 py-1.5 rounded text-center text-[9px]">
                                CDS 01
                              </div>
                              <div className="bg-amber-600 px-2 py-1.5 rounded text-center text-[9px]">
                                CDS 02
                              </div>
                              <div className="bg-amber-600 px-2 py-1.5 rounded text-center text-[9px]">
                                CDS 03
                              </div>
                            </div>
                            <div className="text-gray-400 text-sm">↓</div>
                            <div className="bg-amber-700 px-3 py-2 rounded text-center text-[10px]">
                              NAS 파일 저장소
                            </div>
                          </div>
                        </div>

                        {/* 데이터베이스 */}
                        <div className="border border-gray-600 rounded-lg p-3 bg-gray-800/50">
                          <div className="text-[10px] text-gray-400 mb-2 font-semibold text-center">
                            데이터베이스
                          </div>
                          <div className="flex flex-col gap-2 items-center">
                            <div className="bg-green-700 px-3 py-2 rounded text-center text-[10px]">
                              통계 DB UV PV
                            </div>
                            <div className="bg-green-600 px-3 py-2 rounded text-center text-[10px]">
                              메인 DB
                            </div>
                          </div>
                        </div>

                        {/* 메시징/데몬 서버 */}
                        <div className="border border-gray-600 rounded-lg p-3 bg-gray-800/50">
                          <div className="text-[10px] text-gray-400 mb-2 font-semibold text-center">
                            메시징/데몬 서버
                          </div>
                          <div className="flex flex-col gap-2 items-center">
                            <div className="flex gap-1">
                              <div className="bg-orange-600 px-2 py-1.5 rounded text-center text-[9px]">
                                Kafka 01
                              </div>
                              <div className="bg-orange-600 px-2 py-1.5 rounded text-center text-[9px]">
                                Kafka 02
                              </div>
                              <div className="bg-orange-600 px-2 py-1.5 rounded text-center text-[9px]">
                                Kafka 03
                              </div>
                            </div>
                            <div className="text-gray-400 text-sm">↓</div>
                            <div className="bg-orange-700 px-3 py-2 rounded text-center text-[10px]">
                              푸시/이메일 데몬
                            </div>
                            <div className="text-gray-400 text-sm">↓</div>
                            <div className="bg-gray-600 px-3 py-2 rounded text-center text-[10px]">
                              FCM / 메일 서비스
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 범례 */}
                    <div className="flex flex-wrap items-center gap-4 mt-6 pt-4 border-t border-gray-700 text-[9px] text-gray-400">
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
                        <span>웹 서버</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-2.5 h-2.5 bg-purple-600 rounded"></div>
                        <span>WAS</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-2.5 h-2.5 bg-teal-600 rounded"></div>
                        <span>배치</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-2.5 h-2.5 bg-green-600 rounded"></div>
                        <span>DB</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-2.5 h-2.5 bg-orange-600 rounded"></div>
                        <span>메시징</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-2.5 h-2.5 bg-red-700 rounded"></div>
                        <span>캐시</span>
                      </div>
                    </div>
                  </div>

                  {/* 데이터 흐름 설명 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-semibold mb-2 text-sm flex items-center gap-2">
                        <Bell className="w-4 h-4 text-orange-500" />
                        알림 플로우
                      </h4>
                      <div className="flex flex-wrap items-center gap-2 text-xs">
                        <div className="bg-purple-600 text-white px-2 py-1 rounded">
                          WAS
                        </div>
                        <span className="text-muted-foreground">→</span>
                        <div className="bg-orange-600 text-white px-2 py-1 rounded">
                          Kafka
                        </div>
                        <span className="text-muted-foreground">→</span>
                        <div className="bg-orange-700 text-white px-2 py-1 rounded">
                          데몬
                        </div>
                        <span className="text-muted-foreground">→</span>
                        <div className="bg-gray-600 text-white px-2 py-1 rounded">
                          FCM/메일
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-semibold mb-2 text-sm flex items-center gap-2">
                        <CreditCard className="w-4 h-4 text-purple-500" />
                        결제 플로우
                      </h4>
                      <div className="flex flex-wrap items-center gap-2 text-xs">
                        <div className="bg-blue-600 text-white px-2 py-1 rounded">
                          Client
                        </div>
                        <span className="text-muted-foreground">→</span>
                        <div className="bg-purple-600 text-white px-2 py-1 rounded">
                          WAS
                        </div>
                        <span className="text-muted-foreground">→</span>
                        <div className="bg-indigo-600 text-white px-2 py-1 rounded">
                          LUPIN/인앱
                        </div>
                        <span className="text-muted-foreground">→</span>
                        <div className="bg-green-600 text-white px-2 py-1 rounded">
                          DB
                        </div>
                        <span className="text-muted-foreground">→</span>
                        <div className="bg-teal-600 text-white px-2 py-1 rounded">
                          NiFi/Batch
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 4-2. 핵심 사례 1: 메인 페이지 성능 개선 */}
          <TabsContent
            value="case1"
            className="animate-in fade-in slide-in-from-bottom-4"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="text-yellow-500" />
                  메인 페이지 성능 개선: 2초 → 300-400ms (5-6배 단축)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg flex items-center gap-2">
                      <span className="text-red-500">☠️</span> 문제 상황
                    </h3>
                    <div className="text-muted-foreground space-y-2 text-sm bg-muted/50 p-4 rounded-lg">
                      <p>
                        1. 메인 페이지 체감 속도가 지연되어왔고, 특정 시점 이후{" "}
                        <strong>확연히 심화</strong>됨
                      </p>
                      <p>
                        2. NiFi가 관리하는 10분 주기의 배치 중{" "}
                        <strong>삭제 쿼리가 1분 이상</strong> 소요
                      </p>
                      <p>→ 동시간대 트래픽과 맞물려 메인 조회도 지연</p>
                    </div>

                    <h3 className="font-semibold text-lg flex items-center gap-2 mt-6">
                      <span className="text-blue-500">📚</span> 분석
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                        <span>
                          삭제 조건이{" "}
                          <strong>PK가 아닌 보조 인덱스 컬럼</strong>이었고,
                          실행계획상 <strong>풀스캔</strong> 수행
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                        <span>
                          "보조 인덱스 탐색 → PK lookup → 삭제" 절차에서 대상
                          건수 증가 시 <strong>비용 기하급수적 증가</strong>
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                        <span>
                          메인 쿼리도{" "}
                          <code className="bg-muted px-1 rounded">
                            Using temporary; Using filesort
                          </code>{" "}
                          발생
                        </span>
                      </li>
                    </ul>

                    <h3 className="font-semibold text-lg flex items-center gap-2 mt-6">
                      <span className="text-green-500">💡</span> 해결
                    </h3>
                    <div className="text-sm bg-green-50 dark:bg-green-950/30 p-4 rounded-lg border border-green-200 dark:border-green-800">
                      <p className="mb-2">
                        <strong>복합 인덱스</strong>로 필터+정렬+PK lookup을{" "}
                        <strong>한 번에 커버</strong>하도록 설계
                      </p>
                      <div className="bg-muted/50 p-3 rounded text-xs mt-3 space-y-1">
                        <p>• PK: test_seq</p>
                        <p>• 보조 인덱스: sub_seq</p>
                        <p>
                          • 문제 쿼리: DELETE FROM remove_test_table WHERE
                          sub_seq = 1
                        </p>
                        <p className="text-green-600 dark:text-green-400 font-semibold">
                          • 추가 인덱스: (sub_seq, test_seq) → 보조 인덱스
                          단계에서 PK까지 커버링
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted/30 rounded-xl p-6 flex flex-col items-center justify-center">
                    <h4 className="text-sm font-medium text-muted-foreground mb-4">
                      응답속도 비교 (ms)
                    </h4>
                    <div className="w-full h-[250px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={performanceData}
                          layout="vertical"
                          barSize={30}
                        >
                          <CartesianGrid
                            strokeDasharray="3 3"
                            horizontal={false}
                          />
                          <XAxis type="number" hide />
                          <YAxis dataKey="name" type="category" width={60} />
                          <Tooltip
                            cursor={{ fill: "transparent" }}
                            formatter={(value, name) => {
                              const item = performanceData.find(
                                (d) => d.value === value
                              );
                              if (item && name === "value") {
                                return [
                                  `${item.value}-${item.max}ms`,
                                  "응답시간 범위",
                                ];
                              }
                              return [`${value}ms`, "응답시간"];
                            }}
                          />
                          <Bar
                            dataKey="value"
                            fill="#3b82f6"
                            radius={[0, 4, 4, 0]}
                            label={{
                              position: "right",
                              fill: "#666",
                              content: (props: any) => {
                                const { x, y, width, index } = props;
                                const item = performanceData[index];
                                if (!item) return null;
                                return (
                                  <text
                                    x={(x || 0) + (width || 0) - item.x}
                                    y={(y || 0) + item.y}
                                    fill="#666"
                                    fontSize={12}
                                  >
                                    {`${item.value}-${item.max}ms`}
                                  </text>
                                );
                              },
                            }}
                          />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="mt-4 text-center space-y-2">
                      <Badge className="bg-green-600">✅ 5-6배 성능 향상</Badge>
                      <p className="text-xs text-muted-foreground">
                        삭제 배치 처리 시간 안정화, 피크 시간대 지연 민감도 완화
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 4-3. 핵심 사례 2: 정기결제 & 인앱 결제 */}
          <TabsContent
            value="case2"
            className="animate-in fade-in slide-in-from-bottom-4"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="text-purple-500" />
                  정기결제 & 인앱 결제 연동
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    {/* 문제 */}
                    <div className="bg-red-50 dark:bg-red-950/30 p-4 rounded-lg border border-red-200 dark:border-red-800">
                      <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">
                        ☠️ 문제
                      </h4>
                      <ul className="text-sm space-y-1 text-red-700 dark:text-red-300">
                        <li>
                          • 신규 정책(셀렉트 이용권/캐시) 도입으로 정기결제 필요
                        </li>
                        <li>• 모바일 인앱 결제 연동 요구</li>
                        <li>
                          • 느린결제/실패 재시도, 증액·전환 시 사용자 동의 절차
                          등 복잡한 시나리오 대응 필요
                        </li>
                      </ul>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg shrink-0">
                        <CreditCard className="w-6 h-6 text-blue-600 dark:text-blue-300" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">
                          LUPIN + BillKey 정기결제
                        </h3>
                        <p className="text-muted-foreground mt-1 text-sm">
                          LUPIN 모듈 + BillKey 발급 기반 정기결제 로직 설계
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-orange-100 dark:bg-orange-900 rounded-lg shrink-0">
                        <Clock className="w-6 h-6 text-orange-600 dark:text-orange-300" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">스케줄 전략</h3>
                        <ul className="text-muted-foreground mt-1 text-sm space-y-1">
                          <li>
                            • 오전 1회/오후 1회 <strong>2회 결제 처리</strong>
                          </li>
                          <li>
                            • 오전 실패 고객에게 <strong>알림 발송</strong> 후
                            오후 재시도
                          </li>
                          <li>
                            • 오후 재시도까지 실패 시{" "}
                            <strong>정기결제 해지</strong> 처리
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg shrink-0">
                        <Server className="w-6 h-6 text-green-600 dark:text-green-300" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">
                          Google In-App Billing 연동
                        </h3>
                        <p className="text-muted-foreground mt-1 text-sm">
                          play token + packageName + productId 기반{" "}
                          <strong>영수증 검증</strong>. 검증 실패 시 결제
                          프로세스 중단 & 실패 이력 저장하여 VOC 대응 근거 확보.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg shrink-0">
                        <Bell className="w-6 h-6 text-purple-600 dark:text-purple-300" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">
                          Kafka 기반 비동기 알림
                        </h3>
                        <p className="text-muted-foreground mt-1 text-sm">
                          결제 증액·전환 알림을 Kafka 이벤트로 비동기 전파.{" "}
                          <strong>사용자 동의 프로세스</strong>(다크패턴 방지)
                          연결.
                        </p>
                      </div>
                    </div>

                    <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg border border-green-200 dark:border-green-800">
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                        ✅ 성과
                      </h4>
                      <ul className="text-sm space-y-1 text-green-700 dark:text-green-300">
                        <li>
                          • 이중 런(오전/오후) 전략으로 정기결제 성공률 소폭
                          상승, 실패 케이스 관리 표준화
                        </li>
                        <li>• 영수증 검증 실패 건 오탐/중복 청구 방지</li>
                        <li>• CS 대응 속도 향상</li>
                      </ul>
                    </div>
                  </div>

                  {/* Architecture Diagram - 3개 플로우 */}
                  <div className="bg-slate-900 rounded-xl p-6 text-white relative overflow-x-auto">
                    <div className="absolute top-2 right-3 opacity-50 text-xs">
                      Payment Flow
                    </div>

                    <div className="min-w-[1100px] py-4">
                      {/* 3개 섹션 가로 배치 */}
                      <div className="flex gap-6 justify-center">
                        {/* 정기결제 배치 LUPIN + BillKey */}
                        <div className="border border-gray-600 rounded-lg p-4 bg-gray-800/50 flex-1 max-w-[360px]">
                          <div className="text-[10px] text-gray-400 mb-3 font-semibold text-center border-b border-gray-600 pb-2">
                            정기결제 배치 LUPIN + BillKey
                          </div>
                          <div className="flex flex-col items-center gap-2">
                            <div className="bg-blue-600 px-3 py-1.5 rounded text-[10px] text-center">
                              오전 배치 시작
                              <br />
                              스케줄러 실행
                            </div>
                            <div className="text-gray-400 text-xs">↓</div>
                            <div className="bg-indigo-600 px-3 py-1.5 rounded text-[10px] text-center">
                              BillKey 기반 정기결제 요청
                              <br />
                              LUPIN 모듈 호출
                            </div>
                            <div className="text-gray-400 text-xs">↓</div>
                            <div className="bg-yellow-600 px-3 py-1.5 rounded-full text-[10px] text-center">
                              결제 성공 여부
                            </div>
                            <div className="flex gap-8 mt-1">
                              <div className="flex flex-col items-center">
                                <span className="text-[9px] text-gray-400 mb-1">
                                  아니오
                                </span>
                                <div className="text-gray-400 text-xs">↓</div>
                              </div>
                              <div className="flex flex-col items-center">
                                <span className="text-[9px] text-gray-400 mb-1">
                                  예
                                </span>
                                <div className="text-gray-400 text-xs">↓</div>
                              </div>
                            </div>
                            <div className="flex gap-4">
                              <div className="flex flex-col items-center gap-2">
                                <div className="bg-red-600 px-2 py-1 rounded text-[9px] text-center">
                                  실패 이력 저장
                                </div>
                                <div className="text-gray-400 text-[10px]">
                                  ↓
                                </div>
                                <div className="bg-orange-600 px-2 py-1 rounded text-[9px] text-center">
                                  실패 고객에게 알림 발송
                                  <br />
                                  오후 재시도 안내
                                </div>
                                <div className="text-gray-400 text-[10px]">
                                  ↓
                                </div>
                                <div className="bg-blue-600 px-2 py-1 rounded text-[9px] text-center">
                                  오후 배치 시작
                                  <br />
                                  재시도 스케줄 실행
                                </div>
                                <div className="text-gray-400 text-[10px]">
                                  ↓
                                </div>
                                <div className="bg-indigo-600 px-2 py-1 rounded text-[9px] text-center">
                                  BillKey 기반 재결제 요청
                                </div>
                                <div className="text-gray-400 text-[10px]">
                                  ↓
                                </div>
                                <div className="bg-yellow-600 px-2 py-1 rounded-full text-[9px] text-center">
                                  재결제 성공 여부
                                </div>
                                <div className="flex gap-4 mt-1">
                                  <div className="flex flex-col items-center">
                                    <span className="text-[8px] text-gray-400">
                                      예
                                    </span>
                                    <div className="text-gray-400 text-[10px]">
                                      ↓
                                    </div>
                                    <div className="bg-green-600 px-2 py-1 rounded text-[8px] text-center">
                                      정상 결제 처리
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-center">
                                    <span className="text-[8px] text-gray-400">
                                      아니오
                                    </span>
                                    <div className="text-gray-400 text-[10px]">
                                      ↓
                                    </div>
                                    <div className="bg-red-700 px-2 py-1 rounded text-[8px] text-center">
                                      재실패 이력 저장
                                      <br />
                                      정기결제 해지 처리
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-center">
                                <div className="bg-green-600 px-2 py-1 rounded text-[9px] text-center">
                                  정상 결제 처리
                                  <br />
                                  이용권 및 캐시 유지
                                  <br />
                                  로그 저장
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* 모바일 인앱 결제 Google In-App Billing */}
                        <div className="border border-gray-600 rounded-lg p-4 bg-gray-800/50 flex-1 max-w-[280px]">
                          <div className="text-[10px] text-gray-400 mb-3 font-semibold text-center border-b border-gray-600 pb-2">
                            모바일 인앱 결제 Google In-App Billing
                          </div>
                          <div className="flex flex-col items-center gap-2">
                            <div className="bg-blue-600 px-3 py-1.5 rounded text-[10px] text-center">
                              모바일 앱에서 인앱 결제 요청
                            </div>
                            <div className="text-gray-400 text-xs">↓</div>
                            <div className="bg-indigo-600 px-3 py-1.5 rounded text-[10px] text-center">
                              영수증 수신
                              <br />
                              playToken packageName
                              <br />
                              productId
                            </div>
                            <div className="text-gray-400 text-xs">↓</div>
                            <div className="bg-purple-600 px-3 py-1.5 rounded text-[10px] text-center">
                              Google 서버로 영수증 검증 요청
                            </div>
                            <div className="text-gray-400 text-xs">↓</div>
                            <div className="bg-yellow-600 px-3 py-1.5 rounded-full text-[10px] text-center">
                              검증 성공 여부
                            </div>
                            <div className="flex gap-8 mt-1">
                              <div className="flex flex-col items-center">
                                <span className="text-[9px] text-gray-400 mb-1">
                                  아니오
                                </span>
                                <div className="text-gray-400 text-xs">↓</div>
                                <div className="bg-red-600 px-2 py-1 rounded text-[9px] text-center">
                                  결제 프로세스 중단
                                </div>
                                <div className="text-gray-400 text-[10px]">
                                  ↓
                                </div>
                                <div className="bg-red-700 px-2 py-1 rounded text-[9px] text-center">
                                  검증 실패 이력 저장
                                </div>
                              </div>
                              <div className="flex flex-col items-center">
                                <span className="text-[9px] text-gray-400 mb-1">
                                  예
                                </span>
                                <div className="text-gray-400 text-xs">↓</div>
                                <div className="bg-green-600 px-2 py-1 rounded text-[9px] text-center">
                                  결제 승인
                                  <br />
                                  이용권 및 캐시 지급
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Kafka 기반 비동기 알림 및 동의 */}
                        <div className="border border-gray-600 rounded-lg p-4 bg-gray-800/50 flex-1 max-w-[280px]">
                          <div className="text-[10px] text-gray-400 mb-3 font-semibold text-center border-b border-gray-600 pb-2">
                            Kafka 기반 비동기 알림 및 동의
                          </div>
                          <div className="flex flex-col items-center gap-2">
                            <div className="bg-blue-600 px-3 py-1.5 rounded text-[10px] text-center">
                              결제 증액 또는 전환 이벤트 생성
                            </div>
                            <div className="text-gray-400 text-xs">↓</div>
                            <div className="bg-orange-600 px-3 py-1.5 rounded text-[10px] text-center border-2 border-orange-400">
                              Kafka 토픽 발행
                            </div>
                            <div className="text-gray-400 text-xs">↓</div>
                            <div className="bg-purple-600 px-3 py-1.5 rounded text-[10px] text-center">
                              알림 서비스에서 이벤트 소비
                            </div>
                            <div className="text-gray-400 text-xs">↓</div>
                            <div className="bg-indigo-600 px-3 py-1.5 rounded text-[10px] text-center">
                              사용자에게 증액 또는 전환
                              <br />
                              알림 발송
                            </div>
                            <div className="text-gray-400 text-xs">↓</div>
                            <div className="bg-yellow-600 px-3 py-1.5 rounded-full text-[10px] text-center">
                              사용자 동의 여부
                            </div>
                            <div className="flex gap-8 mt-1">
                              <div className="flex flex-col items-center">
                                <span className="text-[9px] text-gray-400 mb-1">
                                  예
                                </span>
                                <div className="text-gray-400 text-xs">↓</div>
                                <div className="bg-green-600 px-2 py-1 rounded text-[9px] text-center">
                                  상품 증액 또는 전환 처리
                                  <br />
                                  이용권 및 캐시 변경
                                </div>
                              </div>
                              <div className="flex flex-col items-center">
                                <span className="text-[9px] text-gray-400 mb-1">
                                  아니오
                                </span>
                                <div className="text-gray-400 text-xs">↓</div>
                                <div className="bg-gray-600 px-2 py-1 rounded text-[9px] text-center">
                                  변경 취소
                                  <br />
                                  기존 상태 유지
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 범례 */}
                    <div className="flex flex-wrap items-center gap-4 mt-4 pt-3 border-t border-gray-700 text-[9px] text-gray-400">
                      <span className="font-semibold">범례:</span>
                      <div className="flex items-center gap-1">
                        <div className="w-2.5 h-2.5 bg-blue-600 rounded"></div>
                        <span>시작/요청</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-2.5 h-2.5 bg-indigo-600 rounded"></div>
                        <span>처리 단계</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-2.5 h-2.5 bg-yellow-600 rounded-full"></div>
                        <span>분기 조건</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-2.5 h-2.5 bg-green-600 rounded"></div>
                        <span>성공</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-2.5 h-2.5 bg-red-600 rounded"></div>
                        <span>실패</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-2.5 h-2.5 bg-orange-600 rounded"></div>
                        <span>Kafka</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 4-4. 핵심 사례 3: 이벤트 캐시 & 웹툰 확장 */}
          <TabsContent
            value="case3"
            className="animate-in fade-in slide-in-from-bottom-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Gift className="text-green-600" />
                    이벤트 캐시 자동 지급 & 정산 제외
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-sm space-y-3">
                    {/* 문제 */}
                    <div className="bg-red-50 dark:bg-red-950/30 p-3 rounded-lg border border-red-200 dark:border-red-800">
                      <h4 className="font-semibold text-red-800 dark:text-red-200 mb-1">
                        ☠️ 문제
                      </h4>
                      <ul className="text-red-700 dark:text-red-300 space-y-1">
                        <li>
                          • 이벤트 참여 시점/조건이 다양하여 자동 지급 시나리오
                          표준화 필요
                        </li>
                        <li>
                          • 이벤트 캐시와 구매 캐시가 혼용되어 정산 시 회계
                          정합성 이슈
                        </li>
                      </ul>
                    </div>

                    <div className="bg-muted/50 p-3 rounded-lg">
                      <h4 className="font-semibold mb-1">📚 접근</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>
                          • 구분값 추가로 이벤트 캐시와 구매 캐시{" "}
                          <strong>명확히 분리</strong>
                        </li>
                        <li>
                          • 즉시 발송: 관리자 서버가 즉시 처리
                          <br />• 예약 발송: 배치가 예약 시각 도달 시 처리
                        </li>
                        <li>
                          • 대상 사용자의 충전 캐시 테이블에 이벤트 캐시를 직접
                          적립
                        </li>
                        <li>
                          • 푸시 발송 시 Kafka로 발송 요청 → 푸시 데몬 처리
                        </li>
                        <li>
                          • 정산 단계에서 <strong>이벤트 캐시 제외</strong> 규칙
                          고정 적용
                        </li>
                      </ul>
                    </div>
                    <div className="bg-green-50 dark:bg-green-950/30 p-3 rounded-lg border border-green-200 dark:border-green-800">
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-1">
                        ✅ 성과
                      </h4>
                      <ul className="text-green-700 dark:text-green-300 space-y-1">
                        <li>• 이벤트성 지급 자동화로 운영 비용/오류율 감소</li>
                        <li>• 정산 시 구매 캐시만 반영되어 회계 정합성 확보</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="text-purple-600" />
                    웹툰 시스템 신규 구축
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-sm space-y-3">
                    <div className="bg-red-50 dark:bg-red-950/30 p-3 rounded-lg border border-red-200 dark:border-red-800">
                      <h4 className="font-semibold text-red-800 dark:text-red-200 mb-1">
                        ☠️ 문제
                      </h4>
                      <ul className="text-red-700 dark:text-red-300 space-y-1">
                        <li>
                          • 기존 이용권 타입이 <strong>최대 2글자</strong>로
                          설계됨
                        </li>
                        <li>
                          • 웹툰 도입시 유료/무료/소장/대여 등 구분 확장에 따른
                          표현의 한계
                        </li>
                        <li>
                          • 단일 DB 환경이며 DB 버전 이슈로{" "}
                          <strong>온라인 DDL 불가</strong> + 무중단 운영 요구
                        </li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <h4 className="font-semibold mb-1">💡 해결</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>
                          • 1차 설계: 3글자 타입 제안 (예: WO1 =
                          Webtoon-Own-유형1, WR1 = Webtoon-Rental-유형1)
                        </li>
                        <li>
                          • 서버 중단 없이 전환 불가능하여 최종적으로{" "}
                          <strong>2글자 타입 유지</strong> 결정
                        </li>
                        <li>
                          • 통계·정산은 이용권 타입 기준으로 웹소설/웹툰 구분
                        </li>
                      </ul>
                    </div>
                    <div className="bg-green-50 dark:bg-green-950/30 p-3 rounded-lg border border-green-200 dark:border-green-800">
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-1">
                        ✅ 성과
                      </h4>
                      <ul className="text-green-700 dark:text-green-300 space-y-1">
                        <li>• 스키마 대규모 변경 없이 웹툰 도입/운영 안정화</li>
                        <li>• 타입 기반 집계로 통계/정산의 연속성 유지</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* 4-5. 핵심 사례 4: 운영 최적화 */}
          <TabsContent
            value="case4"
            className="animate-in fade-in slide-in-from-bottom-4"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="text-gray-600" />
                  운영 고도화 및 품질 관리
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* 게시판 통합 */}
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Database className="w-4 h-4 text-blue-500" />
                      게시판 기능 통합 & 마이그레이션
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 단일 DB 환경에서 신규 테이블 먼저 생성</li>
                      <li>• 1차 마이그레이션 후 배포</li>
                      <li>• 증분 데이터 추가 마이그레이션으로 무중단 전환</li>
                      <li>• 기존 테이블 참조를 전부 신규 테이블로 교체</li>
                    </ul>
                  </div>

                  {/* 이미지 리사이징 */}
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Image className="w-4 h-4 text-purple-500" />
                      웹툰 표지 이미지 리사이징 최적화
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>
                        • 단일 이미지 PC/MW 공용 사용 시 확대 표시 퀄리티 저하
                        (계단 현상)
                      </li>
                      <li>• 기존 리사이징 방식 개선 전략 채택</li>
                      <li>
                        • 가장자리/텍스트 영역이 더 부드럽게 표시, 전체 체감
                        화질 개선
                      </li>
                    </ul>
                  </div>

                  {/* 기다무 & 쿠폰 */}
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-green-500" />
                      기다무 & 쿠폰/모바일 선택 UI
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 기다리면무료(기다무) 실행 딜레이 보완</li>
                      <li>• 고객 대기 체감 감소</li>
                      <li>• 분산된 쿠폰 등록 화면 통합</li>
                      <li>• 모바일 서비스 선택 UI를 리스트형 팝업으로 개선</li>
                    </ul>
                  </div>

                  {/* 예약 공개 배치 */}
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-yellow-500" />
                      작품 예약 공개 배치 안정화
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 문제: 예약 시각에 즉시 반영되지 않는 이슈</li>
                      <li>• 원인: 후속 삭제 단계에서 데드락 발생 → 롤백</li>
                      <li>• 해결: 예약 공개는 chunk 기반, 후속 삭제는 분리</li>
                      <li>• 성과: 즉시 공개율 회복, 데드락 재발 감소</li>
                    </ul>
                  </div>

                  {/* 엑셀 최적화 */}
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <FileText className="w-4 h-4 text-orange-500" />
                      엑셀 다운로드/업로드 최적화
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 문제: 관리자 서버 메모리 부족으로 빈번한 다운</li>
                      <li>
                        • 다운로드: XSSFWorkbook →{" "}
                        <strong>SXSSFWorkbook</strong>(스트리밍), 10,000행 단위
                        처리
                      </li>
                      <li>
                        • 업로드: XSSFWorkbook → <strong>SAX 방식</strong>으로
                        메모리 최소화
                      </li>
                    </ul>
                  </div>

                  {/* CI/CD */}
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <GitBranch className="w-4 h-4 text-teal-500" />
                      릴리즈 & 품질 관리
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• GitLab → Jenkins CI/CD 빌드·배포 자동화</li>
                      <li>• 배포 전용 브랜치 운영</li>
                      <li>• 롤백 시 직전 브랜치 재빌드 배포</li>
                      <li>
                        • Explain/실행 시간 정기 점검, 릴리즈 전 회귀 테스트
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 협업/회고 */}
          <TabsContent
            value="collaboration"
            className="animate-in fade-in slide-in-from-bottom-4"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* 협업 방식 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="text-blue-600" />
                    협업 방식
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg shrink-0">
                      <MessageSquare className="w-6 h-6 text-blue-600 dark:text-blue-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">요구사항 정제</h3>
                      <p className="text-muted-foreground mt-1 text-sm">
                        고객사 용어가 내부 정의와 다른 경우가 잦아,{" "}
                        <strong>반복 확인</strong>을 통해 의미를 확정 (지표
                        정의/집계 단위/기간 기준 등 사전 합의)
                      </p>
                      <div className="mt-3 p-3 bg-muted/50 rounded-lg text-xs">
                        <p className="font-semibold mb-1">
                          🗒️ 합의 사례 (셀렉트)
                        </p>
                        <p className="text-muted-foreground">
                          동일 DI에 대해 "셀렉트 요금제"와 "셀렉트 사용자"
                          용어가 혼용되어 통계 정의 혼선 발생 → 고객사와 협의해
                          "셀렉트 사용자"로 용어 통일 → 이후 전 영역에서 동일
                          용어 사용
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg shrink-0">
                      <FileText className="w-6 h-6 text-green-600 dark:text-green-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">문서화 실무</h3>
                      <p className="text-muted-foreground mt-1 text-sm">
                        별도 포맷 문서보다는 <strong>Redmine 일감/댓글</strong>
                        에 히스토리를 상세 기록하여, 누구나 변경 과정과 근거를
                        추적 가능하도록 유지
                      </p>
                      <p className="text-muted-foreground mt-1 text-sm">
                        * 특정 상황(장애 회고/정책 변경 등)에는 별도 정리 문서로
                        보강
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-orange-100 dark:bg-orange-900 rounded-lg shrink-0">
                      <Smartphone className="w-6 h-6 text-orange-600 dark:text-orange-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">
                        커뮤니케이션 채널
                      </h3>
                      <p className="text-muted-foreground mt-1 text-sm">
                        온/오프라인 회의를 통해 <strong>일감 단위</strong>로
                        신속 합의 (온라인 채널: Redmine, 카카오톡, 유선전화 등)
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 회고 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="text-yellow-500" />
                    회고
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-yellow-50 dark:bg-yellow-950/30 rounded-lg border border-yellow-200 dark:border-yellow-800">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">1️⃣</div>
                      <div>
                        <h4 className="font-semibold text-yellow-800 dark:text-yellow-200">
                          분석/설계의 우선순위
                        </h4>
                        <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                          어떤 기능이든 사전 <strong>분석·설계</strong>가
                          핵심이며, 발생 가능한{" "}
                          <strong>예외/장애 시나리오</strong>를 먼저 설계해
                          두어야 함
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-800">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">2️⃣</div>
                      <div>
                        <h4 className="font-semibold text-red-800 dark:text-red-200">
                          수익 직결 기능의 엄격함
                        </h4>
                        <p className="text-sm text-red-700 dark:text-red-300 mt-1">
                          결제 등 핵심 도메인은{" "}
                          <strong>꼼꼼한 설계와 지속 모니터링</strong>이 필수
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">3️⃣</div>
                      <div>
                        <h4 className="font-semibold text-green-800 dark:text-green-200">
                          숫자가 지닌 설득의 가치
                        </h4>
                        <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                          성능 개선은 반드시 <strong>전/후 지표</strong>
                          (응답시간, RPS, 오류율 등)로 증명
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">4️⃣</div>
                      <div>
                        <h4 className="font-semibold text-blue-800 dark:text-blue-200">
                          커뮤니케이션의 힘
                        </h4>
                        <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                          작은 의문도 <strong>즉시 확인</strong>하고 용어/정책을
                          명확히 해야 오해와 재작업을 줄일 수 있음
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
