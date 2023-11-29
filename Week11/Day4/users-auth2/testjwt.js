import jwt from 'jsonwebtoken';

// const token = jwt.sign(payload, secret, expireTime);

const token = jwt.sign(
    { email: 'someone@gmail.com', userid: 300 },
    '1231243()',
    {
        expiresIn: "60s",
    }
);

// console.log(token);

const newToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNvbWVvbmVAZ21haWwuY29tIiwidXNlcmlkIjozMDAsImlhdCI6MTcwMTI0NTE3NiwiZXhwIjoxNzAxMjQ1MjM2fQ.W_fdvBV - uB9agzGyP_EuyU4qWcs8bW - 9gu3M4G8nCu0'

jwt.verify(newToken, '1231243()', (err, decoded) => {
    if (err) return console.log(err.message);
    console.log(decoded);
})
