import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import KanbanBoard from './components/KanbanBoard';
import './styles/App.css';

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState(localStorage.getItem('grouping') || 'status');// default grouping is status
  const [sorting, setSorting] = useState(localStorage.getItem('sorting') || 'priority');// default sorting is priority

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
      setTickets(response.data.tickets);
      setUsers(response.data.users);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleGroupingChange = (newGrouping) => {
    setGrouping(newGrouping);
    localStorage.setItem('grouping', newGrouping);
  };

  const handleSortingChange = (newSorting) => {
    setSorting(newSorting);
    localStorage.setItem('sorting', newSorting);
  };

  return (
    <div className="App">
      <Header
        grouping={grouping}
        sorting={sorting}
        onGroupingChange={handleGroupingChange}
        onSortingChange={handleSortingChange}
      />
      <KanbanBoard
        tickets={tickets}
        users={users}
        grouping={grouping}
        sorting={sorting}
      />
    </div>
    
  );
}

export default App;