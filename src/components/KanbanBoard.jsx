import React from 'react';
import Column from './Column';
import { groupTickets, sortTickets } from '../utils/ticketUtils';
import '../styles/KanbanBoard.css';

function KanbanBoard({ tickets, users, grouping, sorting }) {
  const groupedTickets = groupTickets(tickets, grouping, users);
  const sortedGroupedTickets = sortTickets(groupedTickets, sorting);

  return (
    <div className="kanban-board">
      {Object.entries(sortedGroupedTickets).map(([groupName, groupTickets]) => (
        <Column
          key={groupName}
          title={groupName}
          tickets={groupTickets}
          users={users}
        />
      ))}
    </div>
  );
}

export default KanbanBoard;