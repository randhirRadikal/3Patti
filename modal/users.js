var Sequelize = require('sequelize');
var connection;
var User;
var defaultCoin = 500;

var test = function(email,callback){
  User.findOne({
    attributes:['id','first_name','email'],
    where:{
      email:email
    }
  }).then(function(res){
    res = JSON.parse(JSON.stringify(res));
    if(res){
      callback(res);
    }else{
      callback(false);
    }
  }).catch(function(err){
    console.log(err);
    callback(false);
  });
};


module.exports = function(con){
	connection = con;
	User = con.define('users',{
		id:{
			field: 'id',
			type: Sequelize.STRING,
			primaryKey: true,
			autoIncrement: true
		},
		first_name:{
			field: 'first_name',
			type: Sequelize.STRING
		},
		last_name:{
			field: 'last_name',
			type: Sequelize.STRING
		},
		email:{
			field: 'email',
			type: Sequelize.STRING
		},
		password:{
			field: 'password',
			type: Sequelize.STRING
		},
		coin:{
			field:'coin',
			type:Sequelize.INTEGER
		},
		profile_picture:{
			field: 'profile_picture',
			type: Sequelize.TEXT
		},
		verification_code:{
			field:'verification_code',
			type: Sequelize.STRING
		},
		created:{
			field: 'created',
			type: Sequelize.DATE
		},
		modified:{
			field: 'modified',
			type: Sequelize.DATE
		},
		status:{
			field: 'status',
			type: Sequelize.STRING
		}
	});

	return {
		test : test,
	};

};
