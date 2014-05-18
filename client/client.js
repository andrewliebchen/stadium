Session.setDefault('editing_message', null);

// Templates
Template.messages.messages = function() {
  return Messages.find({}, { sort: { time: 1 }});
};

Template.messages.editing = function() {
  return Session.equals("editing_message", this._id);
};

Template.input.events({
  "keydown input#message" : function(event) {
    if (event.which == 13) { // enter key event
      var message = document.getElementById("message");

      if (Meteor.user()) {
        var name = Meteor.user().profile.name;
      } else {
        var name = "Anonymous";
      }

      if (message.value != "") {
        Messages.insert({
          name: name,
          message: message.value,
          time: Date.now(),
        });

        document.getElementById("message").value = "";
        message.value = "";
      }
    }
  }
});

Template.messages.events({
  "click .delete" : function(event) {
    event.preventDefault();
    Meteor.call("removeMessage", this._id);
  },

  "click .edit" : function(event) {
    event.preventDefault();
    Session.set("editing_message", this._id);
  },

  "keydown input#message_edit" : function(event) {
    if (event.which == 13) {
      var value = String(event.target.value || "");
      Meteor.call("editMessage", this._id, value);
      Session.set("editing_message", null);
    }
  }
});
