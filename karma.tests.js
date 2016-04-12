var context = require.context('./app', true, /test\.tsx?$/);
context.keys().forEach(context);
