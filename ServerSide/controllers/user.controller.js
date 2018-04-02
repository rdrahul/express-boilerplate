const 
	User = require('../models/user.model'),
	jwtTokenService = require('../utilities/jwttoken.service');
	;

let GetUsers = (req, res) => {

	User.find( {} , ( err , users ) => {
		if ( err )
			return res.status( 500 ).json( err );
		return res.status( 200 ).json( { users : users }); 
	});
	
}

let CreateUser = ( req , res ) =>{
	let name = req.body["name"];
	let email = req.body["email"];
	let password = req.body["password"];

	
	let user = new User( { name : name , email : email  , password : password  });
	
	user.save((err , newUser )=>{
		if (err)
		return res.status(500).json(err);
		return res.status(201).json(newUser);
	});

}  


let UserLogin = (req, res) => {
    let userDetails = req.body;

    User.findOne({ email: userDetails.email }, (err, user) => {

		if (err)
			return res.status(500).json(err);
        
        if (!user) return res.status(404).json({message : "User not found"});
		
		userDetails.password = user.hashPassword(userDetails.password);
		if (userDetails.password === user.password) {
			try {
				let token = jwtTokenService.signToken({
					user_id: user._id
				}, {
					expiresIn: '12h'                         
				});

				
				res.json({ user: user, token: token });

			} catch (error) {
				return res.status(500).json({error : error});
			}
		} else {
			return res.status(403).json({message  : "Username and password don't match"});	
		};
		
    
    });
};



module.exports = {
	getUsers : GetUsers,
	createUser : CreateUser,
	login : UserLogin
}