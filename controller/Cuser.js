import * as User from "../model/Muser.js";

export const main = (req, res) => {
  res.render("index");
};

export const getSignup = (req, res) => {
  res.render("signup");
};

export const signup = async (req, res) => {
  try {
    await User.signup(req.body.userid, req.body.name, req.body.pw);
    res.send({ result: true });
  } catch (error) {
    console.log(error);
    res.send({ result: false });
  }
};

export const getSignin = (req, res) => {
  res.render("signin");
};

export const signin = async (req, res) => {
  try {
    const result = await User.signin(req.body.userid, req.body.pw);
    console.log(result);
    if (result.length > 0) {
      res.send({ result: true });
    } else {
      res.send({ result: false });
    }
  } catch (error) {
    console.log(error);
  }
};

export const viewProfile = async (req, res) => {
  try {
    const result = await User.viewProfile(req.body.profileId);
    res.render("profile", { data: result });
  } catch (error) {
    console.log(error);
  }
};

export const editProfile = async (req, res) => {
  try {
    const result = await User.editProfile(
      req.body.userid,
      req.body.name,
      req.body.pw
    );
    res.send({ result: true });
  } catch (error) {
    console.log(error);
  }
};

export const deleteProfile = async (req, res) => {
  try {
    await User.deleteProfile(req.body.userid);
    res.send({ result: true });
  } catch (error) {
    console.log(error);
  }
};
