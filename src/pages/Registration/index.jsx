import Breadcrumbs from "components/Breadcrumbs";
import MainLayout from "components/MainLayout";
import { useLocation } from "react-router-dom";
import { RiImage2Fill } from "react-icons/ri";
import NavigateButton from "components/NavigateButton";
import Footer from "components/Footer";

export const RegistrationPage = () => {
  const path = useLocation();
  const paths = path.pathname.split("/");
  paths.splice(0, 1);

  return (
    <MainLayout>
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
      <Footer />
    </MainLayout>
  );
};
