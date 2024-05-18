import "./App.css";
import NavBar from "./components/navBar";
import SideBar from "./components/sideBar";
import { Box } from "@mui/material";
import BodyHead from "./components/bodyHead";
import GraphContent from "./components/graphContent";
import MeetingInfo from "./components/meetingInfo";
import PostJobs from "./components/postedjobs/postJobs";
import CandidateStatus from "./components/candidatestatus/candidateStatus";
import Calender from "./components/calender/calender";
import Upcoming from "./components/upcoming/upcoming";
import Activity from "./components/activity/activity";
import HiringCandi from "./components/hiring/hiringCandidate";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Box
        sx={{
          display: "flex",
          // height: `calc(100% - 121px)`,
          // height:"100vh",
          marginTop: "8rem",
        }}>
        <div
          style={{
            borderTopRightRadius: "25px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",

            width: "5%",
          }}>
          <SideBar />
        </div>
        <div style={{ padding: "0rem 1.5rem", width: "93.5%" }}>
          <BodyHead />
          <GraphContent />
          <div style={{display:"flex"}}>
            <div style={{  width: "90%" }}>
              <MeetingInfo/>
              <PostJobs/>
              <CandidateStatus/>
            </div>
            <div style={{ padding: "0rem 1.5rem", width: "30%" }}>
              <div><Calender/></div>

              <div><Upcoming/></div>

              <div><Activity/></div>

              <div><HiringCandi/></div>
            </div>
          </div>
        </div>
       
      </Box>
    </div>
  );
}

export default App;
