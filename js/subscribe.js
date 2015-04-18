//Subscribe to the demo_tutorial channel
PUBNUB_demo.subscribe({
  channel: 'demo_tutorial',
  message: function(m){console.log(m)}
});