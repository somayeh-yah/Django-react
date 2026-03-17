import { useForm, FormProvider } from "react-hook-form";
import { useEffect } from "react";
import { userAuthInformationStore } from "../../store/auth";
import useAxios from "../../utils/useAxios";
import BaseHeader from "../base-components/BaseHeader";
import BaseFooter from "../base-components/BaseFooter";
import Sidebar from "./Partials/Sidebar";
import Header from "./Partials/Header";
import ProfileForm from "../../components/Form/ProfileForm";

function Profile() {
  const userData = userAuthInformationStore((state) => state.userData);
  const methods = useForm({
    defaultValues: { full_name: "", about: "", country: "", image: null },
  });

  const axiosInstance = useAxios();

  useEffect(() => {
    axiosInstance.get("user/profile/update/").then((res) => {
      console.log("Profile data:", res.data);
      methods.reset(res.data);
    });
  }, []);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("full_name", data.full_name);
    formData.append("about", data.about || "");
    formData.append("country", data.country || "");
    if (data.image instanceof FileList) {
      formData.append("image", data.image[0]);
    } else if (data.image instanceof File) {
      formData.append("image", data.image);
    }
    const res = await axiosInstance.patch("user/profile/update/", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    userAuthInformationStore.getState().setUser({
      ...userAuthInformationStore.getState().userData,
      full_name: res.data.full_name,
      image: res.data.image,
      initials: res.data.initials,
    });
  };

  return (
    <>
      <BaseHeader />
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <Header />
          <div className="flex flex-col md:flex-row gap-6 mt-6">
            <Sidebar />
            <div className="flex-1">
              <FormProvider {...methods}>
                <ProfileForm
                  onSubmit={onSubmit}
                  currentImage={userData?.image}
                  initials={userData?.initials}
                />
              </FormProvider>
            </div>
          </div>
        </div>
      </section>
      <BaseFooter />
    </>
  );
}

export default Profile;
