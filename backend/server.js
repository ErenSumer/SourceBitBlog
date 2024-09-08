const SourceBit = require("srcbit");
const dotenv = require("dotenv");
const post = require("./models/Post");
const user = require("./models/User");
const ConnectDB = require("./config/db");
const auth = require("./routers/auth")
dotenv.config();
ConnectDB();

const app = new SourceBit({
    port:process.env.PORT || 4000,
    cors: {
        origin: 'http://localhost:3001', // Your React app's URL
        methods: 'GET,POST,PUT,DELETE,OPTIONS',
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true,
      },
    
});
app.use(auth(app));
app.createViewCollection("posts", post);
app.createViewCollection("users", user);

app.start();