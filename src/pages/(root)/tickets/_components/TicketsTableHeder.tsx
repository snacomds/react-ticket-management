import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputText";
import { OverlayPanel } from "primereact/overlaypanel";
import { useRef } from "react";
import { Divider } from "primereact/divider";
import { Dropdown } from "primereact/dropdown";


export default function CarTableHeder({filter,setFilter}:{filter:string,setFilter:(value:string)=>void}) {
  const navigate = useNavigate();
  const op = useRef<OverlayPanel>(null);

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <InputText value={filter} onChange={(e) => setFilter(e.target.value)} placeholder="Search"/>
        
        <Button
        outlined
        icon="i-tabler-filter"
        onClick={(event) => op.current!.toggle(event)}
        />
        <OverlayPanel ref={op} showCloseIcon>
            <div className="flex flex-col justify-center gap-4 w-80">
              <h5 className="text-5 font-bold">Filter Options</h5>
              <Divider/>
                
            <div className="flex flex-col gap-2 ">
              <label className="font-bold" htmlFor="status">
                Status
              </label>
              <Dropdown value={filter} onChange={(e) => setFilter(e.target.value)} options={['open', 'closed']} placeholder="Select "  id="status"/>
            </div>

            <Button
            label="Clear Filter"
            link
            onClick={() => setFilter("")}
            />

            </div>
        </OverlayPanel>
      </div>

        <Button
          label="Add Ticket"
          onClick={() => {
            navigate("/tickets/add");
          }}
          icon="i-tabler-plus"
        />

    </div>
  );
}
