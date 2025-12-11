export function PrintCover() {
  return (
    <>
      <div className="print-cover page">
        {/* 프로필 사진 */}
        <img
          src="/images/profiles/profile.jpg"
          alt="이세창"
          className="profile-image"
        />

        {/* 타이틀 */}
        <h1 className="title">Java Backend Developer</h1>

        {/* 부제 */}
        <p className="subtitle">
          웹 서비스 성능 개선과 안정적인 운영에 강한 백엔드 개발자
        </p>

        {/* 이름 */}
        <p className="name">이세창</p>

        {/* 경력 요약 */}
        <div className="mt-8 text-center">
          <p className="text-lg text-slate-600">경력 7년차</p>
        </div>

        {/* 연락처 */}
        <div className="contact-info">
          <p>📧 peersc@naver.com</p>
        </div>

        {/* 작성일 */}
        <div className="mt-12 text-sm text-slate-400">
          <p>Portfolio 2025</p>
        </div>
      </div>

      {/* 페이지 구분 */}
      <div className="page-break"></div>
    </>
  );
}
