Meteor.startup(function() {
  // Do this when the server starts
  if(Tickets.find().count() === 0) {
    Tickets.insert({
      userId: Meteor.userId,
      title:  'Install Quickbooks',
      description: 'As an accountant I want Quickbooks installed so that I can update the books',
      type:   'story',
      size:   'small',
      status: 'someday',
      time:   Date.now()
    });
    Tickets.insert({
      userId: Meteor.userId,
      title:  'Add robots',
      description: 'As a developer I want a robot so that the robot can do my work',
      type:   'story',
      size:   'small',
      status: 'backlog',
      time:   Date.now()
    });
    Tickets.insert({
      userId: Meteor.userId,
      title:  'Productivity reports',
      description: "As a manager I want productivity reports so that I don't have to pester my team for updates",
      type:   'story',
      size:   'medium',
      status: 'current',
      time:   Date.now()
    });
    Tickets.insert({
      userId: Meteor.userId,
      title:  'Homepage Typo',
      description: 'The homepage should say "Get your freak on," instead of "Get your frank on."',
      type:   'defect',
      size:   'small',
      status: 'current',
      time:   Date.now()
    });
    Tickets.insert({
      userId: Meteor.userId,
      title:  'Homepage Typo',
      description: 'The homepage should say "Get your freak on," instead of "Get your frank on."',
      type:   'defect',
      size:   'small',
      status: 'current',
      time:   Date.now()
    });
    Tickets.insert({
      userId: Meteor.userId,
      title:  'Change the go button to red',
      type:   'task',
      size:   'small',
      status: 'current',
      time:   Date.now()
    });
  }
});
