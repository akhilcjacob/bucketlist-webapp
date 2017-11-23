//connecto to mongoose
const mongoose = require('mongoose');

//bucketlist scheme
const BucketListSchema = mongoose.Schema({
	title:{
		type: String,
		required: true
	},
	description: String,
	category: {
		type: String,
		required: true,
		enum: ['High','Medium','Low']
	}
});
//Create a model using mongoose.model and export it
const BucketList = module.exports = mongoose.model('BucketList', BucketListSchema );


//BucketList.find() returns all the lists
module.exports.getAllLists = (callback) => {
	BucketList.find(callback);
}

//newList.save is used to insert the document into MongoDB
module.exports.addList = (newList, callback) => {
	newList.save(callback);
}


//We pass on an id and remove it from DB using Bucketlist.remove()
module.exports.deleteListById = (id, callback) => {
	let query = {_id: id};
	BucketList.remove(query, callback);
}
