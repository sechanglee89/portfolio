export function Header() {
  return (
    <header className="pt-24 pb-8 bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            <span className="text-blue-600 dark:text-blue-400">
              Java Backend Developer
            </span>
            <span className="mx-3 text-slate-400 dark:text-slate-600">·</span>
            <span className="text-slate-700 dark:text-slate-300">경력 7년</span>
            <span className="mx-3 text-slate-400 dark:text-slate-600">·</span>
            <span className="text-slate-800 dark:text-slate-200">이세창</span>
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            웹 서비스 성능 개선과 안정적인 운영에 강한 Java 백엔드 개발자입니다.
          </p>
        </div>
      </div>
    </header>
  );
}
