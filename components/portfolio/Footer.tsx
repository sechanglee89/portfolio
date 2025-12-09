import { Mail, Github, Linkedin, Phone } from "lucide-react";
import { Button } from "../ui/button";

export function Contact() {
  return (
    <footer id="contact" className="bg-slate-900 text-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
        <p className="text-slate-300 mb-10 text-lg max-w-2xl mx-auto">
          새로운 도전을 할 준비가 되어 있습니다.
          <br />
          프로젝트에 대해 이야기하거나 커피 한 잔 하고 싶으시다면 언제든
          연락주세요.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
          <a
            href="mailto:peersc@naver.com"
            className="flex items-center gap-3 text-lg hover:text-blue-400 transition-colors"
          >
            <div className="p-3 bg-white/10 rounded-full">
              <Mail className="w-6 h-6" />
            </div>
            <span>peersc@naver.com</span>
          </a>

          <a
            href="tel:010-0000-0000"
            className="flex items-center gap-3 text-lg hover:text-blue-400 transition-colors"
          >
            <div className="p-3 bg-white/10 rounded-full">
              <Phone className="w-6 h-6" />
            </div>
            <span>연락처 문의</span>
          </a>
        </div>

        <div className="flex justify-center gap-6 mb-12">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full w-12 h-12 border-white/20 bg-transparent hover:bg-white/10 hover:text-white"
          >
            <Github className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full w-12 h-12 border-white/20 bg-transparent hover:bg-white/10 hover:text-white"
          >
            <Linkedin className="w-5 h-5" />
          </Button>
        </div>

        <div className="border-t border-white/10 pt-8 text-sm text-slate-500">
          <p>© 2024 이세창 (Sechang Lee). All rights reserved.</p>
          <p className="mt-2">
            Java Backend Developer | Built with React, Tailwind CSS, and Shadcn
            UI.
          </p>
        </div>
      </div>
    </footer>
  );
}
