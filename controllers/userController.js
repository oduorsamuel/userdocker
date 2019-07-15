const Users = require('../models/user');

exports.get_all_users = (req, res) => {
    Users.find((err, Users) => {
        if (err)
            res.json({

                status: 'bad request',
                code: "400.4.0",
                message: 'bad request',
                error: err
            });
        else
            res.json({

                status: 'ok',
                code: "200.4.1",
                message: 'Users were fetched successfully',
                data: Users
            });
    })
}
exports.post_user = (req, res) => {
    const userData = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        user_name: req.body.user_name,
        email:req.body.email,
        mobile_number: req.body.mobile_number,
        telephone_number: req.body.telephone_number,
        gender: req.body.gender,
        address:req.body.address
    }
    
    Users.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                Users.create(userData)
                    .then(user => {
                        res.json({

                            status: 'created',
                            code: '201.4.2',
                            message: 'user created',
                            data: user,
                        });

                    })
                    .catch(err => {
                        res.send({
                            status: "bad request",
                            code: "400.4.3",
                            message: "failed to create user",
                            error:err
                        })
                    })

            } else {
                res.json({ error: 'email already exist' })
            }
        })
        .catch(err => {
            res.send('error:' + err)
        })
}

exports.get_by_id = (req, res) => {
    Users.findById(req.params.id, (err, course) => {
        if (err)
            res.json({
                status: 'bad request',
                code: "400.4.4",
                message: 'failled get specific course',
                data: err,
            })
        else
            res.json({

                status: 'ok',
                code: "200.4.5",
                message: 'course fetched successfully',
                data: course,
            });
    });
}

exports.delete_by_id = (req, res) => {
    Users.findById(req.params.id)
        .then(Users => {
            if (Users < 1) {
                res.json({
                    status: "ok",
                    message: "invalid id"
                })
            }
            else {
                Users.Name = req.body.Name;
                Users.Shortname = req.body.Shortname;
                Users.Description = req.body.Description;
                Users.Note = req.body.Note;
                Users.QuestionIntro = req.body.QuestionIntro;
                Users.ValidForPeriod = req.body.ValidForPeriod;
                Users.NumberOfQuestions=req.body.NumberOfQuestions;
                Users.Picture = req.file.path;
                Users.DeletedBy = "Dev";//req,params.userid
                Users.DeletedAt = Date.now();
                Users.IsDeleted = 1
                Users.save()
                    .then(deletedcontent => {
                        res.json({
                            status: "ok",
                            message: "success",
                            data: deletedcontent
                        })
                    })
                    .catch(err => {
                        res.json({
                            status: "bad request",
                            code: "",
                            error: err
                        })
                    })
            }
        })
        .catch(err => {
            res.json({
                status: "bad request",
                error: err
            })
        })
}
exports.update = (req, res) => {
    Users.findById(req.params.id)
        .then(Users => {
            if (Users < 1) {
                res.json({
                    status: "ok",
                    message: "invalid id"
                })
            }
            else {
                Users.Name = req.body.Name;
                Users.Shortname = req.body.Shortname;
                Users.Description = req.body.Description;
                Users.Note = req.body.Note;
                Users.QuestionIntro = req.body.QuestionIntro;
                Users.ValidForPeriod = req.body.ValidForPeriod;
                Users.NumberOfQuestions=req.body.NumberOfQuestions;
                Users.Picture = req.file.path;
                Users.UpdatedBy = "Dev";//req,params.userid
                Users.UpdatedAt = Date.now();
                Users.save()
                    .then(updatedcontent => {
                        res.json({
                            status: "ok",
                            message: "success",
                            data: updatedcontent
                        })
                    })
                    .catch(err => {
                        res.json({
                            status: "bad request",
                            code: "",
                            error: err
                        })
                    })
            }
        })
        .catch(err => {
            res.json({
                status: "bad request",
                error: err
            })
        })
}