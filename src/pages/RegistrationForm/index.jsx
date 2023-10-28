import Breadcrumbs from "components/Breadcrumbs";
import MainLayout from "components/MainLayout";
import { AiOutlineCalendar } from "react-icons/ai";
import { FiUpload } from "react-icons/fi";
import usePaths from "../../hooks/usePaths";

export const RegistrationFormPage = () => {
  const paths = usePaths();

  return (
    <MainLayout>
      <div className="px-7 pt-8 pb-4 bg-primary-50">
        <div className="mb-8">
          <Breadcrumbs elements={paths} type="registration" />
        </div>
        <p className="font-semibold text-3xl">Pengajuan Visa Haji & Umrah</p>
      </div>
      <div className="flex flex-col gap-y-6 px-7 pt-10 pb-8">
        <div className="flex flex-col gap-y-4">
          <p className="font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, mollitia!
          </p>
          <p className="text-neutral-500">
            Lorem ipsum dolor sit amet consectetur. Cras lectus risus in pulvinar tincidunt
            ultricies. Diam nulla et nunc sem. Ut nisl rhoncus ut amet. Justo condimentum mattis
            natoque vivamus quam dolor.
          </p>
        </div>
        <form className="flex flex-col gap-y-6">
          <p className="font-semibold ">Format Your Data</p>
          <div className="input flex flex-col gap-y-4">
            <label htmlFor="name" className="text-primary-700 font-medium">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Type here"
              className="bg-neutral-100 rounded-lg py-2 px-3 focus:bg-primary-50"
            />
          </div>
          <div className="input flex flex-col gap-y-4">
            <label htmlFor="dob" className="text-primary-700 font-medium">
              Date of Birth
            </label>
            <div className="relative">
              <input
                type="text"
                id="dob"
                placeholder="Type here"
                className="w-full bg-neutral-100 rounded-lg pl-9 py-2 pr-3 focus:bg-primary-50"
              />
              <div className="absolute left-2 top-[50%] translate-y-[-50%] hover:cursor-pointer">
                <AiOutlineCalendar size="1.25em" fill="#6B028D" />
              </div>
            </div>
          </div>
          <div className="input flex flex-col gap-y-4">
            <label htmlFor="address" className="text-primary-700 font-medium">
              Complete Address
            </label>
            <span className="text-sm">Address According to your KTP/KK</span>
            <input
              type="text"
              id="address"
              placeholder="Type here"
              className="bg-neutral-100 rounded-lg py-2 px-3 focus:bg-primary-50"
            />
          </div>
          <div className="input flex flex-col gap-y-4">
            <label htmlFor="no_ktp" className="text-primary-700 font-medium">
              KTP Number
            </label>
            <input
              type="text"
              id="no_ktp"
              placeholder="Type here"
              className="bg-neutral-100 rounded-lg py-2 px-3 focus:bg-primary-50"
            />
          </div>
          <div className="input flex flex-col gap-y-4">
            <span className="text-primary-700 font-medium">Upload KTP</span>
            <input type="file" id="ktp" placeholder="Type here" className="hidden" />
            <label
              htmlFor="ktp"
              className="bg-neutral-100 rounded-lg py-2 px-3 focus:bg-primary-50"
            >
              <div className="flex gap-x-3">
                <button className="flex flex-row gap-x-2 items-center bg-primary-500 text-white font-bold text-xs px-6 rounded-md">
                  <FiUpload size="1.25em" strokeWidth="3" />
                  <span>Choose File</span>
                </button>
                <p>No File Chosen</p>
              </div>
            </label>
            <span className="text-neutral-500 text-xs">
              Uploaded image will be resized to fit within: Width of 500 pixels and Height of 500
              pixels
            </span>
          </div>
          <div className="input flex flex-col gap-y-4">
            <span className="text-primary-700 font-medium">Upload KK</span>
            <input type="file" id="kk" placeholder="Type here" className="hidden" />
            <label htmlFor="kk" className="bg-neutral-100 rounded-lg py-2 px-3 focus:bg-primary-50">
              <div className="flex gap-x-3">
                <button className="flex flex-row gap-x-2 items-center bg-primary-500 text-white font-bold text-xs px-6 rounded-md">
                  <FiUpload size="1.25em" strokeWidth="3" />
                  <span>Choose File</span>
                </button>
                <p>No File Chosen</p>
              </div>
            </label>
            <span className="text-neutral-500 text-xs">
              Uploaded image will be resized to fit within: Width of 500 pixels and Height of 500
              pixels
            </span>
          </div>

          <button className="p-4 bg-primary-500 rounded-xl text-white font-bold">Submit</button>
        </form>
      </div>
    </MainLayout>
  );
};
