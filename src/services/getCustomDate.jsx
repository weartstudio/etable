const today = new Date();

function getCustomDate(plusDay){
	const date = today.setDate(today.getDate() + plusDay); 
	const result = new Date(date).toISOString().split('T')[0] // yyyy-mm-dd
	return result;
}

export { getCustomDate  }