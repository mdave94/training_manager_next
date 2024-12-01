import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Mocked database for testing
const mockUsers = [
  {
    email: "trainer@example.com",
    password: await bcrypt.hash("Trainer@123", 10),
  },
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    // Validate request body
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    // Find user in the database
    const user = mockUsers.find((user) => user.email === email);
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Generate JWT
    const token = jwt.sign(
      { email: user.email },
      process.env.NEXTAUTH_SECRET!,
      { expiresIn: "1h" }
    );
    return res.status(200).json({ token });
  }

  return res.status(405).json({ message: "Method not allowed" });
}
