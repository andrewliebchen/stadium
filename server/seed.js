Meteor.startup(function() {
  // Do this when the server starts

  // Tickets.remove({});

  if(Tickets.find().count() === 0) {
    Tickets.insert({
      userId: Meteor.userId,
      title:  'quickbooks',
      description: 'As an accountant I want Quickbooks installed so that I can update the books',
      type:   'story',
      size:   'small',
      status: 'someday',
      time:   Date.now()
    });
    Tickets.insert({
      userId: Meteor.userId,
      title:  'robots',
      description: 'As a developer I want a robot so that the robot can do my work',
      type:   'story',
      size:   'small',
      status: 'backlog',
      time:   Date.now()
    });
    Tickets.insert({
      userId: Meteor.userId,
      title:  'reports',
      description: "As a manager I want productivity reports so that I don't have to pester my team for updates",
      type:   'story',
      size:   'medium',
      status: 'current',
      time:   Date.now()
    });
    Tickets.insert({
      userId: Meteor.userId,
      title:  'typo',
      description: 'The homepage should say "Get your freak on," instead of "Get your frank on."',
      type:   'defect',
      size:   'small',
      status: 'current',
      time:   Date.now()
    });
    Tickets.insert({
      userId: Meteor.userId,
      title:  'gobutton',
      type:   'task',
      size:   'small',
      status: 'current',
      time:   Date.now()
    });
  }
});
