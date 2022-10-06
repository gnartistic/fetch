
const { Schema, model } = require("mongoose");
const bcrypt = require('bcrypt');
const petSchema = require("./Pets");

const userSchema = new Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			match: [/.+@.+\..+/, "Must match an email address!"],
		},
		password: {
			type: String,
			required: true,
			minlength: 5,
		},
		pets: [petSchema],
        age: {
            type: String,
            enum: [ '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65' ],
        },
        gender: {
            type: String,
            enum: [ 'Man', 'Woman', 'Trans Man', 'Trans Woman', 'Non-binary', 'Other' ],
		},
		createdAt: Date,
		updatedAt: Date,
		friends: [
			{
				type: Schema.Types.ObjectId,
				ref: 'User'
			}
		]
	},
	{
		toJSON: {
			virtuals: true,
		},
	}
);

// set up pre-save middleware to create password
userSchema.pre("save", async function (next) {
	if (this.isNew || this.isModified("password")) {
		const saltRounds = 10;
		this.password = await bcrypt.hash(this.password, saltRounds);
	}

	next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
	return bcrypt.compare(password, this.password);
};

//userSchema.virtual("matchCount").get(function () {
	//return this.matches.length;
//});

const User = model("User", userSchema);

module.exports = User;
