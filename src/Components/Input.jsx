import React, { useState } from 'react';
import { styled } from '@mui/system';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const StyledSearchBar = styled('div')({
  display: 'flex',
  alignItems: 'center',
  borderRadius: 8, // Adjust the value for your desired border radius
  padding: '8px',
  color: 'silver',
  flexGrow: '1',
  width: '100%',
  backgroundColor: '#FFFFFF',
  border: '1px solid rgba(0, 0, 0, 0.1)',
  boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)', // Add shadow
  transition: '0.2s linear',
  '&:hover': {
    color: '#1976d2',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Hover shadow
  },
});

const StyledInput = styled(InputBase)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  flex: 1,
}));

function Input({ placeholder, sendQuery }) {

  return (
    <StyledSearchBar>
      <StyledInput
        placeholder={placeholder}
        inputProps={{ 'aria-label': 'search' }}
        value={''}
        onChange={e => sendQuery(e.target.value)}
      />
      <SearchIcon />
    </StyledSearchBar>
  );
}

export default Input;
