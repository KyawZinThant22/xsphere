import { useState, useEffect, useRef } from "react";
import { MdOutlineDragIndicator } from "react-icons/md";
import CancleIcon from "../../assets/CancleIcon";
import { ReactSortable } from "react-sortablejs";

const SelectedItem = (props) => {
  return (
    <div
      className="text-sm font-semibold bg-[#F3F7FE] rounded flex flex-row items-center gap-x-2 select-none z-20"
      style={{ padding: "0.4rem 0.4rem 0.4rem 0.2rem" }}
    >
      <MdOutlineDragIndicator className="text-[#ADB2B8]" />
      <span>{props.el.location}</span>
      <CancleIcon
        onClick={() => {
          props.setOpenList(false);
          props.removeLocation(props.el.id);
        }}
      />
    </div>
  );
};

const List = (props) => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div
      className="border-2 border-t-0 rounded-md absolute left-0 right-0 bg-[#ffff] z-10 p-3 mt-0 select-none"
      onMouseOver={() => props.setOpenList(true)}
    >
      <input
        type="text"
        placeholder="Search location"
        className="text-sm font-semibold border-2 w-full p-2 rounded-md"
        value={searchValue}
        ref={props.searchRef}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <div className="text-sm font-semibold mt-3 max-h-32 overflow-y-auto">
        {props.demoList
          .filter((val) => {
            if (searchValue === "") return val;
            if (val.location.toLowerCase().includes(searchValue.toLowerCase()))
              return val;
          })
          .map((el) => (
            <p
              key={el.id}
              className="p-2 rounded-md hover:bg-[#E9F9F5]"
              onClick={() => {
                props.addData(el);
              }}
            >
              {el.location}
            </p>
          ))}
      </div>
    </div>
  );
};

const DraggableSelect = () => {
  // Demo API
  const demoList = [
    {
      id: 0,
      location: "Bago",
    },
    {
      id: 1,
      location: "Yangon",
    },
    {
      id: 2,
      location: "Mandalay",
    },
    {
      id: 3,
      location: "Taunggyi",
    },
    {
      id: 4,
      location: "Mawlamyine",
    },
  ];

  // State
  const [openList, setOpenList] = useState(false);
  const [value, setValue] = useState([]);
  // Ref
  const searchBarRef = useRef(null);
  // Add and Remove Function
  const addLocationToInputBox = (data) => {
    if (value.length > 0) {
      const findAddedValue = value.find((el) => el.id === data.id);
      if (!findAddedValue) {
        setValue((prevValue) => [...prevValue, data]);
      } else {
        setValue((prevValue) => [...prevValue]);
      }
    } else {
      setValue(() => [data]);
    }
  };
  const removeLocation = (id) => {
    const filter = value.filter((el) => el.id !== id);
    setValue(filter);
  };

  useEffect(() => {
    if (openList) return searchBarRef.current.focus();
  }, [openList]);

  return (
    <div className="my-2">
      <label className="text-sm font-semibold">Locations</label>
      <div className="mt-1 relative">
        <div
          className="cursor-pointer rounded-md px-3 py-1 border-2 relative overflow-x-auto"
          style={{
            padding: value.length > 0 ? "0.25rem 0.75rem" : "0.60rem 0.75rem",
          }}
          onMouseLeave={() => setOpenList(false)}
        >
          <ReactSortable
            list={value}
            setList={(newValue) => setValue(newValue)}
            className="flex flex-row items-center space-x-3"
          >
            {value.length > 0 &&
              value.map((el) => (
                <SelectedItem
                  key={el.id}
                  el={el}
                  removeLocation={removeLocation}
                  setOpenList={setOpenList}
                />
              ))}
          </ReactSortable>

          {value.length <= 0 && (
            <p className="text-sm font-semibold">None Selected</p>
          )}
          <div
            className="absolute inset-0"
            onClick={() => {
              setOpenList(!openList);
            }}
          ></div>
        </div>
        {openList && (
          <List
            demoList={demoList}
            addData={addLocationToInputBox}
            setOpenList={setOpenList}
            searchRef={searchBarRef}
          />
        )}
      </div>
    </div>
  );
};

export default DraggableSelect;
