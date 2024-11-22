const userService = require('../services/CRUDService');


const getHomepage = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        return res.render('home.ejs', { users });
    } catch (err) {
        console.error("Error fetching users: ", err);
        return res.status(500).send("Something went wrong");
    }
};


const getUpdatePage = async (req, res) => {
    const userId = req.params.id;

    try {
        const user = await userService.getUserById(userId);
        return res.render('edit.ejs', { user });
    } catch (err) {
        console.error("Error fetching user by ID: ", err);
        if (err.message === "User not found") {
            return res.status(404).send("User not found");
        }
        return res.status(500).send("Something went wrong");
    }
};


const postCreateUser = async (req, res) => {
    const { email, name, city } = req.body;

    try {
        await userService.createUser(email, name, city);
        return res.send("Create user succeed");
    } catch (err) {
        console.error("Error creating user: ", err);
        return res.status(500).send("Something went wrong");
    }
};


const postUpdateUser = async (req, res) => {
    const { userId, email, name, city } = req.body;

    try {
        await userService.updateUser(userId, email, name, city);
        // return res.send("Update user succeed");
        return res.redirect('/');
    } catch (err) {
        console.error("Error updating user: ", err);
        return res.status(500).send("Something went wrong");
    }
};
const getABC = (req, res) => {
    res.send('abcd')
};

const getHung = (req, res) => {
    // res.send('<h1>Hello World</h1>!')
    res.render('sample.ejs')
};
const getCreatePage = (req, res) => {
    res.render('create.ejs');
};
const postDeleteUser = async (req, res) => {
    const userId = req.params.id;
    const user = await userService.getUserById(userId);
    return res.render('delete.ejs', { user });
};

// const postHandleRemoveUser = async (req, res) => {
//     const userId = req.body.userId;

//     try {

//         await userService.deleteUser(userId);
//         return res.redirect('/');
//     } catch (err) {
//         console.log(userId);
//         console.error("Error deleting user: ", err);
//         if (err.message === "User not found") {
//             return res.status(404).send("User not found");
//         }
//         return res.status(500).send("Something went wrong");
//     }
// };
//use ajax
const postHandleRemoveUser = async (req, res) => {
    const userId = req.params.id;

    try {
        await userService.deleteUser(userId);
        // Respond with success if the user is deleted
        return res.status(200).send("User deleted successfully");
    } catch (err) {
        console.error("Error deleting user: ", err);
        if (err.message === "User not found") {
            return res.status(404).send("User not found");
        }
        return res.status(500).send("Something went wrong");
    }
};
module.exports = {
    getHomepage,
    getUpdatePage,
    postCreateUser,
    postUpdateUser,
    getABC, getHung, getCreatePage, postDeleteUser, postHandleRemoveUser
};
