import asyncHandler from "../middlewares/async.js";

//@desc register a user
//@route POST /api/auth/register
//@access Public
export const register = asyncHandler(async (req, res, next) => {
        //Create user
        res.json({
            success: true,
            data: "hey"
        })
    }
)