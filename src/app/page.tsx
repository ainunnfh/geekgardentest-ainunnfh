import Navbar from "@/components/Navbar";
import AchievementPage from "./achievement/page";
import ClientPage from "./client/page";
import HeroPage from "./hero/page";
import CommunityPage from "./community/page";
import UnlockPage from "./unlock/page";
import CalendarPage from "./calendar/page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroPage />
      <ClientPage />
      <CommunityPage />
      <UnlockPage />
      <AchievementPage />
      <CalendarPage />
    </div>
  );
}
