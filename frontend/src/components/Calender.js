import { useState, useEffect } from "react";
import { ethers } from "ethers";
import abi from "../contracts/Calend3.json";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Slider } from "@mui/material";

import {
  ViewState,
  EditingState,
  IntegratedEditing,
} from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  Appointments,
  AppointmentForm,
} from "@devexpress/dx-react-scheduler-material-ui";

const schedulerData = [
  {
    startDate: "2022-11-09T09:45",
    endDate: "2022-11-09T11:00",
    title: "Dogecoin Integration",
  },
  {
    startDate: "2022-11-10T12:00",
    endDate: "2022-11-10T13:30",
    title: "Podcast appearance",
  },
];
const contractAddress = "0xe4ca4069901183542eb56Bb779529f4856BB43aF";
const contractABI = abi.abi;
const provider = new ethers.providers.Web3Provider(window.ethereum);
const contract = new ethers.Contract(
  contractAddress,
  contractABI,
  provider.getSigner(0)
);
const Calendar = (props) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [rate, setRate] = useState(false);

  const getData = async () => {
    const owner = await contract.owner();
    console.log("owner");
    console.log(owner);
    console.log("props.account");

    console.log(props.account);

    setIsAdmin(
      owner.toString().toUpperCase() === props.account.toString().toUpperCase()
    );

    const rate = await contract.getRate();
    setRate(ethers.utils.formatEther(rate.toString()));
    console.log(rate.toString());
    //   await contract.setRate(9);
  };

  console.log(contract);

  const saveAppointment = () => {
    console.log("saved appo");
  };
  useEffect(() => {
    getData();
  });
  const handleSliderChange = (event, newValue) => {
    console.log("New Value:" + newValue);
    setRate(newValue);
  };
  const saveRate = async () => {
    const tx = await contract.setRate(ethers.utils.parseEther(rate.toString()));
  };
  const Admin = () => {
    return (
      <div id="admin">
        <Box>
          <h3>Set Your Minutely Rate</h3>
          <Slider
            defaultValue={rate}
            step={0.001}
            min={0}
            max={0.1}
            valuelabelDisplay="auto"
            onChangeCommitted={handleSliderChange}
          />
          <br />
          <hr />
          <Button onClick={saveRate} variant="contained">
            save configuration
          </Button>
        </Box>
      </div>
    );
  };
  return (
    <div>
      {isAdmin && <Admin />}
      <div id="calendar">
        <Scheduler data={schedulerData}>
          <ViewState />
          <EditingState onCommitChanges={saveAppointment} />
          <IntegratedEditing />
          <WeekView startDayHour={9} endDayHour={19} />
          <Appointments />
          <AppointmentForm />
        </Scheduler>
      </div>
    </div>
  );
};

export default Calendar;
