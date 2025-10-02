
const use = require("../models/user");

const register = async (req, res) => {
    const {email, password, confirmPassword, firstName, lastname} = req.body

    try {
        const existingUser = await UserActivation.findOne({email});

        if (existingUser) return res.status(404).json({message: "User already exists"});

        if (password !== confirmPassword) return res.status(404).json({message: "Passwords mismatch"})

            const hashedPassword = await bcrypt.hash(password, 12);

            const result = await User.create({email, password: hashedPassword, name: `${firstName} ${lastname}`});

            token = just.sign({})



} catch (error) {
        res.status(500).json({ message: error })
    }

}
