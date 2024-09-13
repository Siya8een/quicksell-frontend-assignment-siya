export const groupTickets = (tickets, grouping, users) => {
    switch (grouping) {
      case 'status':
        return groupByStatus(tickets);
      case 'user':
        return groupByUser(tickets, users);
      case 'priority':
        return groupByPriority(tickets);
      default:
        return tickets;
    }
  };
  
  export const sortTickets = (groupedTickets, sorting) => {
    const sortedGroups = {};
    Object.keys(groupedTickets).forEach(key => {
      sortedGroups[key] = groupedTickets[key].sort((a, b) => {
        if (sorting === 'priority') {
          return b.priority - a.priority;
        } else {
          return a.title.localeCompare(b.title);
        }
      });
    });
    return sortedGroups;
  };
  
  const groupByStatus = (tickets) => {
    return tickets.reduce((acc, ticket) => {
      acc[ticket.status] = acc[ticket.status] || [];
      acc[ticket.status].push(ticket);
      return acc;
    }, {});
  };
  
  const groupByUser = (tickets, users) => {
    return tickets.reduce((acc, ticket) => {
      const user = users.find(u => u.id === ticket.userId);
      const userName = user ? user.name : 'Unassigned';
      acc[userName] = acc[userName] || [];
      acc[userName].push(ticket);
      return acc;
    }, {});
  };
  
  const groupByPriority = (tickets) => {
    const priorityNames = {
      4: 'Urgent',
      3: 'High',
      2: 'Medium',
      1: 'Low',
      0: 'No priority'
    };
    return tickets.reduce((acc, ticket) => {
      const priorityName = priorityNames[ticket.priority];
      acc[priorityName] = acc[priorityName] || [];
      acc[priorityName].push(ticket);
      return acc;
    }, {});
  };