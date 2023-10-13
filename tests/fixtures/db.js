const User = require("../../src/models/user");
const TutorProfile = require("../../src/models/tutorProfile");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const userOneId = new mongoose.Types.ObjectId();
const userOne = {
    _id: userOneId,
    firstName: "userOne_firstName_TESTING",
    lastName: "userOne_lastName_TESTING",
    email: "userOne_email_TESTING@testing.com",
    password: "pass_word_TESTING",
    tokens: [
        {
            token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET),
        },
    ],
    sex: "Male",
};

const userTwoId = new mongoose.Types.ObjectId();
const userTwo = {
    _id: userTwoId,
    firstName: "userTwo_firstName_TESTING",
    lastName: "userTwo_lastName_TESTING",
    email: "userTwo_email_TESTING@testing.com",
    password: "pass_word_TESTING",
    tokens: [
        {
            token: jwt.sign({ _id: userTwoId }, process.env.JWT_SECRET),
        },
    ],
    sex: "Female",
};

const userThreeId = new mongoose.Types.ObjectId();
const userThree = {
    _id: userThreeId,
    firstName: "userThree_firstName_TESTING",
    lastName: "userThree_lastName_TESTING",
    email: "userThree_email_TESTING@testing.com",
    password: "pass_word_TESTING",
    tokens: [
        {
            token: jwt.sign({ _id: userThreeId }, process.env.JWT_SECRET),
        },
    ],
    sex: "Male",
};

const tutorProfileOneId = new mongoose.Types.ObjectId();
const tutorProfileOne = {
    _id: tutorProfileOneId,
    firstName: userOne.firstName,
    lastName: userOne.lastName,
    sex: userOne.sex,
    avatar: userOne.avatar,
    owner: userOne._id,
    experiences: [
        {
            title: "title_TESTING",
            companyName: "companyName_TESTING",
            startDateMonth: "month_TESTING",
            startDateYear: 2023,
            currentlyWorking: true,
        },
    ],
    education: [
        {
            school: "Simon Fraser University",
            major: "major_TESTING",
            startDateMonth: "month_TESTING",
            startDateYear: 2023,
            endDateMonth: "month_TESTING",
            endDateYear: 2023,
        },
    ],
    languages: [
        {
            language: "English",
        },
    ],
    hourlyRate: 20,
    lessonMethod: "Remote",
    aboutMe: "aboutMe_TESTING",
    aboutLesson: "aboutLesson_TESTING",
    subjects: [
        {
            subject: "subject_TESTING",
        },
    ],
};

const tutorProfileTwoId = new mongoose.Types.ObjectId();
const tutorProfileTwo = {
    ...tutorProfileOne,
    _id: tutorProfileTwoId,
};

const setupDatabase = async () => {
    await User.deleteMany();
    await TutorProfile.deleteMany();
    await new User(userOne).save();
    await new User(userTwo).save();
    await new User(userThree).save();
    await new TutorProfile(tutorProfileOne).save();
    await new TutorProfile(tutorProfileTwo).save();
};

module.exports = {
    userOne,
    userOneId,
    userTwo,
    userTwoId,
    userThree,
    userThreeId,
    tutorProfileOne,
    tutorProfileOneId,
    tutorProfileTwo,
    tutorProfileTwoId,
    setupDatabase,
};
