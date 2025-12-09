import { ArrowDown } from "lucide-react";
import { Button } from "../ui/button";

export function Hero() {
  const scrollToProfile = () => {
    const element = document.getElementById("profile");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1759735541630-036eefb7cd3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBiYWNrZ3JvdW5kJTIwYmx1ZSUyMGRhcmt8ZW58MXx8fHwxNzY1MTg0NDExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Cover Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-in fade-in zoom-in duration-1000">
          <h2 className="text-xl md:text-2xl font-medium text-blue-400 mb-4 tracking-wide uppercase">
            Java Backend Developer Portfolio
          </h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            서비스의 안정성과 확장성을
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              이세창
            </span>
            이 책임집니다.
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            4년 6개월간 블라이스 웹서비스 운영 및 통합 기능 개발을 중심으로
            <br className="hidden md:block" />
            성능 개선, 결제·인앱 연동, Kafka 기반 알림 설계 등 주요 기능
            고도화를 주도했습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-12 text-lg"
              onClick={scrollToProfile}
            >
              포트폴리오 시작하기
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 bg-white/10 hover:bg-white/20 text-white rounded-full px-8 h-12 text-lg backdrop-blur-md"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              연락하기
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToProfile}
          className="text-white/50 hover:text-white transition-colors"
        >
          <ArrowDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
}
