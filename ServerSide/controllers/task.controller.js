

const 
	Task = require('../models/task.model'),
	Operators = require ('../utilities/operator')	;



/**
 * Create - create the task 
 * POST method
 */
let CreateTask = (req , res ) => {
	let taskData = req.body;
	

	let task = new Task( taskData);

	Task.create( task , (err , response ) => {
			if ( err )
				return  res.status(500).json( {err : err} );
			return res.status(201).json( response );

		})

}

/**
 * GET
*/
let GetTask = (req , res ) => {
	let TaskId = Operators.getQueryParams( req , 'TaskId' );

	Task.findById( TaskId  , (err , task) => {
		if (err) 
			return  res.status(500).json( {err : err} );
		return res.status(200).json(task);

	});

}

/**
 * Get all the Tasks
 */
let GetTasks = ( req , res ) => {

	Task.find( {}).sort( [['updated_on' , -1]]  ).exec(  ( err , tasks ) => {
		if ( err )
			return res.status(500).json( { err :err });
		return res.status(200).json( { tasks : tasks });
	});
}


let DeleteTask = (req , res) => {
	let id = Operators.getQueryParams( req  , 'taskId' );
	
	Task.findByIdAndRemove( id  , (err , response) => {
		if (err) 
			return res.status(500).json({err : err });
		return res.status(200).json( { response });
	})
}


//update the task
let UpdateTask = (req, res) => {
	let Id = Operators.getBody( req , 'TaskId');
	
	//let title = Operators.getBody( req , 'title');
	//let duedate = Operators.getBody( req , 'duedate'); 

	Task.findByIdAndUpdate( Id  , { $set : req.body } , { new :true} ,  (err , updateTask) => {
		if ( err )
			return res.status(500).json({ err : err })

		return res.status(200).json({updateTask} );
	});
}

module.exports = {
	create : CreateTask,
	read : GetTask,
	update : UpdateTask,
	del : DeleteTask,
	getAll : GetTasks
}