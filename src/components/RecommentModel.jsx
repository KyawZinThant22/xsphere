import admin from "../assets/admin.jpg";

const RecommentModel = ({ data }) => {
  const data2 = data.filter((obj) => {
    return obj.checked !== true;
  });
  return (
    <div className="mt-12 relative">
      <img
        src={admin}
        alt="admin"
        className="w-12 rounded-full  border-solid border-2  border-btnColor absolute right-[94px] -top-[28px]"
      />
      <div className="bg-yellow p-4 rounded-lg  w-[16rem] text-gray-600 leading-[1.7rem]">
        <p>
          <b className="text-black"> Amandine , HR PayFit</b> <br />
          we recommend to have no more than82.1px and clsoe between and question
          to allow the participants to better reflect on they acheived
        </p>
        <p className="mt-4">
          Currently the <b className="text-black">{data2[0].text}</b> <br />{" "}
          answer to{" "}
          <span className="bg-gray-400 text-white rounded-full p-1 px-2 text-[10px]">
            {data2[0].count}
          </span>{" "}
          questions and the <b className="text-black">{data2[1].text}</b> to{" "}
          <span className="bg-gray-400 text-white rounded-full p-1 px-2 text-[10px]">
            {data2[1].count}
          </span>{" "}
          question
        </p>
      </div>
    </div>
  );
};

export default RecommentModel;
