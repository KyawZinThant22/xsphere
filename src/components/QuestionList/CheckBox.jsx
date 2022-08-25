import { BsFillQuestionCircleFill } from "react-icons/bs";

const CheckBox = ({ labelList, setLabelList }) => {
  const handleSelectItem = (item) => {
    labelList.map((el) => {
      if (el.id === item.id) {
        setLabelList((prev) =>
          prev.map((prev) => {
            if (prev.id === item.id) {
              return { ...prev, isSelected: !item.isSelected };
            } else return prev;
          })
        );
      }
    });
  };

  return (
    //also can use checkbox and customize css
    <div className="mt-4">
      <div className="flex items-center gap-2">
        <h3 className="font-bold">Format preview</h3>
        <BsFillQuestionCircleFill size={15} className="text-gray-500" />
      </div>
      <div className="mt-2 bg-paleBlue p-4 py-12 rounded-md flex gap-3 items-center justify-center">
        {labelList.map((data) => (
          <div key={data.id}>
            <p
              className={`border-2 border-solid p-2 px-4 rounded-lg ${
                data.isSelected ? "border-btnColor" : "border-gray-400"
              }`}
              onClick={() => handleSelectItem(data)}
            >
              {data.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckBox;
