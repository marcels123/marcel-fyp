import { ModeToggle } from "src/components/ui/mode-toggle";
import { Footer, FooterBottom } from "src/components/ui/footer";

export default function FooterSection() {
  return (
    <footer className="w-full bg-transparent">
      <div className="container mx-auto py-6 bg-transparent">
        <Footer className="bg-transparent">
          <FooterBottom className="flex flex-col items-center gap-4 sm:flex-col md:flex-row md:justify-between bg-transparent">
            <div className="text-sm text-muted-foreground">© 2024 Marcel Smith. All rights reserved</div>
            <div className="flex items-center gap-4">
              <a href="/auth/signin" className="text-sm text-muted-foreground hover:text-foreground">Sign in</a>
              <a href="/auth/signup" className="text-sm text-muted-foreground hover:text-foreground">Sign up</a>
              <span className="text-muted-foreground">|</span>
              <ModeToggle />
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}