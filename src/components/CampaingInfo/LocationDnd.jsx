/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef, useCallback } from "react";
import { MdOutlineDragIndicator } from "react-icons/md";
import { BsQuestionCircleFill } from "react-icons/bs";
import { ReactSortable } from "react-sortablejs";
import CancleIcon from "../../assets/CancleIcon";
import { Label } from "../Csx/Csx";

const SelectedItem = ({ key, el, setOpenList, removeLocation }) => {
  return (
    <div
      className="text-sm font-medium bg-[#F3F7FE] rounded flex flex-row items-center gap-x-1 select-none z-20"
      style={{ padding: "0.4rem 0.4rem 0.4rem 0.2rem" }}
      key={key}>
      <MdOutlineDragIndicator className="text-[#ADB2B8] text-base" />
      <span>{el.location}</span>
      <CancleIcon
        onClick={() => {
          setOpenList(true);
          removeLocation(el.id);
        }}
      />
    </div>
  );
};

const List = ({ searchRef, data, addData, selectedData }) => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="mt-2 border-2 rounded-md absolute left-0 right-0 bg-[#ffff] z-10 p-3 select-none">
      <input
        type="text"
        placeholder="Search location"
        className="text-sm font-medium border-2 w-full p-2 rounded-md"
        value={searchValue}
        ref={searchRef}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <div className="text-sm font-medium mt-3 max-h-32 overflow-y-auto">
        {data.length > 0 ? (
          data
            // eslint-disable-next-line
            .filter((val) => {
              if (searchValue === "") return val;
              if (
                val.location.toLowerCase().includes(searchValue.toLowerCase())
              )
                return val;
            })
            .sort((a, b) => {
              return a.id - b.id;
            })
            .map((el) => {
              const active = selectedData.find((val) => el.id === val.id);
              return (
                <p
                  key={el.id}
                  className={`p-2 rounded-md hover:bg-[#E9F9F5] mb-1 ${
                    active && "bg-[#E9F9F5]"
                  }`}
                  onClick={() => {
                    addData(el);
                    setSearchValue("");
                  }}>
                  {el.location}
                </p>
              );
            })
        ) : (
          <p className="p-2 rounded-md hover:bg-[#E9F9F5]">No Data Avaliable</p>
        )}
      </div>
    </div>
  );
};

const LocationDnd = ({ onChange, data, value }) => {
  const inputFocusColor = " focus:border-[#61C09D]";
  const [openList, setOpenList] = useState(false);
  const [selectedValue, setSelectedValue] = useState([]);

  // Ref
  const searchBarRef = useRef(null);
  const locationListRef = useRef(null);
  // Add and Remove Function
  const addLocationToInputBox = (data) => {
    if (selectedValue.length > 0) {
      const findAddedValue = selectedValue.find((el) => el.id === data.id);
      if (!findAddedValue) {
        setSelectedValue((prevValue) => [...prevValue, data]);
        onChange([...selectedValue, data]);
      } else {
        setSelectedValue((prevValue) => [...prevValue]);
        onChange([...selectedValue]);
      }
    } else {
      setSelectedValue([data]);
      onChange([data]);
    }
  };

  const removeLocation = (id) => {
    const filter = selectedValue.filter((el) => el.id !== id);
    setSelectedValue(filter);
  };

  const handleLocationList = useCallback(
    (e) => {
      if (openList) {
        if (locationListRef !== null) {
          if (locationListRef.current.contains(e.target)) {
            setOpenList(true);
          } else {
            setOpenList(false);
          }
        }
      }
    },
    [openList]
  );

  // useEffect
  useEffect(() => {
    if (value.length > 0) {
      setSelectedValue(value);
    }
  }, [value]);

  useEffect(() => {
    if (openList) return searchBarRef.current.focus();
  }, [openList]);

  useEffect(() => {
    if (data.length === 0) {
      setOpenList(false);
    }
  }, [data]);

  useEffect(() => {
    document.addEventListener("click", handleLocationList, true);
  }, [handleLocationList]);

  return (
    <div className="mt-2 mb-3">
      <Label title={"Location"} Icon={BsQuestionCircleFill} />
      <div className="mt-1 relative">
        <div
          className={`cursor-pointer rounded-md border-2 relative ${inputFocusColor}`}
          style={{
            padding:
              selectedValue.length > 0 ? "0.25rem 0.75rem" : "0.60rem 0.75rem",
          }}>
          <ReactSortable
            animation={200}
            VdelayOnTouchStart={true}
            ghostClass="ghost"
            delay={2}
            list={selectedValue}
            setList={(newValue) => onChange(newValue)}
            className="flex flex-row flex-wrap items-center gap-x-3 gap-y-2">
            {selectedValue.length > 0 &&
              selectedValue.map((el) => (
                <SelectedItem
                  key={el.id}
                  el={el}
                  removeLocation={removeLocation}
                  setOpenList={setOpenList}
                />
              ))}
          </ReactSortable>
          {selectedValue.length <= 0 && (
            <p className="text-sm font-medium">None Selected</p>
          )}
          <div
            className="absolute inset-0"
            onClick={() => setOpenList(true)}></div>
        </div>
        {openList && (
          <div ref={locationListRef}>
            <List
              data={data}
              selectedData={selectedValue}
              addData={addLocationToInputBox}
              setOpenList={setOpenList}
              searchRef={searchBarRef}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationDnd;
