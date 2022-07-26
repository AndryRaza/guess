const question = require("../../models/question")
const functionsHelper = require('../../helpers/functions')

const questionsController = {

    async create(req,res){

        const data = req.body

        if(!data.question || !data.answer)
        {
            return res.status(401).send({'result':false,'data':'missing data'})
        }

        const newQuestion = {
            question : data.question,
            answer : data.answer
        }

        question.create(newQuestion)
            .then((result)=>{
                return res.status(200).send({'result':true,'data':result})
            })
            .catch((err)=>{
                return res.status(401).send({'result':false,'data':err})
            })
    },

    async getRandomQuestion(req,res){

        question.count()
            .then((result)=>{

                let r = functionsHelper.random(0,result - 1)

                question.findOne().skip(r)
                    .then((res_)=>{
                        return res.status(200).send({'result':true,'data':res_})
                    })


            })
            .catch((err)=>{
                return res.status(401).send({'result':false,'data':err})
            })
    }
}

module.exports =  questionsController;