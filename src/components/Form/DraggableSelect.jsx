import { useState } from "react";
import {MdOutlineDragIndicator} from 'react-icons/md'
import CancleIcon from "../../assets/CancleIcon";
import { ReactSortable } from "react-sortablejs";
import { useRef } from "react";
import { useEffect } from "react";

const DraggableSelect = ({ lable }) => {
  const optionsList = [
    {
      id:0,
      value:'Bago'
    },
    {
      id:1,
      value:'Yangon'
    },
    {
      id:0,
      value:'Mandalay'
    }
  ];

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [searchValue,setSearchValue] = useState('')

  const inputRef = useRef();
  const handleCatchValue = (data) => {
    setOpen(false)
    const id = value.length + 1;
    const newData = {id,value:data};
    if(value.length > 0) {
      const find = value.find((el) => el.value === newData.value)
      if(!find){
         setValue((prev) => [...prev,newData])
      }else{
        setValue((prev) => [...prev])
      }
    }else{
      setValue(() => [newData]);
      console.log(value);
    }

  };
  const deleteValue = (id) => {
    const filter = value.filter((e) => e.id !== id)
    setValue(filter);
  }
  return (
    <div className="relative my-2">
      <label className="text-sm font-semibold">Locations</label>
      <div className="mt-1">
        <div
          className="cursor-pointer rounded-md px-3 py-1 border-2 relative"
          style={{padding: value.length > 0 ? "0.25rem 0.75rem" : "0.60rem 0.75rem"}}
          onClick={() => {
            setOpen(!open)
            inputRef.current.focus()
          }}
        >
          <div>
            <ReactSortable list={value} setList={(newValue) => setValue(newValue)} className="flex flex-row items-center space-x-3">
            {value.length > 0 && value.map(el =><div key={el.id} className="text-sm font-semibold bg-[#F3F7FE] rounded flex flex-row items-center gap-x-2" style={{padding:'0.4rem 0.4rem 0.4rem 0.2rem'}}>
              <MdOutlineDragIndicator className="text-[#ADB2B8]"/> 
              <span>{el.value}</span>
              <CancleIcon onClick={() => deleteValue(el.id)}/>
            </div>)}
            </ReactSortable>
            {value.length <= 0 && <p className="text-sm font-semibold">None Selected</p>}

            
          </div>
          <input type="text" className="absolute h-0 bottom-0 left-0 right-0 opacity-0" ref={inputRef} value={searchValue} onChange={(e) => {setSearchValue(e.target.value)}}/>
        </div>

        {open && (
          <div className="mt-1 mb-2 flex flex-col gap-2 bg-white border-2 py-2 shadow-md rounded absolute w-full z-10">
            {optionsList.filter((data) => {
              if(searchValue === ""){
                return data;
              }else if(data.value.toLowerCase().includes(searchValue.toLocaleLowerCase())){
                return data
              }
            }).map((data) => (
              <p
                key={data.value}
                className="cursor-pointer font-semibold text-sm hover:bg-paleGreen px-3 py-2"
                onClick={() => handleCatchValue(data.value)}
              >
                {data.value}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DraggableSelect;
