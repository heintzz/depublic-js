import TwoBubbleOrnament from "assets/ornaments/two-bubble.svg";
import Highlight from "components/Carousel/Highlight";
import Menu from "components/Carousel/Menu";
import PopularBlog from "components/Carousel/PopularBlog";
import UpcomingEvent from "components/Carousel/UpcomingEvent";
import Footer from "components/Footer";
import MainLayout from "components/MainLayout";
import NavigateButton from "components/NavigateButton";
import SearchBar from "components/SearchBar";
import SectionSeparator from "components/SectionSeparator";

export default function HomePage() {
  return (
    <MainLayout>
      <div className="mb-10">
        <div className="bg-[#FEF6E5] px-7 pt-12 relative text-base">
          <img
            src={TwoBubbleOrnament}
            alt="bubble ornament"
            className="absolute -top-10 -right-10 w-60 -z-1"
          />
          <SearchBar />
          <div className="mt-14 pb-28 relative z-[1]">
            <p className="max-w-[200px] text-3xl font-semibold mb-6">Tagline Hero Section</p>
            <NavigateButton path="#" mode="btn-md-full">
              Download Aplikasi
            </NavigateButton>
          </div>
          <Menu />
        </div>
        <SectionSeparator additionalClassname="mt-20" />
        <Highlight />
        <UpcomingEvent />
        <SectionSeparator />
        <PopularBlog />
      </div>
      <Footer />
    </MainLayout>
  );
}
