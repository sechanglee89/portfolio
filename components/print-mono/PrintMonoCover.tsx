export function PrintMonoCover() {
  return (
    <>
      <div className="print-mono-cover page">
        {/* 프로필 사진 */}
        <img
          src="/images/profiles/profile.jpg"
          alt="이세창"
          className="profile-image"
        />

        <h1 className="title">
          <span>이세창</span>
          <span className="mx-2 text-slate-400">·</span>
          <span>Java Backend Developer</span>
        </h1>

        <p className="subtitle">
          웹 서비스 성능 개선과 안정적인 운영에 강한 백엔드 개발자
        </p>

        <div className="mt-6">
          <span className="print-badge print-badge-primary text-[11pt] px-4 py-1">
            경력 7년차
          </span>
        </div>

        <div className="contact-info mt-8 flex items-center justify-center gap-2 text-sm text-slate-600">
          <a
            href="mailto:peersc@naver.com"
            className="font-medium hover:underline"
          >
            peersc@naver.com
          </a>
          <span className="text-slate-400">·</span>
          <span>Portfolio 2025</span>
        </div>
      </div>

      <div className="page-break"></div>
    </>
  );
}
