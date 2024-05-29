import bcrypt from "bcrypt";

const register = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    // HASH THE PASSWORD
    const hashedPassword = await bcrypt.hash(password, 10)

    // COMPARE HASHED AND NORMAL PASSWORD
    res.status(200).json({ message: "User registered successfully!" })
}
const login = (req, res) => {
    res.status(200).json({ message: "User logged in successfully!" })
}
const logout = (req, res) => {
    res.status(200).json({ message: "User logout!" })
}

export { register, login, logout }