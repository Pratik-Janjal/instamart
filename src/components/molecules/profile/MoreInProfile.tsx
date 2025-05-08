import SideNavbarProfile from "../navbar/SideNavbarProfile";

const MoreInProfile = ({ outlet }) => {
  return (
    <>
      <section className="flex">
        <div className="w-5 bg-[#345766]"></div>
        <div>
          <SideNavbarProfile />
        </div>
        <div className="mt-20 w-[400px]">{outlet}</div>
      </section>
    </>
  );
};

export default MoreInProfile;
