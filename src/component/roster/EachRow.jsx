import React from "react";


import EditRoster from "./EditRoster";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import RosterForm from "./RosterForm";
import { compareDate } from "./date";

import '../../page/rosters/roster.css'
import { Box, Typography } from "@mui/material";

const EachRow = ({
  dept,
  day,
  dayIndex,
  staffList,
  getRosterData,
  shiftData,
}) => {
    
  return (
    <Droppable droppableId={dept._id+day.date}>
      {(provided) => (
        <td
          style={{ width: "calc(100% / 7" }}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <Box className="table-data">
            <Typography sx={{fontWeight:"bold"}}>{dayIndex === 0 && dept.name} </Typography>
            <Box sx={{textAlign:"center", mb:1}}>
              <RosterForm
                day={day}
                deptName={dept.name}
                staffs={staffList}
                getRosterData={getRosterData}
                rosterData={shiftData}
              />
            </Box>

            {shiftData?.map((item, itemIndex) => {
              if (
                compareDate(item.startDate, day.date) &&
                item.department === dept.name
              ) {
                return (
                  <div key={itemIndex}>
                    <div>
                      <EditRoster
                        item={item}
                        itemIndex={itemIndex}
                        staffs={staffList}
                        rosterData={shiftData}
                        getRosterData={getRosterData}
                      />
                    </div>
                  </div>
                );
              }

              return null;
            })}
          </Box>
          {provided.placeholder}
        </td>
      )}
    </Droppable>
  );
};

export default EachRow;