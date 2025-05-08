const ProfileDetails = () => {
  return (
    <>
      <section className="bg-[#345766] pt-40 text-white px-8 pb-8 font-bold flex justify-between">
        <div className="flex flex-col">
          <h1 className="text-3xl">Alex</h1>
          <p className="space-x-2">
            <span>58757767</span>
            <span>. swiggy@gmail.com</span>
          </p>
        </div>
        <div>
          <button className="border px-4 py-2.5 uppercase text-sm">
            Edit Profile
          </button>
        </div>
      </section>
    </>
  );
};

export default ProfileDetails;
