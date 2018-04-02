let BASE_URL = "http://localhost:3000/api";
export const ApiUrls  = {
	
	//get urls
	getUsers :  BASE_URL + '/users/',
	getTasks :  BASE_URL + '/tasks/',
	getUserTasks : (userId) => { return BASE_URL + `/tasks/${userId}` } ,


	//post urls
	createUser : BASE_URL + '/users/register/',
	login : BASE_URL + '/users/login/',
	createTasks : BASE_URL + '/tasks/' , 

	//put urls
	updateTask : BASE_URL + '/tasks/',

	//delete urls
	deleteTask : BASE_URL + '/tasks/'

}