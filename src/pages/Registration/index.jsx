import Breadcrumbs from "components/Breadcrumbs";
import Footer from "components/Footer";
import MainLayout from "components/MainLayout";
import NavigateButton from "components/NavigateButton";
import { RiImage2Fill } from "react-icons/ri";
import usePaths from "../../hooks/usePaths";

export const RegistrationPage = () => {
  const paths = usePaths();

  return (
    <MainLayout>
      <div className="mb-10">
        <div className="px-7 pt-8 pb-4 bg-primary-50">
          <div className="mb-8">
            <Breadcrumbs elements={paths} type="registration" />
          </div>
          <div className="flex flex-col">
            <p className="font-semibold text-3xl">Lorem ipsum dolor sit amet consectetur.</p>
            <RiImage2Fill size="7em" fill="#A6A6A6" className="self-center my-12" />
          </div>
        </div>
        <div className="flex flex-col gap-y-4 px-7 pt-10">
          {Array.from({ length: 3 }).map((_, index) => {
            return (
              <div key={index} className="pt-9 pb-7 px-4 bg-white rounded-[20px] shadow-sm">
                <p className="text-lg font-bold">Pengajuan Visa Haji & Umrah</p>
                <div className="flex flex-col-reverse m-sm:flex-row mt-4 mb-5">
                  <span className="min-w-[70%] max-w-[250px] text-sm text-neutral-500">
                    Lorem ipsum dolor sit amet consectetur.
                  </span>
                  <div className="flex justify-center w-full">
                    <RiImage2Fill size="5em" fill="#A6A6A6" />
                  </div>
                </div>
                <NavigateButton mode="btn-sm-full" path={`/registration/${index}`}>
                  Register
                </NavigateButton>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </MainLayout>
  );
};
