Session.set('currentChatParent', null);

Deps.autorun(function() {
  Meteor.subscribe('messages');
});

Template.messages.messages = function() {
  if (Session.get('currentChatParent') == null ) {
    return Messages.find({parent: null}, {sort: {time: 1}});
  } else {
    return Messages.find({
      $or: [
        {$and: [
          {parent: Session.get('currentChatParent')},
          {fromId: Meteor.userId()}
        ]},
        {$and: [
          {fromId: Session.get('currentChatParent')},
          {parent: Meteor.userId()}
        ]}
      ]},
      {sort: {time: 1}
    });
  }
};
