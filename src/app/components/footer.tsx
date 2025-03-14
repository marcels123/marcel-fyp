import { ModeToggle } from "src/components/ui/mode-toggle";
import { Footer, FooterBottom } from "src/components/ui/footer";

export default function FooterSection() {
  return (
    <footer className="w-full bg-[#f4f3fc] px-4">
      <div className="mx-auto max-w-container">
        <Footer className="pt-0">
          <FooterBottom className="mt-0 flex flex-col items-center gap-4 sm:flex-col md:flex-row">
            <div>© 2025 Mikołaj Dobrucki. All rights reserved</div>
            <div className="flex items-center gap-4">
              <a href="#">Sign in</a> <a href="#">Sign up</a>|
              <ModeToggle />
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}