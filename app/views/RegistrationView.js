var RegistrationView = Backbone.View.extend({

	el : '#registration-form',

	events : {
		"submit" : "registerUser",
	},

	registerUser : function(event)	{

		event.preventDefault();
		console.log(this.model);
		var name = $(event.currentTarget).find("#name").val();
		this.model.set("name",name);
		this.model.set("email", $(event.currentTarget).find("#email").val());
		this.model.set("password", $(event.currentTarget).find("#password").val());
		console.log(this.model.toJSON());
		this.model.save();
	}

});