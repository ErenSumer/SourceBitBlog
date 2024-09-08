const User = require('../models/User');
const jwt = require('jsonwebtoken');


exports.login = async (req, res) => {
    const { username, password } = req.body;
    try {
      const user = await User.findOne({ username });
      if (!user || !(await user.matchPassword(password))) {
        return res.status(400).json({ error: 'Invalid credentials' });
      }
      const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
      res.json({ token });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };