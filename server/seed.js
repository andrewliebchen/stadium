Meteor.startup(function() {

  // Tickets.remove({});

  if(Tickets.find().count() === 0) {
    Tickets.insert({
      userId: Meteor.userId,
      number: 1,
      tag:  'quickbooks',
      description: 'As an accountant I want Quickbooks installed so that I can update the books',
      type:   'story',
      size:   'small',
      status: 'someday',
      time:   Date.now()
    });
    Tickets.insert({
      userId: Meteor.userId,
      number: 2,
      tag:  'robots',
      description: 'As a developer I want a robot so that the robot can do my work',
      type:   'story',
      size:   'small',
      status: 'backlog',
      time:   Date.now()
    });
    Tickets.insert({
      userId: Meteor.userId,
      number: 3,
      tag:  'reports',
      description: "As a manager I want productivity reports so that I don't have to pester my team for updates",
      type:   'story',
      size:   'medium',
      status: 'current',
      time:   Date.now()
    });
    Tickets.insert({
      userId: Meteor.userId,
      number: 4,
      tag:  'typo',
      description: 'The homepage should say "Get your freak on," instead of "Get your frank on."',
      type:   'defect',
      size:   'small',
      status: 'current',
      time:   Date.now()
    });
    Tickets.insert({
      userId: Meteor.userId,
      number: 5,
      tag:  'gobutton',
      type:   'task',
      size:   'small',
      status: 'current',
      time:   Date.now()
    });
    Tickets.insert({
      userId: Meteor.userId,
      number: 6,
      tag:  'quickbooks',
      description: 'As an accountant I want Quickbooks installed so that I can update the books',
      type:   'story',
      size:   'small',
      status: 'someday',
      time:   Date.now()
    });
    Tickets.insert({
      userId: Meteor.userId,
      number: 7,
      tag:  'robots',
      description: 'As a developer I want a robot so that the robot can do my work',
      type:   'story',
      size:   'medium',
      status: 'backlog',
      time:   Date.now()
    });
    Tickets.insert({
      userId: Meteor.userId,
      number: 8,
      tag:  'reports',
      description: "As a manager I want productivity reports so that I don't have to pester my team for updates",
      type:   'story',
      size:   'medium',
      status: 'current',
      time:   Date.now()
    });
    Tickets.insert({
      userId: Meteor.userId,
      number: 9,
      tag:  'typo',
      description: 'The homepage should say "Get your freak on," instead of "Get your frank on."',
      type:   'defect',
      size:   'small',
      status: 'current',
      time:   Date.now()
    });
    Tickets.insert({
      userId: Meteor.userId,
      number: 10,
      tag:  'gobutton',
      type:   'task',
      size:   'small',
      status: 'current',
      time:   Date.now()
    });
    Tickets.insert({
      userId: Meteor.userId,
      number: 11,
      tag:  'quickbooks',
      description: 'As an accountant I want Quickbooks installed so that I can update the books',
      type:   'story',
      size:   'small',
      status: 'someday',
      time:   Date.now()
    });
    Tickets.insert({
      userId: Meteor.userId,
      number: 12,
      tag:  'robots',
      description: 'As a developer I want a robot so that the robot can do my work',
      type:   'story',
      size:   'small',
      status: 'backlog',
      time:   Date.now()
    });
    Tickets.insert({
      userId: Meteor.userId,
      number: 13,
      tag:  'reports',
      description: "As a manager I want productivity reports so that I don't have to pester my team for updates",
      type:   'story',
      size:   'medium',
      status: 'current',
      time:   Date.now()
    });
    Tickets.insert({
      userId: Meteor.userId,
      number: 14,
      tag:  'typo',
      description: 'The homepage should say "Get your freak on," instead of "Get your frank on."',
      type:   'defect',
      size:   'large',
      status: 'current',
      time:   Date.now()
    });
    Tickets.insert({
      userId: Meteor.userId,
      number: 15,
      tag:  'gobutton',
      type:   'task',
      size:   'small',
      status: 'current',
      time:   Date.now()
    });
    Tickets.insert({
      userId: Meteor.userId,
      number: 16,
      tag:  'quickbooks',
      description: 'As an accountant I want Quickbooks installed so that I can update the books',
      type:   'story',
      size:   'small',
      status: 'someday',
      time:   Date.now()
    });
    Tickets.insert({
      userId: Meteor.userId,
      number: 17,
      tag:  'robots',
      description: 'As a developer I want a robot so that the robot can do my work',
      type:   'story',
      size:   'small',
      status: 'backlog',
      time:   Date.now()
    });
    Tickets.insert({
      userId: Meteor.userId,
      number: 18,
      tag:  'reports',
      description: "As a manager I want productivity reports so that I don't have to pester my team for updates",
      type:   'story',
      size:   'medium',
      status: 'current',
      time:   Date.now()
    });
    Tickets.insert({
      userId: Meteor.userId,
      number: 19,
      tag:  'typo',
      description: 'The homepage should say "Get your freak on," instead of "Get your frank on."',
      type:   'defect',
      size:   'small',
      status: 'current',
      time:   Date.now()
    });
    Tickets.insert({
      userId: Meteor.userId,
      number: 20,
      tag:  'gobutton',
      type:   'task',
      size:   'medium',
      status: 'current',
      time:   Date.now()
    });
    Tickets.insert({
      userId: Meteor.userId,
      number: 21,
      tag:  'quickbooks',
      description: 'As an accountant I want Quickbooks installed so that I can update the books',
      type:   'story',
      size:   'small',
      status: 'someday',
      time:   Date.now()
    });
    Tickets.insert({
      userId: Meteor.userId,
      number: 22,
      tag:  'robots',
      description: 'As a developer I want a robot so that the robot can do my work',
      type:   'story',
      size:   'small',
      status: 'backlog',
      time:   Date.now()
    });
    Tickets.insert({
      userId: Meteor.userId,
      number: 23,
      tag:  'reports',
      description: "As a manager I want productivity reports so that I don't have to pester my team for updates",
      type:   'story',
      size:   'medium',
      status: 'current',
      time:   Date.now()
    });
    Tickets.insert({
      userId: Meteor.userId,
      number: 24,
      tag:  'typo',
      description: 'The homepage should say "Get your freak on," instead of "Get your frank on."',
      type:   'defect',
      size:   'small',
      status: 'current',
      time:   Date.now()
    });
    Tickets.insert({
      userId: Meteor.userId,
      number: 25,
      tag:  'gobutton',
      type:   'task',
      size:   'small',
      status: 'current',
      time:   Date.now()
    });
    Tickets.insert({
      userId: Meteor.userId,
      number: 26,
      tag:  'quickbooks',
      description: 'As an accountant I want Quickbooks installed so that I can update the books',
      type:   'story',
      size:   'small',
      status: 'someday',
      time:   Date.now()
    });
    Tickets.insert({
      userId: Meteor.userId,
      number: 27,
      tag:  'robots',
      description: 'As a developer I want a robot so that the robot can do my work',
      type:   'story',
      size:   'small',
      status: 'backlog',
      time:   Date.now()
    });
    Tickets.insert({
      userId: Meteor.userId,
      number: 28,
      tag:  'reports',
      description: "As a manager I want productivity reports so that I don't have to pester my team for updates",
      type:   'story',
      size:   'medium',
      status: 'current',
      time:   Date.now()
    });
    Tickets.insert({
      userId: Meteor.userId,
      number: 29,
      tag:  'typo',
      description: 'The homepage should say "Get your freak on," instead of "Get your frank on."',
      type:   'defect',
      size:   'small',
      status: 'current',
      time:   Date.now()
    });
    Tickets.insert({
      userId: Meteor.userId,
      number: 30,
      tag:  'gobutton',
      type:   'task',
      size:   'small',
      status: 'current',
      time:   Date.now()
    });
    Tickets.insert({
      userId: Meteor.userId,
      number: 31,
      tag:  'quickbooks',
      description: 'As an accountant I want Quickbooks installed so that I can update the books',
      type:   'story',
      size:   'small',
      status: 'someday',
      time:   Date.now()
    });
    Tickets.insert({
      userId: Meteor.userId,
      number: 32,
      tag:  'robots',
      description: 'As a developer I want a robot so that the robot can do my work',
      type:   'story',
      size:   'small',
      status: 'backlog',
      time:   Date.now()
    });
    Tickets.insert({
      userId: Meteor.userId,
      number: 33,
      tag:  'reports',
      description: "As a manager I want productivity reports so that I don't have to pester my team for updates",
      type:   'story',
      size:   'medium',
      status: 'current',
      time:   Date.now()
    });
    Tickets.insert({
      userId: Meteor.userId,
      number: 34,
      tag:  'typo',
      description: 'The homepage should say "Get your freak on," instead of "Get your frank on."',
      type:   'defect',
      size:   'small',
      status: 'current',
      time:   Date.now()
    });
    Tickets.insert({
      userId: Meteor.userId,
      number: 35,
      tag:  'gobutton',
      type:   'task',
      size:   'small',
      status: 'current',
      time:   Date.now()
    });
    Tickets.insert({
      userId: Meteor.userId,
      number: 36,
      tag:  'quickbooks',
      description: 'As an accountant I want Quickbooks installed so that I can update the books',
      type:   'story',
      size:   'small',
      status: 'someday',
      time:   Date.now()
    });
    Tickets.insert({
      userId: Meteor.userId,
      number: 37,
      tag:  'robots',
      description: 'As a developer I want a robot so that the robot can do my work',
      type:   'story',
      size:   'small',
      status: 'backlog',
      time:   Date.now()
    });
    Tickets.insert({
      userId: Meteor.userId,
      number: 38,
      tag:  'reports',
      description: "As a manager I want productivity reports so that I don't have to pester my team for updates",
      type:   'story',
      size:   'medium',
      status: 'current',
      time:   Date.now()
    });
    Tickets.insert({
      userId: Meteor.userId,
      number: 39,
      tag:  'typo',
      description: 'The homepage should say "Get your freak on," instead of "Get your frank on."',
      type:   'defect',
      size:   'small',
      status: 'current',
      time:   Date.now()
    });
    Tickets.insert({
      userId: Meteor.userId,
      number: 40,
      tag:  'gobutton',
      type:   'task',
      size:   'small',
      status: 'current',
      time:   Date.now()
    });
    Tickets.insert({
      userId: Meteor.userId,
      number: 41,
      tag:  'quickbooks',
      description: 'As an accountant I want Quickbooks installed so that I can update the books',
      type:   'story',
      size:   'small',
      status: 'someday',
      time:   Date.now()
    });
    Tickets.insert({
      userId: Meteor.userId,
      number: 42,
      tag:  'robots',
      description: 'As a developer I want a robot so that the robot can do my work',
      type:   'story',
      size:   'small',
      status: 'backlog',
      time:   Date.now()
    });
    Tickets.insert({
      userId: Meteor.userId,
      number: 43,
      tag:  'reports',
      description: "As a manager I want productivity reports so that I don't have to pester my team for updates",
      type:   'story',
      size:   'large',
      status: 'current',
      time:   Date.now()
    });
    Tickets.insert({
      userId: Meteor.userId,
      number: 44,
      tag:  'typo',
      description: 'The homepage should say "Get your freak on," instead of "Get your frank on."',
      type:   'defect',
      size:   'small',
      status: 'current',
      time:   Date.now()
    });
    Tickets.insert({
      userId: Meteor.userId,
      number: 45,
      tag:  'gobutton',
      type:   'task',
      size:   'small',
      status: 'current',
      time:   Date.now()
    });
    Tickets.insert({
      userId: Meteor.userId,
      number: 46,
      tag:  'quickbooks',
      description: 'As an accountant I want Quickbooks installed so that I can update the books',
      type:   'story',
      size:   'small',
      status: 'someday',
      time:   Date.now()
    });
    Tickets.insert({
      userId: Meteor.userId,
      number: 47,
      tag:  'robots',
      description: 'As a developer I want a robot so that the robot can do my work',
      type:   'story',
      size:   'small',
      status: 'backlog',
      time:   Date.now()
    });
    Tickets.insert({
      userId: Meteor.userId,
      number: 48,
      tag:  'reports',
      description: "As a manager I want productivity reports so that I don't have to pester my team for updates",
      type:   'story',
      size:   'medium',
      status: 'current',
      time:   Date.now()
    });
    Tickets.insert({
      userId: Meteor.userId,
      number: 49,
      tag:  'typo',
      description: 'The homepage should say "Get your freak on," instead of "Get your frank on."',
      type:   'defect',
      size:   'small',
      status: 'current',
      time:   Date.now()
    });
    Tickets.insert({
      userId: Meteor.userId,
      number: 50,
      tag:  'gobutton',
      type:   'task',
      size:   'small',
      status: 'current',
      time:   Date.now()
    });
  }
});
