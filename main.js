this.getByUserIdThreshold=(userID, threshold, callbeck)==>{
	const parsedUserID = parseInt(userID);

	const searchCriteria = () => {
	
	if(threshold){
	  return{
	    $where: this.userID == ${parsedUserID} && this.stocks > '${threshold}'
	  };
	}
	return{
	   userID: parsedUserID
	}
  };
}; 
