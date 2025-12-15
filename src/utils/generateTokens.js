import jwt from 'jsonwebtoken';

export const sendAuthCookies = ( res, user ) =>{

    console.log("Generating tokens for user:", user);

    const accessToken = jwt.sign(
        {id : user._id, role: user.role},
        process.env.JWT_SECRET,
        {expiresIn: '15m'}
    );

    const refreshToken = jwt.sign(
        {id : user._id },
        process.env.JWT_REFRESH_SECRET,
        {expiresIn: '7d'}
    );

    res.cookie('accessToken', accessToken, {
        httpOnly: true,
        secure: false,
        sameSite: "lax" //Helps protect against CSRF attacks (Cross-Site Request Forgery).
    });

    res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: false,
        sameSite: "lax" //Helps protect against CSRF attacks (Cross-Site Request Forgery).
    });

};

