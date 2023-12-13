const initialState = {
    totalEmployers: 0,
    totalEmployees: 0,
  };
  
  const adminReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_TOTAL_EMPLOYERS':
        return { ...state, totalEmployers: action.payload };
      case 'SET_TOTAL_EMPLOYEES':
        return { ...state, totalEmployees: action.payload };
      default:
        return state;
    }
  };
  
  export default adminReducer;
  